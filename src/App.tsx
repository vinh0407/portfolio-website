import { useState, useEffect, useRef } from 'react'

const NAV = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

const SKILLS = {
  'Programming': ['Kotlin', 'Java', 'Python'],
  'Android': ['Android Studio', 'Jetpack Compose', 'MVVM'],
  'Database': ['SQLite', 'Firebase Auth', 'Cloud Firestore'],
  'Tools': ['Git', 'Agile', 'Teamwork.com'],
}

const SOFT_SKILLS = [
  'Effective Communication',
  'Strong Teamwork',
  'Time Management',
  'Creative Problem Solving',
]

const PROJECTS = [
  {
    year: '2026',
    name: 'PiggyBite',
    subtitle: 'Smart Personal Finance Manager — Android',
    github: 'https://github.com/vinh0407/PiggyBite',
    tech: ['Kotlin', 'Firebase', 'MVVM', 'ML Kit', 'Room DB', 'CameraX'],
    points: [
      'Personal finance management app with real-time Firebase cloud sync.',
      'Firebase Authentication (Email/Password & Phone) for secure login.',
      'Expense, income, wallet, and shared saving fund management.',
      'Google ML Kit OCR and Vietnamese voice recognition for transaction input.',
      'Analytics dashboards with charts, transaction history, and CSV import/export.',
    ],
  },
  {
    year: '2026',
    name: 'Product Review System',
    subtitle: 'Full-Stack Web Application — PHP',
    github: 'https://github.com/vinh0407/product_review_system',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    points: [
      'Full-stack web app for product browsing, reviewing, and ordering.',
      'Authentication with session management (Login/Register).',
      'Product catalog with search, rating, and review features.',
      'Order management and order history functionality.',
      'Admin dashboard with product, order, and user management (CRUD).',
    ],
  },
  {
    year: '2025',
    name: 'IriShield Biometric SDK',
    subtitle: 'Android Frontend — IriTech',
    github: null,
    tech: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Coroutines'],
    points: [
      'Integrated IriShield biometric SDK into Android applications.',
      'Built and maintained UI with Jetpack Compose following MVVM architecture.',
      'Async biometric processing via Coroutines for optimized UX.',
      'Tested on 10+ Android devices and resolved compatibility issues.',
    ],
  },
]

// ── Typing effect ──────────────────────────────────────────────
function useTyping(text: string, speed = 55, startDelay = 400) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, speed)
      return () => clearInterval(iv)
    }, startDelay)
    return () => clearTimeout(t)
  }, [text, speed, startDelay])
  return { displayed, done }
}

// ── Glitch text ────────────────────────────────────────────────
function GlitchText({ children, className, style }: { children: string; className?: string; style?: React.CSSProperties }) {
  const [glitching, setGlitching] = useState(false)
  useEffect(() => {
    const fire = () => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 180)
    }
    const base = 3000 + Math.random() * 4000
    let timer: ReturnType<typeof setTimeout>
    const schedule = () => { timer = setTimeout(() => { fire(); schedule() }, base) }
    schedule()
    return () => clearTimeout(timer)
  }, [])
  return (
    <span
      className={className}
      style={{
        ...style,
        position: 'relative',
        display: 'inline-block',
        animation: glitching ? 'glitch 0.18s steps(2) forwards' : 'none',
      }}
      data-text={children}
    >
      {children}
    </span>
  )
}

// ── InView fade ────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function FadeIn({ children, delay = 0, from = 'bottom' }: { children: React.ReactNode; delay?: number; from?: 'bottom' | 'left' | 'right' }) {
  const { ref, visible } = useInView()
  const translate = from === 'left' ? 'translateX(-32px)' : from === 'right' ? 'translateX(32px)' : 'translateY(28px)'
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : translate, transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  )
}

// ── Animated counter ───────────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const { ref, visible } = useInView()
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(to / 40)
    const iv = setInterval(() => { start = Math.min(start + step, to); setVal(start); if (start >= to) clearInterval(iv) }, 30)
    return () => clearInterval(iv)
  }, [visible, to])
  return <span ref={ref}>{val}{suffix}</span>
}

// ── Skill bar ──────────────────────────────────────────────────
function SkillBar({ pct, delay = 0 }: { pct: number; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} className="h-px w-full" style={{ background: '#0a1f30' }}>
      <div style={{ height: '100%', width: visible ? `${pct}%` : '0%', background: 'linear-gradient(90deg, #0066aa, #00d4ff)', transition: `width 1s ease ${delay}s`, boxShadow: visible ? '0 0 8px rgba(0,212,255,0.6)' : 'none' }} />
    </div>
  )
}

// ── Section label ──────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mono text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#00d4ff' }}>{children}</p>
}
function Rule() {
  return <div className="border-t mt-2 mb-10" style={{ borderColor: '#0a1f30' }} />
}

// ── Scanline overlay ───────────────────────────────────────────
function Scanlines() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.5) 2px, rgba(0,212,255,0.5) 3px)', backgroundSize: '100% 3px' }} />
  )
}

// ── Grid background ────────────────────────────────────────────
function GridBg() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.035 }}>
      <div style={{ width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(0,212,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </div>
  )
}

// ── Cursor tracker glow ────────────────────────────────────────
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      <div style={{ position: 'absolute', left: pos.x - 200, top: pos.y - 200, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', transition: 'left 0.1s ease, top 0.1s ease' }} />
    </div>
  )
}

// ── Particle field ─────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const count = 55
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`
        ctx.fill()
      }
      // draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,180,255,${0.08 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
}

// ── Main ───────────────────────────────────────────────────────
export default function App() {
  const [activeNav, setActiveNav] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { displayed: typedRole, done: roleDone } = useTyping('Android Developer · Intern', 60, 600)
  const { displayed: typedLoc } = useTyping('Ho Chi Minh City, Vietnam', 45, roleDone ? 200 : 99999)

  const handleCopy = () => {
    navigator.clipboard.writeText('ungdothevinh4704@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const handler = () => {
      const sections = NAV.map(n => document.getElementById(n.toLowerCase()))
      const cur = sections.find(s => { if (!s) return false; const r = s.getBoundingClientRect(); return r.top <= 120 && r.bottom > 120 })
      setActiveNav(cur?.id ?? '')
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <style>{`
        @keyframes glitch {
          0%   { clip-path: inset(20% 0 50% 0); transform: translate(-4px, 2px) skewX(-2deg); }
          25%  { clip-path: inset(60% 0 10% 0); transform: translate(4px, -2px) skewX(2deg); }
          50%  { clip-path: inset(5%  0 80% 0); transform: translate(-3px, 1px); }
          75%  { clip-path: inset(40% 0 30% 0); transform: translate(3px, -1px) skewX(-1deg); }
          100% { clip-path: inset(0); transform: none; }
        }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,212,255,0); border-color: #0a1f30; }
          50%       { box-shadow: 0 0 0 2px rgba(0,212,255,0.12); border-color: #00d4ff; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes char-glow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(0,212,255,0.25)) drop-shadow(0 20px 40px rgba(0,50,100,0.6)); }
          50%       { filter: drop-shadow(0 0 28px rgba(0,212,255,0.55)) drop-shadow(0 20px 40px rgba(0,80,160,0.7)); }
        }
        @keyframes ring-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ring-spin-rev {
          to { transform: rotate(-360deg); }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes scan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .tag-chip { animation: pulse-border 4s ease infinite; }
        .tag-chip:nth-child(2n) { animation-delay: 1s; }
        .tag-chip:nth-child(3n) { animation-delay: 2s; }
        [data-text]::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          color: #00d4ff;
          clip-path: inset(0);
        }
      `}</style>

      <Scanlines />
      <GridBg />
      <Particles />
      <CursorGlow />

      <div className="min-h-screen" style={{ background: '#020b14', color: '#ddeef5', position: 'relative', zIndex: 2 }}>

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
          style={{ height: 56, borderBottom: '1px solid #0a1f30', background: 'rgba(2,11,20,0.94)', backdropFilter: 'blur(12px)' }}>
          <span className="mono text-sm font-bold tracking-tight" style={{ color: '#00d4ff', textShadow: '0 0 12px rgba(0,212,255,0.5)' }}>
            UDV<span style={{ color: '#1e4a5a' }}>_portfolio</span>
            <span className="mono" style={{ color: '#00d4ff', animation: 'blink 1s step-end infinite', marginLeft: 2 }}>█</span>
          </span>
          <ul className="hidden md:flex gap-8">
            {NAV.map((n, i) => (
              <li key={n} style={{ animationDelay: `${i * 0.1}s` }}>
                <a href={`#${n.toLowerCase()}`} className="mono text-xs tracking-widest uppercase transition-all"
                  style={{ color: activeNav === n.toLowerCase() ? '#00d4ff' : '#2d5a6a', textDecoration: 'none', textShadow: activeNav === n.toLowerCase() ? '0 0 10px rgba(0,212,255,0.6)' : 'none' }}>
                  {activeNav === n.toLowerCase() && <span style={{ marginRight: 4 }}>›</span>}{n}
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {[0, 1, 2].map(i => <span key={i} className="block w-5 h-px transition-all" style={{ background: '#00d4ff' }} />)}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: 'rgba(2,11,20,0.97)' }} onClick={() => setMenuOpen(false)}>
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="mono text-2xl tracking-widest uppercase" style={{ color: '#ddeef5', textDecoration: 'none' }}>{n}</a>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="about" style={{ paddingTop: 140, paddingBottom: 100, minHeight: '100vh', borderBottom: '1px solid #0a1f30', position: 'relative', overflow: 'hidden' }}
          className="flex flex-col justify-end px-6 md:px-16 lg:px-24">

          {/* scanning line */}
          <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)', animation: 'scan 6s linear infinite', pointerEvents: 'none', zIndex: 1 }} />

          {/* corner brackets */}
          {[['top-24 left-6', 'border-t border-l'], ['top-24 right-6', 'border-t border-r'], ['bottom-20 left-6', 'border-b border-l'], ['bottom-20 right-6', 'border-b border-r']].map(([pos, borders]) => (
            <div key={pos} className={`absolute ${pos} ${borders} w-8 h-8 hidden md:block`} style={{ borderColor: 'rgba(0,212,255,0.25)' }} />
          ))}

          <div className="max-w-6xl w-full" style={{ position: 'relative', zIndex: 2 }}>
            <div className="flex flex-col-reverse md:flex-row items-center md:items-end gap-8 md:gap-0">

              {/* ── Text side ── */}
              <div className="flex-1 md:pr-8">
                <p className="mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#00d4ff' }}>
                  {typedRole}<span style={{ animation: 'blink 0.8s step-end infinite', opacity: roleDone ? 0 : 1 }}>_</span>
                </p>
                <p className="mono text-xs tracking-[0.2em] mb-8" style={{ color: '#1e4a5a' }}>
                  📍 {typedLoc}
                </p>

                <h1 style={{ fontSize: 'clamp(44px, 8vw, 110px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em', color: '#ddeef5' }}>
                  Ưng Đỗ<br />
                  <GlitchText style={{ color: '#00d4ff', textShadow: '0 0 40px rgba(0,212,255,0.4), 0 0 80px rgba(0,150,255,0.15)' }}>
                    Thế Vinh
                  </GlitchText>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-relaxed" style={{ color: '#5a8fa0' }}>
                  Hi, I'm Vinh, a Mobile &amp; Frontend Developer passionate about building intuitive, high-performance applications. I specialize in Flutter, Android (Kotlin), and modern web technologies, creating responsive websites and cross-platform mobile apps with clean architecture and great user experiences. I'm always eager to learn new technologies and turn ideas into real-world products.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a href="mailto:ungdothevinh4704@gmail.com" className="mono text-sm px-6 py-3 transition-all hover:scale-105"
                    style={{ background: '#00d4ff', color: '#000', textDecoration: 'none', fontWeight: 700, boxShadow: '0 0 24px rgba(0,212,255,0.4), 0 0 60px rgba(0,150,255,0.15)' }}>
                    Get In Touch →
                  </a>
                  <a href="https://github.com/vinh0407" target="_blank" rel="noreferrer" className="mono text-sm px-6 py-3 transition-all hover:border-[#00d4ff] hover:text-[#00d4ff]"
                    style={{ border: '1px solid #0d2a3a', color: '#5a8fa0', textDecoration: 'none' }}>
                    GitHub ↗
                  </a>
                </div>

                {/* stats */}
                <div className="flex flex-wrap gap-10 mt-14">
                  {[
                    { label: 'Projects Built', val: 3, suffix: '+' },
                    { label: 'Devices Tested', val: 10, suffix: '+' },
                    { label: 'Months Intern', val: 4, suffix: '' },
                  ].map(({ label, val, suffix }) => (
                    <div key={label}>
                      <p className="mono text-3xl font-black" style={{ color: '#00d4ff', textShadow: '0 0 16px rgba(0,212,255,0.5)' }}>
                        <Counter to={val} suffix={suffix} />
                      </p>
                      <p className="mono text-xs mt-1" style={{ color: '#1e4a5a' }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Tech Icons Cluster ── */}
              <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: 'clamp(280px, 32vw, 420px)', height: 'clamp(280px, 32vw, 420px)' }}>

                {/* outer orbit ring */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.1)', animation: 'ring-spin 28s linear infinite' }}>
                  <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 12px #00d4ff, 0 0 24px rgba(0,212,255,0.5)' }} />
                </div>
                {/* inner orbit ring */}
                <div style={{ position: 'absolute', inset: '14%', borderRadius: '50%', border: '1px dashed rgba(0,160,220,0.08)', animation: 'ring-spin-rev 18s linear infinite' }}>
                  <div style={{ position: 'absolute', bottom: -3, right: '18%', width: 5, height: 5, borderRadius: '50%', background: 'rgba(0,212,255,0.6)', boxShadow: '0 0 8px #00d4ff' }} />
                </div>

                {/* centre ambient glow */}
                <div style={{ position: 'absolute', inset: '20%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', filter: 'blur(12px)' }} />

                {/* ── Android icon — top centre ── */}
                <div style={{ position: 'absolute', top: '4%', left: '50%', transform: 'translateX(-50%)', animation: 'float 3.8s ease-in-out infinite' }}>
                  <div style={{ width: 96, height: 96, borderRadius: 20, background: '#020f1c', border: '1px solid rgba(0,212,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.04)' }}>
                    <svg viewBox="0 0 48 48" width="52" height="52" aria-label="Android">
                      <defs>
                        <filter id="gA"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                      </defs>
                      {/* antenna left */}
                      <line x1="16" y1="11" x2="10" y2="4" stroke="#00d4ff" strokeWidth="2.2" strokeLinecap="round" filter="url(#gA)" />
                      <circle cx="10" cy="3.5" r="1.8" fill="#00d4ff" filter="url(#gA)" />
                      {/* antenna right */}
                      <line x1="32" y1="11" x2="38" y2="4" stroke="#00d4ff" strokeWidth="2.2" strokeLinecap="round" filter="url(#gA)" />
                      <circle cx="38" cy="3.5" r="1.8" fill="#00d4ff" filter="url(#gA)" />
                      {/* head/body */}
                      <path d="M8 20 Q8 12 24 12 Q40 12 40 20 L40 34 Q40 38 36 38 L12 38 Q8 38 8 34 Z" fill="none" stroke="#00d4ff" strokeWidth="1.8" filter="url(#gA)" />
                      {/* eyes */}
                      <circle cx="18" cy="22" r="2.5" fill="#00d4ff" filter="url(#gA)" />
                      <circle cx="30" cy="22" r="2.5" fill="#00d4ff" filter="url(#gA)" />
                      {/* left arm */}
                      <path d="M8 21 Q3 21 3 27 Q3 33 8 33" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" filter="url(#gA)" />
                      {/* right arm */}
                      <path d="M40 21 Q45 21 45 27 Q45 33 40 33" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" filter="url(#gA)" />
                      {/* legs */}
                      <line x1="17" y1="38" x2="17" y2="45" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" filter="url(#gA)" />
                      <line x1="31" y1="38" x2="31" y2="45" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" filter="url(#gA)" />
                    </svg>
                  </div>
                  <p className="mono text-center text-xs mt-2" style={{ color: 'rgba(0,212,255,0.55)', letterSpacing: '0.15em' }}>ANDROID</p>
                </div>

                {/* ── Web icon — bottom left ── */}
                <div style={{ position: 'absolute', bottom: '6%', left: '5%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1s' }}>
                  <div style={{ width: 96, height: 96, borderRadius: 20, background: '#020f1c', border: '1px solid rgba(0,212,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.04)' }}>
                    <svg viewBox="0 0 48 48" width="52" height="52" aria-label="Web">
                      <defs>
                        <filter id="gW"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                      </defs>
                      {/* globe circle */}
                      <circle cx="24" cy="24" r="18" fill="none" stroke="#00d4ff" strokeWidth="1.8" filter="url(#gW)" />
                      {/* equator */}
                      <line x1="6" y1="24" x2="42" y2="24" stroke="#00d4ff" strokeWidth="1.4" strokeDasharray="2,2" />
                      {/* meridian */}
                      <line x1="24" y1="6" x2="24" y2="42" stroke="#00d4ff" strokeWidth="1.4" strokeDasharray="2,2" />
                      {/* left ellipse */}
                      <path d="M24 6 Q14 16 14 24 Q14 32 24 42" fill="none" stroke="#00d4ff" strokeWidth="1.4" />
                      {/* right ellipse */}
                      <path d="M24 6 Q34 16 34 24 Q34 32 24 42" fill="none" stroke="#00d4ff" strokeWidth="1.4" />
                      {/* centre dot */}
                      <circle cx="24" cy="24" r="2.5" fill="#00d4ff" filter="url(#gW)" />
                    </svg>
                  </div>
                  <p className="mono text-center text-xs mt-2" style={{ color: 'rgba(0,212,255,0.55)', letterSpacing: '0.15em' }}>WEB</p>
                </div>

                {/* ── iOS icon — bottom right ── */}
                <div style={{ position: 'absolute', bottom: '6%', right: '5%', animation: 'float 4.2s ease-in-out infinite', animationDelay: '2s' }}>
                  <div style={{ width: 96, height: 96, borderRadius: 20, background: '#020f1c', border: '1px solid rgba(0,212,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.04)' }}>
                    <svg viewBox="0 0 48 48" width="52" height="52" aria-label="iOS">
                      <defs>
                        <filter id="gI"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                      </defs>
                      {/* phone outline */}
                      <rect x="11" y="4" width="26" height="40" rx="5" fill="none" stroke="#00d4ff" strokeWidth="1.8" filter="url(#gI)" />
                      {/* notch/dynamic island */}
                      <rect x="18" y="7" width="12" height="4" rx="2" fill="none" stroke="#00d4ff" strokeWidth="1.4" />
                      <circle cx="28" cy="9" r="1.2" fill="#00d4ff" filter="url(#gI)" />
                      {/* screen content lines */}
                      <line x1="16" y1="18" x2="32" y2="18" stroke="#00d4ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
                      <line x1="16" y1="22" x2="28" y2="22" stroke="#00d4ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
                      <line x1="16" y1="26" x2="30" y2="26" stroke="#00d4ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                      {/* app icon grid */}
                      <rect x="16" y="30" width="6" height="6" rx="1.5" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                      <rect x="24" y="30" width="6" height="6" rx="1.5" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                      {/* home indicator */}
                      <line x1="20" y1="41" x2="28" y2="41" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" filter="url(#gI)" />
                    </svg>
                  </div>
                  <p className="mono text-center text-xs mt-2" style={{ color: 'rgba(0,212,255,0.55)', letterSpacing: '0.15em' }}>iOS</p>
                </div>

                {/* connecting lines between icons */}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.18 }} viewBox="0 0 420 420">
                  <line x1="210" y1="100" x2="100" y2="340" stroke="#00d4ff" strokeWidth="1" strokeDasharray="4,6" />
                  <line x1="210" y1="100" x2="320" y2="340" stroke="#00d4ff" strokeWidth="1" strokeDasharray="4,6" />
                  <line x1="100" y1="340" x2="320" y2="340" stroke="#00d4ff" strokeWidth="1" strokeDasharray="4,6" />
                </svg>

              </div>

            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderBottom: '1px solid #0a1f30' }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionLabel>02 / Work Experience</SectionLabel>
              <Rule />
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                <div>
                  <p className="mono text-xs" style={{ color: '#1e4a5a' }}>Period</p>
                  <p className="mono text-sm mt-1" style={{ color: '#00d4ff', textShadow: '0 0 10px rgba(0,212,255,0.4)' }}>Apr 2025 — Jul 2025</p>
                  <p className="mono text-xs mt-4" style={{ color: '#1e4a5a' }}>Location</p>
                  <p className="text-sm mt-1" style={{ color: '#5a8fa0' }}>Ho Chi Minh, Vietnam</p>
                </div>
                <div className="border-l pl-8 md:pl-12" style={{ borderColor: '#0a1f30' }}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: '#ddeef5' }}>Android Intern</h3>
                      <p className="mono text-sm mt-1" style={{ color: '#00d4ff' }}>IRITECH VIETNAM</p>
                    </div>
                    <span className="mono text-xs px-3 py-1 tag-chip" style={{ border: '1px solid #0a1f30', color: '#2d5a6a' }}>Full-time Internship</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Integrated IriShield biometric SDK into Android applications using Kotlin and Android SDK.',
                      'Developed and maintained UI screens with Jetpack Compose following MVVM architecture.',
                      'Used Coroutines for asynchronous biometric processing and optimized user interactions.',
                      'Tested biometric authentication on 10+ Android devices and resolved compatibility issues.',
                      'Collaborated with senior engineers using Git and Agile workflow to deliver production-ready features.',
                    ].map((pt, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#5a8fa0' }}>
                        <span className="mono shrink-0" style={{ color: '#00d4ff', marginTop: 2 }}>›</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderBottom: '1px solid #0a1f30' }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionLabel>03 / Skills</SectionLabel>
              <Rule />
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <FadeIn delay={0.1} from="left">
                  <h3 className="mono text-xs tracking-widest uppercase mb-6" style={{ color: '#1e4a5a' }}>Hard Skills</h3>
                  <div className="space-y-6">
                    {Object.entries(SKILLS).map(([cat, items]) => (
                      <div key={cat}>
                        <p className="mono text-xs mb-2" style={{ color: '#2d5a6a' }}>{cat}</p>
                        <div className="flex flex-wrap gap-2">
                          {items.map(s => (
                            <span key={s} className="mono text-xs px-3 py-1.5 tag-chip transition-all hover:text-[#00d4ff] cursor-default"
                              style={{ border: '1px solid #0a1f30', color: '#5a8fa0' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.2} from="right">
                  <h3 className="mono text-xs tracking-widest uppercase mb-6" style={{ color: '#1e4a5a' }}>Soft Skills</h3>
                  <ul className="space-y-4">
                    {SOFT_SKILLS.map((s, i) => (
                      <li key={s} className="flex items-center gap-4">
                        <span className="mono text-xs w-6" style={{ color: '#0d2a3a' }}>0{i + 1}</span>
                        <div className="flex-1 h-px" style={{ background: '#0a1f30' }} />
                        <span className="text-sm" style={{ color: '#a8d0e0' }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mono text-xs tracking-widest uppercase mt-12 mb-6" style={{ color: '#1e4a5a' }}>Languages</h3>
                  <div className="space-y-4">
                    {[{ lang: 'Vietnamese', level: 'Native', pct: 100 }, { lang: 'English', level: 'Intermediate', pct: 55 }].map(({ lang, level, pct }, i) => (
                      <div key={lang}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm" style={{ color: '#a8d0e0' }}>{lang}</span>
                          <span className="mono text-xs" style={{ color: '#2d5a6a' }}>{level}</span>
                        </div>
                        <SkillBar pct={pct} delay={i * 0.15 + 0.3} />
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderBottom: '1px solid #0a1f30' }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionLabel>04 / Projects</SectionLabel>
              <Rule />
            </FadeIn>
            <div className="space-y-20">
              {PROJECTS.map((p, idx) => (
                <FadeIn key={p.name} delay={idx * 0.08}>
                  <div className="group relative">
                    {/* hover glow bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-px transition-all duration-500" style={{ background: 'linear-gradient(to bottom, transparent, #00d4ff, transparent)', opacity: 0, transform: 'scaleY(0)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'scaleY(1)' }}
                    />
                    <div className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-12">
                      <div className="pt-1">
                        <p className="mono text-xs" style={{ color: '#0d2a3a' }}>{p.year}</p>
                      </div>
                      <div className="border-t pt-8 transition-all duration-300 group-hover:border-[#00d4ff]" style={{ borderColor: '#0a1f30' }}>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <h3 className="text-2xl font-bold leading-tight transition-all duration-300 group-hover:text-[#00d4ff]" style={{ color: '#ddeef5' }}>
                              {p.name}
                            </h3>
                            <p className="mono text-xs mt-1" style={{ color: '#2d5a6a' }}>{p.subtitle}</p>
                          </div>
                          {p.github ? (
                            <a href={p.github} target="_blank" rel="noreferrer" className="mono text-xs px-4 py-2 shrink-0 transition-all hover:border-[#00d4ff] hover:text-[#00d4ff] hover:shadow-[0_0_16px_rgba(0,212,255,0.3)]"
                              style={{ border: '1px solid #091e2d', color: '#2d5a6a', textDecoration: 'none' }}>
                              GitHub ↗
                            </a>
                          ) : (
                            <span className="mono text-xs px-4 py-2" style={{ border: '1px solid #091e2d', color: '#0d2a3a' }}>Private / NDA</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {p.tech.map(t => (
                            <span key={t} className="mono text-xs px-2 py-1 transition-all hover:shadow-[0_0_8px_rgba(0,212,255,0.3)]"
                              style={{ background: '#030d18', color: '#00d4ff', border: '1px solid #0a1f30' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <ul className="mt-5 space-y-2">
                          {p.points.map((pt, i) => (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#3d6e80' }}>
                              <span className="mono shrink-0" style={{ color: '#1e4a5a', marginTop: 2 }}>›</span>{pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="px-6 md:px-16 lg:px-24 py-24" style={{ borderBottom: '1px solid #0a1f30' }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionLabel>Education</SectionLabel>
              <Rule />
              <div className="p-8 max-w-xl" style={{ border: '1px solid #0a1f30', background: '#030d18', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
                <p className="mono text-xs mb-2" style={{ color: '#1e4a5a' }}>2022 — 2026</p>
                <h3 className="text-xl font-bold" style={{ color: '#ddeef5' }}>Information Technology</h3>
                <p className="text-sm mt-2" style={{ color: '#5a8fa0' }}>University of Transport Ho Chi Minh City</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 md:px-16 lg:px-24 py-32">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionLabel>05 / Contact</SectionLabel>
              <Rule />
              <h2 style={{ fontSize: 'clamp(36px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em', color: '#ddeef5' }}>
                Let"s build<br />
                <GlitchText style={{ color: '#00d4ff', textShadow: '0 0 40px rgba(0,212,255,0.4)' }}>something</GlitchText>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {[
                  { label: 'Email', value: 'ungdothevinh4704@gmail.com', onClick: handleCopy, actionLabel: copied ? '✓ Copied!' : 'Copy →' },
                  { label: 'Phone', value: '(+84) 337244067', onClick: null, actionLabel: null },
                  { label: 'GitHub', value: 'github.com/vinh0407', link: 'https://github.com/vinh0407', actionLabel: 'Visit →' },
                ].map(({ label, value, onClick, actionLabel, link }) => (
                  <div key={label} className="p-6 transition-all duration-300 hover:border-[#00d4ff] hover:shadow-[0_0_24px_rgba(0,212,255,0.1)] group"
                    style={{ border: '1px solid #0a1f30', background: '#030d18', position: 'relative', overflow: 'hidden' }}>
                    <div className="absolute inset-x-0 top-0 h-px transition-all duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)', opacity: 0 }} />
                    <p className="mono text-xs mb-3" style={{ color: '#1e4a5a' }}>{label}</p>
                    <p className="text-sm break-all" style={{ color: '#a8d0e0' }}>{value}</p>
                    {onClick && (
                      <button onClick={onClick} className="mono text-xs mt-4 transition-colors hover:text-[#00d4ff]" style={{ color: '#2d5a6a' }}>{actionLabel}</button>
                    )}
                    {link && (
                      <a href={link} target="_blank" rel="noreferrer" className="mono text-xs mt-4 block transition-colors hover:text-[#00d4ff]" style={{ color: '#2d5a6a', textDecoration: 'none' }}>{actionLabel}</a>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-16 lg:px-24 py-8 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid #0a1f30' }}>
          <span className="mono text-xs" style={{ color: '#0d2a3a' }}>© 2026 Ưng Đỗ Thế Vinh</span>
          <span className="mono text-xs" style={{ color: '#091e2d' }}>Android Developer · Ho Chi Minh City</span>
        </footer>
      </div>
    </>
  )
}
