'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#070707', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, borderBottom: '1px solid rgba(255,255,255,.04)' }}>
        <div>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
            <Image src="/logo.png" alt="Scattoo" width={36} height={36} style={{ borderRadius: 6 }} />
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 18, letterSpacing: 3, color: '#F0EEE8' }}>SCATTOO<span style={{ color: '#FF4D00' }}>.</span></span>
          </a>
          <p style={{ fontSize: 13, fontWeight: 300, color: '#555', lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>We automate. You dominate. AI systems for B2B businesses that want to scale without scaling headcount.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ l: 'LI', h: 'https://linkedin.com/in/saim-hussain-b318b3b4' }, { l: 'X', h: '#' }, { l: 'IG', h: '#' }].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer" style={{
                width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700,
                letterSpacing: 1, color: '#555', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,.08)'; el.style.color = '#555' }}
              >{s.l}</a>
            ))}
          </div>
        </div>
        {[
          { title: 'Navigate', links: [{ l: 'About', h: '#about' }, { l: 'Services', h: '#services' }, { l: 'Process', h: '#process' }, { l: 'Case Studies', h: '#case-studies' }, { l: 'Pricing', h: '#pricing' }] },
          { title: 'Services', links: [{ l: 'Lead Generation', h: '#services' }, { l: 'Social Automation', h: '#services' }, { l: 'Voice AI', h: '#services' }, { l: 'Outreach', h: '#services' }, { l: 'Custom AI', h: '#services' }] },
          { title: 'Contact', links: [{ l: 'Book a Call', h: 'https://cal.com/saim-hussain-9ekrz6' }, { l: 'saimxhussain@gmail.com', h: 'mailto:saimxhussain@gmail.com' }, { l: 'LinkedIn', h: 'https://linkedin.com/in/saim-hussain-b318b3b4' }, { l: 'Karachi, Pakistan', h: '#' }] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#444', marginBottom: 20 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map(lk => (
                <li key={lk.l}><a href={lk.h} target={lk.h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 13, fontWeight: 300, color: '#555', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F0EEE8'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555'}
                >{lk.l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 11, fontWeight: 300, color: '#333' }}>© 2025 Scattoo. All rights reserved.</div>
        <div style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 11, fontWeight: 700, color: '#333', letterSpacing: 2, textTransform: 'uppercase' }}>We Automate. You Dominate.</div>
      </div>
    </footer>
  )
}
