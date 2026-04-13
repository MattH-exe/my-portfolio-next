"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import EasterEggModal from "../components/EasterEgg";
import { GLOBAL_STYLES, FONTS, COLORS } from "../components/Styles";
import { PROJECT_CARDS } from "../data/projects";

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section aria-label="Introduction" style={{ padding: "100px clamp(16px, 3vw, 36px) 80px", maxWidth: "1200px" }}>
      <p style={{ fontFamily: FONTS.mono, fontSize: "11px", color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px" }}>
        Product Designer · UX Researcher · Chicago, IL
      </p>
      <h1 style={{ margin: 0 }}>
        <span style={{ display: "block", fontFamily: FONTS.headline, fontSize: "clamp(64px, 10vw, 130px)", lineHeight: "0.92", fontWeight: "400", color: "#fff", margin: "0 0 8px", letterSpacing: "0.02em" }}>MATTHEW</span>
        <span style={{ display: "block", fontFamily: FONTS.headline, fontSize: "clamp(64px, 10vw, 130px)", lineHeight: "0.92", fontWeight: "400", color: "transparent", WebkitTextStroke: "1.5px #fff", margin: "0 0 40px", letterSpacing: "0.02em" }}>HENNING.</span>
      </h1>
      <p style={{ fontFamily: FONTS.body, fontSize: "clamp(18px, 2.5vw, 26px)", color: "#b2b2b2", maxWidth: "560px", lineHeight: "1.5", marginBottom: "48px" }}>
        Research-driven design for systems that matter.
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="#work" style={{ background: "#fff", color: "#000", fontFamily: FONTS.mono, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", transition: "all 0.15s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}
          onFocus={(e) => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.color = "#fff"; }}
          onBlur={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}>
          View Work →
        </a>
        <a href="mailto:mhenn@umich.edu" style={{ border: "1px solid #333", color: "#fff", fontFamily: FONTS.mono, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#606060"; }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#fff"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "#606060"; }}>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <a href={project.href}
      aria-label={`${project.title} — ${project.subtitle}. ${project.protected ? "Password protected." : ""}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)} onBlur={() => setHovered(false)}>
      <article style={{
        background: hovered ? "#111" : COLORS.surface,
        border: `1px solid ${hovered ? project.color : "#1e1e1e"}`,
        borderRadius: "16px", cursor: "pointer", transition: "all 0.3s ease",
        overflow: "hidden", transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}22` : "none",
        display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        minHeight: mobile ? "auto" : "320px", outline: "none",
      }}>
        <div style={{ padding: mobile ? "28px 24px" : "36px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: project.color, opacity: hovered ? 0 : 0.3, transition: "opacity 0.25s" }} />
          <div>
            <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: project.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>{project.tag}</div>
            <h3 style={{ fontFamily: FONTS.headline, fontSize: "clamp(36px, 4vw, 52px)", fontWeight: "400", lineHeight: "1", color: "#fff", marginBottom: "10px", letterSpacing: "0.02em" }}>{project.title}</h3>
            <p style={{ fontFamily: FONTS.body, fontSize: "15px", color: "#8a8a8a", marginBottom: "24px", lineHeight: "1.5", maxWidth: "420px" }}>{project.subtitle}</p>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", borderTop: "1px solid #1a1a1a", paddingTop: "16px" }}>
              <span style={{ fontFamily: FONTS.headline, fontSize: "28px", color: project.color, letterSpacing: "0.04em" }}>{project.impact}</span>
              <span style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.impactLabel}</span>
            </div>
            <div style={{ marginTop: "12px", fontFamily: FONTS.mono, fontSize: "11px", color: hovered ? project.color : COLORS.textMuted, letterSpacing: "0.08em", transition: "color 0.2s" }}>
              {project.protected ? (hovered ? "View work →" : "🔒 Password protected") : (hovered ? "Explore →" : "View details →")}
            </div>
          </div>
        </div>
        <div style={{
          position: "relative", overflow: "hidden",
          minHeight: mobile ? "200px" : "100%",
          background: `linear-gradient(135deg, ${project.color}08 0%, ${project.color}15 100%)`,
          borderLeft: mobile ? "none" : "1px solid #1a1a1a",
          borderTop: mobile ? "1px solid #1a1a1a" : "none",
        }}>
          {project.heroImage ? (
            <>
              <img src={project.heroImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease", transform: hovered ? "scale(1.03)" : "scale(1)" }} />
              {!mobile && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0c0c0e 0%, transparent 30%)", pointerEvents: "none" }} />}
            </>
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "28px", opacity: 0.3 }}>🖼</div>
          )}
        </div>
      </article>
    </a>
  );
}

// ── About ─────────────────────────────────────────────────────
function About() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <section id="about" aria-label="About Matthew Henning" style={{ padding: "100px clamp(16px, 3vw, 36px)", borderTop: "1px solid #111" }}>
      <div style={{ maxWidth: "1100px" }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>About</div>
        <h2 style={{ fontFamily: FONTS.headline, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: "400", color: "#fff", lineHeight: "0.95", letterSpacing: "0.02em", marginBottom: "56px" }}>
          DESIGNING<br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}>SOLUTIONS</span> THAT DELIVER<br />
          & DELIGHT.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "280px 1fr", gap: mobile ? "36px" : "56px", alignItems: "start" }}>
          <div style={{ position: "relative", width: "fit-content" }}>
            <div style={{ width: mobile ? "220px" : "280px", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden", border: "1px solid #1e1e1e", background: "linear-gradient(135deg, #10b98108 0%, #8b5cf608 100%)" }}>
              <img src="/Headshot.jpg" alt="Matthew Henning" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div aria-hidden="true" style={{ position: "absolute", top: "-6px", right: "-6px", width: "28px", height: "28px", borderRadius: "50%", background: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", border: "2px solid #060608" }}>✦</div>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "36px", marginBottom: "40px" }}>
              <p style={{ fontFamily: FONTS.body, fontSize: "17px", color: "#909090", lineHeight: "1.65" }}>
                Before I learned to design interfaces, I learned to tell stories through a lens studying Film, Television & Digital Media. That background — understanding composition, pacing, what earns attention — still shines through in my product design work.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: "17px", color: "#909090", lineHeight: "1.65" }}>
                Today I design complex enterprise systems where clarity isn&apos;t optional. I research deeply, synthesize rigorously, and build design systems that outlast the project. M.S. in UX Research & Design (HCI) from the University of Michigan. Based in Chicago.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[["Interaction Design","#10b981"],["UX Research","#8b5cf6"],["Design Systems","#10b981"],["Accessibility","#f59e0b"],["Figma","#10b981"],["Usability Testing","#8b5cf6"],["HCI","#10b981"],["Agile / Scrum","#f59e0b"]].map(([skill, c]) => (
                <span key={skill} style={{ fontFamily: FONTS.mono, fontSize: "11px", color: c, background: `${c}11`, border: `1px solid ${c}33`, borderRadius: "4px", padding: "6px 14px", letterSpacing: "0.08em" }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────
function Contact() {
  const [mobile, setMobile] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "someone"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:mhenn@umich.edu?subject=${subject}&body=${body}`;
  };

  const inputBase = { width: "100%", background: "#0a0a0d", border: "1px solid #222", borderRadius: "8px", padding: "12px 16px", fontFamily: FONTS.body, fontSize: "14px", color: "#e0e0e0", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" };
  const inputFocused = (name) => focused === name ? { borderColor: COLORS.accent, boxShadow: "0 0 0 2px #10b98122" } : {};

  return (
    <section id="contact" aria-label="Contact" style={{ padding: "100px clamp(16px, 3vw, 36px)", borderTop: "1px solid #111", background: "#080809" }}>
      <div style={{ maxWidth: "1100px", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? "48px" : "80px", alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Contact</div>
          <h2 style={{ fontFamily: FONTS.headline, fontSize: "clamp(48px, 7vw, 96px)", fontWeight: "400", color: "#fff", lineHeight: "0.92", letterSpacing: "0.02em", marginBottom: "32px" }}>
            READY<br /><span style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}>WHEN</span><br />YOU ARE.
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: "17px", color: COLORS.textMuted, lineHeight: "1.6", marginBottom: "40px", maxWidth: "500px" }}>
            Open to Product Design, UX Design & UX Research roles in Chicago and remote. Let&apos;s talk.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[["LinkedIn", "https://linkedin.com/in/matthew-henning13"], ["Resume ↗", "/Henning_Resume.pdf"]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ border: "1px solid #333", color: "#fff", fontFamily: FONTS.mono, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#606060"; }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#fff"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#606060"; }}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ background: COLORS.surface, border: "1px solid #1e1e1e", borderRadius: "16px", padding: mobile ? "28px 24px" : "36px 32px" }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px" }}>Send a Message</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label htmlFor="contact-name" style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Name</label>
              <input id="contact-name" type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={{ ...inputBase, ...inputFocused("name") }} />
            </div>
            <div>
              <label htmlFor="contact-email" style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Email</label>
              <input id="contact-email" type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={{ ...inputBase, ...inputFocused("email") }} />
            </div>
            <div>
              <label htmlFor="contact-message" style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Message</label>
              <textarea id="contact-message" rows={5} placeholder="Tell me about the role or project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={{ ...inputBase, ...inputFocused("message"), resize: "vertical", minHeight: "120px" }} />
            </div>
            <button onClick={handleSubmit}
              style={{ background: "#fff", color: "#000", fontFamily: FONTS.mono, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "600", transition: "all 0.15s", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}
              onFocus={(e) => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.color = "#fff"; }}
              onBlur={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}>
              Send Message →
            </button>
            <p style={{ fontFamily: FONTS.mono, fontSize: "9px", color: COLORS.textDim, letterSpacing: "0.06em", textAlign: "center", marginTop: "4px" }}>Opens your email client · No data stored</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Home Page ────────────────────────────────────────────
export default function HomePage() {
  const [showEgg, setShowEgg] = useState(false);
  const [eggFound, setEggFound] = useState(false);
  const [isMaster, setIsMaster] = useState(false);
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const eggButtonRef = useRef(null);

  const handleEgg = useCallback(() => { setShowEgg(true); setEggFound(true); }, []);

  // Konami code listener
  useEffect(() => {
    const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let pos = 0;
    const handler = (e) => {
      if (e.key === KONAMI[pos]) { pos++; if (pos === KONAMI.length) { handleEgg(); pos = 0; } }
      else { pos = e.key === KONAMI[0] ? 1 : 0; }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleEgg]);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <a href="#work" className="skip-link">Skip to main content</a>
      <SiteHeader onEasterEgg={handleEgg} eggFound={eggFound} isMaster={isMaster} eggButtonRef={eggButtonRef} />

      <main style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="fade-up fade-up-1"><Hero /></div>

        <section id="work" aria-label="Selected work" style={{ padding: "80px clamp(16px, 3vw, 36px)" }}>
          <div className="fade-up fade-up-2" style={{ marginBottom: "48px" }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Selected Work</div>
            <h2 style={{ fontFamily: FONTS.headline, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "400", color: "#fff", letterSpacing: "0.02em" }}>PRODUCTS I&apos;VE SHAPED.</h2>
          </div>
          <div className="fade-up fade-up-3" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {PROJECT_CARDS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <Footer />

      {showEgg && (
        <EasterEggModal
          onClose={() => setShowEgg(false)}
          onMaster={() => setIsMaster(true)}
          caught={caughtPokemon}
          setCaught={setCaughtPokemon}
          triggerRef={eggButtonRef}
        />
      )}
    </>
  );
}
