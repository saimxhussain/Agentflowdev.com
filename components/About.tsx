'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const metrics = [
  { val: '10', suffix: 'X', label: 'Faster lead generation pipeline' },
  { val: '80', suffix: '%', label: 'Reduction in manual work hours' },
  { val: '24', suffix: '/7', label: 'AI agents, never sleeping' },
  { val: '300', suffix: '+', label: 'Qualified leads per week, automated' },
]

function CountUp({ target, suffix, started }: { target: number, suffix: string, started: boolean }) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [started, target])

  return <>{count}{suffix}</>
}

function MetricCard({ m, i }: { m: typeof metrics[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      background: i === 0 ? '#FF4D00' : 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.10)',
      padding: '32px 24px',
      borderRadius: i === 0 ? '16px 4px 4px 4px' : i === 1 ? '4px 16px 4px 4px' : i === 2 ? '4px 4px 4px 16px' : '4px 4px 16px 4px',
      boxShadow: i === 0 ? '0 8px 32px rgba(255,77,0,0.3)' : 'none',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = i === 0 ? '0 16px 48px rgba(255,77,0,0.45)' : '0 8px 32px rgba(0,0,0,0.3)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = i === 0 ? '0 8px 32px rgba(255,77,0,0.3)' : 'none' }}
    >
      <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 40, color: i === 0 ? '#fff' : '#FF4D00', lineHeight: 1, letterSpacing: -1, marginBottom: 8 }}>
        <CountUp target={parseInt(m.val)} suffix={m.suffix} started={started} />
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: i === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{m.label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(255,77,0,0.07)', top: -100, left: -100, animation: 'orbMove2 16s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>About AgentFlow</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff', marginBottom: 28 }}>
                Your business,<br /><span style={{ color: '#FF4D00' }}>on autopilot.</span>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 20 }}>
                AgentFlow is a <strong style={{ color: 'rgba(255,255,255,0.9)' }}>B2B AI automation agency</strong> that builds intelligent systems replacing manual work at scale. Lead generation, outreach, social media, voice AI — we deploy pipelines that run 24/7 without human intervention.
              </p>
              <p style={{ fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85 }}>
                Our edge: combining <strong style={{ color: 'rgba(255,255,255,0.9)' }}>deep technical skill</strong> in n8n, GPT-4o, and custom AI agents with sharp business strategy. If you&apos;re spending hours on repetitive work, we&apos;ve already built a system that eliminates it.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
              {metrics.map((m, i) => <MetricCard key={i} m={m} i={i} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
