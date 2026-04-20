'use client'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(255,77,0,0.10)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'orbMove 16s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(100,60,255,0.07)', top: 0, right: 0, animation: 'orbMove2 12s ease-in-out infinite' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{
            background: 'var(--surface)',
            backdropFilter: 'blur(48px)', WebkitBackdropFilter: 'blur(48px)',
            border: '1px solid var(--border-2)',
            borderRadius: 28, padding: '80px 40px', textAlign: 'center',
            boxShadow: '0 40px 120px rgba(0,0,0,0.2)',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--orange-subtle)', border: '1px solid rgba(255,77,0,0.25)', padding: '6px 16px', borderRadius: 100, marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, background: 'var(--orange)', borderRadius: '50%', animation: 'gpulse 2s infinite' }} />
              <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--orange)', letterSpacing: 1 }}>Ready to automate?</span>
            </div>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(40px, 7vw, 88px)', lineHeight: 1.0, letterSpacing: -3, color: 'var(--text)', marginBottom: 24 }}>
              Book your<br /><span style={{ color: 'var(--orange)' }}>discovery call.</span>
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: 'var(--text-3)', maxWidth: 520, margin: '0 auto 44px', lineHeight: 1.75 }}>
              Let&apos;s spend 30 minutes mapping your biggest bottlenecks and showing you exactly what we&apos;d automate first — no commitment, no pitch deck.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1,
                textTransform: 'uppercase', background: 'var(--orange)', color: '#fff', padding: '16px 40px',
                textDecoration: 'none', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all 0.2s', boxShadow: '0 8px 32px rgba(255,77,0,0.45)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#e04400'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 16px 48px rgba(255,77,0,0.6)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--orange)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(255,77,0,0.45)' }}
              >Schedule a Call →</a>
              <a href="mailto:saimxhussain@gmail.com" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 1,
                textTransform: 'uppercase', color: 'var(--text-3)', textDecoration: 'none',
                padding: '16px 40px', borderRadius: 10, border: '1px solid var(--border-2)',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(12px)', background: 'var(--surface)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--orange)'; el.style.color = 'var(--orange)'; el.style.background = 'var(--orange-subtle)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-2)'; el.style.color = 'var(--text-3)'; el.style.background = 'var(--surface)' }}
              >Send Email</a>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes gpulse{0%,100%{box-shadow:0 0 0 0 rgba(255,77,0,.5)}70%{box-shadow:0 0 0 10px rgba(255,77,0,0)}}`}</style>
    </section>
  )
}
