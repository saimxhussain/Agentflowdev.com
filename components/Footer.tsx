'use client'
import Image from 'next/image'
import Link from 'next/link'

const SM = [
  { label: 'Facebook', href: 'https://www.facebook.com/agentflowAI/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/agentflow-ai/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'Instagram', href: 'https://www.instagram.com/agentflow_ig/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: 'X', href: 'https://x.com/Saim_Dev', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
]

const NAV_COLS = [
  { title: 'Services', links: [{ l: 'Lead Generation', h: '#services' }, { l: 'AI Agents', h: '#services' }, { l: 'Social Automation', h: '#services' }, { l: 'Voice AI Agents', h: '#services' }, { l: 'Outreach Campaigns', h: '#services' }] },
  { title: 'Company', links: [{ l: 'About', h: '#about' }, { l: 'Process', h: '#process' }, { l: 'Case Studies', h: '#case-studies' }, { l: 'Pricing', h: '#pricing' }, { l: 'Book a Call', h: 'https://cal.com/saim-hussain-9ekrz6', ext: true }] },
  { title: 'Contact', links: [{ l: 'saimm.dev@gmail.com', h: 'mailto:saimm.dev@gmail.com' }, { l: 'LinkedIn (Personal)', h: 'https://www.linkedin.com/in/saim-hussain-ab318b3b4/', ext: true }, { l: 'Karachi, Pakistan', h: 'https://maps.google.com/?q=Karachi,Pakistan', ext: true }] },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--section-line)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, borderBottom: '1px solid var(--section-line)' }}>
        <div>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
            <Image src="/logo.png" alt="AgentFlow" width={36} height={36} style={{ borderRadius: 8 }} />
            <span style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: 2, color: 'var(--text)' }}>
              AGENTFLOW<span style={{ color: 'var(--orange)' }}>.</span>
            </span>
          </a>
          <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, fontWeight: 400, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 260, marginBottom: 28 }}>
            We automate. You dominate. AI systems for B2B businesses that want to scale without scaling headcount.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {SM.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                width: 40, height: 40, borderRadius: 10,
                border: '1px solid var(--border-2)',
                background: 'var(--surface)',
                backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--orange)'; el.style.color = 'var(--orange)'; el.style.background = 'var(--orange-subtle)'; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-2)'; el.style.color = 'var(--text-muted)'; el.style.background = 'var(--surface)'; el.style.transform = 'translateY(0)' }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <div style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text)', marginBottom: 20 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {col.links.map(lk => (
                <li key={lk.l}>
                  <a href={lk.h} target={'ext' in lk && lk.ext ? '_blank' : undefined} rel="noreferrer"
                    style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, fontWeight: 400, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--orange)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                  >{lk.l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 13, color: 'var(--text-6)' }}>© 2026 AgentFlow. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/privacy-policy" style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 13, color: 'var(--text-6)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--orange)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-6)'}
          >Privacy Policy</Link>
          <span style={{ fontSize: 12, color: 'var(--border)' }}>|</span>
          <span style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontSize: 11, color: 'var(--text-6)', fontWeight: 700, letterSpacing: 2 }}>WE AUTOMATE. YOU DOMINATE.</span>
        </div>
      </div>

      {/* AGENTFLOW fill animation */}
      <div style={{ overflow: 'hidden', paddingTop: 16, paddingBottom: 0, position: 'relative', width: '100%', maxWidth: '100vw' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '70%', height: 80, background: 'radial-gradient(ellipse, rgba(131,199,50,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="footer-wordmark" style={{ fontSize: 'clamp(48px, 14vw, 200px)', letterSpacing: '-2px', overflowX: 'hidden', paddingBottom: 0, lineHeight: 0.82 }}>AGENTFLOW</div>
      </div>
    </footer>
  )
}
