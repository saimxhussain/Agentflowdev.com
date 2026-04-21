'use client'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    sub: 'Understand your business inside out',
    desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team every single day.',
    tags: ['Workflow audit', 'Goal alignment', 'System mapping'],
  },
  {
    num: '02',
    title: 'Build',
    sub: 'Architect your digital workforce',
    desc: 'We design and build your automation pipelines from scratch. Connect your tools, sync your data, and integrate AI agents that actually work for your business.',
    tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'],
  },
  {
    num: '03',
    title: 'Deploy',
    sub: 'Go live with confidence',
    desc: 'We push your systems into production with zero downtime. Monitoring, iteration, and continuous improvement are all handled on our end.',
    tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'],
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: '140px 0',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >


      {/* Radial glow in center */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(131,199,50,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#83C732',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 16,
          }}>
            How it works
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: '#fff',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: 0,
          }}>
            Three steps to autopilot
          </h2>
        </div>

        {/* THE CENTRAL LINE */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '200px',
          bottom: '60px',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--section-line) 10%, var(--section-line) 90%, transparent)',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative', zIndex: 2 }}>
          {steps.map((s, i) => {
            const isRight = i % 2 !== 0
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: isRight ? 'flex-end' : 'flex-start',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* GLOWING NODE */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '16px',
                  height: '16px',
                  background: '#83C732',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px 6px rgba(131, 199, 50, 0.4)',
                  border: '3px solid #0d0d0d',
                  zIndex: 5,
                }} />

                {/* CARD */}
                <div
                  className="process-card"
                  style={{
                    width: '44%',
                    background: 'var(--surface)',
                    border: '1px solid var(--border-2)',
                    borderRadius: 20,
                    overflow: 'hidden',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    height: 3,
                    background: 'linear-gradient(90deg, #83C732, rgba(131,199,50,0.2))',
                  }} />

                  {/* Header */}
                  <div style={{
                    padding: '28px 32px 24px',
                    background: 'var(--surface-3)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 20,
                  }}>
                    <div style={{
                      fontFamily: 'serif',
                      fontSize: '52px',
                      color: 'var(--text-6)',
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      {s.num}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '20px',
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        margin: '0 0 6px',
                        fontWeight: 700,
                      }}>
                        {s.title}
                      </h3>
                      <p style={{
                        fontSize: 13,
                        color: '#83C732',
                        margin: 0,
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                      }}>
                        {s.sub}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '28px 32px 32px' }}>
                    <p style={{
                      color: 'var(--text-3)',
                      lineHeight: 1.7,
                      marginBottom: 24,
                      fontSize: 14,
                    }}>
                      {s.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {s.tags.map((tag, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: '#83C732',
                            background: 'rgba(131,199,50,0.08)',
                            padding: '5px 12px',
                            borderRadius: 4,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            border: '1px solid rgba(131,199,50,0.2)',
                          }}
                        >
                          {tag}
                        </span>
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
        @media (max-width: 900px) {
          .process-card { width: 100% !important; }
          #process > div > div:last-child > div {
            justify-content: flex-start !important;
            padding-left: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
