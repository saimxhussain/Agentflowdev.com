'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const COUNTRIES = [
  { code: 'US', name: 'United States',   symbol: '$',    defaultRate: 50,    min: 10,   max: 500,    step: 10  },
  { code: 'GB', name: 'United Kingdom',  symbol: '£',    defaultRate: 40,    min: 8,    max: 400,    step: 5   },
  { code: 'EU', name: 'Europe (EUR)',    symbol: '€',    defaultRate: 45,    min: 10,   max: 450,    step: 5   },
  { code: 'PK', name: 'Pakistan',        symbol: '₨',    defaultRate: 500,   min: 100,  max: 10000,  step: 100 },
  { code: 'IN', name: 'India',           symbol: '₹',    defaultRate: 1000,  min: 200,  max: 20000,  step: 200 },
  { code: 'AE', name: 'UAE',             symbol: 'AED',  defaultRate: 185,   min: 40,   max: 1800,   step: 20  },
  { code: 'SA', name: 'Saudi Arabia',    symbol: 'SAR',  defaultRate: 190,   min: 40,   max: 1800,   step: 20  },
  { code: 'CA', name: 'Canada',          symbol: 'CA$',  defaultRate: 68,    min: 14,   max: 680,    step: 10  },
  { code: 'AU', name: 'Australia',       symbol: 'A$',   defaultRate: 76,    min: 15,   max: 760,    step: 10  },
  { code: 'BD', name: 'Bangladesh',      symbol: '৳',    defaultRate: 1000,  min: 200,  max: 15000,  step: 200 },
  { code: 'NG', name: 'Nigeria',         symbol: '₦',    defaultRate: 25000, min: 5000, max: 250000, step: 2500},
  { code: 'ZA', name: 'South Africa',    symbol: 'R',    defaultRate: 930,   min: 200,  max: 9300,   step: 100 },
  { code: 'EG', name: 'Egypt',           symbol: 'EGP',  defaultRate: 2400,  min: 500,  max: 24000,  step: 250 },
  { code: 'KE', name: 'Kenya',           symbol: 'KSh',  defaultRate: 6500,  min: 1000, max: 65000,  step: 500 },
  { code: 'PH', name: 'Philippines',     symbol: '₱',    defaultRate: 2800,  min: 500,  max: 28000,  step: 250 },
  { code: 'ID', name: 'Indonesia',       symbol: 'Rp',   defaultRate: 790000,min:100000,max:7900000, step:50000},
  { code: 'MY', name: 'Malaysia',        symbol: 'RM',   defaultRate: 235,   min: 50,   max: 2350,   step: 25  },
  { code: 'SG', name: 'Singapore',       symbol: 'S$',   defaultRate: 67,    min: 14,   max: 670,    step: 10  },
  { code: 'BR', name: 'Brazil',          symbol: 'R$',   defaultRate: 250,   min: 50,   max: 2500,   step: 25  },
  { code: 'MX', name: 'Mexico',          symbol: 'MX$',  defaultRate: 860,   min: 200,  max: 8600,   step: 100 },
  { code: 'AR', name: 'Argentina',       symbol: 'ARS',  defaultRate: 44500, min: 5000, max: 445000, step: 5000},
  { code: 'CO', name: 'Colombia',        symbol: 'COP',  defaultRate: 195000,min:40000, max:1950000, step:20000},
  { code: 'TR', name: 'Turkey',          symbol: '₺',    defaultRate: 1600,  min: 300,  max: 16000,  step: 200 },
  { code: 'PL', name: 'Poland',          symbol: 'zł',   defaultRate: 198,   min: 40,   max: 1980,   step: 20  },
  { code: 'RO', name: 'Romania',         symbol: 'lei',  defaultRate: 230,   min: 50,   max: 2300,   step: 25  },
  { code: 'UA', name: 'Ukraine',         symbol: '₴',    defaultRate: 1900,  min: 400,  max: 19000,  step: 200 },
  { code: 'JP', name: 'Japan',           symbol: '¥',    defaultRate: 7500,  min: 1500, max: 75000,  step: 500 },
  { code: 'KR', name: 'South Korea',     symbol: '₩',    defaultRate: 66500, min:10000, max:665000,  step: 5000},
  { code: 'TH', name: 'Thailand',        symbol: '฿',    defaultRate: 1750,  min: 350,  max: 17500,  step: 250 },
  { code: 'VN', name: 'Vietnam',         symbol: '₫',    defaultRate: 1225000,min:200000,max:12250000,step:100000},
]

const tasks = [
  { id: 'leadgen',   label: 'Lead Generation', desc: 'Finding & qualifying prospects' },
  { id: 'outreach',  label: 'Cold Outreach',   desc: 'Emails, DMs, follow-ups' },
  { id: 'social',    label: 'Social Media',    desc: 'Writing & scheduling posts' },
  { id: 'reporting', label: 'Reporting & Data', desc: 'Pulling reports, updating sheets' },
  { id: 'crm',       label: 'CRM Updates',     desc: 'Logging calls, updating contacts' },
]

const TaskIcon = ({ id, active }: { id: string; active: boolean }) => {
  const c = active ? '#FF4D00' : 'rgba(255,255,255,0.4)'
  const p = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: c, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (id === 'leadgen')   return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  if (id === 'outreach')  return <svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  if (id === 'social')    return <svg {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  if (id === 'reporting') return <svg {...p}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  return <svg {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
}

const fmt = (symbol: string, n: number): string => {
  if (n >= 1_000_000) return `${symbol}${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${symbol}${(n / 1_000).toFixed(1)}k`
  return `${symbol}${n}`
}

export default function ROICalculator() {
  const [hours,    setHours]    = useState(10)
  const [country,  setCountry]  = useState(COUNTRIES[0])
  const [rate,     setRate]     = useState(COUNTRIES[0].defaultRate)
  const [selected, setSelected] = useState<string[]>(['leadgen', 'outreach'])
  const [showModal, setShowModal] = useState(false)
  const [search,   setSearch]   = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('agentflow_country')
    if (saved) {
      const found = COUNTRIES.find(c => c.code === saved)
      if (found) { setCountry(found); setRate(found.defaultRate); return }
    }
    setShowModal(true)
  }, [])

  // All math in local currency — no conversion needed
  const weekly     = hours * rate
  const monthly    = Math.round(weekly * 4.33)
  const yearly     = Math.round(monthly * 12)
  const saved      = Math.round(yearly * 0.85)
  const automatable = Math.round(hours * 0.85)

  const toggle = (id: string) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const selectCountry = (c: typeof COUNTRIES[0]) => {
    setCountry(c)
    setRate(c.defaultRate)
    setShowModal(false)
    localStorage.setItem("agentflow_country", c.code)
  }

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const s = country.symbol

  return (
    <>
      {/* Country Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(8,8,16,0.92)', backdropFilter: 'blur(24px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24, padding: '40px 36px', maxWidth: 460, width: '100%', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: 'rgba(255,77,0,0.12)', border: '1px solid rgba(255,77,0,0.25)', marginBottom: 18 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 26, color: '#fff', letterSpacing: -1, margin: '0 0 8px' }}>Where are you based?</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0 }}>We&apos;ll show your ROI in your local currency.</p>
            </div>
            <div style={{ position: 'relative', marginBottom: 10 }}>
              <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" placeholder="Search country..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '11px 14px 11px 40px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10, color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div style={{ maxHeight: 280, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
              {filtered.map(c => (
                <div key={c.code} onClick={() => selectCountry(c)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 16px', borderRadius: 10, cursor: 'pointer', background: country.code === c.code ? 'rgba(255,77,0,0.12)' : 'rgba(255,255,255,0.03)', border: `1px solid ${country.code === c.code ? 'rgba(255,77,0,0.35)' : 'rgba(255,255,255,0.06)'}`, transition: 'all 0.15s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,77,0,0.08)'; el.style.borderColor = 'rgba(255,77,0,0.2)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = country.code === c.code ? 'rgba(255,77,0,0.12)' : 'rgba(255,255,255,0.03)'; el.style.borderColor = country.code === c.code ? 'rgba(255,77,0,0.35)' : 'rgba(255,255,255,0.06)' }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{c.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#FF4D00', background: 'rgba(255,77,0,0.10)', padding: '3px 10px', borderRadius: 6 }}>{c.symbol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <section id="roi-calculator" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,77,0,0.07)', top: -100, left: '30%', animation: 'orbMove 20s ease-in-out infinite' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>ROI Calculator</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 12 }}>
              <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff', margin: 0 }}>
                See what manual work<br /><span style={{ color: '#FF4D00' }}>is costing you.</span>
              </h2>
              <button onClick={() => { setSearch(''); setShowModal(true) }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,77,0,0.10)', border: '1px solid rgba(255,77,0,0.3)', borderRadius: 10, padding: '10px 16px', cursor: 'pointer', transition: 'all 0.2s', marginBottom: 4 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,77,0,0.18)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,77,0,0.10)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#FF4D00' }}>{country.name} · {s}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            </div>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: 56, lineHeight: 1.7 }}>Adjust the sliders. The numbers might surprise you.</p>
          </Reveal>

          <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>

            {/* LEFT — Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Hours */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>Hours/week on manual tasks</span>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 28, color: '#FF4D00', letterSpacing: -1 }}>{hours}h</span>
                </div>
                <input type="range" min={1} max={60} value={hours} onChange={e => setHours(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF4D00', cursor: 'pointer', height: 4 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>1h</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>60h</span>
                </div>
              </div>

              {/* Rate */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>Your hourly rate / value</span>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 28, color: '#FF4D00', letterSpacing: -1 }}>{s}{rate}/h</span>
                </div>
                <input type="range" min={country.min} max={country.max} step={country.step} value={rate} onChange={e => setRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF4D00', cursor: 'pointer', height: 4 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{s}{country.min}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{fmt(s, country.max)}</span>
                </div>
              </div>

              {/* Tasks */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
                <p style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 16 }}>What are you automating?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {tasks.map(t => (
                    <div key={t.id} onClick={() => toggle(t.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10, cursor: 'pointer', background: selected.includes(t.id) ? 'rgba(255,77,0,0.10)' : 'rgba(255,255,255,0.03)', border: `1px solid ${selected.includes(t.id) ? 'rgba(255,77,0,0.35)' : 'rgba(255,255,255,0.07)'}`, transition: 'all 0.2s' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: selected.includes(t.id) ? 'rgba(255,77,0,0.15)' : 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <TaskIcon id={t.id} active={selected.includes(t.id)} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: selected.includes(t.id) ? '#fff' : 'rgba(255,255,255,0.6)' }}>{t.label}</p>
                        <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{t.desc}</p>
                      </div>
                      <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, background: selected.includes(t.id) ? '#FF4D00' : 'transparent', border: `2px solid ${selected.includes(t.id) ? '#FF4D00' : 'rgba(255,255,255,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                        {selected.includes(t.id) && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(255,77,0,0.15), rgba(255,77,0,0.05))', border: '1px solid rgba(255,77,0,0.3)', borderRadius: 20, padding: '40px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,77,0,0.8)', marginBottom: 12 }}>You&apos;re losing per year</p>
                <p style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(48px, 7vw, 72px)', color: '#fff', letterSpacing: -3, lineHeight: 1, margin: '0 0 8px' }}>
                  {fmt(s, yearly)}
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0 }}>in time spent on tasks AI can handle</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}>
                <p style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Breakdown</p>
                {[
                  { label: 'Wasted per week',        val: fmt(s, weekly) },
                  { label: 'Wasted per month',        val: fmt(s, monthly) },
                  { label: 'Hours automatable/week',  val: `${automatable}h` },
                  { label: 'Value recovered/year',    val: fmt(s, saved), highlight: true },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{row.label}</span>
                    <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 800, fontSize: 18, color: row.highlight ? '#FF4D00' : '#fff', letterSpacing: -0.5 }}>{row.val}</span>
                  </div>
                ))}
              </div>

              <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer"
                style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', background: 'linear-gradient(135deg, #FF4D00, #ff7733)', color: '#fff', padding: '18px 32px', textDecoration: 'none', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 8px 32px rgba(255,77,0,0.4)', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 16px 48px rgba(255,77,0,0.6)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(255,77,0,0.4)' }}
              >
                Recover {fmt(s, saved)} — Book a Free Call →
              </a>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>Assumes 85% automation rate. No commitment required.</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.roi-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  )
}
