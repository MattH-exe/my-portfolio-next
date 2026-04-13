"use client";
// ROUTE: /login
// Password gate for protected case studies. Redirects back to requested page on success.
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FONTS, COLORS, GLOBAL_STYLES } from "../../components/Styles";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const next = searchParams.get("next") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next }),
      });
      const data = await res.json();
      if (data.success) {
        router.push(data.redirect);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div style={{
        minHeight: "100vh", background: COLORS.bg,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
      }}>
        <div style={{ maxWidth: "420px", width: "100%", textAlign: "center" }}>
          <a href="/" aria-label="Back to portfolio" style={{
            fontFamily: FONTS.headline, fontSize: "22px", letterSpacing: "0.08em",
            color: "#fff", textDecoration: "none", display: "block", marginBottom: "48px",
          }}>MWH</a>

          <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
            Protected Content
          </div>

          <h1 style={{ fontFamily: FONTS.headline, fontSize: "48px", fontWeight: "400", color: "#fff", letterSpacing: "0.02em", marginBottom: "16px", lineHeight: "1" }}>
            CASE STUDY ACCESS
          </h1>

          <p style={{ fontFamily: FONTS.body, fontSize: "15px", color: COLORS.textMuted, lineHeight: "1.6", marginBottom: "40px" }}>
            This case study contains work created under NDA. Enter the password to continue.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label htmlFor="password-input" className="visually-hidden" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>
              Password
            </label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter password"
              autoFocus
              autoComplete="current-password"
              aria-invalid={error}
              aria-describedby={error ? "password-error" : undefined}
              style={{
                width: "100%", background: "#0a0a0d",
                border: `1px solid ${error ? "#ef4444" : "#222"}`,
                borderRadius: "8px", padding: "14px 16px",
                fontFamily: FONTS.body, fontSize: "14px", color: "#e0e0e0",
                outline: "none", textAlign: "center", letterSpacing: "0.15em",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => { if (!error) e.target.style.borderColor = COLORS.accent; }}
              onBlur={(e) => { if (!error) e.target.style.borderColor = "#222"; }}
            />

            {error && (
              <p id="password-error" role="alert" style={{
                fontFamily: FONTS.mono, fontSize: "11px", color: "#ef4444", letterSpacing: "0.08em",
              }}>Incorrect password. Try again.</p>
            )}

            <button type="submit" disabled={loading || !password}
              style={{
                background: loading || !password ? "#1a1a1a" : "#fff",
                color: loading || !password ? "#606060" : "#000",
                fontFamily: FONTS.mono, fontSize: "12px", letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "14px 28px", borderRadius: "6px",
                border: "none", cursor: loading || !password ? "default" : "pointer",
                fontWeight: "600", transition: "all 0.15s", width: "100%",
              }}>
              {loading ? "Verifying..." : "View Case Study →"}
            </button>
          </form>

          <a href="/" style={{
            fontFamily: FONTS.mono, fontSize: "11px", color: COLORS.textDim,
            letterSpacing: "0.08em", display: "inline-block", marginTop: "32px",
            textDecoration: "none",
          }}>← Back to portfolio</a>
        </div>
      </div>
    </>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#060608" }} />}>
      <LoginForm />
    </Suspense>
  );
}
