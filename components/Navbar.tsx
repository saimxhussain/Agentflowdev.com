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

const COUNTRIES = [
  { code: 'US', name: 'United States', symbol: '$' },
  { code: 'GB', name: 'United Kingdom', symbol: '£' },
  { code: 'EU', name: 'Europe (EUR)', symbol: '€' },
  { code: 'PK', name: 'Pakistan', symbol: '₨' },
  { code: 'IN', name: 'India', symbol: '₹' },
  { code: 'AE', name: 'UAE', symbol: 'AED' },
  { code: 'SA', name: 'Saudi Arabia', symbol: 'SAR' },
  { code: 'CA', name: 'Canada', symbol: 'CA$' },
  { code: 'AU', name: 'Australia', symbol: 'A$' },
  { code: 'SG', name: 'Singapore', symbol: 'S$' },
  { code: 'BD', name: 'Bangladesh', symbol: '৳' },
  { code: 'NG', name: 'Nigeria', symbol: '₦' },
  { code: 'ZA', name: 'South Africa', symbol: 'R' },
  { code: 'PH', name: 'Philippines', symbol: '₱' },
  { code: 'MY', name: 'Malaysia', symbol: 'RM' },
  { code: 'BR', name: 'Brazil', symbol: 'R$' },
  { code: 'MX', name: 'Mexico', symbol: 'MX$' },
  { code: 'TR', name: 'Turkey', symbol: '₺' },
  { code: 'JP', name: 'Japan', symbol: '¥' },
  { code: 'KR', name: 'South Korea', symbol: '₩' },
]

export default function Navbar() {
  const [sc, setSc] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [dark, setDark] = useState(true)
  const [showCountry, setShowCountry] = useState(false)
  const [country, setCountry] = useState<{ code: string; name: string; symbol: string } | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('agentflow_theme')
    if (savedTheme) setDark(savedTheme === 'dark')

    // Load saved country
    const savedCountry = localStorage.getItem('agentflow_country')
    if (savedCountry) {
      const found = COUNTRIES.find(c => c.code === savedCountry)
      if (found) setCountry(found)
    }

    const f = () => {
      setSc(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('agentflow_theme', dark ? 'dark' : 'light')
  }, [dark])

  const selectCountry = (c: typeof COUNTRIES[0]) => {
    setCountry(c)
    localStorage.setItem('agentflow_country', c.code)
    setShowCountry(false)
    setSearch('')
    // Update ROICalculator by dispatching a custom event
    window.dispatchEvent(new CustomEvent('agentflow_country_change', { detail: c.code }))
  }

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const btnStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 36, height: 36, borderRadius: 8, cursor: 'pointer',
    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.11)',
    transition: 'all 0.2s', flexShrink: 0 as const,
  }

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

            {/* Country selector button */}
            <li style={{ position: 'relative' }}>
              <button onClick={() => { setShowCountry(!showCountry); setSearch('') }}
                style={{ ...btnStyle, gap: 6, width: 'auto', padding: '0 12px', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', fontFamily: 'EquitanSans, sans-serif' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {country ? `${country.code} · ${country.symbol}` : 'Region'}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>

              {/* Country dropdown */}
              {showCountry && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                  background: 'rgba(14,14,24,0.98)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 16, padding: 16, width: 280,
                  boxShadow: '0 24px 64px rgba(0,0,0,0.7)', backdropFilter: 'blur(32px)',
                  zIndex: 300,
                }}>
                  <div style={{ position: 'relative', marginBottom: 10 }}>
                    <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <input autoFocus type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px 8px 32px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 8, color: '#fff', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ maxHeight: 220, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {filtered.map(c => (
                      <div key={c.code} onClick={() => selectCountry(c)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderRadius: 8, cursor: 'pointer', background: country?.code === c.code ? 'rgba(255,77,0,0.12)' : 'transparent', transition: 'all 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = country?.code === c.code ? 'rgba(255,77,0,0.12)' : 'transparent' }}
                      >
                        <span style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{c.name}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#FF4D00' }}>{c.symbol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Dark/Light mode toggle */}
            <li>
              <button onClick={() => setDark(!dark)} title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
              >
                {dark ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
            </li>

            <li style={{ marginLeft: 4 }}>
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

      {/* Close country dropdown on outside click */}
      {showCountry && (
        <div onClick={() => setShowCountry(false)} style={{ position: 'fixed', inset: 0, zIndex: 199 }} />
      )}
    </>
  )
}
