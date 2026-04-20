'use client'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>('loading')

  useEffect(() => {
    // Short enough to not annoy, long enough to feel premium
    const t1 = setTimeout(() => setPhase('fading'), 800)
    const t2 = setTimeout(() => setPhase('done'), 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#080810',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 20,
      opacity: phase === 'fading' ? 0 : 1,
      transition: 'opacity 0.4s ease',
      pointerEvents: phase === 'fading' ? 'none' : 'auto',
    }}>
      {/* Logo mark */}
      <div style={{ position: 'relative' }}>
        {/* Spinning ring */}
        <svg width="72" height="72" viewBox="0 0 72 72" style={{ animation: 'loaderSpin 1.2s linear infinite' }}>
          <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,77,0,0.15)" strokeWidth="2" />
          <circle cx="36" cy="36" r="30" fill="none" stroke="#FF4D00" strokeWidth="2"
            strokeDasharray="40 150" strokeLinecap="round" />
        </svg>
        {/* Center dot */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 12, height: 12, borderRadius: '50%',
            background: '#FF4D00',
            boxShadow: '0 0 16px rgba(255,77,0,0.8)',
            animation: 'gpulse 1s infinite',
          }} />
        </div>
      </div>

      <div style={{
        fontFamily: 'EquitanSans, sans-serif', fontWeight: 900,
        fontSize: 16, letterSpacing: 4, color: 'rgba(255,255,255,0.4)',
        textTransform: 'uppercase',
        animation: 'loaderFade 0.8s ease forwards',
      }}>
        AGENTFLOW<span style={{ color: '#FF4D00' }}>.</span>
      </div>

      <style>{`
        @keyframes loaderSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes loaderFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  )
}
