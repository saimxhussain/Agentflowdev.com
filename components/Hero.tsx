'use client'
import { useState } from 'react'

const TABS = [
  { id: 'b2b', label: 'B2B Lead Generator', tag: 'Lead Gen', src: 'https://res.cloudinary.com/dgh17nged/video/upload/q_auto/f_auto/v1776609526/B2B_Lead_Generator_ghhfmk.mp4' },
  { id: 'li', label: 'LinkedIn Scraper', tag: 'Prospecting', src: 'https://res.cloudinary.com/dgh17nged/video/upload/q_auto/f_auto/v1776609527/Linkedin_scraper_qc6yxa.mp4' },
]
const TRUSTED = ['n8n', 'OpenAI', 'Apollo.io', 'HubSpot', 'LinkedIn', 'Make.com']

export default function Hero() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [displayed, setDisplayed] = useState(0)

  const switchTab = (idx: number) => {
    if (idx === active) return
    setAnimating(true)
    setTimeout(() => { setDisplayed(idx); setActive(idx); setAnimating(false) }, 220)
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--bg)',
      paddingTop: 68,
    }}>
      <div style={{
        position:'absolute',inset:0,zIndex:0,
        backgroundImage:'url(/images/hero-bg.png)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        opacity:0.4,
      }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'linear-gradient(135deg, rgba(31,48,55,0.85) 0%, rgba(31,48,55,0.55) 50%, rgba(131,199,50,0.18) 100%)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,backgroundImage:`linear-gradient(var(--grid-line) 1px, transparent 1px),linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,backgroundSize:'60px 60px',maskImage:'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',WebkitMaskImage:'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)' }} />

      <div style={{ position:'relative',zIndex:2,maxWidth:1200,width:'90%',margin:'40px auto',background:'rgba(255,255,255,0.06)',backdropFilter:'blur(32px) saturate(180%)',WebkitBackdropFilter:'blur(32px) saturate(180%)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:28,padding:'60px 52px',boxShadow:'0 32px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)' }}>

        <div style={{ textAlign:'center',marginBottom:24 }}>
          <span style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontSize:16,fontWeight:500,color:'rgba(245,240,234,0.65)',letterSpacing:0.5 }}>
            The leading AI automation agency — built for the future of intelligent workflows.
          </span>
        </div>

        <h1 style={{ fontFamily:'var(--font-display),MonumentExtended,sans-serif',fontSize:'clamp(80px,14vw,180px)',lineHeight:0.9,letterSpacing:2,color:'transparent',textAlign:'center',marginBottom:36,WebkitTextStroke:'2px rgba(245,240,234,0.85)',textShadow:'0 0 80px rgba(131,199,50,0.3)',animation:'fadeUp 0.7s ease forwards' }}>
          AgentFlow
        </h1>

        <p style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontSize:'clamp(16px,1.8vw,20px)',fontWeight:400,color:'rgba(245,240,234,0.7)',textAlign:'center',maxWidth:600,margin:'0 auto 40px',lineHeight:1.75,animation:'fadeUp 0.7s 0.1s ease both' }}>
          Automate everything.{' '}
          <strong style={{ color:'#83C732',fontWeight:700 }}>Dominate</strong> your market.
          <br />AI systems running 24/7, without your team lifting a finger.
        </p>

        <div style={{ display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap',marginBottom:48,animation:'fadeUp 0.7s 0.2s ease both' }}>
          <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontWeight:700,fontSize:14,letterSpacing:1.5,textTransform:'uppercase',color:'#fff',padding:'15px 36px',textDecoration:'none',borderRadius:50,display:'inline-flex',alignItems:'center',gap:8,transition:'all 0.25s',background:'linear-gradient(135deg,#83C732,#7A9137)',boxShadow:'0 6px 28px rgba(131,199,50,0.5)' }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(-3px)';el.style.boxShadow='0 14px 44px rgba(131,199,50,0.65)'}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(0)';el.style.boxShadow='0 6px 28px rgba(131,199,50,0.5)'}}>
            Book a Free Consultation →
          </a>
          <a href="#services" style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontWeight:600,fontSize:14,letterSpacing:1.5,textTransform:'uppercase',color:'rgba(245,240,234,0.8)',textDecoration:'none',padding:'15px 36px',borderRadius:50,border:'1px solid rgba(255,255,255,0.25)',transition:'all 0.25s',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(12px)' }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='#83C732';el.style.color='#83C732';el.style.background='rgba(131,199,50,0.12)'}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(255,255,255,0.25)';el.style.color='rgba(245,240,234,0.8)';el.style.background='rgba(255,255,255,0.07)'}}>
            Our Services
          </a>
          <a href="#about" style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontWeight:600,fontSize:14,letterSpacing:1.5,textTransform:'uppercase',color:'rgba(245,240,234,0.8)',textDecoration:'none',padding:'15px 36px',borderRadius:50,border:'1px solid rgba(255,255,255,0.25)',transition:'all 0.25s',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(12px)' }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='#83C732';el.style.color='#83C732';el.style.background='rgba(131,199,50,0.12)'}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(255,255,255,0.25)';el.style.color='rgba(245,240,234,0.8)';el.style.background='rgba(255,255,255,0.07)'}}>
            Our Passion
          </a>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid rgba(255,255,255,0.12)',paddingTop:28,animation:'fadeUp 0.7s 0.3s ease both' }}>
          {[{n:'10X',l:'Faster leads'},{n:'80%',l:'Time saved'},{n:'24/7',l:'AI agents'},{n:'6+',l:'Platforms'}].map((s,i)=>(
            <div key={i} style={{ textAlign:'center',paddingRight:16,borderRight:i<3?'1px solid rgba(255,255,255,0.1)':'none',paddingLeft:i>0?16:0 }}>
              <div style={{ fontFamily:'var(--font-display),MonumentExtended,sans-serif',fontSize:44,color:'#83C732',lineHeight:1,letterSpacing:1 }}>{s.n}</div>
              <div style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontSize:12,fontWeight:500,color:'rgba(245,240,234,0.5)',marginTop:4,letterSpacing:0.5 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:44 }}>
          <div style={{ display:'flex',gap:8,marginBottom:14,justifyContent:'center' }}>
            {TABS.map((t,i)=>(
              <button key={t.id} onClick={()=>switchTab(i)} style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontWeight:600,fontSize:13,letterSpacing:0.5,padding:'8px 20px',borderRadius:50,border:'none',cursor:'pointer',transition:'all 0.2s',background:active===i?'rgba(131,199,50,0.9)':'rgba(255,255,255,0.1)',color:active===i?'#fff':'rgba(245,240,234,0.6)',backdropFilter:'blur(12px)',boxShadow:active===i?'0 2px 16px rgba(131,199,50,0.4)':'none' }}>
                <span style={{ display:'inline-flex',alignItems:'center',gap:6 }}>
                  <span style={{ width:6,height:6,borderRadius:'50%',background:active===i?'rgba(255,255,255,0.7)':'rgba(245,240,234,0.4)' }} />
                  {t.label}
                </span>
              </button>
            ))}
          </div>
          <div style={{ borderRadius:16,overflow:'hidden',background:'rgba(0,0,0,0.3)',backdropFilter:'blur(24px)',border:'1px solid rgba(255,255,255,0.12)',boxShadow:'0 20px 60px rgba(0,0,0,0.4)',maxWidth:720,margin:'0 auto',position:'relative' }}>
            <div style={{ background:'rgba(0,0,0,0.4)',padding:'10px 16px',display:'flex',alignItems:'center',gap:8,borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width:10,height:10,borderRadius:'50%',background:'#ff5f57' }} />
              <div style={{ width:10,height:10,borderRadius:'50%',background:'#ffbd2e' }} />
              <div style={{ width:10,height:10,borderRadius:'50%',background:'#28ca41' }} />
              <div style={{ flex:1,background:'rgba(255,255,255,0.07)',borderRadius:6,padding:'4px 12px',marginLeft:8 }}>
                <span style={{ fontSize:11,color:'rgba(245,240,234,0.45)',fontFamily:'monospace' }}>app.agentflow.ai / {TABS[displayed].tag.toLowerCase().replace(' ','-')}</span>
              </div>
            </div>
            <div style={{ opacity:animating?0:1,transform:animating?'translateY(8px)':'translateY(0)',transition:'opacity 0.22s ease,transform 0.22s ease' }}>
              <video key={TABS[displayed].src} autoPlay muted loop playsInline style={{ width:'100%',display:'block',maxHeight:320,objectFit:'cover' }}>
                <source src={TABS[displayed].src} type="video/mp4" />
              </video>
            </div>
            <div style={{ position:'absolute',bottom:16,right:16,background:'rgba(131,199,50,0.9)',backdropFilter:'blur(8px)',color:'#fff',fontSize:11,fontWeight:700,letterSpacing:1,padding:'5px 12px',borderRadius:20,textTransform:'uppercase' }}>{TABS[displayed].tag}</div>
          </div>
          <div style={{ marginTop:20,display:'flex',alignItems:'center',gap:10,flexWrap:'wrap',justifyContent:'center' }}>
            <span style={{ fontFamily:'var(--font-body),Degular,sans-serif',fontSize:11,color:'rgba(245,240,234,0.4)',fontWeight:500,letterSpacing:0.5 }}>INTEGRATES WITH</span>
            {TRUSTED.map(t=>(
              <span key={t} style={{ fontSize:11,fontWeight:700,color:'rgba(245,240,234,0.55)',background:'rgba(255,255,255,0.07)',padding:'4px 10px',borderRadius:6,border:'1px solid rgba(255,255,255,0.1)',letterSpacing:0.3 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
