'use client'
import Image from 'next/image'
import Link from 'next/link'

const SM = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/agentflow-ai/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'Instagram', href: 'https://www.instagram.com/agentflow_ig/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: 'X', href: 'https://x.com/Saim_Dev', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
]

const NAV_COLS = [
  { title: 'Services', links: [{ l: 'Lead Generation', h: '#services' }, { l: 'AI Agents', h: '#services' }, { l: 'Social Automation', h: '#services' }, { l: 'Voice AI Agents', h: '#services' }, { l: 'Outreach Campaigns', h: '#services' }] },
  { title: 'Company', links: [{ l: 'About', h: '#about' }, { l: 'Process', h: '#process' }, { l: 'Case Studies', h: '#case-studies' }, { l: 'Pricing', h: '#pricing' }, { l: 'Book a Call', h: 'https://cal.com/saim-hussain-9ekrz6', ext: true }] },
  { title: 'Contact', links: [{ l: 'saimxhussain@gmail.com', h: 'mailto:saimxhussain@gmail.com' }, { l: 'LinkedIn (Personal)', h: 'https://www.linkedin.com/in/saim-hussain-ab318b3b4/', ext: true }, { l: 'Karachi, Pakistan', h: 'https://maps.google.com/?q=Karachi,Pakistan', ext: true }] },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
            <Image src="/logo.png" alt="AgentFlow" width={36} height={36} style={{ borderRadius: 8 }} />
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 18, letterSpacing: 3, color: '#fff' }}>
              AGENTFLOW<span style={{ color: '#FF4D00' }}>.</span>
            </span>
          </a>
          <p style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 260, marginBottom: 28 }}>
            We automate. You dominate. AI systems for B2B businesses that want to scale without scaling headcount.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {SM.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                width: 38, height: 38, borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.10)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00'; el.style.background = 'rgba(255,77,0,0.08)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.10)'; el.style.color = 'rgba(255,255,255,0.4)'; el.style.background = 'rgba(255,255,255,0.04)' }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <div style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: 20 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {col.links.map(lk => (
                <li key={lk.l}>
                  <a href={lk.h} target={'ext' in lk && lk.ext ? '_blank' : undefined} rel="noreferrer"
                    style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF4D00'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}
                  >{lk.l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        {/* FIX: updated copyright year */}
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 AgentFlow. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/privacy-policy" style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF4D00'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)'}
          >Privacy Policy</Link>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.10)' }}>|</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, letterSpacing: 1 }}>WE AUTOMATE. YOU DOMINATE.</span>
        </div>
      </div>

      {/* FIX 6: Attractive animated AGENTFLOW with glow + gradient stroke */}
      <div style={{ overflow: 'hidden', paddingTop: 24, paddingBottom: 0, position: 'relative' }}>
        {/* Glow beneath text */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '70%', height: 80,
          background: 'radial-gradient(ellipse, rgba(255,77,0,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="footer-brand" style={{
          fontFamily: 'EquitanSans, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 240px)',
          lineHeight: 0.85,
          letterSpacing: -6,
          textAlign: 'center',
          userSelect: 'none',
          paddingBottom: 0,
          // FIX 6: gradient text instead of flat near-invisible color
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,77,0,0.12) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'brandGlow 4s ease-in-out infinite alternate',
        }}>AGENTFLOW</div>
      </div>

      <style>{`
        @keyframes brandGlow {
          from {
            background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,77,0,0.10) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            filter: none;
          }
          to {
            background: linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,77,0,0.25) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            filter: drop-shadow(0 0 40px rgba(255,77,0,0.25));
          }
        }
        .footer-brand {
          animation: brandGlow 4s ease-in-out infinite alternate;
        }
      `}</style>
    </footer>
  )
}
