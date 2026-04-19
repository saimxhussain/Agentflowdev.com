'use client'
import Reveal from './Reveal'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team — and figure out the fastest way to eliminate them.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents — you get a clear roadmap showing exactly what we\'ll automate and the impact it will have.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. From that point forward, monitoring and iteration are on us. Your team can focus on growth; the AI handles execution — around the clock, without supervision.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 0', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Process / Timeline</span>
          </div>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a', marginBottom: 72 }}>
            How it works,<br /><span style={{ color: '#FF4D00' }}>step by step.</span>
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                background: i % 2 === 0 ? '#fafafa' : '#fff',
                borderRadius: 16, overflow: 'hidden',
                border: '1.5px solid #f0f0f0',
              }}>
                <div style={{ padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(80px, 10vw, 130px)', color: 'rgba(255,77,0,0.08)', lineHeight: 0.8, marginBottom: 20, userSelect: 'none', letterSpacing: -4 }}>{s.num}</div>
                  <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#0a0a0a', letterSpacing: -1, marginBottom: 6, lineHeight: 1 }}>{s.title}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#FF4D00', letterSpacing: 0.5 }}>{s.sub}</div>
                </div>
                <div style={{ padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 1 : 0, background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <p style={{ fontSize: 15, fontWeight: 400, color: '#666', lineHeight: 1.85, marginBottom: 28, maxWidth: 420 }}>{s.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {s.tags.map((t, j) => (
                      <span key={j} style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#FF4D00', background: 'rgba(255,77,0,0.07)', padding: '5px 12px', borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
