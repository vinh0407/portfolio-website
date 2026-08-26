import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  DownloadSimple,
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
const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

const PROJECTS = [
  {
    name: "UTH Attendance System",
    localName: "Facial Recognition Attendance Platform",
    year: "2025",
    type: "Web application",
    role: "Full-stack developer",
    problem:
      "Classroom attendance needed a faster, more reliable workflow than manual check-ins, with clear records for students and administrators.",
    solution:
      "A Django-based attendance platform with a webcam kiosk, facial recognition, admin management, and a student portal for academic attendance data.",
    contributions: [
      "Built a webcam-based attendance kiosk with facial recognition and student verification using InsightFace and OpenCV.",
      "Developed administration features for students, classes, subjects, schedules, and attendance sessions.",
      "Implemented automatic on-time, late, and absent classification based on check-in time.",
      "Created student views for schedules, grades, attendance history, and statistics, with CSV import/export and session archival.",
    ],
    technicalScope:
      "Python, Django, InsightFace, ONNX Runtime, OpenCV, SQLite, HTML, CSS, JavaScript, Git",
    verification:
      "Public source is available for review. The implemented scope includes facial-recognition check-in, attendance workflows, and student and admin portals.",
    status: "Source available",
    github: "https://github.com/vinh0407/attendance-app",
    live: null,
  },
  {
    name: "Smart Room Search",
    localName: "Trọ Xịn",
    year: "2026",
    type: "Full-stack web and Android application",
    role: "Full-stack web and Android developer",
    problem:
      "Room discovery, tenant workflows, and property administration needed to work across web, mobile, and one shared backend.",
    solution:
      "A multi-platform rental search and management system with a tenant website, admin dashboard, native Android app, and shared REST API.",
    contributions: [
      "Built responsive React and TypeScript experiences for search, filtering, maps, favorites, and rental management.",
      "Developed the native Android app with Kotlin and Jetpack Compose, including offline favorites and admin features.",
      "Built the Node.js, Express, and Cloudflare Workers API with JWT authentication and role-based administration.",
      "Designed the TiDB Cloud and MySQL data layer, then integrated geocoding, image upload, analytics, and AI-assisted room entry.",
    ],
    technicalScope:
      "React, TypeScript, Vite, Kotlin, Jetpack Compose, Node.js, Express.js, Cloudflare Workers, TiDB, MySQL, JWT, REST API, Vercel",
    verification:
      "Public source and a live Vercel deployment are available for review. Offline favorites and role-based administration are part of the implemented scope.",
    status: "Source and live product available",
    github: "https://github.com/vinh0407/smart-room-search",
    live: "https://smart-room-search.vercel.app",
  },
  {
    name: "PiggyBite",
    localName: "Smart Personal Finance Manager",
    year: "2026",
    type: "Native Android application",
    role: "Android developer",
    problem:
      "Everyday financial records are slow to enter and difficult to keep useful across wallets, transactions, and shared saving goals.",
    solution:
      "An Android finance manager that turns receipt scans and Vietnamese voice input into structured transactions with online sync and offline storage.",
    contributions: [
      "Implemented Firebase Authentication with email, password, and phone sign-in.",
      "Built expense, income, wallet, and shared saving fund workflows with Firebase Realtime Database.",
      "Integrated Google ML Kit OCR, CameraX, and Vietnamese voice recognition for transaction input.",
      "Developed analytics, transaction history, CSV import and export, Room storage, and a maintainable MVVM architecture.",
    ],
    technicalScope:
      "Kotlin, Jetpack Compose, MVVM, Coroutines, Firebase, Room, CameraX, Google ML Kit, Material Design 3",
    verification:
      "Public source is available for review. The implemented scope includes Room storage, Firebase synchronization, analytics, and CSV import and export.",
    status: "Source available",
    github: "https://github.com/vinh0407/PiggyBite",
    live: null,
  },
].sort((a, b) => Number(b.year) - Number(a.year))

const SKILL_GROUPS = [
  {
    label: "Programming",
    value:
      "Kotlin, Java, and Python, with Kotlin used across IriTech, PiggyBite, and Trọ Xịn.",
  },
  {
    label: "Android",
    value:
      "Android Studio, Jetpack Compose (Basic), MVVM, and Coroutines across internship and project work. CameraX, ML Kit, Room, and Material Design 3 in PiggyBite.",
  },
  {
    label: "Web and API",
    value:
      "React, TypeScript, Vite, Node.js, Express.js, Cloudflare Workers, REST API, and JWT in Trọ Xịn.",
  },
  {
    label: "Data",
    value:
      "SQLite, Firebase Authentication, and Cloud Firestore in the CV; Firebase and Room in PiggyBite; TiDB and MySQL in Trọ Xịn.",
  },
  {
    label: "Workflow",
    value:
      "Git, teamwork.com, and Agile basics, with collaborative delivery experience at IriTech.",
  },
]

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a className="action-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={17} weight="bold" />
    </a>
  )
}

function ProjectCase({ project }: { project: typeof PROJECTS[number] }) {
  return (
    <article className="project-case reveal">
      <header className="project-header">
        <div>
          <h3>{project.name}</h3>
          <p className="project-local-name">{project.localName}</p>
          <p className="project-type">{project.type}</p>
          <p className="project-status">{project.status}</p>
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
          <h4>Contribution</h4>
          <ul>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="technical-scope-line">
            <span>Technical scope</span>
            <p>{project.technicalScope}</p>
          </div>
          <div className="verification-line">
            <span>Verification</span>
            <p>{project.verification}</p>
          </div>
          <div className="project-actions">
            <ExternalLink href={project.github}>View source</ExternalLink>
            {project.live && (
              <ExternalLink href={project.live}>Open live product</ExternalLink>
            )}
          </div>
          <p className="asset-note">
            [NEED INFO] Project screenshots or walkthrough media were not
            provided.
          </p>
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
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  )
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme")
      if (saved === "light" || saved === "dark") return saved
    } catch {
      // Continue with the system preference when storage is unavailable.
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
      // The selected theme still applies for this session.
    }
  }, [theme])

  useEffect(
    () => () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    },
    [],
  )

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    if (menuOpen) firstMobileLinkRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [menuOpen])

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
              <span>Android developer</span>
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
              <span>Frontend systems.</span>
              <span>Mobile experiences.</span>
            </h1>
            <p className="hero-summary">
              Final-year IT student specializing in Android development, with
              hands-on Kotlin, Jetpack Compose, and biometric SDK experience.
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
                <dd>Android development</dd>
              </div>
              <div>
                <dt>Current status</dt>
                <dd>Android developer intern</dd>
              </div>
              <div>
                <dt>Target roles</dt>
                <dd>Android development intern</dd>
              </div>
              <div>
                <dt>Work arrangement</dt>
                <dd>On-site or remote</dd>
              </div>
              <div>
                <dt>Evidence-backed stack</dt>
                <dd>Kotlin, Jetpack Compose, MVVM</dd>
              </div>
            </dl>
            <div className="profile-links">
              <ExternalLink href="https://github.com/vinh0407">
                GitHub
              </ExternalLink>
              <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>
            </div>
          </aside>
        </section>

        <section id="work" className="work-section section-wrap section-block">
          <div className="section-intro reveal">
            <h2>Selected work</h2>
            <p>
              Three projects show how I move from a user need to recognition,
              mobile UI, data, and supporting services.
            </p>
          </div>
          <div className="project-list">
            {PROJECTS.map((project) => (
              <ProjectCase key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="experience-section section-wrap section-block"
        >
          <div className="section-intro reveal">
            <h2>Industry experience</h2>
            <p>
              Hands-on Android work with a biometric SDK and a cross-functional
              engineering team.
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
                Integrated IriShield biometric workflows into Android
                applications using Kotlin and the Android SDK.
              </p>
              <ul>
                <li>
                  Developed and maintained Jetpack Compose screens with MVVM
                  architecture.
                </li>
                <li>
                  Used Coroutines for asynchronous biometric processing and
                  optimized user interactions.
                </li>
                <li>
                  Tested authentication on more than ten Android devices and
                  resolved compatibility issues.
                </li>
                <li>
                  Collaborated with senior, backend, and SDK engineers through
                  Git and Agile workflows.
                </li>
              </ul>
            </div>
            <p className="confidential-note">
              Confidential internship work: the project source is not publicly
              available.
            </p>
          </article>
        </section>

        <section
          id="about"
          className="about-section section-wrap section-block reveal"
        >
          <h2>Background &amp; career direction</h2>
          <div className="about-copy">
            <p>
              I am a final-year Information Technology student specializing in
              Android development. I build native applications with Kotlin and
              modern Android frameworks, alongside web applications with Python,
              Django, React, and TypeScript.
            </p>
            <p>
              At IriTech Vietnam, I integrated the IriShield biometric SDK,
              developed Compose screens, handled asynchronous processing with
              Coroutines, and resolved compatibility issues across more than ten
              Android devices.
            </p>
            <p>
              I am currently seeking Android development internship
              opportunities in on-site or remote teams. I want to grow through
              production work that connects thoughtful interfaces with reliable
              application architecture.
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="skills-section section-wrap section-block"
        >
          <div className="section-intro reveal">
            <h2>Technical range</h2>
            <p>
              Skills listed here are supported by the CV, internship, or
              selected project work.
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

        <section
          id="education"
          className="education-section section-wrap section-block reveal"
        >
          <h2>Education and languages</h2>
          <div className="education-grid">
            <article>
              <h3>Information Technology</h3>
              <p>University of Transport Ho Chi Minh City</p>
              <time>2022 - 2026</time>
            </article>
            <dl>
              <div>
                <dt>Vietnamese</dt>
                <dd>Native</dd>
              </div>
              <div>
                <dt>English</dt>
                <dd>Intermediate, reading and technical communication</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner reveal">
            <div>
              <h2>Start with the work. Continue with a conversation.</h2>
              <p>
                I am looking for Android development internship opportunities.
                Email or LinkedIn is the most direct way to reach me.
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
                <ExternalLink href="https://github.com/vinh0407">
                  GitHub
                </ExternalLink>
                <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>
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

      <footer
        className="site-footer section-wrap"
        inert={menuOpen ? true : undefined}
      >
        <span>© 2026 Ưng Đỗ Thế Vinh</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}
