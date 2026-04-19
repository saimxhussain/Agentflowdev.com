'use client'
import Reveal from './Reveal'

const metrics = [
  { val: '10X', label: 'Faster lead generation pipeline' },
  { val: '80%', label: 'Reduction in manual work hours' },
  { val: '24/7', label: 'AI agents, never sleeping' },
  { val: '300+', label: 'Qualified leads per week, automated' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>About Scattoo</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a', marginBottom: 28 }}>
                Your business,<br />
                <span style={{ color: '#FF4D00' }}>on autopilot.</span>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: '#666', lineHeight: 1.85, marginBottom: 20 }}>
                Scattoo is a <strong style={{ color: '#0a0a0a' }}>B2B AI automation agency</strong> that builds intelligent systems replacing manual work at scale. Lead generation, outreach, social media, voice AI — we deploy pipelines that run 24/7 without human intervention.
              </p>
              <p style={{ fontSize: 16, fontWeight: 400, color: '#666', lineHeight: 1.85 }}>
                Our edge: combining <strong style={{ color: '#0a0a0a' }}>deep technical skill</strong> in n8n, GPT-4o, and custom AI agents with sharp business strategy. If you&apos;re spending hours on repetitive work, we&apos;ve already built a system that eliminates it.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {metrics.map((m, i) => (
                <div key={i} style={{
                  background: i === 0 ? '#FF4D00' : '#f8f8f8',
                  padding: '36px 28px', borderRadius: i === 0 ? '16px 4px 4px 4px' : i === 1 ? '4px 16px 4px 4px' : i === 2 ? '4px 4px 4px 16px' : '4px 4px 16px 4px',
                }}>
                  <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 40, color: i === 0 ? '#fff' : '#FF4D00', lineHeight: 1, letterSpacing: -1, marginBottom: 8 }}>{m.val}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: i === 0 ? 'rgba(255,255,255,0.8)' : '#888', lineHeight: 1.5 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
