import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Check, Code, Copy, GithubLogo, List, X } from "@phosphor-icons/react";
import resumeUrl from "./imports/_ng____Th__Vinh.pdf";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const NAV = ["About", "Experience", "Skills", "Projects", "Contact"];
const SKILLS = [
  { label: "Android", value: "Kotlin, Jetpack Compose, MVVM, Coroutines, CameraX, ML Kit" },
  { label: "Web", value: "React, TypeScript, JavaScript, REST API, JWT" },
  { label: "Data", value: "Firebase, SQLite, Room, TiDB, MySQL" },
  { label: "Tools", value: "Git, Android Studio, Vite, Node.js, Express, Cloudflare Workers" },
];
const PROJECTS = [
  { year: "2026", name: "Smart Room Search", alias: "Trọ Xịn", type: "Full-stack web and Android platform", github: "https://github.com/vinh0407/smart-room-search", website: "https://smart-room-search.vercel.app", color: "#ffd7c9", tech: ["React", "TypeScript", "Kotlin", "Compose", "Node.js", "TiDB"], description: "A shared rental ecosystem for tenants and property managers, spanning responsive web experiences, an admin dashboard, and a native Android app.", highlights: ["Search, maps, filtering, favorites and rental management", "JWT authentication with role-based admin access", "AI-assisted room entry, geocoding and analytics"] },
  { year: "2026", name: "PiggyBite", alias: "Personal finance, made practical", type: "Native Android application", github: "https://github.com/vinh0407/PiggyBite", website: null, color: "#dce9ff", tech: ["Kotlin", "Firebase", "MVVM", "ML Kit", "Room", "CameraX"], description: "A personal finance companion that turns receipts and voice input into structured transactions, with real-time cloud sync and useful everyday analytics.", highlights: ["Receipt OCR and Vietnamese voice recognition", "Wallets, shared saving funds and transaction history", "Offline-first Room database with Firebase sync"] },
  { year: "2025", name: "IriShield SDK", alias: "Biometric mobile integration", type: "Android frontend at IriTech", github: null, website: null, color: "#d9f2e6", tech: ["Kotlin", "Android SDK", "Compose", "Coroutines", "MVVM"], description: "Production Android interfaces for iris biometric workflows, built and tested across a broad device matrix in collaboration with SDK and backend engineers.", highlights: ["Biometric SDK integration and asynchronous processing", "Compatibility testing across more than 10 devices", "Compose UI following a maintainable MVVM architecture"] },
];

function ArrowButton({ children, href }: { children: React.ReactNode; href: string }) {
  return <a className="button button-primary group" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span>{children}</span><span className="button-icon"><ArrowUpRight size={17} weight="bold" /></span></a>;
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <div className="section-heading reveal"><p className="kicker">{kicker}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".hero-line > span", { yPercent: 105, duration: 1.05, stagger: 0.12, ease: "power4.out" });
    gsap.from(".hero-support", { opacity: 0, y: 26, duration: 0.9, delay: 0.55, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => gsap.from(element, { opacity: 0, y: 52, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } }));
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
      gsap.from(card, { opacity: 0, scale: 0.94, y: 70, duration: 1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%", once: true } });
      if (index < PROJECTS.length - 1) ScrollTrigger.create({ trigger: card, start: "top 112px", end: "+=48%", pin: true, pinSpacing: false });
    });
  }, { scope: root });

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("ungdothevinh4704@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "mailto:ungdothevinh4704@gmail.com"; }
  };

  return <div ref={root} className="page-shell">
    <a className="skip-link" href="#about">Skip to content</a>
    <header className="nav-shell"><nav className="nav-island" aria-label="Primary navigation">
      <a href="#about" className="brand" onClick={() => setMenuOpen(false)} aria-label="Ưng Đỗ Thế Vinh, home"><span>V.</span><span className="brand-name">Ưng Đỗ Thế Vinh</span></a>
      <div className="desktop-nav">{NAV.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
      <a className="nav-contact" href="mailto:ungdothevinh4704@gmail.com">Let&apos;s talk</a>
      <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={22} /> : <List size={22} />}</button>
    </nav></header>
    <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>{NAV.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ transitionDelay: `${index * 55}ms` }}>{item}</a>)}</div>

    <main>
      <section id="about" className="hero section-wrap">
        <div className="hero-copy"><p className="kicker hero-support">Android developer based in Ho Chi Minh City</p><h1 aria-label="I build useful products for life on the move"><span className="hero-line"><span>I build useful products</span></span><span className="hero-line accent-line"><span>for life on the move.</span></span></h1>
          <div className="hero-support hero-bottom"><p>I&apos;m Vinh, a mobile-first developer shaping dependable Android experiences and the web systems behind them.</p><div className="hero-actions"><ArrowButton href="mailto:ungdothevinh4704@gmail.com">Start a conversation</ArrowButton><a className="button button-secondary" href={resumeUrl} download>Download CV <ArrowDown size={17} weight="bold" /></a></div></div>
        </div>
        <div className="hero-art hero-support" aria-label="Developer profile illustration"><div className="art-window"><div className="art-toolbar"><span /><span /><span /></div><div className="code-panel"><Code size={42} weight="light" /><p>compose<br />ideas()</p></div><div className="phone-frame"><div className="phone-camera" /><div className="phone-screen"><span className="screen-label">CURRENTLY</span><strong>Building thoughtful mobile products.</strong><div className="screen-chip">Open to work</div></div></div></div><div className="art-caption"><span>Android</span><span>Full-stack</span><span>Product-minded</span></div></div>
      </section>

      <section id="experience" className="section-wrap section-block"><SectionTitle kicker="Experience" title="Learning fast. Shipping carefully." copy="Hands-on work with production biometric software and collaborative engineering teams." /><div className="experience-layout reveal"><div className="experience-meta"><span>Apr 2025 to Jul 2025</span><span>Ho Chi Minh City</span></div><article className="experience-body"><div><p className="role-company">IriTech Vietnam</p><h3>Android Intern</h3></div><p className="experience-lead">Integrated the IriShield biometric SDK into Android applications using Kotlin, Compose and Coroutines.</p><ul><li>Built maintainable Compose screens following MVVM architecture.</li><li>Optimized asynchronous biometric processing and user feedback.</li><li>Tested authentication on more than 10 Android devices.</li><li>Delivered production-ready features through Git and Agile workflows.</li></ul></article></div></section>

      <section id="skills" className="section-wrap section-block"><SectionTitle kicker="Capabilities" title="A mobile core, with full-stack range." /><div className="skill-grid">{SKILLS.map((skill, index) => <article className={`skill-item reveal skill-${index + 1}`} key={skill.label}><span className="skill-index">0{index + 1}</span><div><h3>{skill.label}</h3><p>{skill.value}</p></div></article>)}</div><div className="principles reveal"><p>How I work</p><div className="principle-list"><span>Clear communication</span><span>Thoughtful problem solving</span><span>Reliable teamwork</span><span>Continuous learning</span></div></div></section>

      <section id="projects" className="projects-section section-wrap section-block"><SectionTitle kicker="Selected work" title="Products built around real needs." copy="Three projects that show how I think across mobile UI, system architecture and everyday usability." /><div className="project-stack">{PROJECTS.map((project) => <article className="project-card" key={project.name} style={{ "--project-color": project.color } as React.CSSProperties}><div className="project-topline"><span>{project.year}</span><span>{project.type}</span></div><div className="project-grid"><div className="project-copy"><p className="project-alias">{project.alias}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-links">{project.github ? <ArrowButton href={project.github}>View source</ArrowButton> : <span className="private-label">Private client work</span>}{project.website && <a className="text-link" href={project.website} target="_blank" rel="noreferrer">Live product <ArrowUpRight size={16} /></a>}</div></div><div className="project-details"><ul>{project.highlights.map((item) => <li key={item}><Check size={18} weight="bold" />{item}</li>)}</ul><div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div></div></div></article>)}</div></section>

      <section className="section-wrap education-section"><div className="education-card reveal"><div><p className="kicker">Education</p><h2>Information Technology</h2></div><div><p>University of Transport Ho Chi Minh City</p><span>2022 to 2026</span></div></div></section>
      <section id="contact" className="contact-section section-wrap"><div className="contact-copy reveal"><p className="kicker">Available for Android opportunities</p><h2>Have a useful idea?<br /><em>Let&apos;s make it move.</em></h2></div><div className="contact-actions reveal"><a className="contact-email" href="mailto:ungdothevinh4704@gmail.com">ungdothevinh4704@gmail.com</a><button className="copy-button" type="button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={18} weight="bold" /> : <Copy size={18} />} {copied ? "Copied" : "Copy email"}</button><a className="social-link" href="https://github.com/vinh0407" target="_blank" rel="noreferrer"><GithubLogo size={22} />GitHub</a></div></section>
    </main>
    <footer className="footer section-wrap"><span>© 2026 Ưng Đỗ Thế Vinh</span><span>Designed and built with care.</span></footer>
  </div>;
}
