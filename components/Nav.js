"use client";
import { useState, useEffect } from "react";
import { FONTS, COLORS } from "./Styles";

export default function Nav({ onEasterEgg, eggFound, isMaster, eggButtonRef }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 600);
    setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const linkStyle = {
    fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.textMuted,
    textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
    transition: "color 0.15s",
  };

  return (
    <nav aria-label="Main navigation" style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: mobile ? "16px 16px" : "20px clamp(20px, 3vw, 36px)",
      background: "transparent",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <a href="/" aria-label="Matthew W. Henning — home" style={{
          fontFamily: FONTS.headline, fontSize: "22px", letterSpacing: "0.08em",
          color: "#fff", textDecoration: "none",
        }}>MWH</a>
        <span aria-label="Currently available for hire" role="status" style={{
          fontSize: "9px", fontFamily: FONTS.mono, color: COLORS.accent,
          background: COLORS.accentSubtle, border: "1px solid rgba(16,185,129,0.25)",
          padding: "2px 8px", borderRadius: "100px", letterSpacing: "0.1em",
          whiteSpace: "nowrap", animation: "statusPulse 2.4s ease-in-out infinite",
          display: "inline-flex", alignItems: "center", gap: "5px",
        }}>
          <span aria-hidden="true" style={{
            width: "5px", height: "5px", borderRadius: "50%",
            background: COLORS.accent, display: "inline-block", flexShrink: 0,
          }} />
          OPEN FOR NEW WORK
        </span>
      </div>
      <div style={{ display: "flex", gap: mobile ? "16px" : "32px", alignItems: "center" }}>
        {!mobile && (
          <>
            <a href="/work/puckboard" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textMuted)}
              onFocus={(e) => (e.currentTarget.style.color = "#fff")}
              onBlur={(e) => (e.currentTarget.style.color = COLORS.textMuted)}>Work</a>
            <a href="/#about" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textMuted)}
              onFocus={(e) => (e.currentTarget.style.color = "#fff")}
              onBlur={(e) => (e.currentTarget.style.color = COLORS.textMuted)}>About</a>
            <a href="/#contact" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textMuted)}
              onFocus={(e) => (e.currentTarget.style.color = "#fff")}
              onBlur={(e) => (e.currentTarget.style.color = COLORS.textMuted)}>Contact</a>
          </>
        )}
        {onEasterEgg && (
          <button onClick={onEasterEgg} ref={eggButtonRef}
            aria-label={isMaster ? "Pokémon Master — easter egg unlocked" : "Easter egg — try the Konami code"}
            aria-pressed={eggFound}
            title={isMaster ? "Pokémon Master 🏆" : "psst... try the konami code ↑↑↓↓←→←→BA"}
            style={{
              background: "none",
              border: `1px solid ${isMaster ? "#f59e0b" : eggFound ? "#facc1566" : "#222"}`,
              borderRadius: "6px",
              color: isMaster ? "#f59e0b" : eggFound ? "#facc15" : "#606060",
              cursor: "pointer", padding: "6px 10px", fontSize: "14px",
              lineHeight: "1", transition: "all 0.2s", flexShrink: 0,
            }}>
            {isMaster ? "🏆" : eggFound ? "⭐" : "★"}
          </button>
        )}
      </div>
    </nav>
  );
}
