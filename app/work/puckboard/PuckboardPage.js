"use client";
import { useState, useEffect } from "react";
import SiteHeader from "../../../components/SiteHeader";
import Footer from "../../../components/Footer";
import { GLOBAL_STYLES, FONTS, COLORS } from "../../../components/Styles";
import { PUCKBOARD_ECOSYSTEM } from "../../../data/projects";

const data = PUCKBOARD_ECOSYSTEM;

export default function PuckboardPage() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <SiteHeader showTicker={false} />

      <main style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Hero */}
        <section aria-label="Puckboard overview" style={{ padding: "80px clamp(16px, 3vw, 36px) 40px" }}>
          <a href="/" style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>← Back to Portfolio</a>
          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: "#00d4ff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Flagship Product · 2020–Present</div>
          <h1 style={{ fontFamily: FONTS.headline, fontSize: "clamp(64px, 10vw, 120px)", fontWeight: "400", color: "#fff", letterSpacing: "0.02em", lineHeight: "0.92", marginBottom: "24px" }}>PUCKBOARD</h1>
          <p style={{ fontFamily: FONTS.body, fontSize: "clamp(18px, 2.5vw, 22px)", color: COLORS.textSecondary, lineHeight: "1.6", maxWidth: "700px", marginBottom: "16px" }}>{data.description}</p>
          <div style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.textMuted, letterSpacing: "0.08em", marginBottom: "48px" }}>{data.role}</div>
        </section>

        {/* Impact Stats */}
        <section aria-label="Impact metrics" style={{ padding: "0 clamp(16px, 3vw, 36px) 64px" }}>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : `repeat(${data.stats.length}, 1fr)`, gap: "12px" }}>
            {data.stats.map((stat, i) => (
              <div key={i} style={{ background: "#0a0a0d", borderRadius: "12px", padding: "24px 20px", textAlign: "center", borderTop: "3px solid #00d4ff" }}>
                <div style={{ fontFamily: FONTS.headline, fontSize: "clamp(32px, 4vw, 48px)", color: "#00d4ff", letterSpacing: "0.04em", lineHeight: "1" }}>{stat.value}</div>
                <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.1em", marginTop: "8px", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section aria-label="Products in the Puckboard suite" style={{ padding: "0 clamp(16px, 3vw, 36px) 64px" }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: "#00d4ff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Products in the Suite</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {data.products.map((product, i) => {
              const isClickable = !!product.href;
              const inner = (
                <div style={{
                  background: COLORS.surface, border: "1px solid #1a1a1a", borderRadius: "12px",
                  padding: "24px 28px", display: "grid",
                  gridTemplateColumns: mobile ? "1fr" : "1fr auto", gap: "12px", alignItems: "center",
                  transition: "border-color 0.15s, background 0.15s",
                  cursor: isClickable ? "pointer" : "default",
                  opacity: product.wip ? 0.6 : 1,
                }}
                  onMouseEnter={(e) => { if (isClickable) { e.currentTarget.style.borderColor = "#00d4ff44"; e.currentTarget.style.background = "#111"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.background = COLORS.surface; }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: FONTS.headline, fontSize: "24px", color: "#fff", fontWeight: "400", letterSpacing: "0.02em" }}>{product.name}</h3>
                      <span style={{ fontFamily: FONTS.mono, fontSize: "9px", color: COLORS.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #222", borderRadius: "100px", padding: "2px 8px" }}>{product.platform}</span>
                      {product.wip && <span style={{ fontFamily: FONTS.mono, fontSize: "9px", color: "#f59e0b", letterSpacing: "0.1em", textTransform: "uppercase" }}>Coming Soon</span>}
                      {product.protected && <span style={{ fontFamily: FONTS.mono, fontSize: "9px", color: COLORS.textDim }} aria-label="Password protected">🔒</span>}
                    </div>
                    <p style={{ fontFamily: FONTS.body, fontSize: "14px", color: COLORS.textMuted, lineHeight: "1.5", maxWidth: "600px" }}>{product.description}</p>
                  </div>
                  {isClickable && <span aria-hidden="true" style={{ fontFamily: FONTS.mono, fontSize: "11px", color: "#00d4ff", letterSpacing: "0.08em", flexShrink: 0 }}>View →</span>}
                </div>
              );

              if (isClickable) {
                return <a key={i} href={product.href} style={{ textDecoration: "none", color: "inherit" }}>{inner}</a>;
              }
              return <div key={i}>{inner}</div>;
            })}
          </div>
        </section>

        {/* Awards & Links */}
        <section aria-label="Awards and links" style={{ padding: "0 clamp(16px, 3vw, 36px) 64px" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {data.awards.map((award, i) => (
              <a key={i} href={award.url} target="_blank" rel="noreferrer"
                style={{ fontFamily: FONTS.mono, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", borderRadius: "4px", textDecoration: "none", border: "1px solid #f59e0b55", color: "#f59e0b", background: "#f59e0b0d" }}>
                🏆 {award.label} ({award.year}) ↗
              </a>
            ))}
            {data.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noreferrer"
                style={{ fontFamily: FONTS.mono, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", borderRadius: "4px", textDecoration: "none", border: "1px solid #00d4ff55", color: "#00d4ff", background: "#00d4ff0d" }}>
                {link.label} ↗
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section aria-label="Testimonials" style={{ padding: "48px clamp(16px, 3vw, 36px) 80px", borderTop: "1px solid #111" }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.textMuted, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>What People Say</div>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: "20px" }}>
            {data.testimonials.map((t, i) => (
              <blockquote key={i} style={{ padding: "24px", background: "#0a0a0d", borderRadius: "12px", borderLeft: "3px solid #00d4ff22", margin: 0 }}>
                <p style={{ fontFamily: FONTS.body, fontSize: "15px", color: "#ccc", lineHeight: "1.6", marginBottom: "12px" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer style={{ fontFamily: FONTS.mono, fontSize: "10px", color: "#00d4ff", letterSpacing: "0.1em" }}>— {t.attr}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
