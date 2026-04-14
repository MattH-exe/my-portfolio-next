"use client";
import { useState, useEffect, useRef } from "react";
import { POKEMON } from "../data/projects";
import { FONTS } from "./Styles";

export default function EasterEggModal({ onClose, onMaster, caught, setCaught, triggerRef }) {
  const [current, setCurrent] = useState(() => {
    const remaining = POKEMON.filter((p) => !caught.some((c) => c.id === p.id));
    const pool = remaining.length > 0 ? remaining : POKEMON;
    return pool[Math.floor(Math.random() * pool.length)];
  });
  const [wasAlreadyCaught, setWasAlreadyCaught] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [throwing, setThrowing] = useState(false);
  const [catchAnim, setCatchAnim] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const [message, setMessage] = useState("");
  const [spriteData, setSpriteData] = useState(null);
  const eggModalRef = useRef(null);

  useEffect(() => {
    setWasAlreadyCaught(caught.some((p) => p.id === current.id));
  }, [current.id, caught]);

  // Fetch sprite
  useEffect(() => {
    let cancelled = false;
    setSpriteData(null);
    fetch("https://pokeapi.co/api/v2/pokemon/" + current.id)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const sprite = data.sprites && (
          (data.sprites.other && data.sprites.other["official-artwork"] && data.sprites.other["official-artwork"].front_default) ||
          data.sprites.front_default
        );
        if (sprite) {
          return fetch(sprite).then((r) => r.blob()).then((blob) => {
            if (cancelled) return;
            const reader = new FileReader();
            reader.onload = () => { if (!cancelled) setSpriteData(reader.result); };
            reader.readAsDataURL(blob);
          });
        }
      })
      .catch(() => { if (!cancelled) setSpriteData("error"); });
    return () => { cancelled = true; };
  }, [current.id]);

  // Focus management + Escape key
  useEffect(() => {
    if (eggModalRef.current) {
      const first = eggModalRef.current.querySelector("button");
      if (first) first.focus();
    }
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      // Restore focus to trigger
      if (triggerRef && triggerRef.current) triggerRef.current.focus();
    };
  }, [onClose, triggerRef]);

  const caughtCount = Math.min(caught.length, 6);
  const isMaster = caught.length >= 10;

  const throwBall = () => {
    if (wasAlreadyCaught || throwing) return;
    setThrowing(true);
    setShaking(true);
    setMessage("");
    setTimeout(() => {
      setShaking(false);
      const success = Math.random() > 0.35;
      if (success) {
        setCatchAnim(true);
        setTimeout(() => {
          setAnimDone(true);
          setCatchAnim(false);
          const newCaught = [...caught, current];
          setCaught(newCaught);
          if (newCaught.length >= 6) onMaster();
          setMessage("Gotcha! " + current.name + " was caught!");
          setTimeout(() => {
            const remaining = POKEMON.filter((p) => !newCaught.some((c) => c.id === p.id));
            if (remaining.length > 0) {
              const next = remaining[Math.floor(Math.random() * remaining.length)];
              setWasAlreadyCaught(false);
              setCurrent(next);
              setMessage("");
              setAnimDone(false);
            }
            setThrowing(false);
          }, 1400);
        }, 900);
      } else {
        setMessage(current.name + " broke free!");
        setTimeout(() => { setMessage(""); setThrowing(false); }, 1200);
      }
    }, 800);
  };

  const pokeballSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABkElEQVR4nK2VTU4CQRCFP2QibkXc4pIFd3CiN5Cfi+AxIHAAwxm8ByQGwhVIMBGWhAQk42JeM8VIM2OwkkpPV716ma6uqga/FIBA6198B8ApKQJ7s69IAVbA1xmsV4pa74BXYKTASLoHxkBHGBuTSdoG5oZsCrxLp8Y+F/YsuXN0TGAPqJ3A1oCuwXV85M7QEHAFPBl/AJSkgbE/CxsBL2nygrQMfAJbIJTv2nPEonwIu1XsreE7/IFLQV/7EknVNIE3acP8UEnfA45TEmCCP4BvoKr9ldYhSS6dDlOYB2AnDstJRaQzHfNGa4ukKkLivE9ka6ewM3G4egegLvAGWChfC2BNXLehwT7Ktk5hN+Ko26NkSWS+vW18SnypaIt0QpyGkKRBWmSkwl7ejvgi7GnyXF5VpEeXly63gfa23Bok5dY0wa7c+njKrUBc3Jc2SNnwHYAQt2UELInb1UmelnaN450Xdgh18Q+hHjmGUJr8X8dmmtwN+jG/B/1IvrKPNO/TdE/yWiylPmymXPSY/gBY9oZgBkYM5AAAAABJRU5ErkJggg==";

  return (
    <div onClick={onClose} role="presentation"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div ref={eggModalRef} onClick={(e) => e.stopPropagation()}
        role="dialog" aria-modal="true" aria-label="Pokémon catching game — easter egg"
        style={{ background: "#0a0a12", border: "2px solid #facc15", borderRadius: "16px", padding: "40px", maxWidth: "480px", width: "90%", boxShadow: "0 0 60px rgba(250,204,21,0.15)", textAlign: "center" }}>

        <div style={{ fontFamily: FONTS.mono, fontSize: "10px", color: "#facc15", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>✦ You found the easter egg ✦</div>
        <h2 style={{ fontFamily: FONTS.headline, fontSize: "48px", color: "#fff", marginBottom: "32px", letterSpacing: "0.04em" }}>GOTTA CATCH &apos;EM ALL</h2>

        {/* Pokemon display */}
        <div style={{ background: "#06060e", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "28px", marginBottom: "24px" }}>
          <div style={{ width: "96px", height: "96px", margin: "0 auto 8px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!animDone && (
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                animation: catchAnim ? "catchShrink 0.9s ease forwards" : shaking ? "shake 0.15s ease infinite" : "float 3s ease-in-out infinite",
              }}>
                {wasAlreadyCaught ? <span style={{ fontSize: "72px" }}>⭐</span>
                  : spriteData && spriteData !== "error"
                    ? <img src={spriteData} alt={current.name} style={{ width: "96px", height: "96px", objectFit: "contain", imageRendering: "auto" }} />
                    : spriteData === "error" ? <span style={{ fontSize: "64px" }}>❓</span>
                    : <span style={{ fontFamily: FONTS.mono, fontSize: "11px", color: "#7b7b7b" }}>loading...</span>}
              </div>
            )}
            {catchAnim && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", animation: "pokeballDrop 0.9s ease forwards", fontSize: "72px", zIndex: 2 }}>⭐</div>
            )}
            {catchAnim && ["✦","✦","✦","✦","✦","✦"].map((s, i) => (
              <div key={i} style={{
                position: "absolute", top: "50%", left: "50%",
                fontSize: i % 2 === 0 ? "14px" : "10px",
                color: ["#facc15","#fff","#10b981","#facc15","#fff","#a78bfa"][i],
                animation: `starBurst${i} 0.9s ease forwards`,
                zIndex: 3, pointerEvents: "none",
              }}>{s}</div>
            ))}
          </div>
          <div style={{ fontFamily: FONTS.headline, fontSize: "32px", color: "#fff", letterSpacing: "0.04em" }}>{current.name}</div>
          <div style={{ fontFamily: FONTS.mono, fontSize: "11px", color: "#7b7b7b", marginTop: "4px" }}>
            {wasAlreadyCaught ? "Already caught..." : "Wild Pokémon appeared!"}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div role="status" aria-live="polite" style={{
            fontFamily: FONTS.mono, fontSize: "13px",
            color: message.includes("Gotcha") ? "#4ade80" : "#f87171",
            marginBottom: "16px", letterSpacing: "0.08em", minHeight: "20px",
          }}>{message}</div>
        )}

        {/* Throw button */}
        <button onClick={throwBall} disabled={wasAlreadyCaught || throwing}
          aria-label={wasAlreadyCaught ? "Already caught" : throwing ? "Throwing..." : "Throw Poké Ball"}
          style={{
            background: wasAlreadyCaught || throwing ? "#1a1a1a" : "#facc15",
            color: wasAlreadyCaught || throwing ? "#7b7b7b" : "#000",
            border: "none", borderRadius: "8px",
            fontFamily: FONTS.headline, fontSize: "22px", letterSpacing: "0.08em",
            padding: "12px 32px", cursor: wasAlreadyCaught || throwing ? "default" : "pointer",
            marginBottom: "24px", width: "100%", transition: "all 0.15s",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
          }}>
          {wasAlreadyCaught ? "ALREADY CAUGHT..." : throwing ? "..." : (
            <>THROW POKÉ BALL<img src={pokeballSrc} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} /></>
          )}
        </button>

        {/* Progress */}
        <div style={{ fontFamily: FONTS.mono, fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.1em" }}>
          {caughtCount} / 6 caught{isMaster && " · Pokémon Master 🏆"}
        </div>

        {/* Close */}
        <button onClick={onClose} aria-label="Close easter egg"
          style={{ background: "none", border: "none", color: "#606060", fontFamily: FONTS.mono, fontSize: "11px", cursor: "pointer", marginTop: "16px", letterSpacing: "0.08em" }}>
          [ close ]
        </button>
      </div>
    </div>
  );
}
