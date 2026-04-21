'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // Dot snaps instantly
      dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
    }

    const animate = () => {
      // Ring lags behind with lerp
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      raf = requestAnimationFrame(animate)
    }

    // Hide default cursor on everything
    document.documentElement.style.cursor = 'none'

    const onEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '1' }
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0' }

    // Scale ring up on clickable elements
    const onHoverIn = () => {
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = 'rgba(131,199,50,0.9)'
      ring.style.boxShadow = '0 0 16px rgba(131,199,50,0.5)'
    }
    const onHoverOut = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(131,199,50,0.7)'
      ring.style.boxShadow = '0 0 12px rgba(131,199,50,0.3)'
    }

    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onHoverIn)
        el.addEventListener('mouseleave', onHoverOut)
        ;(el as HTMLElement).style.cursor = 'none'
      })
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    attachHover()
    raf = requestAnimationFrame(animate)

    // Re-attach on DOM changes (for dynamic content)
    const obs = new MutationObserver(attachHover)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
      document.documentElement.style.cursor = ''
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          border: '2px solid rgba(131,199,50,0.7)',
          boxShadow: '0 0 12px rgba(131,199,50,0.3)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s, box-shadow 0.2s, opacity 0.3s',
          willChange: 'transform',
        }}
      />
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 10, height: 10,
          borderRadius: '50%',
          background: '#83C732',
          boxShadow: '0 0 8px rgba(131,199,50,0.9), 0 0 20px rgba(131,199,50,0.4)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
