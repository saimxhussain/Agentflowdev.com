'use client'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section style={{ padding: '120px 0', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,77,0,0.12) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(120,60,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,77,0,0.1)', border: '1px solid rgba(255,77,0,0.25)', padding: '6px 16px', borderRadius: 100, marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, background: '#FF4D00', borderRadius: '50%', animation: 'gpulse 2s infinite' }} />
              <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 12, fontWeight: 600, color: '#FF4D00', letterSpacing: 1 }}>Ready to automate?</span>
            </div>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.0, letterSpacing: -3, color: '#fff', marginBottom: 24 }}>
              Book your<br /><span style={{ color: '#FF4D00' }}>discovery call.</span>
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: '#777', maxWidth: 520, margin: '0 auto 44px', lineHeight: 1.75 }}>
              Let&apos;s spend 30 minutes mapping your biggest bottlenecks and showing you exactly what we&apos;d automate first — no commitment, no pitch deck.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1,
                textTransform: 'uppercase', background: '#FF4D00', color: '#fff', padding: '16px 40px',
                textDecoration: 'none', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all 0.2s', boxShadow: '0 8px 32px rgba(255,77,0,0.35)',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#e04400'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 16px 48px rgba(255,77,0,0.45)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FF4D00'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(255,77,0,0.35)' }}
              >Schedule a Call →</a>
              <a href="mailto:saimxhussain@gmail.com" style={{
                fontFamily: 'EquitanSans, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 1,
                textTransform: 'uppercase', color: '#fff', textDecoration: 'none',
                padding: '16px 40px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.15)',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = '#fff' }}
              >Send Email</a>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes gpulse{0%,100%{box-shadow:0 0 0 0 rgba(255,77,0,.5)}70%{box-shadow:0 0 0 8px rgba(255,77,0,0)}}`}</style>
    </section>
  )
}
