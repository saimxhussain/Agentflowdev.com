'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const cards = [
  {
    src: '/images/test_1.png',
    name: 'Michael T.',
    role: 'Creative Agency Owner',
    review: '"We reached a ceiling where we couldn\'t take on more clients. AgentFlow automated our reporting and task creation, freeing our team to focus on the work they actually love."',
    color1: '#1a1a0a',
    color2: '#3d5c00',
    accent: '#83C732',
  },
  {
    src: '/images/test_2.png',
    name: 'Sarah M.',
    role: 'Head of Customer Success',
    review: '"Onboarding used to be a nightmare for our users. AgentFlow automated the entire setup sequence, guiding users through every step without a single manual email. It\'s seamless."',
    color1: '#0a1a0a',
    color2: '#1a3d1a',
    accent: '#4ade80',
  },
  {
    src: '/images/test_3.png',
    name: 'James T.',
    role: 'Growth Marketing Director',
    review: '"We were losing 30% of our leads to slow follow-ups. AgentFlow\'s instant AI-response workflow now engages every lead in under 60 seconds. Our conversion rate has doubled!"',
    color1: '#0a1a14',
    color2: '#0d3326',
    accent: '#83C732',
  },
  {
    src: '/images/test_4.png',
    name: 'Maria L.',
    role: 'Operations Manager',
    review: '"AgentFlow automated our stock sync between 4 platforms. We stopped overselling overnight and saved 20 hours of manual data entry every week. Absolute game changer."',
    color1: '#0f1a0a',
    color2: '#1f3d0a',
    accent: '#a3e635',
  },
  {
    src: '/images/test_5.png',
    name: 'Elena K.',
    role: 'Chief Compliance Officer',
    review: '"Manual verification was our biggest bottleneck. AgentFlow integrated our API stack to automate 95% of approvals instantly. We can finally scale without hiring a massive ops team."',
    color1: '#0a0f1a',
    color2: '#0a1a2e',
    accent: '#83C732',
  },
]

export default function Testimonials() {
  const [offset, setOffset] = useState(0)
  const touchStartX = useRef(0)
  const visible = 3
  const max = cards.length - visible

  const prev = () => setOffset(o => Math.max(0, o - 1))
  const next = () => setOffset(o => Math.min(max, o + 1))

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    if (delta < -40) prev()
  }

  return (
    <section style={{ padding: '120px 0', background: 'var(--bg)', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(131,199,50,0.06)', top: -100, right: -100, animation: 'orbMove 20s ease-in-out infinite' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ width: 28, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Client Results</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: -2, color: 'var(--text)' }}>
            Real clients.<br /><span style={{ color: 'var(--orange)' }}>Real results.</span>
          </h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={prev} disabled={offset === 0} className="t-nav-btn" style={{ opacity: offset === 0 ? 0.3 : 1 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={next} disabled={offset === max} className="t-nav-btn" style={{ opacity: offset === max ? 0.3 : 1 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* Cards slider */}
        <div style={{ overflow: 'hidden' }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div style={{
            display: 'flex',
            gap: 20,
            transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
            transform: `translateX(calc(-${offset} * (100% / 3 + 20px / 3 * 2 + 20px / 3)))`,
          }}>
            {cards.map((card, i) => (
              <div key={i} className="t-card" style={{
                minWidth: 'calc(18% - 14px)',
                borderRadius: 20,
                overflow: 'hidden',
                position: 'relative',
                background: `linear-gradient(160deg, ${card.color1}, ${card.color2})`,
                border: '1px solid rgba(131,199,50,0.15)',
                cursor: 'pointer',
                flexShrink: 0,
              }}>
                {/* Photo */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: "3/4", overflow: 'hidden' }}>
                  <Image
                    src={card.src}
                    alt={card.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.5s ease' }}
                    className="t-card-img"
                    sizes="33vw"
                  />
                  {/* color overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${card.color2}ee 0%, transparent 50%)`, mixBlendMode: 'multiply' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${card.color1} 0%, transparent 60%)` }} />
                </div>

                {/* Quote */}
                <div style={{ padding: "14px 18px 20px" }}>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', margin: '0 0 12px' }}>
                    {card.review}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: `1px solid ${card.accent}33`, paddingTop: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${card.accent}22`, border: `1px solid ${card.accent}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={card.accent}><path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/></svg>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading), Michroma, sans-serif', letterSpacing: 0.5 }}>{card.name}</p>
                      <p style={{ margin: 0, fontSize: 11, color: card.accent, letterSpacing: 0.5 }}>{card.role}</p>
                    </div>
                  </div>
                </div>

                {/* hover glow */}
                <div className="t-card-glow" style={{ position: 'absolute', inset: 0, borderRadius: 20, border: `1px solid ${card.accent}`, opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setOffset(i)} style={{
              width: i === offset ? 32 : 8, height: 8, borderRadius: 4,
              border: 'none', padding: 0,
              background: i === offset ? 'var(--orange)' : 'var(--border-2)',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      <style>{`
        .t-nav-btn {
          width: 52px; height: 52px; border-radius: 12px;
          border: 1px solid var(--border-2);
          background: var(--surface-2);
          backdrop-filter: blur(12px);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          color: var(--text-3);
        }
        .t-nav-btn:hover:not(:disabled) {
          border-color: var(--orange);
          color: var(--orange);
        }
        .t-card:hover .t-card-img { transform: scale(1.04); }
        .t-card:hover .t-card-glow { opacity: 1 !important; }
        @media(max-width: 768px) {
          .t-card { min-width: calc(80% - 10px) !important; }
        }
      `}</style>
    </section>
  )
}
