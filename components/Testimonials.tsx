'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const cards = [
  { src: '/images/test_1.png', alt: 'Scaled to 2x Capacity', problem: 'Hitting a growth ceiling — couldn\'t take on more clients without adding headcount.', solution: 'Automated reporting and task creation so the team could focus on high-value work.', review: '"We reached a ceiling where we couldn\'t take on more clients. AgentFlow automated our reporting and task creation, freeing our team to focus on the work they actually love."' },
  { src: '/images/test_2.png', alt: '65% Reduction in Churn', problem: 'Onboarding was a manual nightmare — users dropped off before completing setup.', solution: 'Fully automated onboarding sequence that guides users step-by-step without any manual emails.', review: '"Onboarding used to be a nightmare for our users. AgentFlow automated the entire setup sequence, guiding users through every step without a single manual email. It\'s seamless."' },
  { src: '/images/test_3.png', alt: 'Instant Lead Response', problem: 'Losing 30% of leads due to slow follow-ups — sales reps couldn\'t respond fast enough.', solution: 'AI-response workflow that engages every new lead in under 60 seconds, 24/7.', review: '"We were losing 30% of our leads to slow follow-ups. AgentFlow\'s instant AI-response workflow now engages every lead in under 60 seconds. Our conversion rate has doubled!"' },
  { src: '/images/test_4.png', alt: '90% Fewer Inventory Errors', problem: 'Overselling across 4 platforms due to manual stock sync — 20+ hours of data entry weekly.', solution: 'Real-time automated stock sync across all platforms — zero oversells, zero manual entry.', review: '"AgentFlow automated our stock sync between 4 platforms. We stopped overselling overnight and saved 20 hours of manual data entry every week. Absolute game changer."' },
  { src: '/images/test_5.png', alt: 'Automated KYC Approvals', problem: 'Manual KYC verification was the biggest bottleneck — slowing down every new signup.', solution: 'API-integrated automation that handles 95% of KYC approvals instantly at scale.', review: '"Manual verification was our biggest bottleneck. AgentFlow integrated our API stack to automate 95% of approvals instantly. We can finally scale without hiring a massive ops team."' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const card = cards[active]
  const goTo = (i: number) => setActive(i)
  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(cards.length - 1, i + 1))

  const touchStartY = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(delta) < 40) return
    if (delta > 0 && active < cards.length - 1) setActive(i => i + 1)
    if (delta < 0 && active > 0) setActive(i => i - 1)
  }

  const btnStyle = (disabled: boolean) => ({
    width: 52, height: 52, borderRadius: 12,
    border: '1px solid var(--border-2)',
    background: disabled ? 'var(--surface-3)' : 'var(--surface-2)',
    backdropFilter: 'blur(12px)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s', color: disabled ? 'var(--text-6)' : 'var(--text-3)',
  })

  return (
    <section onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ padding: '120px 0', background: 'var(--bg)', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,77,0,0.07)', top: -100, right: -100, animation: 'orbMove 20s ease-in-out infinite' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 24, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Client Results</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: 'var(--text)' }}>
            Real clients.<br /><span style={{ color: 'var(--orange)' }}>Real results.</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={prev} disabled={active === 0} style={btnStyle(active === 0) as React.CSSProperties}
              onMouseEnter={e => { if (active > 0) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--orange)'; el.style.color = 'var(--orange)' } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-2)'; el.style.color = active === 0 ? 'var(--text-6)' : 'var(--text-3)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--text-5)', minWidth: 40, textAlign: 'center' }}>{active + 1} / {cards.length}</span>
            <button onClick={next} disabled={active === cards.length - 1} style={btnStyle(active === cards.length - 1) as React.CSSProperties}
              onMouseEnter={e => { if (active < cards.length - 1) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--orange)'; el.style.color = 'var(--orange)' } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-2)'; el.style.color = active === cards.length - 1 ? 'var(--text-6)' : 'var(--text-3)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        <div key={active} style={{
          background: 'var(--surface)',
          backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid var(--border-2)',
          borderRadius: 24, overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
          animation: 'fadeUp 0.4s ease forwards',
        }}>
          <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <div style={{ position: 'relative', minHeight: 420, overflow: 'hidden', borderRight: '1px solid var(--border)' }}>
              <Image src={card.src} alt={card.alt} fill style={{ objectFit: 'cover', opacity: 0.9 }} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.3))' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(255,77,0,0.9)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: '6px 14px', borderRadius: 20, textTransform: 'uppercase' }}>{card.alt}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ padding: '32px 32px', borderBottom: '1px solid var(--border-3)', background: 'rgba(239,68,68,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(239,68,68,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#ef4444' }}>Problem</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.8, margin: 0 }}>{card.problem}</p>
              </div>

              <div style={{ padding: '32px 32px', borderBottom: '1px solid var(--border-3)', position: 'relative', overflow: 'hidden', background: 'var(--orange-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,77,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--orange)' }}>Solution</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1 }}>{card.solution}</p>
              </div>

              <div style={{ padding: '32px 32px', flex: 1, background: 'var(--surface-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--orange)"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575z" /></svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--orange)' }}>Client Review</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-4)', lineHeight: 1.85, fontStyle: 'italic', margin: 0 }}>{card.review}</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {cards.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === active ? 28 : 8, height: 8, borderRadius: 4,
              border: 'none', padding: 0,
              background: i === active ? 'var(--orange)' : 'var(--border-2)',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @media(max-width:768px){
          .testimonial-grid{grid-template-columns:1fr !important;}
          .testimonial-grid > div:first-child{min-height:240px !important;}
        }
      `}</style>
    </section>
  )
}
