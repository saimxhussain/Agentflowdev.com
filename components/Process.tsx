'use client'
import { useRef, useEffect, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team — and figure out the fastest way to eliminate them.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents — you get a clear roadmap showing exactly what we\'ll automate and the impact it will have.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. From that point forward, monitoring and iteration are on us. Your team can focus on growth; the AI handles execution — around the clock, without supervision.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

function StepCard({ s, i }: { s: typeof steps[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const fromRight = i % 2 !== 0

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="process-card" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: 'var(--surface)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 20, overflow: 'hidden',
        border: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0) translateY(0)' : fromRight ? 'translateX(56px)' : 'translateX(-56px)',
        transition: `opacity 0.65s ease ${i * 0.12}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s, box-shadow 0.25s ease, border-color 0.25s ease`,
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
      }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(131,199,50,0.3)'; el.style.boxShadow = '0 12px 48px rgba(131,199,50,0.12)' }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.boxShadow = '0 4px 32px rgba(0,0,0,0.12)' }}
      >
        <div style={{
          padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          order: fromRight ? 1 : 0,
          borderRight: fromRight ? 'none' : '1px solid var(--border-3)',
          borderLeft: fromRight ? '1px solid var(--border-3)' : 'none',
          background: fromRight ? 'var(--surface-3)' : 'transparent',
        }}>
          <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(84px, 11vw, 132px)', color: 'var(--orange-subtle)', lineHeight: 0.8, marginBottom: 28, userSelect: 'none' as const, letterSpacing: -6 }}>{s.num}</div>
          <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(30px, 3.8vw, 48px)', color: 'var(--text)', letterSpacing: -1.5, marginBottom: 12, lineHeight: 1.05 }}>{s.title}</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--orange)', letterSpacing: 0.3 }}>{s.sub}</div>
        </div>
        <div style={{
          padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          order: fromRight ? 0 : 1,
          background: fromRight ? 'transparent' : 'var(--surface-3)',
        }}>
          <p style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.9, marginBottom: 32, maxWidth: 440 }}>{s.desc}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {s.tags.map((t, j) => (
              <span key={j} style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--orange)', background: 'var(--orange-subtle)', border: '1px solid rgba(131,199,50,0.25)', padding: '6px 14px', borderRadius: 8 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ padding: '140px 0', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(131,199,50,0.06)', bottom: -80, right: -80, animation: 'orbMove 20s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <span style={{ width: 28, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Process / Timeline</span>
          </div>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: -2, color: 'var(--text)', marginBottom: 80 }}>
            How it works,<br /><span style={{ color: 'var(--orange)' }}>step by step.</span>
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {steps.map((s, i) => <StepCard key={i} s={s} i={i} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .process-card{grid-template-columns:1fr !important;}
          .process-card > div{
            order:unset !important;
            border-left:none !important;
            border-right:none !important;
            border-bottom:1px solid var(--border-3);
            padding:40px 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
