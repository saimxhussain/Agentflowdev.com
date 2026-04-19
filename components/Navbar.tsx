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

  useEffect(() => {
    const f = () => setSc(window.scrollY > 20)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(20px)',
      borderBottom: sc ? '1px solid #e8e8e8' : '1px solid #efefef',
      boxShadow: sc ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="Scattoo" width={38} height={38} style={{ borderRadius: 6 }} />
          <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 20, letterSpacing: 2, color: '#0a0a0a' }}>
            SCATTOO<span style={{ color: '#FF4D00' }}>.</span>
          </span>
        </a>

        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV.map(n => (
            <li key={n.label}>
              <a href={n.href} style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 500, fontSize: 13,
                color: '#555', textDecoration: 'none', padding: '8px 14px', borderRadius: 8,
                transition: 'all 0.2s', display: 'block',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f5f5'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#555' }}
              >{n.label}</a>
            </li>
          ))}
          <li style={{ marginLeft: 12 }}>
            <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
              fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 12,
              letterSpacing: 1, textTransform: 'uppercase', background: '#FF4D00',
              color: '#fff', padding: '10px 22px', textDecoration: 'none',
              borderRadius: 8, transition: 'all 0.2s', display: 'inline-block',
              boxShadow: '0 2px 12px rgba(255,77,0,0.25)',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#e04400'; el.style.transform = 'translateY(-1px)'; el.style.boxShadow = '0 4px 20px rgba(255,77,0,0.35)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FF4D00'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 12px rgba(255,77,0,0.25)' }}
            >Book a Call →</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
