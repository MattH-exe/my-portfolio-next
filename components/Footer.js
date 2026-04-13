import { FONTS } from "./Styles";

export default function Footer() {
  return (
    <footer aria-label="Site footer" style={{
      borderTop: "1px solid #111",
      padding: "24px clamp(16px, 3vw, 36px)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "8px", maxWidth: "1400px", margin: "0 auto",
    }}>
      <span style={{ fontFamily: FONTS.mono, fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em" }}>
        Built by Me :) — © 2026 Matthew W. Henning
      </span>
      <span style={{ fontFamily: FONTS.mono, fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em" }}>
        Chicago, IL · Open for new work
      </span>
    </footer>
  );
}
