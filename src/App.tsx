import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {
  AndroidLogo,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  DownloadSimple,
  GithubLogo,
  Globe,
  Images,
  List,
  Moon,
  Sun,
  X,
} from "@phosphor-icons/react"

gsap.registerPlugin(useGSAP)

const EMAIL = "ungdothevinh4704@gmail.com"
const PHONE = "+84 337 244 067"
const LOCATION = "District 12, Ho Chi Minh City, Vietnam"
const RESUME_URL = "/Ung-Do-The-Vinh-CV.pdf"
const LINKEDIN_URL = "https://www.linkedin.com/in/vinhung474/"
const GITHUB_PROFILE_URL = "https://github.com/vinh0407"

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export interface ProjectScreenshot {
  url: string
  caption: string
  isMobile?: boolean
}

export interface ProjectItem {
  id: string
  name: string
  localName: string
  year: string
  type: string
  categories: ("mobile" | "ai-systems" | "fullstack")[]
  tags: string[]
  role: string
  problem: string
  solution: string
  contributions: string[]
  technicalScope: string
  verification: string
  status: string
  links: {
    github: string
    live?: string
    admin?: string
    apk?: string
  }
  screenshots: ProjectScreenshot[]
}

const PROJECTS: ProjectItem[] = [
  {
    id: "piggybite",
    name: "PiggyBite",
    localName: "Smart, Privacy-First Personal Finance Manager for Android",
    year: "2026",
    type: "Native Android Application",
    categories: ["mobile"],
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Room SQLite",
      "Firebase",
      "CameraX",
      "ML Kit",
      "VietQR",
    ],
    role: "Android Developer",
    problem:
      "Tracking daily expenses manually is tedious, prone to manual entry mistakes, and disconnected from bank transfers, dynamic QR payments, and multi-wallet planning.",
    solution:
      "A privacy-first Android personal finance manager featuring VietQR camera scanning, Google ML Kit OCR receipt parsing, Vietnamese voice input, frosted glass UI, OLED dark mode, and an offline-first Room SQLite architecture synchronized with Firebase Realtime Database.",
    contributions: [
      "Built the native Android interface in Kotlin with Jetpack Compose, Material Design 3, frosted glass balance cards, and a pure OLED dark theme.",
      "Integrated CameraX and Google ML Kit OCR for instant receipt parsing, along with native VietQR camera scanning and Vietnamese voice recognition.",
      "Architected an offline-first data layer with Room SQLite, Kotlin Coroutines, and real-time cloud synchronization via Firebase Auth and Realtime Database.",
      "Implemented financial analytics: category spending donut charts, 6-month cashflow bars, Monthly Wrapped infographics, and CSV/backup export.",
      "Published signed production binaries (v1.0.1 APK & Google Play AAB Bundle) with SHA-256 certificate verification.",
    ],
    technicalScope:
      "Kotlin, Jetpack Compose, Material Design 3, MVVM, Room DB, Coroutines, Firebase Auth & Realtime DB, CameraX, Google ML Kit OCR, VietQR",
    verification:
      "Official production release v1.0.1 (APK & AAB) signed and verifiable on GitHub Releases with checksums; complete screenshot gallery in repository.",
    status: "v1.0.1 Released (APK Available)",
    links: {
      github: "https://github.com/vinh0407/PiggyBite",
      apk: "https://github.com/vinh0407/PiggyBite/raw/main/APK/PiggyBite-v1.0.1.apk",
    },
    screenshots: [
      {
        url: "https://media.githubusercontent.com/media/vinh0407/PiggyBite/main/screenshots/01_home_screen.png",
        caption: "Home Overview & Glassmorphism Balance Card",
        isMobile: true,
      },
      {
        url: "https://media.githubusercontent.com/media/vinh0407/PiggyBite/main/screenshots/02_home_dark_screen.png",
        caption: "Pure OLED Dark Mode Interface",
        isMobile: true,
      },
      {
        url: "https://media.githubusercontent.com/media/vinh0407/PiggyBite/main/screenshots/04_reports_screen.png",
        caption: "Spending Donut Chart & Cashflow Analytics",
        isMobile: true,
      },
      {
        url: "https://media.githubusercontent.com/media/vinh0407/PiggyBite/main/screenshots/06_scan_qr_screen.png",
        caption: "CameraX VietQR Scanner Integration",
        isMobile: true,
      },
    ],
  },
  {
    id: "vinhcommand",
    name: "VinhCommand",
    localName: "Cross-Platform Dev Environment & Android Companion",
    year: "2026",
    type: "Cross-Platform System (Android & Windows Desktop)",
    categories: ["mobile", "ai-systems"],
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Flutter/Dart",
      "WebSocket",
      "LAN Pairing",
      "Local AI",
      "Process Runner",
    ],
    role: "Lead System & Mobile Developer",
    problem:
      "Mobile developers and engineers need a way to inspect codebases, edit project files, dispatch AI agent prompts, and monitor build/runtime processes remotely over LAN without sitting in front of their desktop.",
    solution:
      "A unified client-host system connecting a Flutter Windows desktop IDE with a native Android companion app (Kotlin, Compose) via WebSocket/REST over LAN, featuring QR pairing, remote code canvas, local AI agent orchestration (Antigravity/Codex/OpenCode), and headless/native CMD execution.",
    contributions: [
      "Built the native Android companion app with Kotlin, Jetpack Compose, QR code pairing, and a VS Code Dark-inspired remote code canvas.",
      "Implemented remote terminal control with dual execution modes on Windows host: headless background streaming and interactive native Windows CMD (chcp 65001 UTF-8).",
      "Integrated desktop CLI AI engines (Google Antigravity, Codex, OpenCode) with real-time prompt dispatch, master task history, and file manipulation.",
      "Architected low-latency LAN communication via HTTP Shelf engine and real-time WebSocket state synchronization.",
    ],
    technicalScope:
      "Kotlin, Jetpack Compose, Flutter/Dart (Desktop), Windows API, WebSocket, HTTP REST, Local AI Orchestration, UTF-8 Process Runners",
    verification:
      "Public source code, interactive demo images, system architecture blueprints, and complete documentation available on GitHub.",
    status: "Production Source Available",
    links: {
      github: "https://github.com/vinh0407/VinhCommand",
      apk: "https://github.com/vinh0407/VinhCommand/raw/main/releases/Android/VinhCommand-Android-debug.apk",
    },
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/vinh0407/VinhCommand/main/docs/images/desktop_ide_demo.jpg",
        caption: "Windows Desktop IDE Workspace & Local AI Engine",
        isMobile: false,
      },
      {
        url: "https://raw.githubusercontent.com/vinh0407/VinhCommand/main/docs/images/mobile_app_demo.jpg",
        caption: "Native Android Mobile Companion (VS Code Dark Canvas)",
        isMobile: true,
      },
    ],
  },
  {
    id: "smart-room-search",
    name: "Smart Room Search",
    localName: "Trọ Xịn v2.0 (Nationwide Ecosystem)",
    year: "2026",
    type: "Full-Stack Web & Native Android Ecosystem",
    categories: ["mobile", "fullstack"],
    tags: [
      "React 18",
      "Kotlin",
      "Jetpack Compose",
      "Cloudflare Workers",
      "TiDB Cloud",
      "Leaflet",
      "REST API",
    ],
    role: "Full-stack Web & Mobile Android Developer",
    problem:
      "Rental discovery across Vietnamese metropolises is scattered across fragmented listing websites with inaccurate location filters, broken mobile maps, and cumbersome tenant workflows.",
    solution:
      "A nationwide rental housing discovery ecosystem featuring cascading 3-tier filtering (Province/City -> District -> Ward), interactive OpenStreetMap exploration, multi-channel aggregation (Cho Tot, Batdongsan, Phongtro123 + verified direct landlords), a tenant web app, dedicated admin portal, and a native Android app.",
    contributions: [
      "Engineered responsive Tenant Web application and Admin Portal with React 18, Vite, and Tailwind CSS.",
      "Developed native Android app in Kotlin and Jetpack Compose with offline favorites and resilient WebView Leaflet map rendering with multi-CDN fallbacks.",
      "Built serverless REST API on Cloudflare Workers edge runtime and Node.js Express with TiDB Cloud distributed MySQL.",
      "Designed cascading 3-tier administrative filter and multi-channel aggregation pipeline for major cities (HCMC, Hanoi, Da Nang, Can Tho, Binh Duong).",
      "Published production-ready APK packages (v2.0 with nationwide catalog and performance optimizations).",
    ],
    technicalScope:
      "React, TypeScript, Vite, Kotlin, Jetpack Compose, Cloudflare Workers, Node.js, Express, TiDB Cloud MySQL, Leaflet Maps, Vercel",
    verification:
      "Live deployments running on Vercel and Cloudflare Workers edge; production Android APK v2.0 published on GitHub for download.",
    status: "Live Web & Production APK v2.0",
    links: {
      github: "https://github.com/vinh0407/Smart-Room-Search",
      live: "https://smart-room-search.vercel.app",
      admin: "https://smart-room-admin.vercel.app",
      apk: "https://github.com/vinh0407/Smart-Room-Search/raw/main/APK/SmartRoomSearch-v2.0.apk",
    },
    screenshots: [],
  },
  {
    id: "vinceauto",
    name: "VinceAuto",
    localName: "Workflow Automation & AI Agent Orchestration Platform",
    year: "2026",
    type: "Full-Stack Monorepo & AI Orchestration Engine",
    categories: ["ai-systems", "fullstack"],
    tags: [
      "React 19",
      "TypeScript",
      "@xyflow/react",
      "Node.js",
      "Express",
      "Croner",
      "WebSocket",
      "LLM Agents",
    ],
    role: "Full-stack & Distributed Systems Developer",
    problem:
      "Automating multi-step business workflows and chaining modern AI agents requires visual flexibility, topological DAG execution, persistent background schedulers, and real-time execution feedback.",
    solution:
      "An extensible workflow automation and AI agent orchestration platform inspired by n8n architecture, featuring an interactive DAG visual canvas, multi-branch conditional routing, persistent Croner schedulers, native WebSocket log streaming, and seamless integration with OpenAI, Claude, Gemini, and Ollama.",
    contributions: [
      "Designed the reactive visual workflow canvas in React 19, TypeScript, and @xyflow/react with custom multi-output handles and interactive sticky notes.",
      "Engineered the backend DAG topological evaluator in Node.js/Express with data pinning, partial node retries, and $json/$node expression resolution.",
      "Implemented persistent cron scheduling with Croner, supporting recurring routines and ad-hoc job triggers.",
      "Built native WebSocket server broadcasting real-time node execution progress, duration, payload items, and streaming console logs.",
      "Integrated multi-provider LLM orchestration supporting OpenAI-compatible APIs, Anthropic Claude, Google Gemini, and local Ollama inference.",
    ],
    technicalScope:
      "TypeScript Monorepo, React 19, Vite, @xyflow/react, Node.js, Express, Croner, WebSocket, LLM Orchestration, Tailwind CSS",
    verification:
      "Public repository on GitHub and live interactive canvas deployment running on Vercel.",
    status: "Live Web Application Available",
    links: {
      github: "https://github.com/vinh0407/VinceAutoN8N",
      live: "https://frontend-v-c621.vercel.app",
    },
    screenshots: [],
  },
  {
    id: "uth-attendance",
    name: "UTH Attendance System",
    localName: "AI Facial Recognition Kiosk & Academic Operations Platform",
    year: "2025",
    type: "AI Computer Vision & Enterprise Web Application",
    categories: ["ai-systems", "fullstack"],
    tags: [
      "Python",
      "Django 4.2+",
      "InsightFace",
      "ONNX Runtime",
      "OpenCV",
      "Playwright",
      "SQLite",
      "Audit Logs",
    ],
    role: "Full-stack & AI Developer",
    problem:
      "Manual classroom attendance in universities is slow, vulnerable to proxy check-ins, and disconnected from academic credits, GPA audits, and exam eligibility criteria.",
    solution:
      "An enterprise-grade biometric attendance kiosk and academic management system standardized for university credit systems, featuring 512D face embeddings with InsightFace/ONNX Runtime, automated GPA/letter grading, real-time absence quota risk alerts, and digital leave request approvals.",
    contributions: [
      "Developed edge-capable biometric kiosk using InsightFace and ONNX Runtime for instant face detection, 512D vector matching, and anti-spoofing verification.",
      "Engineered standardized 4-component academic grading engine (Attendance, Midterm, Final, Bonus) with automatic GPA 4.0 / letter grade conversions.",
      "Built automated absence quota tracking against institutional thresholds (max 20% absence) with tiered risk statuses (Eligible, Warning, Barred).",
      "Implemented student digital leave request workflows with evidence upload, 1-click administrative review, and automatic roster sync.",
      "Developed administrative dashboard with CSV bulk grade management, Playwright automated testing, and immutable audit logs.",
    ],
    technicalScope:
      "Python, Django 4.2+, InsightFace, ONNX Runtime, OpenCV, Playwright, SQLite, Bootstrap, JavaScript, CSV Validation",
    verification:
      "Public repository on GitHub with comprehensive documentation, architecture blueprints, test suites, and 7 interface screenshots.",
    status: "Source Available with Test Suite",
    links: {
      github: "https://github.com/vinh0407/UTH-Attendance",
    },
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/vinh0407/UTH-Attendance/main/docs/screenshots/01_admin_dashboard_overview.png",
        caption: "Admin Operations Dashboard & KPI Analytics",
        isMobile: false,
      },
      {
        url: "https://raw.githubusercontent.com/vinh0407/UTH-Attendance/main/docs/screenshots/04_portal_home.png",
        caption: "Student Academic Portal & Credit Management",
        isMobile: false,
      },
      {
        url: "https://raw.githubusercontent.com/vinh0407/UTH-Attendance/main/docs/screenshots/07_portal_attendance_warnings.png",
        caption: "Real-time Attendance Quota & Exam Risk Warnings",
        isMobile: false,
      },
    ],
  },
]

const SKILL_GROUPS = [
  {
    label: "Android & Mobile",
    value:
      "Kotlin, Java, Jetpack Compose, Material Design 3, MVVM, Coroutines, Room SQLite, CameraX, Google ML Kit OCR, VietQR, Flutter/Dart companion app, and Biometric SDK integration (IriShield, InsightFace).",
  },
  {
    label: "Systems & AI",
    value:
      "Local CLI AI agent orchestration (Google Antigravity, Codex, OpenCode), InsightFace & ONNX Runtime (512D facial vectors), DAG topological execution engine, Croner persistent scheduler, real-time WebSockets, and UTF-8 Windows shell runner.",
  },
  {
    label: "Web & Full-Stack",
    value:
      "React 19, TypeScript, Next.js, Vite, Node.js, Express.js, Cloudflare Workers (edge runtime), Django 4.2+, Tailwind CSS, and @xyflow/react canvas.",
  },
  {
    label: "Data & Storage",
    value:
      "TiDB Cloud distributed MySQL, Firebase (Auth, Realtime DB, Firestore), Room SQLite, SQLite3, and CSV bulk data validation.",
  },
  {
    label: "Workflow & Quality",
    value:
      "Git, GitHub Releases & SHA-256 binary signing, Playwright automated testing, teamwork.com, and Agile/Scrum delivery experience at IriTech Vietnam.",
  },
]

function ActionLink({
  href,
  children,
  highlight = false,
  download = false,
}: {
  href: string
  children: React.ReactNode
  highlight?: boolean
  download?: boolean
}) {
  return (
    <a
      className={`action-link ${highlight ? "action-link-highlight" : ""}`}
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download ? true : undefined}
    >
      {children}
      {!download && <ArrowUpRight aria-hidden="true" size={16} weight="bold" />}
    </a>
  )
}

function ProjectCase({
  project,
  onOpenScreenshot,
}: {
  project: ProjectItem
  onOpenScreenshot: (s: ProjectScreenshot) => void
}) {
  return (
    <article className="project-case reveal" id={`project-${project.id}`}>
      <header className="project-header">
        <div>
          <h3>{project.name}</h3>
          <p className="project-local-name">{project.localName}</p>
          <p className="project-type">{project.type}</p>
          <div className="project-badge-row">
            <span className="project-status">{project.status}</span>
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <time dateTime={project.year}>{project.year}</time>
      </header>

      <div className="project-body">
        <dl className="project-brief">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Solution</dt>
            <dd>{project.solution}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <div className="project-evidence">
          <h4>Key Contributions</h4>
          <ul>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="technical-scope-line">
            <span>Technical Scope</span>
            <p>{project.technicalScope}</p>
          </div>

          <div className="verification-line">
            <span>Verification &amp; Delivery</span>
            <p>{project.verification}</p>
          </div>

          {/* Screenshot Showcase */}
          {project.screenshots.length > 0 && (
            <div className="project-gallery-wrap">
              <div className="project-gallery-header">
                <span className="project-gallery-title">
                  <Images size={16} weight="bold" />
                  Visual Showcase ({project.screenshots.length} Screenshots)
                </span>
                <span className="project-gallery-hint">
                  Click thumbnail to enlarge
                </span>
              </div>
              <div className="project-gallery-grid">
                {project.screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="gallery-card"
                    onClick={() => onOpenScreenshot(shot)}
                    aria-label={`Enlarge screenshot: ${shot.caption}`}
                  >
                    <div
                      className={`gallery-img-box ${
                        shot.isMobile ? "mobile-ratio" : ""
                      }`}
                    >
                      <img
                        src={shot.url}
                        alt={shot.caption}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget
                          if (target.src.includes("raw.githubusercontent.com")) {
                            target.src = target.src.replace(
                              "https://raw.githubusercontent.com",
                              "https://media.githubusercontent.com/media",
                            )
                          }
                        }}
                      />
                    </div>
                    <div className="gallery-card-caption">{shot.caption}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Project Action Links */}
          <div className="project-actions">
            <ActionLink href={project.links.github}>
              <GithubLogo size={18} weight="bold" />
              Source Code
            </ActionLink>

            {project.links.live && (
              <ActionLink href={project.links.live} highlight>
                <Globe size={18} weight="bold" />
                Live Product
              </ActionLink>
            )}

            {project.links.admin && (
              <ActionLink href={project.links.admin}>
                <Globe size={18} weight="bold" />
                Admin Portal
              </ActionLink>
            )}

            {project.links.apk && (
              <ActionLink href={project.links.apk} highlight download>
                <AndroidLogo size={18} weight="bold" />
                Download APK
              </ActionLink>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)
  const copyTimerRef = useRef<number | null>(null)

  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "mobile" | "ai-systems" | "fullstack"
  >("all")
  const [activeScreenshot, setActiveScreenshot] =
    useState<ProjectScreenshot | null>(null)
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  )

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme")
      if (saved === "light" || saved === "dark") return saved
    } catch {
      // Continue with system preference
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("portfolio-theme", theme)
    } catch {
      // Session fallback
    }
  }, [theme])

  useEffect(
    () => () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    },
    [],
  )

  // Handle escape key for mobile menu and lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeScreenshot) {
          setActiveScreenshot(null)
        } else if (menuOpen) {
          setMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen, activeScreenshot])

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeScreenshot ? "hidden" : ""
    if (menuOpen) firstMobileLinkRef.current?.focus()
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, activeScreenshot])

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.09,
        ease: "power3.out",
      })
      gsap.from(".profile-sheet", {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        duration: 1.05,
        delay: 0.18,
        ease: "power4.out",
      })
    },
    { scope: root },
  )

  const closeMenu = () => setMenuOpen(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyStatus("copied")
    } catch {
      setCopyStatus("error")
    }
    if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    copyTimerRef.current = window.setTimeout(() => setCopyStatus("idle"), 2400)
  }

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "all") return true
    return p.categories.includes(selectedCategory)
  })

  return (
    <div ref={root} className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Ưng Đỗ Thế Vinh, back to top"
            onClick={closeMenu}
          >
            <span className="brand-mark" aria-hidden="true">
              V.
            </span>
            <span className="brand-copy">
              <strong>Ưng Đỗ Thế Vinh</strong>
              <span>Android &amp; Systems Developer</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-button"
              type="button"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } theme`}
              onClick={() =>
                setTheme((value) => (value === "light" ? "dark" : "light"))
              }
            >
              {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              ref={menuButtonRef}
              className="icon-button menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item, index) => (
            <a
              ref={index === 0 ? firstMobileLinkRef : undefined}
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
              <ArrowRight aria-hidden="true" size={22} />
            </a>
          ))}
        </nav>
      )}

      <main id="main-content" inert={menuOpen ? true : undefined}>
        <section id="top" className="hero section-wrap">
          <div className="hero-copy">
            <h1>
              <span>Mobile systems.</span>
              <span>Intelligent experiences.</span>
            </h1>
            <p className="hero-summary">
              Final-year IT student at UTH specializing in native Android
              development (Kotlin, Jetpack Compose, CameraX, Room) and modern
              cross-platform systems (Flutter, Local AI Orchestration,
              Full-Stack &amp; Edge API).
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work
                <ArrowRight aria-hidden="true" size={18} weight="bold" />
              </a>
              <a className="button button-secondary" href={RESUME_URL} download>
                Download CV
                <DownloadSimple aria-hidden="true" size={18} weight="bold" />
              </a>
            </div>
          </div>

          <aside
            className="profile-sheet"
            aria-label="Candidate profile summary"
          >
            <div className="sheet-header">
              <span>Candidate profile</span>
              <span>{LOCATION}</span>
            </div>
            <dl>
              <div>
                <dt>Primary focus</dt>
                <dd>Android &amp; Mobile Systems</dd>
              </div>
              <div>
                <dt>Current status</dt>
                <dd>Final-year Student / Android Intern</dd>
              </div>
              <div>
                <dt>Target roles</dt>
                <dd>Android Developer (Intern / Junior)</dd>
              </div>
              <div>
                <dt>Work arrangement</dt>
                <dd>On-site or Remote</dd>
              </div>
              <div>
                <dt>Core stack</dt>
                <dd>Kotlin, Compose, Room, MVVM, AI Tools</dd>
              </div>
            </dl>
            <div className="profile-links">
              <ActionLink href={GITHUB_PROFILE_URL}>GitHub</ActionLink>
              <ActionLink href={LINKEDIN_URL}>LinkedIn</ActionLink>
            </div>
          </aside>
        </section>

        {/* Work Section with Filters and Live Data */}
        <section id="work" className="work-section section-wrap section-block">
          <div className="section-intro reveal">
            <h2>Selected work</h2>
            <p>
              Five production-ready projects demonstrating end-to-end delivery:
              native Android engineering, local AI orchestration, biometric
              pipelines, edge computing, and reactive visual canvases.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="project-filter-bar reveal">
            <button
              type="button"
              className={`filter-tab ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Projects <span className="count">({PROJECTS.length})</span>
            </button>
            <button
              type="button"
              className={`filter-tab ${
                selectedCategory === "mobile" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("mobile")}
            >
              <AndroidLogo size={14} weight="bold" />
              Android &amp; Mobile (
              {
                PROJECTS.filter((p) => p.categories.includes("mobile")).length
              }
              )
            </button>
            <button
              type="button"
              className={`filter-tab ${
                selectedCategory === "ai-systems" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("ai-systems")}
            >
              AI &amp; Systems (
              {
                PROJECTS.filter((p) => p.categories.includes("ai-systems"))
                  .length
              }
              )
            </button>
            <button
              type="button"
              className={`filter-tab ${
                selectedCategory === "fullstack" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("fullstack")}
            >
              Full-Stack Web (
              {
                PROJECTS.filter((p) => p.categories.includes("fullstack"))
                  .length
              }
              )
            </button>
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
              <ProjectCase
                key={project.id}
                project={project}
                onOpenScreenshot={(s) => setActiveScreenshot(s)}
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="experience-section section-wrap section-block"
        >
          <div className="section-intro reveal">
            <h2>Industry experience</h2>
            <p>
              Hands-on Android work with commercial biometric hardware SDKs and
              a cross-functional engineering team.
            </p>
          </div>
          <article className="experience-record reveal">
            <header>
              <div>
                <h3>Android Intern</h3>
                <p>IriTech Vietnam</p>
              </div>
              <div className="experience-meta">
                <time dateTime="2025-04">April 2025</time>
                <span>to</span>
                <time dateTime="2025-07">July 2025</time>
                <span>Ho Chi Minh City</span>
              </div>
            </header>
            <div className="experience-grid">
              <p className="experience-lead">
                Integrated IriShield biometric hardware workflows into Android
                applications using Kotlin and the Android SDK.
              </p>
              <ul>
                <li>
                  Developed and maintained Jetpack Compose screens following
                  MVVM architecture.
                </li>
                <li>
                  Used Kotlin Coroutines for asynchronous biometric processing,
                  hardware callback handling, and optimized UI responsiveness.
                </li>
                <li>
                  Tested biometric authentication across more than ten physical
                  Android devices and resolved hardware compatibility issues.
                </li>
                <li>
                  Collaborated with senior engineers, backend developers, and SDK
                  teams through Git and Agile sprints.
                </li>
              </ul>
            </div>
            <p className="confidential-note">
              Confidential commercial work: hardware SDK implementation details
              remain proprietary to IriTech Vietnam.
            </p>
          </article>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="about-section section-wrap section-block reveal"
        >
          <h2>Background &amp; career direction</h2>
          <div className="about-copy">
            <p>
              I am a final-year Information Technology student at the University
              of Transport Ho Chi Minh City (UTH) with a dedicated focus on
              native Android engineering. I specialize in building reactive,
              reliable mobile applications with Kotlin, Jetpack Compose, Room
              SQLite, and CameraX.
            </p>
            <p>
              During my internship at IriTech Vietnam, I integrated hardware
              biometric SDKs, managed asynchronous processing with Coroutines,
              and validated stability across multiple physical Android handsets.
              Beyond mobile, I build cross-platform tools connecting Android
              companions with desktop IDEs, AI agent orchestration engines, and
              high-throughput edge APIs.
            </p>
            <p>
              I am actively seeking an Android Developer role (Internship or
              Junior) in high-standard engineering teams, whether on-site in Ho
              Chi Minh City or remote.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="skills-section section-wrap section-block"
        >
          <div className="section-intro reveal">
            <h2>Technical range</h2>
            <p>
              Skills listed here are proven by production deployments, verified
              GitHub repositories, or industry internship work.
            </p>
          </div>
          <dl className="skills-list reveal">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="education-section section-wrap section-block reveal"
        >
          <h2>Education and languages</h2>
          <div className="education-grid">
            <article>
              <h3>Information Technology</h3>
              <p>University of Transport Ho Chi Minh City (UTH)</p>
              <time>2022 - 2026</time>
            </article>
            <dl>
              <div>
                <dt>Vietnamese</dt>
                <dd>Native</dd>
              </div>
              <div>
                <dt>English</dt>
                <dd>Intermediate: technical documentation and communication</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner reveal">
            <div>
              <h2>Start with the work. Continue with a conversation.</h2>
              <p>
                I am open to Android development internship and junior
                engineering roles. Email or LinkedIn is the most direct way to
                connect.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a
                className="contact-phone"
                href={`tel:${PHONE.replace(/ /g, "")}`}
              >
                {PHONE}
              </a>
              <div>
                <button
                  className="button button-inverse"
                  type="button"
                  onClick={copyEmail}
                >
                  {copyStatus === "copied" ? (
                    <Check aria-hidden="true" size={18} weight="bold" />
                  ) : (
                    <Copy aria-hidden="true" size={18} weight="bold" />
                  )}
                  {copyStatus === "copied"
                    ? "Email copied"
                    : copyStatus === "error"
                      ? "Copy unavailable"
                      : "Copy email"}
                </button>
                <ActionLink href={GITHUB_PROFILE_URL}>GitHub</ActionLink>
                <ActionLink href={LINKEDIN_URL}>LinkedIn</ActionLink>
              </div>
              <span className="sr-only" aria-live="polite">
                {copyStatus === "copied"
                  ? "Email address copied to clipboard"
                  : copyStatus === "error"
                    ? "Copying is unavailable. Use the email link instead."
                    : ""}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeScreenshot && (
        <div
          className="lightbox-overlay"
          onClick={() => setActiveScreenshot(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeScreenshot.caption}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveScreenshot(null)}
              aria-label="Close image preview"
            >
              <X size={20} weight="bold" />
            </button>
            <img
              className="lightbox-img"
              src={activeScreenshot.url}
              alt={activeScreenshot.caption}
            />
            <p className="lightbox-caption">{activeScreenshot.caption}</p>
          </div>
        </div>
      )}

      <footer
        className="site-footer section-wrap"
        inert={menuOpen || activeScreenshot ? true : undefined}
      >
        <span>© 2026 Ưng Đỗ Thế Vinh — Android &amp; Systems Developer</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}
