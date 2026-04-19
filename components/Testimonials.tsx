'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const cards = [
  {
    src: '/images/test_1.png',
    alt: 'Scaled to 2x Capacity',
    problem: 'Hitting a growth ceiling — couldn\'t take on more clients without adding headcount.',
    solution: 'Automated reporting and task creation so the team could focus on high-value work.',
    review: '"We reached a ceiling where we couldn\'t take on more clients. Scattoo automated our reporting and task creation, freeing our team to focus on the work they actually love."',
  },
  {
    src: '/images/test_2.png',
    alt: '65% Reduction in Churn',
    problem: 'Onboarding was a manual nightmare — users dropped off before completing setup.',
    solution: 'Fully automated onboarding sequence that guides users step-by-step without any manual emails.',
    review: '"Onboarding used to be a nightmare for our users. Scattoo automated the entire setup sequence, guiding users through every step without a single manual email. It\'s seamless."',
  },
  {
    src: '/images/test_3.png',
    alt: 'Instant Lead Response',
    problem: 'Losing 30% of leads due to slow follow-ups — sales reps couldn\'t respond fast enough.',
    solution: 'AI-response workflow that engages every new lead in under 60 seconds, 24/7.',
    review: '"We were losing 30% of our leads to slow follow-ups. Scattoo\'s instant AI-response workflow now engages every lead in under 60 seconds. Our conversion rate has doubled!"',
  },
  {
    src: '/images/test_4.png',
    alt: '90% Fewer Inventory Errors',
    problem: 'Overselling across 4 platforms due to manual stock sync — 20+ hours of data entry weekly.',
    solution: 'Real-time automated stock sync across all platforms — zero oversells, zero manual entry.',
    review: '"Scattoo automated our stock sync between 4 platforms. We stopped overselling overnight and saved 20 hours of manual data entry every week. Absolute game changer."',
  },
  {
    src: '/images/test_5.png',
    alt: 'Automated KYC Approvals',
    problem: 'Manual KYC verification was the biggest bottleneck — slowing down every new signup.',
    solution: 'API-integrated automation that handles 95% of KYC approvals instantly at scale.',
    review: '"Manual verification was our biggest bottleneck. Scattoo integrated our API stack to automate 95% of approvals instantly. We can finally scale without hiring a massive ops team."',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const card = cards[active]
  const goTo = (i: number) => setActive(i)
  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(cards.length - 1, i + 1))

  // Touch support
  const touchStartY = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(delta) < 40) return
    if (delta > 0 && active < cards.length - 1) setActive(i => i + 1)
    if (delta < 0 && active > 0) setActive(i => i - 1)
  }

  return (
    // FIX 4: No sticky scroll trap, no min-height:100vh spacer = no white gap
    // Replaced with clean glassmorphism card layout
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        padding: '120px 0',
        background: '#080810',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,77,0,0.07)', top: -100, right: -100, animation: 'orbMove 20s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(100,60,255,0.05)', bottom: -80, left: -80, animation: 'orbMove2 24s ease-in-out infinite' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Client Results</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff' }}>
            Real clients.<br /><span style={{ color: '#FF4D00' }}>Real results.</span>
          </h2>

          {/* Arrows + counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={prev} disabled={active === 0} style={{
              width: 52, height: 52, borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.12)',
              background: active === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              cursor: active === 0 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', color: active === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)',
            }}
              onMouseEnter={e => { if (active > 0) { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.color = active === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)', minWidth: 40, textAlign: 'center' }}>{active + 1} / {cards.length}</span>
            <button onClick={next} disabled={active === cards.length - 1} style={{
              width: 52, height: 52, borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.12)',
              background: active === cards.length - 1 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              cursor: active === cards.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', color: active === cards.length - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)',
            }}
              onMouseEnter={e => { if (active < cards.length - 1) { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' } }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.color = active === cards.length - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* MAIN GLASS CARD */}
        <div key={active} style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
          animation: 'fadeUp 0.4s ease forwards',
        }}>
          <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

            {/* LEFT — Image */}
            <div style={{ position: 'relative', minHeight: 420, overflow: 'hidden', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <Image src={card.src} alt={card.alt} fill style={{ objectFit: 'cover', opacity: 0.9 }} sizes="(max-width: 768px) 100vw, 50vw" />
              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(8,8,16,0.4))' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,16,0.6) 0%, transparent 50%)' }} />
              {/* Card label */}
              <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(255,77,0,0.9)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 1, padding: '6px 14px', borderRadius: 20, textTransform: 'uppercase' }}>{card.alt}</div>
            </div>

            {/* RIGHT — Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

              {/* Problem */}
              <div style={{ padding: '32px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(239,68,68,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(239,68,68,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#ef4444' }}>Problem</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{card.problem}</p>
              </div>

              {/* Solution */}
              <div style={{ padding: '32px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden', background: 'rgba(255,77,0,0.04)' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,77,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#FF4D00' }}>Solution</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1 }}>{card.solution}</p>
              </div>

              {/* Review */}
              <div style={{ padding: '32px 32px', flex: 1, background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,77,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#FF4D00">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#FF4D00' }}>Client Review</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, fontStyle: 'italic', margin: 0 }}>{card.review}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {cards.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === active ? 28 : 8, height: 8, borderRadius: 4,
              border: 'none', padding: 0,
              background: i === active ? '#FF4D00' : 'rgba(255,255,255,0.12)',
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
