'use client'
import { useEffect, useRef, ReactNode } from 'react'
export default function Reveal({ children, delay=0, className='' }:{ children:ReactNode, delay?:number, className?:string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const el = ref.current; if(!el) return
    el.style.opacity='0'; el.style.transform='translateY(48px)'
    el.style.transition=`opacity .8s ${delay}ms ease, transform .8s ${delay}ms ease`
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){el.style.opacity='1';el.style.transform='translateY(0)';obs.disconnect()}
    },{threshold:.12})
    obs.observe(el)
    return()=>obs.disconnect()
  },[delay])
  return <div ref={ref} className={className}>{children}</div>
}
