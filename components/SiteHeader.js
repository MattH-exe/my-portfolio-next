"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Ticker from "./Ticker";

export default function SiteHeader({ onEasterEgg, eggFound, isMaster, eggButtonRef, showTicker = true }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(6,6,8,0.95)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
    }}>
      <Nav onEasterEgg={onEasterEgg} eggFound={eggFound} isMaster={isMaster} eggButtonRef={eggButtonRef} />
      <div aria-hidden="true" style={{ position: "relative", height: "1px", background: "#222" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, height: "100%",
          width: scrollProgress + "%", background: "#10b981",
          transition: "width 0.05s linear",
        }} />
      </div>
      {showTicker && <Ticker />}
    </div>
  );
}
