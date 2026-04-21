'use client'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'split' | 'done'>('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 600)   // logo fully in
    const t2 = setTimeout(() => setPhase('split'), 1400)  // start split
    const t3 = setTimeout(() => setPhase('done'), 2100)   // all gone
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  const splitting = phase === 'split'

  const panelBase: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    background: 'var(--loader-bg)',
    transition: 'transform 0.65s cubic-bezier(0.76, 0, 0.24, 1)',
    zIndex: 9999,
  }

  return (
    <>
      {/* Left panel */}
      <div style={{
        ...panelBase,
        left: 0,
        transform: splitting ? 'translateX(-100%)' : 'translateX(0)',
      }} />

      {/* Right panel */}
      <div style={{
        ...panelBase,
        right: 0,
        transform: splitting ? 'translateX(100%)' : 'translateX(0)',
      }} />

      {/* Logo — sits above both panels, fades out as split happens */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16,
        pointerEvents: 'none',
        opacity: splitting ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        <div style={{
          fontFamily: 'EquitanSans, sans-serif',
          fontWeight: 900,
          fontSize: 28,
          letterSpacing: 5,
          color: '#fff',
          textTransform: 'uppercase',
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}>
          AGENTFLOW<span style={{ color: '#83C732' }}>.</span>
        </div>

        {/* Thin orange line under logo */}
        <div style={{
          height: 2,
          background: '#83C732',
          borderRadius: 2,
          boxShadow: '0 0 12px rgba(131,199,50,0.7)',
          width: phase === 'enter' ? 0 : 120,
          transition: 'width 0.5s ease 0.2s',
        }} />
      </div>
    </>
  )
}
