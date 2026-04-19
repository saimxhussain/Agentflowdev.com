'use client'
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

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 0', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Pricing / No Subscriptions</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a' }}>
              Pay for results.<br /><span style={{ color: '#FF4D00' }}>Own it forever.</span>
            </h2>
            <p style={{ fontSize: 14, color: '#999', maxWidth: 280, textAlign: 'right', lineHeight: 1.6 }}>No retainers. No monthly fees.<br />You pay for what we build.</p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 52 }}>
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                background: p.featured ? '#0a0a0a' : '#fafafa',
                padding: '44px 36px', borderRadius: 20,
                border: p.featured ? '2px solid #FF4D00' : '1.5px solid #f0f0f0',
                position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
                boxShadow: p.featured ? '0 20px 60px rgba(255,77,0,0.15)' : 'none',
                transform: p.featured ? 'translateY(-8px)' : 'none',
              }}>
                {p.tag && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2,
                    textTransform: 'uppercase', background: '#FF4D00', color: '#fff',
                    padding: '5px 18px', borderRadius: 20, whiteSpace: 'nowrap',
                  }}>{p.tag}</div>
                )}
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: p.featured ? '#FF4D00' : '#aaa', marginBottom: 20 }}>{p.label}</div>
                <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: p.price === 'Custom' ? 44 : 56, color: p.featured ? '#fff' : '#0a0a0a', lineHeight: 1, letterSpacing: -2, marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: 12, fontWeight: 400, color: p.featured ? '#888' : '#aaa', letterSpacing: 0.5, marginBottom: 20 }}>{p.sub}</div>
                <p style={{ fontSize: 13, fontWeight: 400, color: p.featured ? '#aaa' : '#777', lineHeight: 1.7, marginBottom: 28, paddingBottom: 28, borderBottom: `1px solid ${p.featured ? 'rgba(255,255,255,0.08)' : '#f0f0f0'}` }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, marginBottom: 32 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ fontSize: 13, fontWeight: 400, color: p.featured ? '#ccc' : '#666', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ color: '#FF4D00', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={p.href} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 12,
                  letterSpacing: 1, textTransform: 'uppercase',
                  background: p.featured ? '#FF4D00' : 'transparent',
                  color: p.featured ? '#fff' : '#0a0a0a',
                  padding: '14px 24px', textDecoration: 'none',
                  border: p.featured ? 'none' : '1.5px solid #e0e0e0',
                  textAlign: 'center', transition: 'all 0.2s', display: 'block', borderRadius: 10,
                  boxShadow: p.featured ? '0 4px 20px rgba(255,77,0,0.3)' : 'none',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; if (p.featured) { el.style.background = '#e04400' } else { el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' } }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (p.featured) { el.style.background = '#FF4D00' } else { el.style.borderColor = '#e0e0e0'; el.style.color = '#0a0a0a' } }}
                >{p.cta} →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
