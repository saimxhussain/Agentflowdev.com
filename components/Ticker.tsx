export default function Ticker() {
  const items = ['Lead Generation','AI Outreach','Social Automation','Voice AI Agents','CRM Sync','Custom Workflows','Cold Email','LinkedIn Scraping','We Automate','You Dominate']
  const d = [...items,...items]
  return (
    <div style={{ overflow: 'hidden', background: '#83C732', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(0,0,0,0.2)', position: 'relative', zIndex: 2 }}>
      <div className="ticker-inner">
        {d.map((t, i) => (
          <span key={i} style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase', color: '#fff', padding: '0 28px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 28 }}>
            {t}<span style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.5)', borderRadius: '50%' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
