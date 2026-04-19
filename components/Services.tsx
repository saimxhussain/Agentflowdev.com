'use client'
import Reveal from './Reveal'

const svcs = [
  { tag: '01', icon: '⚡', title: 'Real Time Events', desc: 'Trigger automations the moment something happens — a form fill, email reply, CRM update, or webhook. No delays, no missed signals.' },
  { tag: '02', icon: '🤖', title: 'AI Agents', desc: 'Custom GPT-4o and Claude-powered agents that think, decide, and act autonomously — handling tasks your team shouldn\'t be doing.' },
  { tag: '03', icon: '🔒', title: 'Self-Hosted', desc: 'Your systems, your control. We deploy on your infrastructure for full data ownership, custom domains, and zero platform lock-in.' },
  { tag: '04', icon: '🔌', title: 'Custom APIs', desc: 'Fully extensible. Build on top of our systems or connect anything via REST, webhooks, and custom integration layers.' },
  { tag: '05', icon: '🎯', title: 'Lead Generation', desc: 'Scrape LinkedIn, Google Maps, and Indeed. Enrich with emails and phones. Push to CRM. Qualify with AI. Fully automated pipeline.' },
  { tag: '06', icon: '📱', title: 'Social Automation', desc: 'AI writes captions, generates images, schedules posts across 6 platforms — Instagram, LinkedIn, X, Facebook, Threads, Pinterest.' },
  { tag: '07', icon: '🎙️', title: 'Voice AI Agents', desc: 'Deploy phone agents that call leads, qualify prospects, and book appointments — human-sounding, 24/7, at unlimited scale.' },
  { tag: '08', icon: '📧', title: 'Outreach Campaigns', desc: 'Cold email sequences, follow-ups, and multi-channel touchpoints — personalized at scale using AI enrichment and dynamic templates.' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Services / Capabilities</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a' }}>
              What we deploy<br /><span style={{ color: '#FF4D00' }}>for you.</span>
            </h2>
            <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
              fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: 1,
              textTransform: 'uppercase', background: '#0a0a0a', color: '#fff', padding: '13px 26px',
              textDecoration: 'none', borderRadius: 8, transition: 'all 0.2s', flexShrink: 0,
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FF4D00'; el.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#0a0a0a'; el.style.transform = 'translateY(0)' }}
            >Get a Custom Quote →</a>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {svcs.map((s, i) => (
            <Reveal key={i} delay={i * 40}>
              <div style={{
                background: '#fff', padding: '36px 28px', borderRadius: 12,
                border: '1.5px solid #f0f0f0', transition: 'all 0.25s', cursor: 'default',
                height: '100%', boxSizing: 'border-box',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#FF4D00'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 40px rgba(255,77,0,0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#f0f0f0'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2, color: '#FF4D00', marginBottom: 10 }}>{s.tag}</div>
                <h3 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 16, color: '#0a0a0a', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 13, fontWeight: 400, color: '#777', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
