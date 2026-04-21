'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  { q: 'How long does it take to build my automation?', a: 'Most single automations (FIX plan) are delivered within 48–72 hours. Full systems (SYSTEM plan) typically take 5–7 business days depending on complexity and integrations involved.' },
  { q: 'Do I own the automations you build?', a: 'Yes — 100%. Everything we build is deployed on your infrastructure or handed over fully documented. No lock-in, no recurring platform fees from us. You own it forever.' },
  { q: 'What tools and platforms do you work with?', a: 'We primarily build with n8n, Make (Integromat), GPT-4o, Claude, Apollo.io, HubSpot, Airtable, Notion, Slack, and custom REST APIs. If your stack isn\'t listed, ask us — we\'ve probably integrated it.' },
  { q: 'Do I need technical knowledge to use what you build?', a: 'Not at all. We build with non-technical operators in mind. Every delivery includes full documentation and a walkthrough so your team can monitor, tweak, and understand exactly what\'s running.' },
  { q: 'What if something breaks after delivery?', a: 'SYSTEM plan clients get 30 days of support post-delivery. We monitor, fix, and iterate at no extra cost during that window. For ongoing maintenance, we offer a custom retainer — just ask.' },
  { q: 'Can you automate something specific to my industry?', a: 'Yes. We\'ve built automations for e-commerce, SaaS, marketing agencies, real estate, finance, and more. Book a free discovery call and we\'ll tell you exactly what\'s possible for your use case.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '120px 0', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(131,199,50,0.06)', bottom: -100, right: -100, animation: 'orbMove2 18s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>FAQ</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start', marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: 'var(--text)', margin: 0 }}>
              Questions,<br /><span style={{ color: 'var(--orange)' }}>answered.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, paddingTop: 8 }}>
              Everything you need to know before booking a call. Can&apos;t find your answer? <a href="mailto:saimxhussain@gmail.com" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Email us directly →</a>
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {faqs.map((faq, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
              background: open === i ? 'var(--orange-surface)' : 'var(--surface-3)',
              border: `1px solid ${open === i ? 'rgba(131,199,50,0.25)' : 'var(--border)'}`,
              borderRadius: 14, cursor: 'pointer', transition: 'all 0.25s ease', overflow: 'hidden',
            }}
              onMouseEnter={e => { if (open !== i) { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface)'; el.style.borderColor = 'var(--border-2)' } }}
              onMouseLeave={e => { if (open !== i) { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface-3)'; el.style.borderColor = 'var(--border)' } }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '24px 28px' }}>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 2vw, 17px)', color: 'var(--text)', lineHeight: 1.4 }}>{faq.q}</span>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: open === i ? 'var(--orange)' : 'var(--surface-2)',
                  border: `1px solid ${open === i ? 'var(--orange)' : 'var(--border-2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s ease',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#fff' : 'var(--text)'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <p style={{ fontSize: 15, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.85, margin: 0, padding: '0 28px 24px' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
