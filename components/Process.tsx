'use client'
import { useRef, useEffect, useState } from 'react'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. Monitoring and iteration are on us.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

export default function Process() {
  return (
    <section id="process" style={{ padding: '140px 0', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* THE CENTRAL LINE */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 90%, transparent)',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 2 }}>
          {steps.map((s, i) => {
            const isRight = i % 2 !== 0;
            return (
              <div key={i} style={{ display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start', width: '100%', position: 'relative' }}>
                
                {/* THE GLOWING RED NODE - Perfectly Centered on Line */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '14px',
                  height: '14px',
                  background: '#ff4d4d',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px 4px rgba(255, 77, 77, 0.4)',
                  border: '3px solid #000',
                  zIndex: 5
                }} />

                {/* THE CARD */}
                <div className="process-card" style={{
                  width: '42%',
                  background: 'rgba(18, 18, 18, 0.8)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 24,
                  overflow: 'hidden',
                  backdropFilter: 'blur(12px)',
                }}>
                  {/* Top Section */}
                  <div style={{ padding: '32px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '54px', color: 'rgba(255,255,255,0.05)', lineHeight: 0.8, marginBottom: 12 }}>{s.num}</div>
                    <h3 style={{ fontSize: '24px', color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>{s.title}</h3>
                  </div>

                  {/* Bottom Section */}
                  <div style={{ padding: '32px' }}>
                    <p style={{ color: '#888', lineHeight: 1.6, marginBottom: 24, fontSize: 15 }}>{s.desc}</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {s.tags.map((tag, j) => (
                        <span key={j} style={{ fontSize: 10, fontWeight: 700, color: '#83C732', background: 'rgba(131,199,50,0.1)', padding: '6px 12px', borderRadius: 4, textTransform: 'uppercase', border: '1px solid rgba(131,199,50,0.2)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          /* Move line and dots to the left for mobile */
          div[style*="left: 50%"] { left: 20px !important; transform: translateX(0) !important; }
          div[style*="justify-content"] { justify-content: flex-start !important; padding-left: 50px !important; }
          .process-card { width: 100% !important; }
          div[style*="transform: translate(-50%, -50%)"] { left: 20px !important; transform: translate(-50%, -50%) !important; }
        }
      `}</style>
    </section>
  )
}
