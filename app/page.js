'use client';
import { useEffect, useRef } from 'react';
export default function Page() {
  const h = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv'); }), { threshold: 0.08, rootMargin: '60px' });
    document.querySelectorAll('.r').forEach(el => o.observe(el));
    setTimeout(() => { if (h.current) h.current.classList.add('on'); }, 200);
    return () => o.disconnect();
  }, []);
  const C = { bg: '#0a0908', light: '#F0EBE0', accent: '#8B3A1A', metal: '#C8CDD6' };
  return (
    <div style={{background:C.bg,color:C.light,fontFamily:"'DM Sans',sans-serif"}}>
      <style dangerouslySetInnerHTML={{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        .r{opacity:0;transform:translateY(48px);transition:all 1.1s cubic-bezier(0.16,1,0.3,1)}.r.rv{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.15s}.d2{transition-delay:.3s}.d3{transition-delay:.45s}
        .hw{opacity:0;transition:opacity 1.6s ease}.hw.on{opacity:1}
        .hw.on .hl{transform:scale(1);opacity:1}.hl{transform:scale(1.15);opacity:0;transition:all 1.8s cubic-bezier(0.16,1,0.3,1) .3s}
        .hw.on .ht{opacity:1;transform:translateY(0)}.ht{opacity:0;transform:translateY(40px);transition:all 1.2s cubic-bezier(0.16,1,0.3,1) .8s}
        .hw.on .hc{opacity:1;transform:translateY(0)}.hc{opacity:0;transform:translateY(20px);transition:all 1s cubic-bezier(0.16,1,0.3,1) 1.2s}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .bp{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#0a0908;background:#8B3A1A;padding:18px 56px;border:none;cursor:pointer;text-decoration:none;display:inline-block;transition:all .4s cubic-bezier(0.16,1,0.3,1)}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(139,58,26,.3)}
        .bo{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:#F0EBE0;border:1px solid rgba(255,255,255,.07);padding:16px 40px;text-decoration:none;display:inline-block;transition:all .3s;background:transparent}.bo:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.03)}
        .sbg{position:absolute;inset:0;z-index:0;background-size:contain;background-repeat:no-repeat;pointer-events:none}
        @media(max-width:768px){.dg{grid-template-columns:1fr!important}.nl{display:none!important}.fg{grid-template-columns:1fr!important}.eg{grid-template-columns:1fr!important}}
      `}}/>
      <div className="grain"/>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'24px clamp(20px,4vw,60px)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(180deg,rgba(10,9,8,.9) 0%,transparent 100%)'}}>
        <div><span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(18px,2vw,24px)',letterSpacing:'.12em',color:C.light}}>THE KULTURE</span><br/><span style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',color:C.accent}}>Streetwear Market · ATL</span></div>
        <div className="nl" style={{display:'flex',gap:'clamp(16px,2vw,32px)',alignItems:'center'}}>
          {['Vendors','Experience'].map(l=><a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(240,235,224,.4)',textDecoration:'none'}}>{l}</a>)}
          <a href="#tickets" className="bp" style={{padding:'10px 24px',fontSize:9}}>TICKETS →</a>
        </div>
      </nav>

      {/* HERO — TRANSPARENT LOGO FULL SCREEN */}
      <section ref={h} className="hw" style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:`radial-gradient(ellipse at 50% 40%,rgba(139,58,26,.2) 0%,${C.bg} 60%)`}}>
        <div style={{position:'absolute',inset:0,opacity:.04,backgroundImage:'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>
        <div style={{position:'absolute',inset:0,background:`linear-gradient(180deg,transparent 0%,rgba(10,9,8,.5) 70%,${C.bg} 100%)`,zIndex:1}}/>
        <div className="hl" style={{position:'relative',zIndex:2}}><img src="/logo.png" alt="THE KULTURE" style={{width:'min(70vw,650px)',height:'auto',filter:'drop-shadow(0 0 60px rgba(139,58,26,.2))'}}/></div>
        <div className="ht" style={{position:'relative',zIndex:2,textAlign:'center',marginTop:32}}>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(32px,5vw,64px)',letterSpacing:'.06em',color:C.light,lineHeight:.9}}>WHERE CULTURE<br/><span style={{color:C.accent}}>GETS DRESSED</span></h1>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(200,205,214,.4)',marginTop:16}}>Atlanta · Curated Streetwear · Culture Experience</p>
        </div>
        <div className="hc" style={{position:'relative',zIndex:2,display:'flex',gap:16,marginTop:40,flexWrap:'wrap',justifyContent:'center'}}>
          <a href="#tickets" className="bp">TICKETS →</a><a href="#vendors" className="bo">Become a Vendor</a>
        </div>
      </section>

      {/* THESIS — logo scattered BG right */}
      <section style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden',background:'#111010'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'80% center',backgroundSize:'40%',opacity:.045,filter:'brightness(.25)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 70% 50%,rgba(139,58,26,.2) 0%,transparent 55%)`}}/>
        <div className="dg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1}}>
          <div className="r">
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,6vw,88px)',lineHeight:.9,color:C.light,marginBottom:28}}>NOT JUST<br/>A MARKET.<br/><span style={{color:C.accent}}>A MOVEMENT.</span></h2>
            <p style={{fontSize:'clamp(14px,1.2vw,17px)',lineHeight:1.85,color:'rgba(240,235,224,.45)',maxWidth:480,marginBottom:36}}>THE KULTURE is a curated environment where fashion, identity, and cultural currency meet. A live marketplace for emerging brands, tastemakers, sneaker collectors, and culture drivers.</p>
            <div style={{display:'flex',gap:40,flexWrap:'wrap'}}>
              {[['100+','Vendors'],['1 DAY','Experience'],['ATL','Flagship']].map(([n,l])=><div key={l}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(28px,4vw,52px)',color:C.accent,lineHeight:1}}>{n}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(200,205,214,.5)',marginTop:6}}>{l}</div></div>)}
            </div>
          </div>
          <div className="r d2" style={{height:520,background:'#181615',overflow:'hidden',position:'relative'}}>
            <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(200,205,214,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(200,205,214,.05) 1px,transparent 1px)',backgroundSize:'40px 40px'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(139,58,26,.2),transparent 50%)'}}/>
            <div style={{position:'absolute',bottom:24,left:24,fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',color:C.accent}}>THE DROP · ATL 2026</div>
          </div>
        </div>
      </section>

      {/* DROP LIST — logo scattered BG left */}
      <section id="experience" style={{padding:'120px clamp(24px,5vw,80px)',position:'relative'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'10% center',backgroundSize:'30%',opacity:.035,filter:'brightness(.25)'}}/>
        <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r"><h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,color:C.light,marginBottom:64}}>THE <span style={{color:C.accent}}>DROP LIST</span></h2></div>
          <div className="eg" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(255,255,255,.07)'}}>
            {[['STREETWEAR BRANDS','Independent labels, local drops, exclusive collabs'],['VINTAGE FASHION','Curated deadstock, archive pieces, rare finds'],['SNEAKERS','Collectors, heat, DS and VNDS'],['JEWELRY','Custom chains, grillz, statement pieces'],['ACCESSORIES','Bags, hats, sunglasses, belts'],['ART & COLLECTIBLES','Prints, sculptures, limited editions'],['CUSTOM PIECES','On-site customization and hand-finished work'],['LIMITED DROPS','Exclusive launches at the event only']].map(([t,d],i)=>
              <div key={i} className={`r d${i%3+1}`} style={{background:C.bg,padding:'32px 36px',borderLeft:'2px solid transparent',transition:'all .3s'}} onMouseEnter={e=>{e.currentTarget.style.borderLeftColor=C.accent}} onMouseLeave={e=>{e.currentTarget.style.borderLeftColor='transparent'}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(18px,2vw,26px)',color:'rgba(240,235,224,.5)',marginBottom:6}}>{t}</div>
                <div style={{fontSize:12,color:'rgba(240,235,224,.2)'}}>{d}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* VENDOR APPLICATION — logo centered BG */}
      <section id="vendors" style={{background:'#181615',padding:'100px clamp(24px,5vw,80px)',borderTop:'1px solid rgba(255,255,255,.07)',borderBottom:'1px solid rgba(255,255,255,.07)',position:'relative'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'center',backgroundSize:'25%',opacity:.03,filter:'brightness(.25)'}}/>
        <div className="r" style={{maxWidth:900,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,color:C.light,marginBottom:20}}>BRING YOUR<br/>BRAND TO<br/><span style={{color:C.accent}}>THE FLOOR</span></h2>
          <p style={{fontSize:16,lineHeight:1.85,color:'rgba(240,235,224,.45)',maxWidth:480,margin:'0 auto 44px'}}>We curate vendors with taste, product quality, and cultural relevance.</p>
          <a href="mailto:thekollectiveworldwide@gmail.com?subject=THE KULTURE Vendor Application" className="bp">Apply as Vendor</a>
        </div>
      </section>

      {/* TICKETS — logo BG bottom right */}
      <section id="tickets" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'85% 75%',backgroundSize:'28%',opacity:.04,filter:'brightness(.2)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 50%,rgba(139,58,26,.2) 0%,transparent 60%)`}}/>
        <div className="r" style={{maxWidth:720,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,7vw,100px)',lineHeight:.9,color:C.light,marginBottom:24}}>GET IN<br/><span style={{color:C.accent}}>THE ROOM</span></h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'rgba(240,235,224,.45)',maxWidth:440,margin:'0 auto 44px'}}>General admission. Full access. Capacity capped.</p>
          <a href="https://www.eventbrite.com/e/the-kulture-streetwear-market-tickets-1985661193081" target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'20px 64px',fontSize:11}}>TICKETS →</a>
        </div>
      </section>

      <footer style={{background:'#060504',borderTop:'1px solid rgba(255,255,255,.07)',padding:'56px clamp(24px,5vw,80px) 36px'}}>
        <div className="fg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40}}>
          <div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:'.1em',color:C.light}}>THE KULTURE</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',color:C.accent}}>STREETWEAR MARKET · ATLANTA</div><p style={{fontSize:12,color:'rgba(240,235,224,.35)',marginTop:12,lineHeight:1.7}}>A KHG HugLife Event.</p></div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.accent,marginBottom:16}}>EVENT</div>{['Experience','Vendors','FAQ'].map(l=><div key={l} style={{fontSize:12,color:'rgba(240,235,224,.35)',marginBottom:8}}>{l}</div>)}</div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.accent,marginBottom:16}}>CONNECT</div>{['Get Tickets','@thekollectiveworldwide'].map(l=><div key={l} style={{fontSize:12,color:'rgba(240,235,224,.35)',marginBottom:8}}>{l}</div>)}</div>
        </div>
        <div style={{maxWidth:1400,margin:'24px auto 0',paddingTop:20,borderTop:'1px solid rgba(255,255,255,.07)',fontSize:10,fontFamily:"'DM Mono',monospace",color:'rgba(255,255,255,.15)'}}>© 2026 The Kulture. A KHG Enterprise.</div>
      </footer>
    </div>
  );
}
