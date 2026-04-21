'use client'
import { useRef, useEffect, useState } from 'react'
import Reveal from './Reveal'

const plans = [
  {
    label: 'FIX', price: '$49', sub: 'per automation', tag: null,
    desc: 'Perfect for a single workflow fix or quick automation build.',
    features: ['1 automation workflow', 'n8n or Make setup', 'Basic AI integration', '1 revision round', 'Documentation included'],
    cta: 'Get Started', href: 'https://cal.com/saim-hussain-9ekrz6', featured: false,
  },
  {
    label: 'SYSTEM', price: '$129', sub: 'per system', tag: 'Most Popular',
    desc: 'A complete AI system — lead gen, outreach, or social automation — built and deployed.',
    features: ['Full pipeline build', 'Multi-step AI agents', 'CRM + API integration', 'Unlimited revisions', '30 days of support', 'Custom documentation'],
    cta: 'Go System', href: 'https://cal.com/saim-hussain-9ekrz6', featured: true,
  },
  {
    label: 'CUSTOM', price: 'Custom', sub: 'scope-based', tag: null,
    desc: 'Full-stack AI automation strategy + build for teams ready to go all in.',
    features: ['Everything in System', 'Multi-system architecture', 'Dedicated build team', 'Voice AI & outreach stack', 'Ongoing maintenance', 'Weekly performance reports'],
    cta: 'Contact Us', href: 'https://cal.com/saim-hussain-9ekrz6', featured: false,
  },
]

function PricingCard({ p, i }: { p: typeof plans[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: p.featured ? 'rgba(131,199,50,0.08)' : 'var(--surface)',
          backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
          padding: '40px 32px', borderRadius: 20,
          border: p.featured ? '1px solid rgba(131,199,50,0.35)' : '1px solid var(--border)',
          position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
          // center card toned down, side cards get glow on hover
          boxShadow: p.featured
            ? (hovered ? '0 20px 60px rgba(131,199,50,0.22)' : '0 8px 32px rgba(131,199,50,0.10)')
            : (hovered ? '0 20px 60px rgba(131,199,50,0.20), 0 0 0 1px rgba(131,199,50,0.35)' : '0 4px 24px rgba(0,0,0,0.12)'),
          transform: p.featured
            ? 'translateY(-8px)'
            : (hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)'),
          borderColor: !p.featured && hovered ? 'rgba(131,199,50,0.4)' : p.featured ? 'rgba(131,199,50,0.35)' : 'var(--border)',
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {p.tag && (
          <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', background: 'var(--orange)', color: '#fff', padding: '5px 18px', borderRadius: 20, whiteSpace: 'nowrap' as const, boxShadow: '0 4px 16px rgba(131,199,50,0.4)' }}>{p.tag}</div>
        )}
        <div style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' as const, color: p.featured ? 'var(--orange)' : 'var(--text-5)', marginBottom: 20 }}>{p.label}</div>
        <div style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 900, fontSize: p.price === 'Custom' ? 48 : 60, color: 'var(--text)', lineHeight: 1, letterSpacing: -1, marginBottom: 4 }}>{p.price}</div>
        <div style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 13, fontWeight: 400, color: 'var(--text-muted)', letterSpacing: 0.5, marginBottom: 20 }}>{p.sub}</div>
        <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${p.featured ? 'rgba(131,199,50,0.2)' : 'var(--border)'}` }}>{p.desc}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13, flex: 1, marginBottom: 28 }}>
          {p.features.map((f, j) => (
            <li key={j} style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, fontWeight: 400, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'var(--orange)', fontSize: 15, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
            </li>
          ))}
        </ul>
        <a href={p.href} target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-body), Degular, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' as const,
          background: p.featured ? 'linear-gradient(135deg, #83C732, #7A9137)' : 'transparent',
          color: p.featured ? '#fff' : 'var(--text)', padding: '14px 24px', textDecoration: 'none',
          border: p.featured ? 'none' : '1px solid var(--border-2)',
          textAlign: 'center' as const, transition: 'all 0.2s', display: 'block', borderRadius: 10,
          boxShadow: p.featured ? '0 4px 20px rgba(131,199,50,0.4)' : 'none',
        }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; if (p.featured) { el.style.boxShadow = '0 8px 32px rgba(131,199,50,0.6)'; el.style.transform = 'translateY(-1px)' } else { el.style.borderColor = 'var(--orange)'; el.style.color = 'var(--orange)'; el.style.background = 'var(--orange-subtle)' } }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (p.featured) { el.style.boxShadow = '0 4px 20px rgba(131,199,50,0.4)'; el.style.transform = 'translateY(0)' } else { el.style.borderColor = 'var(--border-2)'; el.style.color = 'var(--text)'; el.style.background = 'transparent' } }}
        >{p.cta} →</a>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 0', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 450, height: 450, background: 'rgba(131,199,50,0.07)', top: -100, left: '50%', transform: 'translateX(-50%)', animation: 'orbMove2 14s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
            <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Pricing / No Subscriptions</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.0, letterSpacing: -1, color: 'var(--text)' }}>
              Pay for results. <span style={{ color: 'var(--orange)' }}>Own it forever.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, color: 'var(--text-muted)', maxWidth: 280, textAlign: 'right', lineHeight: 1.6 }}>No retainers. No monthly fees.<br />You pay for what we build.</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 52, alignItems: 'start' }}>
          {plans.map((p, i) => <PricingCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
