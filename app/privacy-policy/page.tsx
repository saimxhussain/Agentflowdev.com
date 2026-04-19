'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

const sections = [
  {
    num: '01', title: 'Introduction',
    content: `Welcome to Scattoo ("Scattoo", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.\n\nPlease read this policy carefully. If you disagree with its terms, please discontinue use of our site. This policy complies with the General Data Protection Regulation (GDPR), the UK GDPR, and other applicable data protection laws.`,
  },
  {
    num: '02', title: 'Information We Collect',
    content: '',
    bullets: {
      'Information you provide directly:': ['Name, email address, company name', 'Phone / WhatsApp number', 'Business information (team size, budget range, bottlenecks)', 'Messages sent via our chat widget or contact forms', 'Any other information you voluntarily submit'],
      'Information collected automatically:': ['IP address and approximate location', 'Browser type and version', 'Pages visited, time on site, referring URLs', 'Device identifiers'],
    },
  },
  {
    num: '03', title: 'Legal Basis for Processing (GDPR)',
    content: 'We process your personal data under the following legal bases:',
    list: ['Consent — where you have given clear consent (e.g. submitting our assessment form).', 'Legitimate interests — to respond to enquiries, improve our services, and prevent fraud.', 'Contractual necessity — to fulfil services you have requested from us.', 'Legal obligation — where we are required by law to process your data.'],
  },
  {
    num: '04', title: 'How We Use Your Information',
    content: '',
    list: ['To respond to your enquiries and provide our services', 'To send you project updates, invoices, and relevant communications', 'To improve and personalise your experience on our website', 'To analyse usage trends and diagnose technical issues', 'To comply with legal obligations', 'To protect against fraud and abuse'],
    note: 'We do not sell, rent, or trade your personal data to third parties for marketing purposes.',
  },
  {
    num: '05', title: 'Data Sharing & Third Parties',
    content: 'We may share your data with trusted third-party services that assist us in operating our website and services, including:',
    list: ['Supabase — database and backend infrastructure (EU/US servers)', 'Cal.com — appointment scheduling', 'Vercel — website hosting', 'n8n — workflow automation processing', 'OpenAI / Anthropic — AI assistant processing (no personal data retained beyond session)'],
    note: 'All third parties are required to handle your data securely and only for the purposes we specify.',
  },
  {
    num: '06', title: 'Data Retention',
    content: 'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Assessment form submissions are retained for up to 24 months. Chat session data is not persisted beyond your active session.',
  },
  {
    num: '07', title: 'Your Rights Under GDPR',
    content: 'If you are located in the EEA, UK, or similar jurisdiction, you have the right to:',
    list: ['Access — request a copy of your personal data', 'Rectification — request correction of inaccurate data', 'Erasure — request deletion of your data ("right to be forgotten")', 'Restriction — request restriction of processing', 'Portability — receive your data in a structured, machine-readable format', 'Objection — object to processing based on legitimate interests', 'Withdraw consent — at any time, without affecting lawfulness of prior processing'],
    note: 'To exercise any of these rights, contact us at saimxhussain@gmail.com. We will respond within 30 days.',
  },
  {
    num: '08', title: 'Cookies',
    content: 'We use essential cookies only — these are necessary for the website to function (e.g. theme preference). We do not use tracking, advertising, or analytics cookies. You may disable cookies in your browser settings, but some functionality may be affected.',
  },
  {
    num: '09', title: 'International Data Transfers',
    content: 'Your data may be transferred to and processed in countries outside your jurisdiction. When this occurs, we ensure appropriate safeguards are in place (e.g. Standard Contractual Clauses) to protect your data in accordance with applicable law.',
  },
  {
    num: '10', title: 'Security',
    content: 'We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. However, no method of transmission over the internet is 100% secure.',
  },
  {
    num: '11', title: "Children's Privacy",
    content: 'Our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.',
  },
  {
    num: '12', title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.',
  },
  {
    num: '13', title: 'Contact Us',
    content: 'If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:',
    contact: true,
  },
]

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'EquitanSans, sans-serif' }}>
      {/* Top nav bar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #efefef',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/logo.png" alt="Scattoo" width={34} height={34} style={{ borderRadius: 6 }} />
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 18, letterSpacing: 2, color: '#0a0a0a' }}>
              SCATTOO<span style={{ color: '#FF4D00' }}>.</span>
            </span>
          </Link>
          <Link href="/" style={{
            fontFamily: 'EquitanSans, sans-serif', fontSize: 12, fontWeight: 600,
            color: '#666', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 8, border: '1.5px solid #e8e8e8', transition: 'all 0.2s',
          }}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero banner */}
      <div style={{ background: 'linear-gradient(135deg, #fff9f6 0%, #ffffff 60%, #f5f0ff 100%)', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px 64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff4f0', border: '1px solid rgba(255,77,0,0.2)', padding: '5px 14px', borderRadius: 100, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, background: '#FF4D00', borderRadius: '50%' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FF4D00', letterSpacing: 1.5, textTransform: 'uppercase' }}>Legal</span>
          </div>
          <h1 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: -2, color: '#0a0a0a', marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 15, color: '#999', fontWeight: 400 }}>Last updated: March 3, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 80, alignItems: 'start' }}>

        {/* Sticky TOC sidebar */}
        <div style={{ position: 'sticky', top: 88 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#ccc', marginBottom: 16 }}>Contents</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {sections.map(s => (
              <li key={s.num}>
                <a href={`#section-${s.num}`} style={{
                  fontSize: 12, color: '#999', textDecoration: 'none', display: 'flex',
                  alignItems: 'center', gap: 8, padding: '5px 0', transition: 'color 0.2s', lineHeight: 1.4,
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF4D00'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#999'}
                >
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#ddd', minWidth: 20 }}>{s.num}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {sections.map((s, i) => (
            <div key={s.num} id={`section-${s.num}`} style={{
              paddingTop: 48, paddingBottom: 48,
              borderBottom: i < sections.length - 1 ? '1px solid #f5f5f5' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 11, color: '#FF4D00', letterSpacing: 2, minWidth: 24 }}>{s.num}</span>
                <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 22, color: '#0a0a0a', letterSpacing: -0.5 }}>{s.title}</h2>
              </div>

              {s.content && (
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: s.list || s.bullets ? 20 : 0, whiteSpace: 'pre-line' }}>{s.content}</p>
              )}

              {s.bullets && Object.entries(s.bullets).map(([heading, items]) => (
                <div key={heading} style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a', marginBottom: 10, letterSpacing: 0.3 }}>{heading}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {items.map((item: string) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#666', lineHeight: 1.6 }}>
                        <span style={{ color: '#FF4D00', fontWeight: 700, marginTop: 2, flexShrink: 0 }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {s.list && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.list.map((item: string) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#666', lineHeight: 1.7 }}>
                      <span style={{ color: '#FF4D00', fontWeight: 700, marginTop: 2, flexShrink: 0 }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {s.note && (
                <div style={{ marginTop: 20, background: '#fff9f6', border: '1px solid rgba(255,77,0,0.15)', borderRadius: 10, padding: '14px 18px' }}>
                  <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>{s.note}</p>
                </div>
              )}

              {s.contact && (
                <div style={{ background: '#fafafa', borderRadius: 14, padding: '28px 28px', border: '1.5px solid #f0f0f0', marginTop: 8 }}>
                  <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 18, color: '#0a0a0a', marginBottom: 4 }}>Scattoo</div>
                  <a href="mailto:saimxhussain@gmail.com" style={{ fontSize: 14, color: '#FF4D00', textDecoration: 'none', display: 'block', marginBottom: 4 }}>saimxhussain@gmail.com</a>
                  <a href="/" style={{ fontSize: 14, color: '#999', textDecoration: 'none' }}>scattoo.ai</a>
                </div>
              )}
            </div>
          ))}

          {/* Footer note */}
          <div style={{ marginTop: 48, padding: '24px', background: '#f8f8f8', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontSize: 12, color: '#aaa' }}>© 2025 Scattoo — All rights reserved</span>
            <Link href="/" style={{ fontSize: 12, color: '#FF4D00', textDecoration: 'none', fontWeight: 600 }}>← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
