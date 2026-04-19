'use client'
import { useState, useRef, useEffect } from 'react'

const TABS = [
  { id: 'b2b', label: 'B2B Lead Generator', tag: 'Lead Gen', src: 'https://res.cloudinary.com/dgh17nged/video/upload/q_auto/f_auto/v1776609526/B2B_Lead_Generator_ghhfmk.mp4' },
  { id: 'li', label: 'LinkedIn Scraper', tag: 'Prospecting', src: 'https://res.cloudinary.com/dgh17nged/video/upload/q_auto/f_auto/v1776609527/Linkedin_scraper_qc6yxa.mp4' },
]
const TRUSTED = ['n8n', 'OpenAI', 'Apollo.io', 'HubSpot', 'LinkedIn', 'Make.com']

export default function Hero() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [displayed, setDisplayed] = useState(0)

  // FIX 1: No auto-switching — only on click
  const switchTab = (idx: number) => {
    if (idx === active) return
    setAnimating(true)
    setTimeout(() => { setDisplayed(idx); setActive(idx); setAnimating(false) }, 220)
  }

  return (
    <section style={{
      paddingTop: 68,
      minHeight: '100vh', // FIX 7: full height
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      background: '#080810',
    }}>
      {/* FIX 7: Animated grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,77,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,77,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Animated gradient blobs */}
      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(255,77,0,0.13)', top: -150, right: -100, animation: 'orbMove 14s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(100,60,255,0.09)', bottom: -120, left: -100, animation: 'orbMove2 18s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(255,77,0,0.07)', top: '50%', left: '40%', animation: 'orbMove 22s ease-in-out infinite reverse' }} />

      {/* Glowing line at top */}
      <div style={{
        position: 'absolute', top: 68, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,77,0,0.4), transparent)',
        zIndex: 1,
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>

          {/* LEFT */}
          <div>
            {/* FIX 2: Badge removed */}

            <h1 style={{
              fontFamily: 'EquitanSans, sans-serif', fontWeight: 900,
              fontSize: 'clamp(42px, 5.5vw, 76px)',
              lineHeight: 1.0, letterSpacing: -2, color: '#fff', marginBottom: 24,
              animation: 'fadeUp 0.6s ease forwards',
            }}>
              Automate everything.<br />
              <span style={{
                color: '#FF4D00',
                textShadow: '0 0 40px rgba(255,77,0,0.5)',
              }}>Dominate</span> your market.
            </h1>

            <p style={{
              fontSize: 17, fontWeight: 400, color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75, maxWidth: 480, marginBottom: 36,
              animation: 'fadeUp 0.6s 0.1s ease both',
            }}>
              We build AI systems that replace manual work at scale — lead gen, outreach, social media, voice agents.{' '}
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Running 24/7, without your team lifting a finger.</strong>
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52, animation: 'fadeUp 0.6s 0.2s ease both' }}>
              <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1,
                textTransform: 'uppercase', color: '#fff', padding: '14px 32px',
                textDecoration: 'none', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all 0.2s', position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(135deg, #FF4D00, #ff7733)',
                boxShadow: '0 4px 24px rgba(255,77,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 12px 40px rgba(255,77,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 24px rgba(255,77,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)' }}
              >Book a Free Call →</a>
              <a href="#services" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 1,
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.05)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00'; el.style.background = 'rgba(255,77,0,0.08)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'rgba(255,255,255,0.8)'; el.style.background = 'rgba(255,255,255,0.05)' }}
              >See Services</a>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32, animation: 'fadeUp 0.6s 0.3s ease both' }}>
              {[{ n: '10X', l: 'Faster leads' }, { n: '80%', l: 'Time saved' }, { n: '24/7', l: 'AI agents' }, { n: '6+', l: 'Platforms' }].map((s, i) => (
                <div key={i} style={{ paddingRight: 16, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? 16 : 0 }}>
                  <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 28, color: '#FF4D00', lineHeight: 1, letterSpacing: -1 }}>{s.n}</div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', marginTop: 4, letterSpacing: 0.5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Video tabs */}
          <div style={{ position: 'relative' }}>
            {/* FIX 1: Tabs only switch on click, no auto-rotate */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              {TABS.map((t, i) => (
                <button key={t.id} onClick={() => switchTab(i)} style={{
                  fontFamily: 'EquitanSans, sans-serif', fontWeight: 600, fontSize: 12,
                  letterSpacing: 0.5, padding: '8px 16px', borderRadius: 8, border: 'none',
                  cursor: 'pointer', transition: 'all 0.2s',
                  background: active === i ? '#FF4D00' : 'rgba(255,255,255,0.08)',
                  color: active === i ? '#fff' : 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: active === i ? '0 2px 16px rgba(255,77,0,0.4)' : 'none',
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: active === i ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }} />
                    {t.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Glass browser frame */}
            <div style={{
              borderRadius: 16, overflow: 'hidden',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,77,0,0.08)',
            }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41' }} />
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 6, padding: '4px 12px', marginLeft: 8 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>app.scattoo.ai / {TABS[displayed].tag.toLowerCase().replace(' ', '-')}</span>
                </div>
              </div>
              <div style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)', transition: 'opacity 0.22s ease, transform 0.22s ease' }}>
                <video key={TABS[displayed].src} autoPlay muted loop playsInline style={{ width: '100%', display: 'block', maxHeight: 380, objectFit: 'cover' }}>
                  <source src={TABS[displayed].src} type="video/mp4" />
                </video>
              </div>
              <div style={{ position: 'absolute', bottom: 60, right: 16, background: 'rgba(255,77,0,0.9)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: '5px 12px', borderRadius: 20, textTransform: 'uppercase' }}>{TABS[displayed].tag}</div>
            </div>

            {/* Trusted */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500, letterSpacing: 0.5 }}>INTEGRATES WITH</span>
              {TRUSTED.map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)', letterSpacing: 0.3 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gpulse{0%,100%{box-shadow:0 0 0 0 rgba(255,77,0,.5)}70%{box-shadow:0 0 0 10px rgba(255,77,0,0)}}
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr !important; gap:40px !important;}
          .hero-grid > div:last-child{display:none;}
        }
      `}</style>
    </section>
  )
}
