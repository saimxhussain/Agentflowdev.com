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

export default function Testimonials() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [flipped, setFlipped] = useState<number | null>(null)

  const handleClick = (i: number) => {
    setFlipped(flipped === i ? null : i)
  }

  return (
    <section style={{ padding: '120px 0', background: '#fff', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Client Results</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a' }}>
              Real clients.<br /><span style={{ color: '#FF4D00' }}>Real results.</span>
            </h2>
            <p style={{ fontSize: 14, color: '#999', maxWidth: 260, textAlign: 'right', lineHeight: 1.6 }}>Click any card to see the full story</p>
          </div>
        </Reveal>

        {/* Horizontal scrollable row */}
        <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 16, scrollbarWidth: 'none' }}>
          {cards.map((c, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                flexShrink: 0,
                width: 280,
                height: 320,
                perspective: '1000px',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: flipped === i ? 'rotateY(180deg)' : hovered === i ? 'rotateY(8deg) translateY(-6px)' : 'rotateY(0deg)',
                borderRadius: 16,
                boxShadow: hovered === i || flipped === i
                  ? '0 20px 60px rgba(255,77,0,0.18), 0 0 0 2px #FF4D00'
                  : '0 4px 24px rgba(0,0,0,0.1)',
              }}>
                {/* Front */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  borderRadius: 16, overflow: 'hidden',
                }}>
                  <Image src={c.src} alt={c.alt} fill style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 12, right: 12,
                    background: 'rgba(255,77,0,0.9)', color: '#fff',
                    fontSize: 10, fontWeight: 700, letterSpacing: 1,
                    padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase',
                  }}>Tap to flip</div>
                </div>
                {/* Back */}
                <div style={{
                  position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)', borderRadius: 16,
                  background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 24,
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>⭐⭐⭐⭐⭐</div>
                    <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.7 }}>{c.alt}</p>
                    <div style={{ marginTop: 16, fontSize: 11, color: '#FF4D00', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Verified Client</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.testimonial-scroll::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}
