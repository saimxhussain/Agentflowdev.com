'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [sc, setSc] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const f = () => {
      setSc(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: sc ? 'rgba(8,8,16,0.92)' : 'rgba(8,8,16,0.6)',
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        borderBottom: `1px solid ${sc ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: sc ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        {/* Scroll progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          height: 2,
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #FF4D00, #ff7733)',
          boxShadow: '0 0 8px rgba(255,77,0,0.6)',
          transition: 'width 0.1s linear',
          borderRadius: '0 2px 2px 0',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/logo.png" alt="AgentFlow" width={36} height={36} style={{ borderRadius: 8 }} />
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 20, letterSpacing: 2, color: '#fff' }}>
              AGENTFLOW<span style={{ color: '#FF4D00' }}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n.label}>
                <a href={n.href} style={{
                  fontFamily: 'EquitanSans, sans-serif', fontWeight: 500, fontSize: 13,
                  color: 'rgba(255,255,255,0.65)', textDecoration: 'none', padding: '8px 14px',
                  borderRadius: 8, transition: 'all 0.2s', display: 'block',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.08)'; el.style.color = '#fff' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(255,255,255,0.65)' }}
                >{n.label}</a>
              </li>
            ))}
            <li style={{ marginLeft: 12 }}>
              <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 12,
                letterSpacing: 1, textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #FF4D00, #ff7733)',
                color: '#fff', padding: '10px 22px', textDecoration: 'none',
                borderRadius: 8, transition: 'all 0.2s', display: 'inline-block',
                boxShadow: '0 2px 16px rgba(255,77,0,0.35)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-1px)'; el.style.boxShadow = '0 6px 24px rgba(255,77,0,0.55)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 16px rgba(255,77,0,0.35)' }}
              >Book a Call →</a>
            </li>
          </ul>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu" style={{ border: 'none', background: 'transparent', cursor: 'none' }}>
            <span className="hamburger" style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: 10, backdropFilter: 'blur(20px)' }}>
              <span style={{ display: 'block', width: 20, height: 2, background: 'rgba(255,255,255,0.8)', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ display: 'block', width: 20, height: 2, background: 'rgba(255,255,255,0.8)', borderRadius: 2, transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: 20, height: 2, background: 'rgba(255,255,255,0.8)', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV.map(n => (
          <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" className="mobile-cta" onClick={() => setOpen(false)}>
          Book a Free Call →
        </a>
      </div>
    </>
  )
}
