'use client'
import Reveal from './Reveal'

const cases = [
  {
    tag: 'E-commerce Brand', title: 'Orders on Autopilot',
    desc: 'An online retailer was spending 30+ hrs/week manually posting on social, following up with leads, and updating their CRM. We built a full automation stack that eliminated all of it.',
    before: [{ l: 'Hours/week on social', v: '32 hrs' }, { l: 'Lead follow-up time', v: '4 hrs/day' }, { l: 'CRM update lag', v: '48 hrs' }],
    after: [{ l: 'Hours/week on social', v: '0 hrs' }, { l: 'Lead follow-up time', v: 'Instant' }, { l: 'CRM update lag', v: 'Real-time' }],
    tags: ['Social Automation', 'CRM Sync', 'AI Content'], result: '90%', resultLabel: 'Time saved',
  },
  {
    tag: 'B2B SaaS Company', title: 'Instant ID Checks',
    desc: 'A SaaS company needed to verify lead data, enrich contacts, and trigger personalized outreach sequences — all in real-time. Manual process was killing conversion speed.',
    before: [{ l: 'Lead to outreach time', v: '72 hours' }, { l: 'Data accuracy', v: '61%' }, { l: 'Monthly outreach cost', v: '$4,200' }],
    after: [{ l: 'Lead to outreach time', v: '< 3 min' }, { l: 'Data accuracy', v: '94%' }, { l: 'Monthly outreach cost', v: '$380' }],
    tags: ['Lead Enrichment', 'AI Outreach', 'Real-time Triggers'], result: '91%', resultLabel: 'Cost reduction',
  },
  {
    tag: 'Marketing Agency', title: 'One-Click Publishing',
    desc: 'A marketing agency managing 12 client accounts was manually publishing content to every platform. We built a single-input engine that drafts, approves, and posts across all platforms.',
    before: [{ l: 'Time per client/week', v: '6 hours' }, { l: 'Platforms covered', v: '2 platforms' }, { l: 'Human approval needed', v: 'Always' }],
    after: [{ l: 'Time per client/week', v: '20 minutes' }, { l: 'Platforms covered', v: '6 platforms' }, { l: 'Human approval needed', v: 'Optional gate' }],
    tags: ['Multi-Platform', 'AI Copywriting', 'Approval Workflow'], result: '94%', resultLabel: 'Time per client',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" style={{ padding: '120px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Case Studies</span>
          </div>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a', marginBottom: 72 }}>
            The data you need.<br /><span style={{ color: '#FF4D00' }}>Real outcomes.</span>
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {cases.map((c, i) => (
            <Reveal key={i} delay={80}>
              <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #f0f0f0', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #f5f5f5' }}>
                  {/* Info */}
                  <div style={{ padding: '44px 40px', borderRight: '1px solid #f5f5f5' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>{c.tag}</div>
                    <h3 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(24px, 2.5vw, 36px)', color: '#0a0a0a', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>{c.title}</h3>
                    <p style={{ fontSize: 13, fontWeight: 400, color: '#777', lineHeight: 1.75, marginBottom: 20 }}>{c.desc}</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {c.tags.map((t, j) => <span key={j} style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#FF4D00', background: 'rgba(255,77,0,0.07)', padding: '4px 10px', borderRadius: 6 }}>{t}</span>)}
                    </div>
                  </div>
                  {/* Before */}
                  <div style={{ padding: '44px 36px', borderRight: '1px solid #f5f5f5' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#bbb', marginBottom: 24 }}>Before Scattoo</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {c.before.map((b, j) => (
                        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid #f5f5f5' }}>
                          <span style={{ fontSize: 12, color: '#888' }}>{b.l}</span>
                          <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 14, color: '#ccc' }}>{b.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* After */}
                  <div style={{ padding: '44px 36px', background: '#fff9f6' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#FF4D00', marginBottom: 24 }}>After Scattoo</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {c.after.map((a, j) => (
                        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid rgba(255,77,0,0.08)' }}>
                          <span style={{ fontSize: 12, color: '#888' }}>{a.l}</span>
                          <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 14, color: '#FF4D00' }}>{a.v}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
                      <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 36, color: '#FF4D00', letterSpacing: -1 }}>{c.result}</span>
                      <span style={{ fontSize: 12, color: '#aaa', fontWeight: 500 }}>{c.resultLabel}</span>
                    </div>
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
