'use client'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const f = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <a
      href="https://cal.com/saim-hussain-9ekrz6"
      target="_blank"
      rel="noreferrer"
      style={{
        position: 'fixed',
        bottom: 28, right: 28,
        zIndex: 199,
        fontFamily: 'EquitanSans, sans-serif',
        fontWeight: 700, fontSize: 12, letterSpacing: 1,
        textTransform: 'uppercase',
        background: 'linear-gradient(135deg, #83C732, #7A9137)',
        color: '#fff',
        padding: '13px 22px',
        borderRadius: 50,
        textDecoration: 'none',
        display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 8px 32px rgba(131,199,50,0.5), 0 2px 8px rgba(0,0,0,0.3)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 16px 48px rgba(131,199,50,0.7), 0 2px 8px rgba(0,0,0,0.3)'
        el.style.transform = 'translateY(-2px) scale(1.03)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 8px 32px rgba(131,199,50,0.5), 0 2px 8px rgba(0,0,0,0.3)'
        el.style.transform = 'translateY(0) scale(1)'
      }}
    >
      {/* Pulsing dot */}
      <span style={{
        width: 7, height: 7, borderRadius: '50%',
        background: 'rgba(255,255,255,0.8)',
        animation: 'gpulse 2s infinite',
        flexShrink: 0,
      }} />
      Book a Call
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  )
}
