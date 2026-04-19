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

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
    }}>
      <div style={{
        background: p.featured ? 'rgba(255,77,0,0.10)' : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        padding: '40px 32px', borderRadius: 20,
        border: p.featured ? '1px solid rgba(255,77,0,0.5)' : '1px solid rgba(255,255,255,0.08)',
        position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
        boxShadow: p.featured
          ? '0 20px 60px rgba(255,77,0,0.25), inset 0 1px 0 rgba(255,77,0,0.3), 0 0 0 1px rgba(255,77,0,0.15)'
          : '0 4px 24px rgba(0,0,0,0.2)',
        transform: p.featured ? 'translateY(-12px)' : 'none',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          if (p.featured) el.style.boxShadow = '0 32px 80px rgba(255,77,0,0.4), inset 0 1px 0 rgba(255,77,0,0.4), 0 0 0 1px rgba(255,77,0,0.3)'
          else el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.12)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          if (p.featured) el.style.boxShadow = '0 20px 60px rgba(255,77,0,0.25), inset 0 1px 0 rgba(255,77,0,0.3), 0 0 0 1px rgba(255,77,0,0.15)'
          else el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'
        }}
      >
        {/* Animated glow ring on featured */}
        {p.featured && (
          <div style={{
            position: 'absolute', inset: -1, borderRadius: 20,
            background: 'transparent',
            border: '1px solid transparent',
            backgroundImage: 'linear-gradient(135deg, rgba(255,77,0,0.6), rgba(255,119,51,0.3), rgba(255,77,0,0.6))',
            backgroundOrigin: 'border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
            animation: 'borderSpin 3s linear infinite',
            pointerEvents: 'none',
          }} />
        )}

        {p.tag && (
          <div style={{
            position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', background: '#FF4D00', color: '#fff',
            padding: '5px 18px', borderRadius: 20, whiteSpace: 'nowrap' as const,
            boxShadow: '0 4px 16px rgba(255,77,0,0.5)',
          }}>{p.tag}</div>
        )}

        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' as const, color: p.featured ? '#FF4D00' : 'rgba(255,255,255,0.3)', marginBottom: 20 }}>{p.label}</div>
        <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: p.price === 'Custom' ? 44 : 56, color: '#fff', lineHeight: 1, letterSpacing: -2, marginBottom: 4 }}>{p.price}</div>
        <div style={{ fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.35)', letterSpacing: 0.5, marginBottom: 20 }}>{p.sub}</div>
        <p style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${p.featured ? 'rgba(255,77,0,0.2)' : 'rgba(255,255,255,0.08)'}` }}>{p.desc}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, marginBottom: 28 }}>
          {p.features.map((f, j) => (
            <li key={j} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: '#FF4D00', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
            </li>
          ))}
        </ul>
        <a href={p.href} target="_blank" rel="noreferrer" style={{
          fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 12,
          letterSpacing: 1, textTransform: 'uppercase' as const,
          background: p.featured ? 'linear-gradient(135deg, #FF4D00, #ff7733)' : 'transparent',
          color: '#fff', padding: '14px 24px', textDecoration: 'none',
          border: p.featured ? 'none' : '1px solid rgba(255,255,255,0.15)',
          textAlign: 'center' as const, transition: 'all 0.2s', display: 'block', borderRadius: 10,
          boxShadow: p.featured ? '0 4px 20px rgba(255,77,0,0.4)' : 'none',
        }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            if (p.featured) { el.style.boxShadow = '0 8px 32px rgba(255,77,0,0.6)'; el.style.transform = 'translateY(-1px)' }
            else { el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00'; el.style.background = 'rgba(255,77,0,0.08)' }
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            if (p.featured) { el.style.boxShadow = '0 4px 20px rgba(255,77,0,0.4)'; el.style.transform = 'translateY(0)' }
            else { el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = '#fff'; el.style.background = 'transparent' }
          }}
        >{p.cta} →</a>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 450, height: 450, background: 'rgba(255,77,0,0.07)', top: -100, left: '50%', transform: 'translateX(-50%)', animation: 'orbMove2 14s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Pricing / No Subscriptions</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff' }}>
              Pay for results.<br /><span style={{ color: '#FF4D00' }}>Own it forever.</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', maxWidth: 280, textAlign: 'right', lineHeight: 1.6 }}>No retainers. No monthly fees.<br />You pay for what we build.</p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 52, alignItems: 'start' }}>
          {plans.map((p, i) => <PricingCard key={i} p={p} i={i} />)}
        </div>
      </div>

      <style>{`
        @keyframes borderSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
