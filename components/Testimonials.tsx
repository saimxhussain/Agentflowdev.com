'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import Image from 'next/image'

const cards = [
  { src: '/images/test_1.png', alt: 'Scaled to 2x Capacity' },
  { src: '/images/test_2.png', alt: '65% Reduction in Churn' },
  { src: '/images/test_3.png', alt: 'Instant Lead Response' },
  { src: '/images/test_4.png', alt: '90% Fewer Inventory Errors' },
  { src: '/images/test_5.png', alt: 'Automated KYC Approvals' },
]

// Returns transform for each card relative to active index
function getCardStyle(index: number, active: number, total: number): React.CSSProperties {
  const offset = index - active
  const absOffset = Math.abs(offset)

  if (absOffset > 2) return { display: 'none' }

  const x = offset * 160
  const rotate = offset * 8
  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.88 : 0.76
  const zIndex = total - absOffset
  const opacity = absOffset > 1 ? 0.5 : 1

  return {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translateX(calc(-50% + ${x}px)) translateY(-50%) rotate(${rotate}deg) scale(${scale})`,
    zIndex,
    opacity,
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: offset === 0 ? 'default' : 'pointer',
  }
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(cards.length - 1, i + 1))

  return (
    <section style={{ padding: '120px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Client Results</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a' }}>
              Real clients.<br /><span style={{ color: '#FF4D00' }}>Real results.</span>
            </h2>
            {/* Arrow buttons */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button
                onClick={prev}
                disabled={active === 0}
                style={{
                  width: 52, height: 52, borderRadius: 12,
                  border: '1.5px solid #e0e0e0', background: active === 0 ? '#f5f5f5' : '#fff',
                  cursor: active === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', color: active === 0 ? '#ccc' : '#0a0a0a',
                  boxShadow: active === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={e => { if (active > 0) { (e.currentTarget as HTMLElement).style.borderColor = '#FF4D00'; (e.currentTarget as HTMLElement).style.color = '#FF4D00' } }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0'; (e.currentTarget as HTMLElement).style.color = active === 0 ? '#ccc' : '#0a0a0a' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 13, fontWeight: 600, color: '#aaa', minWidth: 40, textAlign: 'center' }}>
                {active + 1} / {cards.length}
              </span>
              <button
                onClick={next}
                disabled={active === cards.length - 1}
                style={{
                  width: 52, height: 52, borderRadius: 12,
                  border: '1.5px solid #e0e0e0', background: active === cards.length - 1 ? '#f5f5f5' : '#fff',
                  cursor: active === cards.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', color: active === cards.length - 1 ? '#ccc' : '#0a0a0a',
                  boxShadow: active === cards.length - 1 ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={e => { if (active < cards.length - 1) { (e.currentTarget as HTMLElement).style.borderColor = '#FF4D00'; (e.currentTarget as HTMLElement).style.color = '#FF4D00' } }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0'; (e.currentTarget as HTMLElement).style.color = active === cards.length - 1 ? '#ccc' : '#0a0a0a' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Card deck area */}
        <div style={{ position: 'relative', height: 480, width: '100%' }}>
          {cards.map((c, i) => (
            <div
              key={i}
              style={getCardStyle(i, active, cards.length)}
              onClick={() => { if (i !== active) setActive(i) }}
            >
              <div style={{
                width: 300, height: 400,
                borderRadius: 20, overflow: 'hidden',
                boxShadow: i === active
                  ? '0 32px 80px rgba(0,0,0,0.22), 0 0 0 2px rgba(255,77,0,0.3)'
                  : '0 8px 32px rgba(0,0,0,0.14)',
                position: 'relative',
              }}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                }} />
                {/* Label at bottom */}
                {i === active && (
                  <div style={{
                    position: 'absolute', bottom: 20, left: 20, right: 20,
                  }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(255,77,0,0.92)', backdropFilter: 'blur(8px)',
                      color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
                      padding: '5px 14px', borderRadius: 20, textTransform: 'uppercase',
                      marginBottom: 10,
                    }}>Verified Result</div>
                    <div style={{
                      fontFamily: 'EquitanSans, sans-serif', fontWeight: 700,
                      fontSize: 16, color: '#fff', lineHeight: 1.3,
                    }}>{c.alt}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 28 : 8, height: 8,
                borderRadius: 4, border: 'none', padding: 0,
                background: i === active ? '#FF4D00' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
