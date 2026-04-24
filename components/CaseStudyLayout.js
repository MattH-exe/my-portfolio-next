"use client";
import { useState, useEffect, useRef } from "react";
import { FONTS, COLORS } from "./Styles";

// ── Callout (quote / stat / principles) ───────────────────────
function Callout({ callout, color }) {
  if (!callout) return null;
  if (callout.type === "quote")
    return (
      <div style={{ borderLeft: `3px solid ${color}`, margin: "20px 0 0", background: color + "08", borderRadius: "0 8px 8px 0", padding: "16px 20px" }}>
        <p style={{ fontFamily: FONTS.body, fontSize: "14px", color: "#ccc", lineHeight: "1.6", marginBottom: "8px" }}>{callout.text}</p>
        <span style={{ fontFamily: FONTS.mono, fontSize: "10px", color, letterSpacing: "0.1em" }}>{callout.attr}</span>
      </div>
    );
  if (callout.type === "stat")
    return (
      <div style={{ display: "flex", gap: "8px", margin: "16px 0 0", flexWrap: "wrap" }}>
        {callout.stats.map((s, i) => (
          <div key={i} style={{ flex: "1", minWidth: "70px", background: color + "0d", border: `1px solid ${color}33`, borderRadius: "8px", padding: "12px 10px", textAlign: "center" }}>
            <div style={{ fontFamily: FONTS.headline, fontSize: "24px", color, letterSpacing: "0.04em", lineHeight: "1" }}>{s.v}</div>
            <div style={{ fontFamily: FONTS.mono, fontSize: "9px", color: COLORS.textMuted, letterSpacing: "0.08em", marginTop: "4px", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </div>
    );
  if (callout.type === "principles")
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0 0" }}>
        {callout.items.map((item, i) => (
          <span key={i} style={{ fontFamily: FONTS.mono, fontSize: "10px", color, background: color + "10", border: `1px solid ${color}30`, borderRadius: "100px", padding: "5px 12px", letterSpacing: "0.06em" }}>↳ {item}</span>
        ))}
      </div>
    );
  return null;
}

// ── Media item ────────────────────────────────────────────────
function MediaItem({ item, color, onLightbox }) {
  if (item.type === "video") {
    return (
      <div style={{ marginBottom: "16px" }}>
        <div style={{ position: "relative", width: "100%", borderRadius: "8px", overflow: "hidden", border: "1px solid #1e1e1e" }}>
          <video src={item.src} controls playsInline muted style={{ width: "100%", display: "block" }} />
        </div>
        {item.caption && (
          <p style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.06em", marginTop: "8px", lineHeight: "1.5" }}>{item.caption}</p>
        )}
      </div>
    );
  }
  return (
    <button onClick={() => onLightbox({ src: item.src, caption: item.caption })}
      aria-label={`View larger: ${item.caption}`}
      style={{ background: "none", border: "none", padding: 0, cursor: "zoom-in", textAlign: "left", width: "100%", marginBottom: "16px" }}>
      <div style={{
        position: "relative", width: "100%", borderRadius: "8px", overflow: "hidden",
        border: "1px solid #1e1e1e", transition: "border-color 0.15s, box-shadow 0.15s",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "88"; e.currentTarget.style.boxShadow = `0 0 0 1px ${color}44`; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.boxShadow = "none"; }}>
        <img src={item.src} alt={item.caption || ""} style={{ width: "100%", height: "auto", display: "block" }} />
        <div style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex",
          alignItems: "center", justifyContent: "center", transition: "background 0.15s",
          fontSize: "20px", opacity: 0,
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.45)"; e.currentTarget.style.opacity = "1"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0)"; e.currentTarget.style.opacity = "0"; }}>
          🔍
        </div>
      </div>
      {item.caption && (
        <p style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.06em", marginTop: "8px", lineHeight: "1.5" }}>{item.caption}</p>
      )}
    </button>
  );
}

// ── Lightbox with focus management ────────────────────────────
function Lightbox({ src, caption, onClose }) {
  const closeBtnRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    // Capture the element that had focus before lightbox opened
    previousFocusRef.current = document.activeElement;
    // Focus close button
    if (closeBtnRef.current) closeBtnRef.current.focus();
    // Lock body scroll
    document.body.style.overflow = "hidden";
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
      // Restore focus to the element that triggered the lightbox
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose]);

  return (
    <div onClick={(e) => { e.stopPropagation(); onClose(); }}
      role="dialog" aria-modal="true" aria-label={caption || "Image preview"}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", backdropFilter: "blur(16px)", zIndex: 2000, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", cursor: "pointer" }}>
      <button ref={closeBtnRef} onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close image preview"
        style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#b2b2b2", cursor: "pointer", borderRadius: "8px", width: "36px", height: "36px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>×</button>
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "min(90vw, 1200px)", maxHeight: "80vh", width: "100%", cursor: "default" }}>
        <img src={src} alt={caption || ""} style={{ display: "block", width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain", borderRadius: "10px", boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }} />
      </div>
      {caption && <p style={{ fontFamily: FONTS.mono, fontSize: "11px", color: COLORS.textMuted, letterSpacing: "0.08em", marginTop: "16px", textAlign: "center", maxWidth: "600px" }}>{caption}</p>}
      <p style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textDim, letterSpacing: "0.08em", marginTop: "8px" }}>click anywhere or press esc to close</p>
    </div>
  );
}

// ── Featured Image with hover overlay ────────────────────────
function FeaturedImage({ src, alt, title, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ position: "relative", width: "100%", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt || ""} style={{ width: "100%", display: "block", transition: "transform 0.4s ease", transform: hovered ? "scale(1.015)" : "scale(1)" }} />
      {title && (
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
          display: "flex", alignItems: "flex-end",
          padding: "28px",
          transition: "background 0.3s ease",
          pointerEvents: "none",
        }}>
          <p style={{
            fontFamily: FONTS.mono, fontSize: "11px", color,
            letterSpacing: "0.1em", textTransform: "uppercase",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            background: "rgba(0,0,0,0.6)", padding: "6px 12px", borderRadius: "4px",
            borderLeft: `2px solid ${color}`,
          }}>
            {title}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Main Layout ───────────────────────────────────────────────
export default function CaseStudyLayout({ study, backHref = "/work/puckboard", backLabel = "Back to Puckboard" }) {
  const [activePhase, setActivePhase] = useState(0);
  const [expandPhases, setExpandPhases] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [mobile, setMobile] = useState(false);
  const phaseNavRef = useRef(null);

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Keyboard navigation for phase tabs (Arrow keys)
  useEffect(() => {
    if (!expandPhases || !phaseNavRef.current) return;
    const handleKeyDown = (e) => {
      if (!phaseNavRef.current) return;
      const chips = Array.from(phaseNavRef.current.querySelectorAll("button"));
      const focused = document.activeElement;
      const idx = chips.indexOf(focused);
      if (idx === -1) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = (idx + 1) % chips.length;
        chips[next].focus();
        setActivePhase(next);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (idx - 1 + chips.length) % chips.length;
        chips[prev].focus();
        setActivePhase(prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandPhases, study.phases.length]);

  const phase = study.phases[activePhase];

  return (
    <>
      <article style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* ── Hero ── */}
        <section style={{ padding: "80px clamp(16px, 3vw, 36px) 40px" }}>
          <a href={backHref} style={{
            fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.accent,
            letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
            display: "inline-block", marginBottom: "20px",
          }}>← {backLabel}</a>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: "10px", color: study.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{study.tag} · {study.year}</span>
          </div>

          <h1 style={{ fontFamily: FONTS.headline, fontSize: "clamp(48px, 7vw, 80px)", fontWeight: "400", color: "#fff", letterSpacing: "0.02em", lineHeight: "0.95", marginBottom: "12px" }}>
            {study.title}
          </h1>
          <p style={{ fontFamily: FONTS.body, fontSize: "clamp(18px, 2.5vw, 22px)", color: COLORS.textSecondary, lineHeight: "1.5", maxWidth: "600px", marginBottom: "32px" }}>
            {study.subtitle}
          </p>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${mobile ? 2 : study.metrics.length}, 1fr)`, gap: "10px" }}>
            {study.metrics.map((m, i) => (
              <div key={i} style={{ background: study.color + "0a", border: `1px solid ${study.color}25`, borderRadius: "8px", padding: "14px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: FONTS.headline, fontSize: "22px", color: study.color, letterSpacing: "0.04em", lineHeight: "1" }}>{m.value}</div>
                <div style={{ fontFamily: FONTS.mono, fontSize: "9px", color: COLORS.textMuted, letterSpacing: "0.08em", marginTop: "4px", textTransform: "uppercase" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Role bar ── */}
        <section style={{ padding: "32px clamp(16px, 3vw, 36px) 40px" }}>
          <div style={{ background: "#0a0a0d", border: `1px solid ${study.color}22`, borderLeft: `3px solid ${study.color}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ fontSize: "14px", marginTop: "1px", flexShrink: 0 }} aria-hidden="true">👤</span>
            <div>
              <div style={{ fontFamily: FONTS.mono, fontSize: "9px", color: study.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>My Role</div>
              <p style={{ fontFamily: FONTS.body, fontSize: "13px", color: COLORS.textSecondary, lineHeight: "1.55" }}>{study.role}</p>
            </div>
          </div>
        </section>

        {/* ── Context strip (civilian orientation) ── */}
        {study.context && (
          <section aria-label="Project context" style={{ padding: "0 clamp(16px, 3vw, 36px) 32px" }}>
            <p style={{ fontFamily: FONTS.body, fontSize: "clamp(16px, 2vw, 18px)", color: COLORS.textSecondary, lineHeight: "1.7", maxWidth: "780px", borderLeft: `3px solid ${study.color}44`, paddingLeft: "20px" }}>
              {study.context}
            </p>
          </section>
        )}

        {/* ── Key Insight ── */}
        {study.keyInsight && (
          <section aria-label="Key insight" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
            <div style={{
              background: study.color + "08",
              border: `1px solid ${study.color}22`,
              borderLeft: `4px solid ${study.color}`,
              borderRadius: "0 12px 12px 0",
              padding: "28px 32px",
              maxWidth: "820px",
            }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: study.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>Key Insight</div>
              <p style={{ fontFamily: FONTS.body, fontSize: "clamp(17px, 2vw, 20px)", color: "#e8e8e8", lineHeight: "1.65", fontStyle: "italic" }}>{study.keyInsight}</p>
            </div>
          </section>
        )}

        {/* ── Challenge / Bet / Outcome ── */}
        <section aria-label="Project summary" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: "20px" }}>
            {[
              { label: "The Challenge", text: study.challenge },
              { label: "The Bet", text: study.bet },
              { label: "The Outcome", text: study.outcome },
            ].map((section, i) => (
              <div key={i} style={{ background: "#0a0a0d", borderRadius: "12px", padding: "32px 28px", borderTop: `3px solid ${study.color}${i === 2 ? "" : "44"}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: "11px", color: study.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>{section.label}</div>
                <p style={{ fontFamily: FONTS.body, fontSize: "15px", color: COLORS.textSecondary, lineHeight: "1.65" }}>{section.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured artifact ── */}
        {study.featuredArtifact && (
          <section aria-label="Featured design artifact" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
            {/* Visual */}
            <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: `1px solid ${study.color}22` }}>
              {study.featuredArtifact.src.endsWith(".mp4") ? (
                <video
                  src={study.featuredArtifact.src}
                  controls playsInline muted autoPlay loop
                  style={{ width: "100%", display: "block", maxHeight: "560px", objectFit: "contain", background: "#000" }}
                />
              ) : (
                <FeaturedImage src={study.featuredArtifact.src} alt={study.featuredArtifact.caption} title={study.featuredArtifact.title} color={study.color} />
              )}
            </div>

            {/* Description panel */}
            <div style={{
              background: "#0a0a0d",
              border: `1px solid ${study.color}18`,
              borderTop: `2px solid ${study.color}`,
              borderRadius: "0 0 12px 12px",
              padding: "24px 28px",
              marginTop: "-1px",
            }}>
              {study.featuredArtifact.title && (
                <h3 style={{
                  fontFamily: FONTS.headline,
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  color: "#fff",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  marginBottom: "10px",
                  lineHeight: "1.1",
                }}>
                  {study.featuredArtifact.title}
                </h3>
              )}
              {study.featuredArtifact.description ? (
                <p style={{ fontFamily: FONTS.body, fontSize: "15px", color: COLORS.textSecondary, lineHeight: "1.65", maxWidth: "760px" }}>
                  {study.featuredArtifact.description}
                </p>
              ) : (
                <p style={{ fontFamily: FONTS.mono, fontSize: "11px", color: COLORS.textMuted, letterSpacing: "0.06em", lineHeight: "1.5", maxWidth: "700px" }}>
                  {study.featuredArtifact.caption}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ── Deep Dive (expandable) ── */}
        <section aria-label="Process deep dive" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
          <button onClick={() => setExpandPhases(!expandPhases)}
            aria-expanded={expandPhases}
            aria-controls="phase-deep-dive"
            style={{
              fontFamily: FONTS.mono, fontSize: "11px", color: study.color,
              letterSpacing: "0.12em", textTransform: "uppercase",
              background: "none", border: `1px solid ${study.color}44`,
              borderRadius: "6px", padding: "10px 20px", cursor: "pointer",
              transition: "all 0.15s", marginBottom: expandPhases ? "24px" : "0",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = study.color + "15"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
            onFocus={(e) => { e.currentTarget.style.background = study.color + "15"; }}
            onBlur={(e) => { e.currentTarget.style.background = "none"; }}
          >
            {expandPhases ? "Collapse" : "Expand"} Process Deep Dive ({study.phases.length} phases) {expandPhases ? "↑" : "↓"}
          </button>

          {expandPhases && (
            <div id="phase-deep-dive">
              {/* Phase tabs with keyboard nav */}
              <div ref={phaseNavRef} role="tablist" aria-label="Case study phases"
                style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                {study.phases.map((p, i) => (
                  <button key={i} role="tab" onClick={() => setActivePhase(i)}
                    aria-label={`Go to phase: ${p.phase}`}
                    aria-selected={i === activePhase}
                    tabIndex={i === activePhase ? 0 : -1}
                    style={{
                      fontFamily: FONTS.mono, fontSize: "10px", letterSpacing: "0.08em",
                      textTransform: "uppercase", padding: "6px 14px", borderRadius: "100px",
                      cursor: "pointer",
                      border: `1px solid ${i === activePhase ? study.color : "#2a2a2a"}`,
                      background: i === activePhase ? study.color + "18" : "transparent",
                      color: i === activePhase ? study.color : COLORS.textMuted,
                      transition: "all 0.15s", outline: "none",
                    }}
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${study.color}66`; }}
                    onBlur={(e) => { e.target.style.boxShadow = "none"; }}>
                    {p.phase.split(" — ")[1]}
                  </button>
                ))}
              </div>

              {/* Active phase */}
              <div role="tabpanel" aria-label={phase.phase}
                style={{ background: "#0a0a0d", border: "1px solid #1e1e24", borderRadius: "12px", padding: "24px", borderTop: `3px solid ${study.color}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: study.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>{phase.phase}</div>
                <h3 style={{ fontFamily: FONTS.headline, fontSize: "26px", color: "#fff", letterSpacing: "0.02em", marginBottom: "12px", fontWeight: "400" }}>{phase.title}</h3>
                <p style={{ fontFamily: FONTS.body, fontSize: "14px", color: "#c8c8c8", lineHeight: "1.65" }}>{phase.body}</p>
                <Callout callout={phase.callout} color={study.color} />
              </div>

              {/* Prev / Next */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px" }}>
                <button onClick={() => setActivePhase(Math.max(0, activePhase - 1))} disabled={activePhase === 0}
                  aria-label="Previous phase"
                  style={{ fontFamily: FONTS.mono, fontSize: "11px", color: activePhase === 0 ? "#2a2a2a" : COLORS.textMuted, background: "none", border: "none", cursor: activePhase === 0 ? "default" : "pointer", letterSpacing: "0.08em" }}>← Prev</button>
                <span aria-live="polite" style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textDim, letterSpacing: "0.1em" }}>{activePhase + 1} / {study.phases.length}</span>
                <button onClick={() => setActivePhase(Math.min(study.phases.length - 1, activePhase + 1))} disabled={activePhase === study.phases.length - 1}
                  aria-label="Next phase"
                  style={{ fontFamily: FONTS.mono, fontSize: "11px", color: activePhase === study.phases.length - 1 ? "#2a2a2a" : study.color, background: "none", border: "none", cursor: activePhase === study.phases.length - 1 ? "default" : "pointer", letterSpacing: "0.08em" }}>Next →</button>
              </div>
            </div>
          )}
        </section>

        {/* ── Artifacts ── */}
        <section aria-label="Design artifacts" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: study.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>More Design Artifacts</div>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
            {study.media.map((item, i) => (
              <MediaItem key={i} item={item} color={study.color} onLightbox={setLightbox} />
            ))}
          </div>
        </section>

        {/* ── Contributions ── */}
        {study.contributions?.length > 0 && (
          <section aria-label="Contributions" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: study.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>What I Built</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {study.contributions.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: FONTS.body, fontSize: "14px", color: COLORS.textSecondary, lineHeight: "1.5" }}>
                  <span style={{ color: study.color, flexShrink: 0, marginTop: "1px" }} aria-hidden="true">↳</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Tags ── */}
        <section aria-label="Skills and tools" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {study.tags.map((tag) => (
              <span key={tag} style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, background: "#141414", border: "1px solid #222", borderRadius: "4px", padding: "4px 12px", letterSpacing: "0.08em" }}>{tag}</span>
            ))}
          </div>
        </section>

        {/* ── Links ── */}
        {study.links?.length > 0 && (
          <section aria-label="External links" style={{ padding: "0 clamp(16px, 3vw, 36px) 48px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {study.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noreferrer"
                style={{
                  fontFamily: FONTS.mono, fontSize: "11px", letterSpacing: "0.08em",
                  textTransform: "uppercase", padding: "10px 20px", borderRadius: "4px",
                  textDecoration: "none", transition: "all 0.15s",
                  border: `1px solid ${study.color}55`, color: study.color, background: study.color + "0d",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = study.color + "22"; e.currentTarget.style.borderColor = study.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = study.color + "0d"; e.currentTarget.style.borderColor = study.color + "55"; }}
                onFocus={(e) => { e.currentTarget.style.background = study.color + "22"; e.currentTarget.style.borderColor = study.color; }}
                onBlur={(e) => { e.currentTarget.style.background = study.color + "0d"; e.currentTarget.style.borderColor = study.color + "55"; }}>
                {link.label} ↗
              </a>
            ))}
          </section>
        )}

        {/* ── CUI disclaimer ── */}
        {study.cuiDisclaimer && (
          <section style={{ padding: "0 clamp(16px, 3vw, 36px) 48px" }}>
            <div role="note" aria-label="CUI and NDA disclaimer" style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span aria-hidden="true" style={{ fontSize: "13px", flexShrink: 0, marginTop: "1px", color: COLORS.textDim }}>🔒</span>
              <p style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textDim, lineHeight: "1.6", letterSpacing: "0.04em" }}>{study.cuiDisclaimer}</p>
            </div>
          </section>
        )}
      </article>

      {lightbox && <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />}
    </>
  );
}
