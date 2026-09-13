// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef, useCallback } from "react";
import fahimImg from './assets/fahim_img.jpg'; 

/* ═══════════════════════════════════════════════════════════
   Md. Fahim Hossen — Premium Full-Stack Developer Portfolio
═══════════════════════════════════════════════════════════ */

const C = {
  bg: "#0b1220",
  bg2: "#10192d",
  card: "rgba(18, 29, 52, 0.72)",
  cardHover: "rgba(24, 39, 70, 0.88)",
  border: "rgba(125, 211, 252, 0.16)",
  borderHover: "rgba(125, 211, 252, 0.38)",
  accent: "#38bdf8",
  accent2: "#a78bfa",
  accent3: "#34d399",
  gold: "#fbbf24",
  rose: "#f43f5e",
  text: "#f8fafc",
  muted: "#94a3b8",
  grad: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
  grad2: "linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fbbf24 100%)",
  grad3: "linear-gradient(135deg, #34d399 0%, #38bdf8 100%)",
};

const TECHS = [
  { name:"React", color:"#61DAFB", symbol:"⚛" },
  { name:"Angular", color:"#DD0031", symbol:"A" },
  { name:"Laravel", color:"#FF2D20", symbol:"🔺" },
  { name:"JavaScript", color:"#F7DF1E", symbol:"JS" },
  { name:"HTML5", color:"#E34F26", symbol:"◈" },
  { name:"CSS3", color:"#264DE4", symbol:"◉" },
  { name:"PHP", color:"#777BB4", symbol:"PHP" },
  { name:"WordPress", color:"#21759B", symbol:"WP" },
  { name:"MySQL", color:"#4479A1", symbol:"DB" },
  { name:"Git", color:"#F05032", symbol:"⑂" },
  { name:"Tailwind", color:"#38BDF8", symbol:"◐" },
  { name:"VS Code", color:"#007ACC", symbol:"{}"},
];

const PROJECTS = [
  { title:"MediCare", cat:"Website", desc:"Full hospital Health website", tech:["HTML5","CSS3","JS"], color:"#63b3ed", img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80", live:"https://medical-website-sand.vercel.app", github:"https://github.com/mdfahimhossens1/medical-website", year:"2024" },
  { title:"Rongeer Bazar", cat:"Website", desc:"Multi-vendor e-commerce platform with bKash/Nagad integration.", tech:["React","Bootstrap","MySQL"], color:"#9f7aea", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80", live:"https://rongeer-bazar.vercel.app/", github:"https://github.com/mdfahimhossens1/rongeer-bazar", year:"2024" },
  { title:"FinOps SaaS Dashboard", cat:"Laravel", desc:"Real-time analytics SaaS platform with role-based access.", tech:["Laravel","MySQL","Chart.js"], color:"#68d391", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80", github:"https://github.com/mdfahimhossens/finops-dashboard", year:"2025" },
  { title:"ShopOps Dashboard", cat:"Laravel", desc:"Real-time analytics SaaS platform with data visualization.", tech:["Laravel","MySQL","Chart.js"], color:"#68d391", img:"https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?q=80&w=1274&auto=format&fit=crop", github:"https://github.com/mdfahimhossens/shopops-dashboard", year:"2025" },
  { title:"CleanNest BD", cat:"React", desc:"Property listing platform with map integration and advanced filters.", tech:["React","Maps API"], color:"#f6c90e", img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", live:"https://cleaning-website-rosy.vercel.app/", github:"https://github.com/mdfahimhossens1/cleaning-website", year:"2023" },
  { title:"Nexus Agency", cat:"React", desc:"Award-winning agency website with custom animations.", tech:["React","SEO"], color:"#fc8181", img:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80", live:"https://nexus-agency-kappa.vercel.app/", github:"https://github.com/mdfahimhossens1/nexus-agency", year:"2023" },
  { title:"Nexa Core", cat:"React", desc:"Bangladesh's fastest-growing software company.", tech:["React"], color:"#f6ad55", img:"https://images.unsplash.com/photo-1625838144804-300f3907c110?q=80&w=870&auto=format&fit=crop", live:"https://nexacore-flax.vercel.app/", github:"https://github.com/mdfahimhossens1/nexacore", year:"2024" },
  { title:"Essex Property Cleaning", cat:"WordPress", desc:"Professional property cleaning service website.", tech:["WordPress"], color:"#38bdf8", img:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=870&auto=format&fit=crop", live:"https://essexpropertycleaning.co.uk/", year:"2026" },
  { title:"Elegant Mart Brand", cat:"WordPress", desc:"Modern fashion-focused eCommerce website.", tech:["WordPress"], color:"#ec4899", img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop", live:"https://elegantmartbrand.com", year:"2026" },
];

const SKILLS_GROUPS = [
  { label:"Frontend", color:"#63b3ed", items:[{ name:"React / Angular", pct:88},{ name:"HTML5 & CSS3",pct:95},{ name:"JavaScript (ES6+)",pct:85},{ name:"Bootstrap 5 / Tailwind CSS",pct:90},{ name:"WordPress / Elementor",pct:92}] },
  { label:"Backend", color:"#9f7aea", items:[{ name:"PHP",pct:82},{ name:"Laravel",pct:78},{ name:"REST API Design",pct:80},{ name:"MySQL / PostgreSQL",pct:78}] },
  { label:"Tools & Others", color:"#68d391", items:[{ name:"Git & GitHub",pct:88},{ name:"SEO Optimization",pct:85},{ name:"Figma / Adobe XD",pct:72},{ name:"Linux / cPanel",pct:75}] },
];

const EXPERIENCES = [
  { role:"Senior WordPress Developer", company:"UY Lab", period:"2023 – Present", desc:"Led development of 30+ client websites. Implemented custom Gutenberg blocks, WooCommerce solutions, and performance optimizations achieving sub-2s load times.", color:"#63b3ed" },
  { role:"Full-Stack Web Developer (Laravel & React)", company:"UY Lab", period:"2022 – 2023", desc:"Built Laravel-based SaaS applications and React frontends. Delivered 15+ projects on time with 100% client satisfaction.", color:"#9f7aea" },
  { role:"Web Developer (Angular & WordPress)", company:"Softlab IT", period:"2021 – 2022", desc:"Developed responsive Angular applications and WordPress websites. Learned client communication, agile methodology, and modern front-end frameworks.", color:"#68d391" },
];

const SERVICES_LIST = [
  { icon:"⚡", title:"Custom Web Development", desc:"Fast, secure, and SEO-optimized websites built with modern technologies.", color:"#63b3ed" },
  { icon:"🛒", title:"E-Commerce Solutions", desc:"WooCommerce and Laravel-based online stores with local payment gateways.", color:"#9f7aea" },
  { icon:"📱", title:"Responsive UI Design", desc:"Pixel-perfect, mobile-first designs that look stunning on every device.", color:"#68d391" },
  { icon:"🔧", title:"WordPress Development", desc:"Custom themes, plugins, Elementor Pro builds, and performance optimization.", color:"#f6c90e" },
  { icon:"🚀", title:"Performance & SEO", desc:"Core Web Vitals optimization, technical SEO audits, and speed improvements.", color:"#fc8181" },
  { icon:"🔒", title:"Maintenance & Support", desc:"Regular updates, security monitoring, backups, and ongoing technical support.", color:"#f6ad55" },
];

function useInView(t = 0.15) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}

function BackToTopButton({ setHovering }) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <button onClick={scrollToTop} onMouseEnter={() => setHovering && setHovering(true)} onMouseLeave={() => setHovering && setHovering(false)}
      style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 999, width: "48px", height: "48px", borderRadius: "12px", background: C.grad, border: "none", cursor: "default", display: visible ? "flex" : "none", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(99,179,237,0.3)" }}
      onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,179,237,0.5)"; }}
      onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,179,237,0.3)"; }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
  );
}

// প্রটেক্ট ফাংশন - inspect ব্লক করার জন্য
function ProtectInspect() {
  useEffect(() => {
    // Right-click ব্লক
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };
    
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U ব্লক
    const handleKeyDown = (e) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
          (e.ctrlKey && e.key === 'u') ||
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        return false;
      }
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return null;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [hovering, setHovering] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  
  useEffect(() => {
    const onMove = (e) => { setCursor({ x: e.clientX, y: e.clientY }); };
    const onDown = () => { setClicked(true); setTimeout(() => setClicked(false), 300); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mousedown", onDown); };
  }, []);
  
  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 2400);
    const t2 = setTimeout(() => setPreloaderDone(true), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const handler = () => {
      const sections = ["home","about","services","projects","skills","experience","contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveNav(id); break; }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const NAV = ["home","about","services","projects","skills","experience","contact"];

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Syne', 'DM Sans', sans-serif", overflowX: "hidden", minHeight: "100vh", cursor: "default" }}>
      <ProtectInspect />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />

      {!preloaderDone && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: loaded ? "opacity 0.8s ease" : "none", opacity: loaded ? 0 : 1, pointerEvents: loaded ? "none" : "all" }}>
          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{ width: 100, height: 100, borderRadius: "50%", border: `1px solid ${C.border}`, borderTop: `2px solid ${C.accent}`, animation: "spin 1.2s linear infinite", position: "absolute", inset: 0 }} />
            <div style={{ width: 100, height: 100, borderRadius: "50%", border: `1px solid ${C.border}`, borderBottom: `2px solid ${C.accent2}`, animation: "spinR 1.8s linear infinite", position: "absolute", inset: 0 }} />
            <div style={{ width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Syne'", fontSize: 28, fontWeight: 800, background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FH</span>
            </div>
          </div>
          <div style={{ fontFamily: "'Fira Code'", fontSize: 12, color: C.muted, letterSpacing: "3px", marginBottom: 20 }}>LOADING PORTFOLIO...</div>
          <div style={{ width: 200, height: 1, background: C.border, borderRadius: 1, overflow: "hidden" }}>
            <div style={{ height: "100%", background: C.grad, borderRadius: 1, animation: "loadBar 2s ease forwards" }} />
          </div>
        </div>
      )}

      <div style={{ position: "fixed", left: cursor.x - (clicked ? 8 : 4), top: cursor.y - (clicked ? 8 : 4), width: clicked ? 16 : 8, height: clicked ? 16 : 8, borderRadius: "50%", background: C.accent, pointerEvents: "none", zIndex: 9998, transition: "width 0.15s, height 0.15s, left 0.04s, top 0.04s", mixBlendMode: "screen" }} />

      <BGCanvas />

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 500, padding: "0 5%", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(11,18,32,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}` }}>
        <div onClick={() => scrollTo("home")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 3, userSelect: "none" }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 22, fontWeight: 700, color: C.accent, textShadow: "0 0 12px rgba(56,189,248,0.4)" }}>&lt;</span>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 800, background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", padding: "0 3px", letterSpacing: "0.5px" }}>fahim</span>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 22, fontWeight: 700, color: C.accent2, textShadow: "0 0 12px rgba(167,139,250,0.4)" }}>&gt;</span>
        </div>
        <div style={{ display: "flex", gap: 4 }} className="desk-nav">
          {NAV.map(n => (
            <span key={n} onClick={() => scrollTo(n)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              style={{ padding: "6px 14px", fontSize: 12, fontWeight: 500, letterSpacing: "1px", textTransform: "capitalize", color: activeNav === n ? C.accent : C.muted, background: activeNav === n ? "rgba(99,179,237,0.08)" : "transparent", borderRadius: 6, cursor: "default", transition: "all 0.2s", border: activeNav === n ? `1px solid rgba(99,179,237,0.2)` : "1px solid transparent" }}>{n}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => scrollTo("contact")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
            style={{ background: C.grad, border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 12, fontWeight: 700, color: "#000", cursor: "default", fontFamily: "'Syne'" }}>Hire Me</button>
          <button onClick={() => setMobileMenu(v => !v)} style={{ background: "none", border: "none", cursor: "default", padding: 6, display: "none" }} className="mob-btn">
            <div style={{ width: 22, height: 1.5, background: mobileMenu ? C.accent : C.text, marginBottom: 5, transition: "all 0.3s", transform: mobileMenu ? "rotate(45deg) translate(3px, 3px)" : "none" }} />
            <div style={{ width: 22, height: 1.5, background: mobileMenu ? C.accent : C.text, marginBottom: 5, transition: "all 0.3s", opacity: mobileMenu ? 0 : 1 }} />
            <div style={{ width: 22, height: 1.5, background: mobileMenu ? C.accent : C.text, transition: "all 0.3s", transform: mobileMenu ? "rotate(-45deg) translate(3px, -3px)" : "none" }} />
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div style={{ position: "fixed", inset: 0, zIndex: 400, background: "rgba(5,8,16,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
          {NAV.map(n => (<span key={n} onClick={() => scrollTo(n)} style={{ fontFamily: "'Syne'", fontSize: 36, fontWeight: 700, color: activeNav === n ? C.accent : C.text, cursor: "default", textTransform: "capitalize", letterSpacing: "2px" }}>{n}</span>))}
        </div>
      )}

      <div style={{ paddingTop: 68 }}>
        <HeroSection scrollTo={scrollTo} setHovering={setHovering} />
        <AboutSection setHovering={setHovering} />
        <ServicesSection setHovering={setHovering} />
        <ProjectsSection setHovering={setHovering} />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection setHovering={setHovering} />
      </div>

      <FooterSection scrollTo={scrollTo} setHovering={setHovering} />
      <BackToTopButton setHovering={setHovering} />

      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:rgba(56,189,248,0.35);color:#fff}
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-track{background:#0b1220}
        ::-webkit-scrollbar-thumb{background:#38bdf8;border-radius:3px}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes spinR{to{transform:rotate(-360deg)}}
        @keyframes loadBar{0%{width:0}100%{width:100%}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(5deg)}}
        @keyframes floatR{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-16px) rotate(-5deg)}}
        @keyframes pulse{0%,100%{opacity:0.35;transform:scale(1)}50%{opacity:0.75;transform:scale(1.08)}}
        @keyframes gradMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes scaleIn{from{transform:scale(0.85);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .desk-nav{display:flex!important}
        .mob-btn{display:none!important}
        
        /* Responsive Overrides & Centering */
        @media(max-width:1024px){
          .hero-grid{grid-template-columns:1fr!important;text-align:center!important;gap:40px!important}
          .hero-btns{justify-content:center!important}
          .hero-content{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important}
          .hero-badge{margin:0 auto 20px auto!important;display:inline-flex!important}
          .hero-typewriter{justify-content:center!important;width:100%!important}
          .hero-stats{justify-content:center!important;text-align:center!important}
          .about-grid{grid-template-columns:1fr!important;gap:40px!important}
          .about-content{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important}
          .about-label{justify-content:center!important;display:flex!important;width:100%!important}
          .about-sec-label{justify-content:center!important;margin:0 auto!important}
          .about-heading{text-align:center!important;width:100%!important}
          .about-desc{text-align:center!important;margin-left:auto!important;margin-right:auto!important}
          .about-info-grid{max-width:540px!important;margin:0 auto 28px auto!important;width:100%!important}
          .about-btn-wrap{display:flex!important;justify-content:center!important;width:100%!important}
          .about-features-grid{max-width:540px!important;margin:0 auto!important;width:100%!important}
        }
        @media(max-width:900px){
          .desk-nav{display:none!important}
          .mob-btn{display:block!important}
          .footer-inner{flex-direction:column!important;text-align:center!important;align-items:center!important;justify-content:center!important;gap:20px!important}
          .footer-brand{text-align:center!important}
          .footer-socials{justify-content:center!important;margin:0 auto!important}
        }
        @media(max-width:768px){
          .hero-grid{display:flex!important;flex-direction:column!important;text-align:center!important;gap:28px!important}
          .hero-avatar-wrap{order:1!important;margin:0 auto 12px auto!important}
          .hero-content{order:2!important;display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important}
          .hero-btns{justify-content:center!important}
          .proj-grid{grid-template-columns:repeat(2,1fr)!important}
          .skills-grid{grid-template-columns:1fr!important}
          .svc-grid{grid-template-columns:repeat(2,1fr)!important}
          .contact-grid{grid-template-columns:1fr!important}
          .testi-grid{grid-template-columns:1fr!important}
          section{padding:60px 5%!important}
          .about-grid{grid-template-columns:1fr!important}
          .about-content{align-items:center!important;text-align:center!important}
          .about-label{justify-content:center!important;display:flex!important;width:100%!important}
          .about-sec-label{justify-content:center!important;margin:0 auto!important}
          .about-heading{text-align:center!important;width:100%!important}
          .about-desc{text-align:center!important;margin-left:auto!important;margin-right:auto!important}
          .about-btn-wrap{justify-content:center!important;display:flex!important;width:100%!important}
        }
        @media(max-width:560px){
          .proj-grid{grid-template-columns:1fr!important}
          .svc-grid{grid-template-columns:1fr!important}
          .hero-btns{flex-direction:column;align-items:stretch!important;width:100%!important;max-width:320px!important;margin:0 auto 36px auto!important}
          .hero-btns button,.hero-btns a{text-align:center}
          .about-info-grid{grid-template-columns:1fr!important}
          .about-features-grid{grid-template-columns:1fr!important}
          .contact-inputs{grid-template-columns:1fr!important}
        }
        html{scroll-behavior:smooth}
        body{overflow-x:hidden}
      `}</style>
    </div>
  );
}

function BGCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes in 3D
    const particleCount = window.innerWidth < 768 ? 75 : 120;
    const colors = ["#38bdf8", "#818cf8", "#c084fc", "#34d399", "#fbbf24", "#f472b6"];

    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.8,
      z: Math.random() * 900 + 70,
      size: Math.random() * 2.2 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      baseSpeed: Math.random() * 0.35 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Floating 3D wireframe polyhedra (Octahedrons & Cube)
    const shapes = [
      {
        type: "octahedron",
        x: width * 0.28,
        y: -height * 0.15,
        z: 320,
        radius: 46,
        color: "#38bdf8",
        rotX: 0.3,
        rotY: 0.5,
        rotZ: 0,
        speedX: 0.005,
        speedY: 0.008,
      },
      {
        type: "cube",
        x: -width * 0.28,
        y: height * 0.12,
        z: 380,
        radius: 38,
        color: "#c084fc",
        rotX: 0.8,
        rotY: 0.2,
        rotZ: 0.4,
        speedX: 0.006,
        speedY: 0.007,
      },
      {
        type: "octahedron",
        x: width * 0.22,
        y: height * 0.35,
        z: 280,
        radius: 34,
        color: "#34d399",
        rotX: 0.2,
        rotY: 0.9,
        rotZ: 0.1,
        speedX: 0.007,
        speedY: 0.005,
      }
    ];

    // Scroll tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollY;
      scrollVelocity += delta * 0.25;
      lastScrollY = currentScroll;
    };

    // Mouse tracking for 3D tilt
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const onMouseMove = (e) => {
      const mouseX = (e.clientX / width - 0.5) * 2;
      const mouseY = (e.clientY / height - 0.5) * 2;
      targetTiltX = mouseY * 0.15;
      targetTiltY = mouseX * 0.18;
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);

    const fov = 420;
    const cx = () => width / 2;
    const cy = () => height / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll velocity decay
      scrollVelocity *= 0.92;
      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      const centerX = cx();
      const centerY = cy();

      // Render 3D Particles
      const cosY = Math.cos(tiltY);
      const sinY = Math.sin(tiltY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const projected = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += 0.03;

        // When scrolling down, scrollVelocity > 0 -> particles move downward
        p.y += scrollVelocity * (0.85 + 240 / p.z) + p.baseSpeed;

        // Wrap around bounds seamlessly
        const boundY = height * 0.95;
        if (p.y > boundY) p.y = -boundY;
        if (p.y < -boundY) p.y = boundY;

        // 3D rotation projection
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;
        const ry = p.y * cosX - rz * sinX;
        const finalZ = p.y * sinX + rz * cosX;

        if (finalZ + fov > 20) {
          const scale = fov / (fov + finalZ);
          const screenX = centerX + rx * scale;
          const screenY = centerY + ry * scale;
          const alpha = Math.min(1, Math.max(0.12, (1 - finalZ / 1100) * (0.6 + Math.sin(p.pulse) * 0.25)));

          projected.push({ x: screenX, y: screenY, z: finalZ, color: p.color, alpha, size: p.size * scale });

          // Draw particle
          ctx.beginPath();
          ctx.arc(screenX, screenY, Math.max(0.8, p.size * scale), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.fill();

          // Subtle glow on larger particles
          if (p.size * scale > 2.2) {
            ctx.beginPath();
            ctx.arc(screenX, screenY, p.size * scale * 2.2, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha * 0.2;
            ctx.fill();
          }
        }
      }

      // Draw 3D connection lines between nearby points
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75 && Math.abs(p1.z - p2.z) < 180) {
            const lineAlpha = (1 - dist / 75) * Math.min(p1.alpha, p2.alpha) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.stroke();
          }
        }
      }

      // Draw Floating 3D Geometric Polyhedra
      shapes.forEach((s) => {
        s.rotX += s.speedX + scrollVelocity * 0.003;
        s.rotY += s.speedY + scrollVelocity * 0.004;

        let rawVerts = [];
        let edges = [];

        if (s.type === "octahedron") {
          rawVerts = [
            [0, -s.radius, 0],
            [s.radius, 0, 0],
            [0, 0, s.radius],
            [-s.radius, 0, 0],
            [0, 0, -s.radius],
            [0, s.radius, 0],
          ];
          edges = [
            [0, 1], [0, 2], [0, 3], [0, 4],
            [5, 1], [5, 2], [5, 3], [5, 4],
            [1, 2], [2, 3], [3, 4], [4, 1]
          ];
        } else {
          const r = s.radius * 0.7;
          rawVerts = [
            [-r, -r, -r], [r, -r, -r], [r, r, -r], [-r, r, -r],
            [-r, -r, r], [r, -r, r], [r, r, r], [-r, r, r]
          ];
          edges = [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7]
          ];
        }

        // Rotate vertices in 3D
        const cX = Math.cos(s.rotX), sX = Math.sin(s.rotX);
        const cY = Math.cos(s.rotY), sY = Math.sin(s.rotY);
        const cZ = Math.cos(s.rotZ), sZ = Math.sin(s.rotZ);

        const transformed = rawVerts.map(([vx, vy, vz]) => {
          let x1 = vx * cY + vz * sY;
          let y1 = vy;
          let z1 = -vx * sY + vz * cY;

          let x2 = x1;
          let y2 = y1 * cX - z1 * sX;
          let z2 = y1 * sX + z1 * cX;

          let x3 = x2 * cZ - y2 * sZ;
          let y3 = x2 * sZ + y2 * cZ;
          let z3 = z2;

          const worldX = s.x + x3;
          const worldY = s.y + y3 + scrollVelocity * 4;
          const worldZ = s.z + z3;

          const scale = fov / (fov + worldZ);
          return {
            x: centerX + worldX * scale,
            y: centerY + worldY * scale,
            scale,
          };
        });

        // Draw edges
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = s.color;
        edges.forEach(([i1, i2]) => {
          const v1 = transformed[i1];
          const v2 = transformed[i2];
          ctx.beginPath();
          ctx.moveTo(v1.x, v1.y);
          ctx.lineTo(v2.x, v2.y);
          ctx.globalAlpha = 0.28;
          ctx.stroke();
        });

        // Draw glowing vertex nodes
        transformed.forEach((v) => {
          ctx.beginPath();
          ctx.arc(v.x, v.y, 2.4 * v.scale, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = 0.6;
          ctx.fill();
        });
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {/* Multi-tone soft dark ambient radial glow auras */}
      <div style={{ position: "absolute", top: "-10%", left: "5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.13) 0%, rgba(56,189,248,0.03) 45%, transparent 70%)", filter: "blur(40px)", animation: "pulse 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", top: "35%", right: "-5%", width: 650, height: 650, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(129,140,248,0.03) 45%, transparent 70%)", filter: "blur(45px)", animation: "pulse 12s ease-in-out infinite 3s" }} />
      <div style={{ position: "absolute", top: "65%", left: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 65%)", filter: "blur(40px)", animation: "pulse 11s ease-in-out infinite 1.5s" }} />
      <div style={{ position: "absolute", bottom: "-5%", right: "15%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 65%)", filter: "blur(40px)", animation: "pulse 9s ease-in-out infinite 4s" }} />

      {/* Interactive 3D Canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}

function HeroSection({ scrollTo, setHovering }) {
  const [typed, setTyped] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Full-Stack Developer", "WordPress Expert", "Laravel Developer", "React Enthusiast", "UI/UX Implementer"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[roleIdx];
    const t = setTimeout(() => {
      if (!deleting && charIdx < cur.length) { setTyped(cur.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
      else if (!deleting && charIdx === cur.length) { setTimeout(() => setDeleting(true), 1800); }
      else if (deleting && charIdx > 0) { setTyped(cur.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
      else if (deleting && charIdx === 0) { setDeleting(false); setRoleIdx(r => (r + 1) % roles.length); }
    }, deleting ? 60 : 100);
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx, roles]);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }} className="hero-grid">
        <div style={{ animation: "fadeUp 0.9s ease 3.5s both" }} className="hero-content">
          <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", marginBottom: 24 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: C.accent3, animation: "pulse 2s ease-in-out infinite" }} /><div style={{ fontFamily: "'Fira Code'", fontSize: "clamp(15px,2vw,18px)", color: C.muted}}>Hi There! 👋🏼</div></div>
          <h1 className="hero-title" style={{ fontFamily: 'Fira Code', fontSize: "clamp(32px,5.2vw,50px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 12, color: C.text }}>I Build <span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "gradMove 4s ease infinite" }}>Fast, Secure</span><br />& Professional<br /><span style={{ color: C.text }}>Websites</span></h1>
          <div style={{ fontFamily: "'DM Sans'", fontSize: "clamp(13px,1.5vw,16px)", color: C.muted, marginBottom: 6 }}>That Help Businesses Grow</div>
          <div className="hero-typewriter" style={{ fontFamily: "'Fira Code'", fontSize: "clamp(13px,1.5vw,17px)", color: C.accent2, marginBottom: 24, height: 28, display: "flex", alignItems: "center", gap: 2 }}><span>&lt;</span><span>{typed}</span><span style={{ animation: "blink 1s step-end infinite", color: C.accent }}>/&gt;</span></div>
          <p className="hero-desc" style={{ fontSize: "clamp(13px,1.3vw,15px)", color: C.muted, lineHeight: 1.85, maxWidth: 520, marginBottom: 36 }}>I'm <strong style={{ color: C.text }}>Md. Fahim Hossen</strong>, a Web Developer with <strong style={{ color: C.accent }}>3+ years of experience</strong> in building high-performance websites. I specialize in <strong style={{ color: C.accent2 }}>WordPress, React, Laravel</strong> and modern front-end technologies.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }} className="hero-btns">
            <button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={() => scrollTo("projects")} style={{ background: C.grad, border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, color: "#000", cursor: "default", fontFamily: "'Syne'" }}>View My Work →</button>
            <button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={() => scrollTo("contact")} style={{ background: "transparent", border: `1px solid rgba(56,189,248,0.35)`, borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 600, color: C.text, cursor: "default", fontFamily: "'Syne'" }}>Hire Me</button>
          </div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }} className="hero-stats">{[["3+","Years Experience"],["50+","Projects Done"],["30+","Happy Clients"],["100%","Client Satisfaction"]].map(([v,l]) => (<div key={l}><div style={{ fontFamily: "'Syne'", fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div><div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{l}</div></div>))}</div>
        </div>
        <div className="hero-avatar-wrap" style={{ display: "flex", justifyContent: "center", animation: "scaleIn 0.9s ease 3.8s both", position: "relative", maxWidth: 360, margin: "0 auto", width: "100%" }}>
          <div style={{ position: "relative" }}><div style={{ width: "min(280px, 72vw)", height: "min(280px, 72vw)", borderRadius: "50%", background: C.grad, padding: 3 }}><div style={{ width: "100%", height: "100%", borderRadius: "50%", background: C.bg2, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><img src={fahimImg} alt="Fahim" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /></div></div><div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: `1px dashed rgba(56,189,248,0.25)`, animation: "spin 20s linear infinite", pointerEvents: "none" }} /><div style={{ position: "absolute", inset: -28, borderRadius: "50%", border: `1px dashed rgba(168,85,247,0.18)`, animation: "spinR 30s linear infinite", pointerEvents: "none" }} />
          {[{ label:"React", color:"#61DAFB", pos:{ top:-8, right:-12 } },{ label:"Laravel", color:"#FF2D20", pos:{ bottom:20, right:-15 } },{ label:"WordPress", color:"#38bdf8", pos:{ bottom:-8, left:0 } },{ label:"PHP", color:"#a78bfa", pos:{ top:50, left:-18 } }].map(b => (<div key={b.label} style={{ position: "absolute", ...b.pos, background: C.card, border: `1px solid ${b.color}40`, borderRadius: 8, padding: "5px 10px", fontSize: 11, fontFamily: "'Fira Code'", fontWeight: 600, color: b.color, whiteSpace: "nowrap", animation: "float 4s ease-in-out infinite", zIndex: 2 }}>{b.label}</div>))}
          <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", background: "rgba(52,211,153,0.16)", border: `1px solid rgba(52,211,153,0.45)`, borderRadius: 100, padding: "5px 14px", fontSize: 10, fontFamily: "'Fira Code'", color: C.accent3, display: "flex", alignItems: "center", gap: 6, zIndex: 2 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent3, animation: "pulse 1.5s ease-in-out infinite" }} />Open to work</div></div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ setHovering }) {
  const [ref, inV] = useInView();
  return (
    <section id="about" ref={ref} style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="about-grid">
        <div style={{ opacity: inV ? 1 : 0, transform: inV ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease" }} className="about-content">
          <div className="about-label" style={{ display: "flex", width: "100%" }}><SecLabel className="about-sec-label">About Me</SecLabel></div>
          <h2 className="about-heading" style={{ fontFamily: 'Fira Code', fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: C.text }}>Passionate Developer<br /><span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>from Bangladesh</span></h2>
          <p className="about-desc" style={{ fontSize: 15, color: C.muted, lineHeight: 1.9, marginBottom: 16 }}>I'm <strong style={{ color: C.text }}>Md. Fahim Hossen</strong>, a passionate web developer with 3+ years of experience building digital solutions that matter. Based in Bangladesh.</p>
          <p className="about-desc" style={{ fontSize: 15, color: C.muted, lineHeight: 1.9, marginBottom: 28 }}>I specialize in <strong style={{ color: C.accent }}>WordPress</strong>, <strong style={{ color: C.accent2 }}>React</strong>, and modern front-end technologies. I'm currently deepening my backend expertise with <strong style={{ color: C.accent3 }}>PHP & Laravel</strong>.</p>
          <div className="about-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>{[["📍","Location","Bangladesh"],["💼","Experience","3+ Years"],["🎓","Education","BSS in Economics"],["🌐","Languages","Bangla, English"]].map(([ic,l,v]) => (<div key={l} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}><span style={{ fontSize: 18 }}>{ic}</span><div><div style={{ fontSize: 10, color: C.muted, letterSpacing: "1px" }}>{l}</div><div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{v}</div></div></div>))}</div>
          <div className="about-btn-wrap" style={{ display: "flex", gap: 12 }}>
            <a 
              href="/cv/Fahim - Resume.pdf" 
              download="Md_Fahim_Hossen_CV.pdf"
              onMouseEnter={() => setHovering(true)} 
              onMouseLeave={() => setHovering(false)}
              style={{ 
                background: C.grad, 
                border: "none", 
                borderRadius: 8, 
                padding: "11px 24px", 
                fontSize: 13, 
                fontWeight: 700, 
                color: "#000", 
                cursor: "pointer", 
                fontFamily: "'Syne'", 
                textDecoration: "none", 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 8 
              }}
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="about-features-grid" style={{ opacity: inV ? 1 : 0, transform: inV ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.2s", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>{[["⚡","Performance","Sub-2s load times"],["🔒","Security","Safe & secure sites"],["📱","Responsive","Every screen size"],["🔍","SEO","Technical SEO built-in"],["♿","Accessible","WCAG compliant"],["🌍","Scalable","Grows with you"]].map(([ic,t,d]) => (<div key={t} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 18px", cursor: "default", transition: "all 0.25s" }} onMouseOver={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ""; }}><div style={{ fontSize: 22, marginBottom: 8 }}>{ic}</div><div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>{t}</div><div style={{ fontSize: 11, color: C.muted, lineHeight: 1.6 }}>{d}</div></div>))}</div>
      </div>
    </section>
  );
}

function ServicesSection({ setHovering }) {
  const [ref, inV] = useInView();
  return (
    <section id="services" ref={ref} style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", opacity: inV ? 1 : 0, transition: "opacity 0.7s" }}><SecLabel center>Services</SecLabel><h2 style={{ fontFamily: 'Fira Code', fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, marginBottom: 12, color: C.text }}>What I <span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Offer</span></h2><p style={{ fontSize: 15, color: C.muted, maxWidth: 500, margin: "0 auto 52px", lineHeight: 1.7 }}>End-to-end web solutions tailored to your business goals.</p></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="svc-grid">{SERVICES_LIST.map((s, i) => (<div key={i} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "32px 28px", cursor: "default", opacity: inV ? 1 : 0, transform: inV ? "translateY(0)" : "translateY(24px)", transition: `all 0.7s ease ${i * 80}ms`, position: "relative", overflow: "hidden" }} onMouseOver={e => { e.currentTarget.style.borderColor = s.color + "60"; e.currentTarget.style.transform = "translateY(-5px)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ""; }}><div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`, opacity: 0.6 }} /><div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>{s.icon}</div><h3 style={{ fontFamily: "'Syne'", fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 10 }}>{s.title}</h3><p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75 }}>{s.desc}</p></div>))}</div>
      </div>
    </section>
  );
}

// ── PROJECTS WITH SEE MORE BUTTON ─────────────────────────────
function ProjectsSection({ setHovering }) {
  const [ref, inV] = useInView();
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const cats = ["All", "WordPress", "Laravel", "React"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase())) || p.cat.toLowerCase().includes(filter.toLowerCase()));
  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 20 }}>
          <div style={{ opacity: inV ? 1 : 0, transition: "opacity 0.7s" }}><SecLabel>Portfolio</SecLabel><h2 style={{ fontFamily: 'Fira Code', fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: C.text }}>Featured <span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span></h2></div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{cats.map(c => (<button key={c} onClick={() => { setFilter(c); setVisibleCount(6); }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{ background: filter === c ? C.accent : "transparent", color: filter === c ? "#000" : C.muted, border: `1px solid ${filter === c ? C.accent : C.border}`, borderRadius: 8, padding: "6px 16px", fontSize: 12, fontWeight: 600, cursor: "default", fontFamily: "'Syne'", transition: "all 0.2s" }}>{c}</button>))}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="proj-grid">
          {visibleProjects.map((p, i) => (
            <div key={p.title} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", cursor: "default", opacity: inV ? 1 : 0, transform: inV ? "translateY(0)" : "translateY(24px)", transition: `all 0.7s ease ${i * 80}ms` }}
              onMouseOver={e => { e.currentTarget.style.borderColor = p.color + "50"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ""; }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={p.img} alt="" style={{ width: "100%", height: 200, objectFit: "cover", display: "block", transition: "transform 0.5s ease" }} onMouseEnter={e => e.target.style.transform = "scale(1.07)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${C.bg} 0%, transparent 60%)` }} />
                <div style={{ position: "absolute", top: 12, left: 12, background: `${p.color}20`, border: `1px solid ${p.color}50`, borderRadius: 6, padding: "3px 10px", fontSize: 10, fontFamily: "'Fira Code'", color: p.color, fontWeight: 600 }}>{p.cat}</div>
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(8,13,26,0.8)", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontFamily: "'Fira Code'", color: C.muted }}>{p.year}</div>
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ fontFamily: "'Syne'", fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>{p.tech.map(t => <span key={t} style={{ fontSize: 10, fontFamily: "'Fira Code'", color: p.color, border: `1px solid ${p.color}30`, borderRadius: 4, padding: "2px 8px" }}>{t}</span>)}</div>
                <div style={{ display: "flex", gap: 10 }}><a href={p.live} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center", background: p.color + "18", border: `1px solid ${p.color}40`, borderRadius: 7, padding: "8px 0", fontSize: 11, fontWeight: 700, color: p.color, textDecoration: "none", fontFamily: "'Syne'" }}>Live Demo ↗</a><a href={p.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 7, padding: "8px 0", fontSize: 11, fontWeight: 600, color: C.muted, textDecoration: "none", fontFamily: "'Syne'" }}>GitHub ⑂</a></div>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button onClick={loadMore} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              style={{ background: "transparent", border: `1px solid ${C.accent}`, borderRadius: 10, padding: "12px 32px", fontSize: 14, fontWeight: 600, color: C.accent, cursor: "default", fontFamily: "'Syne'", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = `${C.accent}15`; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
              See More Projects ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function SkillsSection() {
  const [ref, inV] = useInView();
  return (
    <section id="skills" ref={ref} style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", opacity: inV ? 1 : 0, transition: "opacity 0.7s", marginBottom: 52 }}><SecLabel center>Tech Stack</SecLabel><h2 style={{ fontFamily: 'Fira Code', fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: C.text }}>Skills & <span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Expertise</span></h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginBottom: 52 }} className="skills-grid">{SKILLS_GROUPS.map((g, gi) => (<div key={g.label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "28px 24px", opacity: inV ? 1 : 0, transform: inV ? "translateY(0)" : "translateY(20px)", transition: `all 0.7s ease ${gi * 150}ms` }}><div style={{ fontSize: 13, fontWeight: 700, color: g.color, marginBottom: 20, letterSpacing: "1px", textTransform: "uppercase", fontFamily: "'Syne'", display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 20, height: 2, background: g.color, display: "inline-block" }} /> {g.label}</div>{g.items.map((sk, si) => <SkillBar key={sk.name} {...sk} color={g.color} active={inV} delay={gi * 150 + si * 80} />)}</div>))}</div>
        <div style={{ opacity: inV ? 1 : 0, transition: "opacity 0.7s 0.4s" }}><div style={{ textAlign: "center", fontSize: 12, color: C.muted, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 20, fontFamily: "'Fira Code'" }}>Technologies I work with</div><div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>{TECHS.map(t => (<div key={t.name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 18px", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.borderColor = t.color + "60"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ""; }}><span style={{ fontFamily: "'Fira Code'", fontSize: 14, fontWeight: 700, color: t.color }}>{t.symbol}</span><span style={{ fontSize: 12, color: C.muted, fontFamily: "'DM Sans'" }}>{t.name}</span></div>))}</div></div>
      </div>
    </section>
  );
}

function SkillBar({ name, pct, color, active, delay }) {
  return (<div style={{ marginBottom: 14 }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ fontSize: 12, color: C.text }}>{name}</span><span style={{ fontSize: 11, fontFamily: "'Fira Code'", color }}>{pct}%</span></div><div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: active ? `${pct}%` : "0%", background: `linear-gradient(90deg, ${color}, ${color}88)`, borderRadius: 2, transition: `width 1.2s ease ${delay}ms` }} /></div></div>);
}

function ExperienceSection() {
  const [ref, inV] = useInView();
  return (
    <section id="experience" ref={ref} style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", opacity: inV ? 1 : 0, transition: "opacity 0.7s", marginBottom: 52 }}><SecLabel center>Career</SecLabel><h2 style={{ fontFamily: 'Fira Code', fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: C.text }}>Work <span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span></h2></div>
        <div style={{ position: "relative", paddingLeft: 32 }}><div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, ${C.accent}, ${C.accent2}, ${C.accent3})`, opacity: 0.3 }} />{EXPERIENCES.map((e, i) => (<div key={i} style={{ position: "relative", marginBottom: 36, opacity: inV ? 1 : 0, transform: inV ? "translateX(0)" : "translateX(20px)", transition: `all 0.7s ease ${i * 150}ms` }}><div style={{ position: "absolute", left: -25, top: 20, width: 12, height: 12, borderRadius: "50%", background: e.color, boxShadow: `0 0 12px ${e.color}60` }} /><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 28px", borderLeft: `2px solid ${e.color}50` }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}><div><div style={{ fontFamily: "'Syne'", fontSize: 17, fontWeight: 700, color: C.text }}>{e.role}</div><div style={{ fontSize: 13, color: e.color, fontWeight: 600, marginTop: 2 }}>{e.company}</div></div><div style={{ background: `${e.color}15`, border: `1px solid ${e.color}30`, borderRadius: 6, padding: "4px 12px", fontSize: 11, fontFamily: "'Fira Code'", color: e.color }}>{e.period}</div></div><p style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>{e.desc}</p></div></div>))}</div>
      </div>
    </section>
  );
}


function ContactSection({ setHovering }) {
  const [ref, inV] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message");
      return;
    }
    setLoading(true);
    setError("");
    const mailtoLink = `mailto:mdfahimhossen.dev@gmail.com?subject=${encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\n---\nSent from your portfolio website`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  const inp = { width: "100%", background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`, borderRadius: 10, padding: "13px 16px", color: C.text, fontFamily: "'DM Sans'", fontSize: 14, outline: "none", transition: "border-color 0.2s" };

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", opacity: inV ? 1 : 0, transition: "opacity 0.7s", marginBottom: 52 }}><SecLabel center>Contact</SecLabel><h2 style={{ fontFamily: 'Fira Code', fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: C.text }}>Let's <span style={{ background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work Together</span></h2><p style={{ fontSize: 15, color: C.muted, maxWidth: 460, margin: "12px auto 0", lineHeight: 1.7 }}>Have a project in mind? Let's build something great. I respond within 24 hours.</p></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48 }} className="contact-grid">
          <div style={{ opacity: inV ? 1 : 0, transform: inV ? "translateX(0)" : "translateX(-20px)", transition: "all 0.8s ease 0.2s" }}>
            {[["📧","Email","mdfahimhossen.dev@gmail.com","mailto:mdfahimhossen.dev@gmail.com"],["📱","WhatsApp","+880 1622-383939","https://wa.me/8801622383939"],["💼","LinkedIn","linkedin.com/in/mdfahimhossensujon","https://linkedin.com/in/mdfahimhossensujon"],["🐙","GitHub","github.com/mdfahimhossens1","https://github.com/mdfahimhossens1"]].map(([ic,l,v,href]) => (<a key={l} href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{ display: "flex", gap: 16, padding: "18px 0", borderBottom: `1px solid ${C.border}`, textDecoration: "none", cursor: "default", transition: "all 0.2s" }} onMouseOver={e => e.currentTarget.style.paddingLeft = "8px"} onMouseOut={e => e.currentTarget.style.paddingLeft = "0"}><div style={{ width: 44, height: 44, borderRadius: 10, background: C.card, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{ic}</div><div><div style={{ fontSize: 11, color: C.muted, letterSpacing: "1px", marginBottom: 3 }}>{l}</div><div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{v}</div></div></a>))}
            <div style={{ marginTop: 28, background: "rgba(104,211,145,0.06)", border: `1px solid rgba(104,211,145,0.2)`, borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "center", gap: 12 }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: C.accent3, flexShrink: 0, animation: "pulse 2s ease-in-out infinite" }} /><div><div style={{ fontSize: 13, fontWeight: 700, color: C.accent3 }}>Currently Available</div><div style={{ fontSize: 11, color: C.muted }}>Open for freelance & full-time opportunities</div></div></div>
          </div>
          <div style={{ opacity: inV ? 1 : 0, transform: inV ? "translateX(0)" : "translateX(20px)", transition: "all 0.8s ease 0.3s" }}>
            {sent ? (<div style={{ textAlign: "center", padding: "60px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 16 }}><div style={{ fontSize: 56, marginBottom: 16 }}>📧</div><h3 style={{ fontFamily: "'Syne'", fontSize: 22, fontWeight: 800, background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>Email Client Opened!</h3><p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>Your email client should open with a pre-filled message. Just hit send and I'll get back to you within 24 hours!</p><button onClick={() => setSent(false)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{ marginTop: 20, background: C.grad, border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 700, color: "#000", cursor: "default", fontFamily: "'Syne'" }}>Send Another Message</button></div>) : (<div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "36px 32px" }}>{error && (<div style={{ marginBottom: 16, padding: "10px", background: "rgba(255,70,70,0.1)", border: "1px solid rgba(255,70,70,0.3)", borderRadius: 8, fontSize: 12, color: "#ff6b6b", textAlign: "center" }}>⚠️ {error}</div>)}<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}><input type="text" placeholder="👤 Your Name *" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border} /><input type="email" placeholder="📧 Email Address *" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border} /></div><input placeholder="💼 Subject (Optional)" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} style={{ ...inp, marginBottom: 14 }} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border} /><textarea placeholder="💬 Tell me about your project... *" rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required style={{ ...inp, resize: "none", marginBottom: 18 }} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border} /><button onClick={sendEmail} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} disabled={loading} style={{ width: "100%", background: loading ? C.muted : C.grad, border: "none", borderRadius: 10, padding: "14px 0", fontSize: 14, fontWeight: 700, color: "#000", cursor: "default", fontFamily: "'Syne'", transition: "all 0.2s", opacity: loading ? 0.7 : 1 }}>{loading ? "Opening Email..." : "Send Message →"}</button><p style={{ fontSize: 11, color: C.muted, textAlign: "center", marginTop: 16 }}>This will open your email client. Your message will be sent to <strong>mdfahimhossen.dev@gmail.com</strong></p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER WITH SOCIAL MEDIA ICONS ────────────────────────────
function FooterSection({ scrollTo, setHovering }) {
  return (
    <footer style={{ background: C.bg2, borderTop: `1px solid ${C.border}`, padding: "48px 5% 28px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
          <div className="footer-brand" style={{ display: "inline-flex", alignItems: "center", gap: 3, cursor: "pointer", userSelect: "none" }} onClick={() => scrollTo("home")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 24, fontWeight: 700, color: C.accent, textShadow: "0 0 12px rgba(56,189,248,0.4)" }}>&lt;</span>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 22, fontWeight: 800, background: C.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", padding: "0 3px", letterSpacing: "0.5px" }}>fahim</span>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 24, fontWeight: 700, color: C.accent2, textShadow: "0 0 12px rgba(167,139,250,0.4)" }}>&gt;</span>
          </div>
          {/* Social Media Icons */}
          <div className="footer-socials" style={{ display: "flex", gap: 14 }}>
            <a href="https://www.facebook.com/mdfahim.hossensujon" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              style={{ width: 40, height: 40, borderRadius: "50%", background: C.card, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", cursor: "pointer", color: C.text, textDecoration: "none" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#1877f2"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.color = "#1877f2"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.color = C.text; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="https://linkedin.com/in/mdfahimhossensujon" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              style={{ width: 40, height: 40, borderRadius: "50%", background: C.card, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", cursor: "pointer", color: C.text, textDecoration: "none" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#0a66c2"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.color = "#0a66c2"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.color = C.text; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.68-1.68-1.68a1.68 1.68 0 0 0-1.68 1.68c0 .93.68 1.68 1.68 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://github.com/mdfahimhossens1" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              style={{ width: 40, height: 40, borderRadius: "50%", background: C.card, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", cursor: "pointer", color: C.text, textDecoration: "none" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.color = "#fff"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.color = C.text; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 22, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <p style={{ fontFamily: "'Fira Code'", fontSize: 12, color: C.muted }}>
            Designed & Built by <span style={{ color: C.accent }}>&lt; fahim &gt;</span> · © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SecLabel({ children, center, className = "" }) {
  return (
    <div
      className={`sec-label ${center ? "sec-label-center" : ""} ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 12,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span style={{ width: 24, height: 1.5, background: C.grad, display: "block" }} />
      <span style={{ fontFamily: "'Fira Code'", fontSize: 11, color: C.accent, letterSpacing: "2.5px", textTransform: "uppercase" }}>
        {children}
      </span>
      <span style={{ width: 24, height: 1.5, background: C.grad, display: "block" }} />
    </div>
  );
}