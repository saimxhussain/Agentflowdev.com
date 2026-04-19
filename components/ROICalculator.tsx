'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const tasks = [
  { id: 'leadgen', label: 'Lead Generation', icon: '🎯', desc: 'Finding & qualifying prospects' },
  { id: 'outreach', label: 'Cold Outreach', icon: '📧', desc: 'Emails, DMs, follow-ups' },
  { id: 'social', label: 'Social Media', icon: '📱', desc: 'Writing & scheduling posts' },
  { id: 'reporting', label: 'Reporting & Data', icon: '📊', desc: 'Pulling reports, updating sheets' },
  { id: 'crm', label: 'CRM Updates', icon: '🗂️', desc: 'Logging calls, updating contacts' },
]

export default function ROICalculator() {
  const [hours, setHours] = useState(10)
  const [rate, setRate] = useState(50)
  const [selected, setSelected] = useState<string[]>(['leadgen', 'outreach'])

  const weeklyWaste = hours * rate
  const monthlyWaste = weeklyWaste * 4.33
  const yearlyWaste = monthlyWaste * 12
  const automatable = Math.round(hours * 0.85)
  const savedPerYear = Math.round(yearlyWaste * 0.85)

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const fmt = (n: number) => n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`

  return (
    <section id="roi-calculator" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,77,0,0.07)', top: -100, left: '30%', animation: 'orbMove 20s ease-in-out infinite' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>ROI Calculator</span>
          </div>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff', marginBottom: 12 }}>
            See what manual work<br /><span style={{ color: '#FF4D00' }}>is costing you.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: 56, lineHeight: 1.7 }}>
            Adjust the sliders. The numbers might surprise you.
          </p>
        </Reveal>

        <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>

          {/* LEFT — Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Hours slider */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>Hours/week on manual tasks</span>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 28, color: '#FF4D00', letterSpacing: -1 }}>{hours}h</span>
              </div>
              <input
                type="range" min={1} max={60} value={hours}
                onChange={e => setHours(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#FF4D00', cursor: 'pointer', height: 4 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>1h</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>60h</span>
              </div>
            </div>

            {/* Hourly rate slider */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>Your hourly rate / value</span>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 28, color: '#FF4D00', letterSpacing: -1 }}>${rate}/h</span>
              </div>
              <input
                type="range" min={10} max={500} step={10} value={rate}
                onChange={e => setRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#FF4D00', cursor: 'pointer', height: 4 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>$10</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>$500</span>
              </div>
            </div>

            {/* Task selector */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
              <p style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 16 }}>What are you automating?</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {tasks.map(t => (
                  <div
                    key={t.id}
                    onClick={() => toggle(t.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 16px', borderRadius: 10, cursor: 'pointer',
                      background: selected.includes(t.id) ? 'rgba(255,77,0,0.10)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${selected.includes(t.id) ? 'rgba(255,77,0,0.35)' : 'rgba(255,255,255,0.07)'}`,
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{t.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: selected.includes(t.id) ? '#fff' : 'rgba(255,255,255,0.6)' }}>{t.label}</p>
                      <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{t.desc}</p>
                    </div>
                    <div style={{
                      width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                      background: selected.includes(t.id) ? '#FF4D00' : 'transparent',
                      border: `2px solid ${selected.includes(t.id) ? '#FF4D00' : 'rgba(255,255,255,0.2)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>
                      {selected.includes(t.id) && (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Big number */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,77,0,0.15), rgba(255,77,0,0.05))',
              border: '1px solid rgba(255,77,0,0.3)',
              borderRadius: 20,
              padding: '40px 36px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,77,0,0.8)', marginBottom: 12 }}>You&apos;re losing per year</p>
              <p style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(52px, 8vw, 80px)', color: '#fff', letterSpacing: -3, lineHeight: 1, margin: '0 0 8px' }}>
                {fmt(yearlyWaste)}
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0 }}>in time spent on tasks AI can handle</p>
            </div>

            {/* Breakdown */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
              <p style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Breakdown</p>
              {[
                { label: 'Wasted per week', val: fmt(weeklyWaste) },
                { label: 'Wasted per month', val: fmt(monthlyWaste) },
                { label: 'Hours automatable/week', val: `${automatable}h` },
                { label: 'Value recovered/year', val: fmt(savedPerYear), highlight: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 800, fontSize: 18, color: row.highlight ? '#FF4D00' : '#fff', letterSpacing: -0.5 }}>{row.val}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://cal.com/saim-hussain-9ekrz6"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13,
                letterSpacing: 1, textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #FF4D00, #ff7733)',
                color: '#fff', padding: '18px 32px',
                textDecoration: 'none', borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: '0 8px 32px rgba(255,77,0,0.4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 16px 48px rgba(255,77,0,0.6)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(255,77,0,0.4)' }}
            >
              Recover {fmt(savedPerYear)} — Book a Free Call →
            </a>

            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>
              Assumes 85% automation rate. No commitment required.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .roi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
