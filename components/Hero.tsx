'use client'
import { useEffect, useRef, useState } from 'react'

const TABS = [
  { id: 'b2b', label: 'B2B Lead Generator', tag: 'Lead Gen', src: 'https://res.cloudinary.com/dgh17nged/video/upload/q_auto/f_auto/v1776609526/B2B_Lead_Generator_ghhfmk.mp4' },
  { id: 'li', label: 'LinkedIn Scraper', tag: 'Prospecting', src: 'https://res.cloudinary.com/dgh17nged/video/upload/q_auto/f_auto/v1776609527/Linkedin_scraper_qc6yxa.mp4' },
]
const TRUSTED = ['n8n', 'OpenAI', 'Apollo.io', 'HubSpot', 'LinkedIn', 'Make.com']

// ─── WebGL Liquid Text Canvas ───────────────────────────────────────────────
function LiquidText() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const progRef = useRef<WebGLProgram | null>(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return
    glRef.current = gl

    // ── Vertex shader ──
    const vert = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `

    // ── Fragment shader — liquid/water morphism text ──
    const frag = `
      precision highp float;
      uniform vec2  u_res;
      uniform float u_time;
      uniform sampler2D u_tex;

      // hash / noise helpers
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
                   mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      float fbm(vec2 p){
        float v=0.0,a=0.5;
        for(int i=0;i<5;i++){v+=a*noise(p);p*=2.1;a*=0.5;}
        return v;
      }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res;
        uv.y = 1.0 - uv.y;

        float t = u_time * 0.35;

        // Liquid displacement — two layers of fbm
        vec2 q = vec2(fbm(uv + t*0.4), fbm(uv + vec2(1.7,9.2) + t*0.3));
        vec2 r = vec2(fbm(uv + 4.0*q + vec2(1.7,9.2) + t*0.15),
                      fbm(uv + 4.0*q + vec2(8.3,2.8) + t*0.2));
        float f = fbm(uv + 4.0*r);

        // Distort UV for text sampling
        vec2 distort = uv + 0.018 * vec2(
          sin(t*1.3 + uv.y*8.0 + f*6.0) + fbm(uv*3.0+t)*0.6,
          cos(t*1.1 + uv.x*6.0 + f*5.0) + fbm(uv*3.0+t+1.5)*0.6
        );

        vec4 textSample = texture2D(u_tex, distort);

        // Caustic light shimmer inside text
        float caustic = fbm(uv * 5.0 + t * 0.8) * fbm(uv * 3.0 - t * 0.5);
        caustic = pow(caustic, 1.5) * 2.5;

        // Colour blend: teal base + lime accent + white shimmer
        vec3 col = mix(
          vec3(0.08, 0.22, 0.22),   // deep teal
          vec3(0.51, 0.78, 0.20),   // lime #83C732
          f * 0.7 + 0.2
        );
        col += caustic * vec3(0.9, 1.0, 0.85) * 0.35;
        col = mix(col, vec3(0.85,0.95,0.80), caustic * 0.25);

        // Edge fresnel — brighter rim
        float rim = 1.0 - clamp(length((uv - 0.5)*1.8), 0.0, 1.0);
        col += rim * 0.12 * vec3(0.6, 1.0, 0.5);

        // Apply text mask — only show effect where text pixels exist
        float mask = textSample.a;
        // Soft inner glow
        vec3 glowCol = col + vec3(0.3,0.5,0.2) * caustic;

        gl_FragColor = vec4(glowCol, mask * (0.88 + caustic * 0.12));
      }
    `

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src); gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(s))
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag))
    gl.linkProgram(prog)
    progRef.current = prog
    gl.useProgram(prog)

    // Full-screen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    // Draw text onto offscreen 2D canvas → upload as WebGL texture
    const buildTexture = () => {
      const W = canvas.width, H = canvas.height
      const off = document.createElement('canvas')
      off.width = W; off.height = H
      const ctx = off.getContext('2d')!
      ctx.clearRect(0, 0, W, H)

      // Font size that fills the width
      const fs = Math.min(W * 0.145, H * 0.55)
      ctx.font = `800 ${fs}px MonumentExtended, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = 'white'
      ctx.fillText('AgentFlow', W / 2, H / 2)

      const tex = gl.createTexture()!
      gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, off)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.uniform1i(gl.getUniformLocation(prog, 'u_tex'), 0)
      return tex
    }

    const resize = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      gl.viewport(0, 0, canvas.width, canvas.height)
      buildTexture()
    }
    resize()
    window.addEventListener('resize', resize)

    // Render loop
    const render = (ts: number) => {
      timeRef.current = ts * 0.001
      gl.useProgram(prog)
      gl.uniform2f(gl.getUniformLocation(prog, 'u_res'), canvas.width, canvas.height)
      gl.uniform1f(gl.getUniformLocation(prog, 'u_time'), timeRef.current)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: 'clamp(140px, 22vw, 280px)',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [displayed, setDisplayed] = useState(0)

  const switchTab = (idx: number) => {
    if (idx === active) return
    setAnimating(true)
    setTimeout(() => { setDisplayed(idx); setActive(idx); setAnimating(false) }, 220)
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      paddingTop: 68,
    }}>
      {/* Full bleed background image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/images/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Subtle dark vignette so text stays readable */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 120% 100% at 50% 50%, rgba(31,48,55,0.45) 0%, rgba(31,48,55,0.75) 100%)',
      }} />

      {/* Glass card */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1100, width: '88%',
        margin: '32px auto',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.18)',
        borderRadius: 32,
        padding: '48px 48px 44px',
        boxShadow: '0 8px 48px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.15)',
      }}>

        {/* Top row: tagline left, CTA right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'var(--font-body),Degular,sans-serif', fontSize: 15, fontWeight: 500, color: 'rgba(245,240,234,0.7)', margin: 0, maxWidth: 480, lineHeight: 1.6 }}>
            The leading AI automation agency —<br />built for the future of intelligent workflows.
          </p>
          <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--font-body),Degular,sans-serif', fontWeight: 700, fontSize: 13,
            letterSpacing: 1.2, textTransform: 'uppercase', color: '#fff',
            padding: '12px 28px', textDecoration: 'none', borderRadius: 50,
            background: 'rgba(131,199,50,0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(131,199,50,0.6)',
            boxShadow: '0 4px 20px rgba(131,199,50,0.35)',
            transition: 'all 0.25s', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#83C732'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 36px rgba(131,199,50,0.55)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(131,199,50,0.85)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 20px rgba(131,199,50,0.35)' }}
          >
            Get a Free Consultation
          </a>
        </div>

        {/* WebGL liquid text */}
        <LiquidText />

        {/* Subtitle */}
        <p style={{ fontFamily: 'var(--font-body),Degular,sans-serif', fontSize: 18, fontWeight: 400, color: 'rgba(245,240,234,0.75)', textAlign: 'center', margin: '0 auto 36px', lineHeight: 1.7, maxWidth: 560 }}>
          Automate everything.{' '}
          <strong style={{ color: '#83C732', fontWeight: 700 }}>Dominate</strong> your market.
          <br />AI systems running 24/7, without your team lifting a finger.
        </p>

        {/* 3 pill buttons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
          {[
            { label: 'Book a Free Consultation', href: 'https://cal.com/saim-hussain-9ekrz6', primary: true },
            { label: 'Our Services', href: '#services', primary: false },
            { label: 'Our Passion', href: '#about', primary: false },
          ].map((btn, i) => (
            <a key={i} href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{
                fontFamily: 'var(--font-body),Degular,sans-serif', fontWeight: 600, fontSize: 14,
                letterSpacing: 0.8, color: btn.primary ? '#fff' : 'rgba(245,240,234,0.85)',
                padding: '13px 32px', textDecoration: 'none', borderRadius: 50,
                border: btn.primary ? 'none' : '1px solid rgba(255,255,255,0.22)',
                background: btn.primary ? 'linear-gradient(135deg,#83C732,#7A9137)' : 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                boxShadow: btn.primary ? '0 4px 24px rgba(131,199,50,0.4)' : 'none',
                transition: 'all 0.22s', display: 'inline-flex', alignItems: 'center',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; if (!btn.primary) { el.style.borderColor = '#83C732'; el.style.color = '#83C732'; el.style.background = 'rgba(131,199,50,0.12)' } else { el.style.boxShadow = '0 10px 36px rgba(131,199,50,0.6)' } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; if (!btn.primary) { el.style.borderColor = 'rgba(255,255,255,0.22)'; el.style.color = 'rgba(245,240,234,0.85)'; el.style.background = 'rgba(255,255,255,0.08)' } else { el.style.boxShadow = '0 4px 24px rgba(131,199,50,0.4)' } }}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
          {[{ n: '10X', l: 'Faster leads' }, { n: '80%', l: 'Time saved' }, { n: '24/7', l: 'AI agents' }, { n: '6+', l: 'Platforms' }].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', paddingRight: 16, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? 16 : 0 }}>
              <div style={{ fontFamily: 'var(--font-display),MonumentExtended,sans-serif', fontSize: 40, color: '#83C732', lineHeight: 1, letterSpacing: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-body),Degular,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(245,240,234,0.5)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Demo video tabs */}
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
            {TABS.map((t, i) => (
              <button key={t.id} onClick={() => switchTab(i)} style={{
                fontFamily: 'var(--font-body),Degular,sans-serif', fontWeight: 600, fontSize: 13,
                padding: '8px 20px', borderRadius: 50, border: 'none', cursor: 'pointer',
                transition: 'all 0.2s',
                background: active === i ? 'rgba(131,199,50,0.9)' : 'rgba(255,255,255,0.1)',
                color: active === i ? '#fff' : 'rgba(245,240,234,0.6)',
                backdropFilter: 'blur(12px)',
                boxShadow: active === i ? '0 2px 16px rgba(131,199,50,0.4)' : 'none',
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: active === i ? 'rgba(255,255,255,0.7)' : 'rgba(245,240,234,0.4)' }} />
                  {t.label}
                </span>
              </button>
            ))}
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', maxWidth: 680, margin: '0 auto', position: 'relative' }}>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 7, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {['#ff5f57', '#ffbd2e', '#28ca41'].map((c, i) => <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 5, padding: '3px 10px', marginLeft: 6 }}>
                <span style={{ fontSize: 11, color: 'rgba(245,240,234,0.4)', fontFamily: 'monospace' }}>app.agentflow.ai / {TABS[displayed].tag.toLowerCase().replace(' ', '-')}</span>
              </div>
            </div>
            <div style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)', transition: 'opacity 0.22s ease,transform 0.22s ease' }}>
              <video key={TABS[displayed].src} autoPlay muted loop playsInline style={{ width: '100%', display: 'block', maxHeight: 300, objectFit: 'cover' }}>
                <source src={TABS[displayed].src} type="video/mp4" />
              </video>
            </div>
            <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(131,199,50,0.9)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase' }}>{TABS[displayed].tag}</div>
          </div>
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-body),Degular,sans-serif', fontSize: 11, color: 'rgba(245,240,234,0.38)', fontWeight: 500, letterSpacing: 0.5 }}>INTEGRATES WITH</span>
            {TRUSTED.map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(245,240,234,0.5)', background: 'rgba(255,255,255,0.06)', padding: '3px 9px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.09)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
