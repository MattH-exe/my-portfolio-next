// Shared global styles — injected via <style> tag
// Includes all keyframes, resets, a11y, and Easter Egg animations

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: #060608; color: #fff; min-height: 100vh; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
  * { scrollbar-width: thin; scrollbar-color: #222 #0a0a0a; }

  /* ── Skip Link ── */
  .skip-link { position: absolute; top: -100%; left: 16px; background: #10b981; color: #000; padding: 12px 24px; border-radius: 0 0 8px 8px; font-family: 'DM Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-decoration: none; z-index: 9999; transition: top 0.15s; }
  .skip-link:focus { top: 0; }

  /* ── Focus Visible ── */
  :focus-visible { outline: 2px solid #10b981 !important; outline-offset: 3px; border-radius: 3px; }

  /* ── Core Animations ── */
  @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes statusPulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.4); } 50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(16,185,129,0); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  .fade-up { animation: fadeUp 0.7s ease forwards; }
  .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
  .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
  .fade-up-3 { animation-delay: 0.4s; opacity: 0; }

  /* ── Easter Egg Animations ── */
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  @keyframes shake { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
  @keyframes catchShrink { 0% { transform: scale(1); opacity: 1; } 60% { transform: scale(0.3); opacity: 0.6; } 100% { transform: scale(0); opacity: 0; } }
  @keyframes pokeballDrop { 0% { transform: scale(0.2); opacity: 0; } 35% { transform: scale(1.3); opacity: 1; } 60% { transform: scale(0.9); opacity: 1; } 80% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }
  @keyframes starBurst0 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% - 52px), calc(-50% - 52px)) scale(1.2); opacity:0; } }
  @keyframes starBurst1 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% + 52px), calc(-50% - 52px)) scale(1.2); opacity:0; } }
  @keyframes starBurst2 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% - 60px), calc(-50% + 4px)) scale(1.2); opacity:0; } }
  @keyframes starBurst3 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% + 60px), calc(-50% + 4px)) scale(1.2); opacity:0; } }
  @keyframes starBurst4 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% - 44px), calc(-50% + 52px)) scale(1.2); opacity:0; } }
  @keyframes starBurst5 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% + 44px), calc(-50% + 52px)) scale(1.2); opacity:0; } }

  /* ── Reduced Motion ── */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .fade-up, .fade-up-1, .fade-up-2, .fade-up-3 { animation: none !important; opacity: 1 !important; }
    * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`;

// ── Design Tokens ──
export const FONTS = {
  headline: "'Bebas Neue', sans-serif",
  mono: "'DM Mono', monospace",
  body: "'Inter', sans-serif",
};

export const COLORS = {
  bg: "#060608",
  surface: "#0c0c0e",
  surfaceRaised: "#111114",
  border: "#1a1a1a",
  textPrimary: "#fff",
  textSecondary: "#b0b0b0",
  textMuted: "#7d7d7d",
  textDim: "#606060",
  accent: "#10b981",
  accentSubtle: "rgba(16,185,129,0.1)",
};
