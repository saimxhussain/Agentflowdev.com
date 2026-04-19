'use client'
import { useRef, useEffect, useState } from 'react'

const cases = [
  {
    tag: 'E-commerce Brand', title: 'Orders on Autopilot',
    desc: 'An online retailer was spending 30+ hrs/week manually posting on social, following up with leads, and updating their CRM. We built a full automation stack that eliminated all of it.',
    before: [{ l: 'Hours/week on social', v: '32 hrs' }, { l: 'Lead follow-up time', v: '4 hrs/day' }, { l: 'CRM update lag', v: '48 hrs' }],
    after: [{ l: 'Hours/week on social', v: '0 hrs' }, { l: 'Lead follow-up time', v: 'Instant' }, { l: 'CRM update lag', v: 'Real-time' }],
    tags: ['Social Automation', 'CRM Sync', 'AI Content'], result: '90%', resultLabel: 'Time saved',
  },
  {
    tag: 'B2B SaaS Company', title: 'Instant Lead Qualification',
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

// FIX 5: Individual card with scroll-triggered slide-up animation
function CaseCard({ c, index }: { c: typeof cases[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.98)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
      }}
    >
      <div className="case-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {/* Info */}
        <div style={{ padding: '36px 32px', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>{c.tag}</div>
          <h3 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#fff', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>{c.title}</h3>
          <p style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 20 }}>{c.desc}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {c.tags.map((t, j) => <span key={j} style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#FF4D00', background: 'rgba(255,77,0,0.10)', border: '1px solid rgba(255,77,0,0.2)', padding: '4px 10px', borderRadius: 6 }}>{t}</span>)}
          </div>
        </div>
        {/* Before */}
        <div style={{ padding: '36px 32px', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Before Scattoo</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {c.before.map((b, j) => (
              <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{b.l}</span>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.25)' }}>{b.v}</span>
              </div>
            ))}
          </div>
        </div>
        {/* After */}
        <div style={{ padding: '36px 32px', background: 'rgba(255,77,0,0.04)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#FF4D00', marginBottom: 24 }}>After Scattoo</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {c.after.map((a, j) => (
              <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid rgba(255,77,0,0.08)' }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{a.l}</span>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 14, color: '#FF4D00' }}>{a.v}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 36, color: '#FF4D00', letterSpacing: -1 }}>{c.result}</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{c.resultLabel}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Case Studies</span>
        </div>
        <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff', marginBottom: 72 }}>
          The data you need.<br /><span style={{ color: '#FF4D00' }}>Real outcomes.</span>
        </h2>

        {/* FIX 5: Cards slide up one by one as you scroll */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {cases.map((c, i) => (
            <CaseCard key={i} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
