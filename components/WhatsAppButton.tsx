'use client'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    // Show after 3s
    const t = setTimeout(() => setVisible(true), 3000)
    // Hide tooltip after 6s
    const t2 = setTimeout(() => setTooltip(false), 8000)
    return () => { clearTimeout(t); clearTimeout(t2) }
  }, [])

  // Don't render on touch devices (mobile has native WA app, no need for cursor)
  // But DO render the button — it's useful on all devices
  const phone = '923212976653' // ← replace with your actual WhatsApp number
  const message = encodeURIComponent("Hi Saim! I came across Scattoo and I'm interested in automating my business. Can we chat?")
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <div style={{
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 9990,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      {/* Tooltip */}
      {tooltip && (
        <div style={{
          background: 'rgba(20,20,30,0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 10,
          padding: '10px 16px',
          whiteSpace: 'nowrap',
          animation: 'fadeUp 0.4s ease forwards',
        }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#fff' }}>Chat on WhatsApp</p>
          <p style={{ margin: '2px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Typically replies within an hour</p>
        </div>
      )}

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          flexShrink: 0,
        }}
        onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.1)'; el.style.boxShadow = '0 8px 32px rgba(37,211,102,0.6)' }}
        onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.boxShadow = '0 4px 24px rgba(37,211,102,0.45)' }}
      >
        {/* WhatsApp SVG icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse ring */}
        <span style={{
          position: 'absolute',
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.5)',
          animation: 'waPulse 2s ease-out infinite',
          pointerEvents: 'none',
        }} />
      </a>

      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
