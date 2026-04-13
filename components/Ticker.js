"use client";
import React from "react";
import { TICKER_ITEMS } from "../data/projects";
import { FONTS } from "./Styles";

const Ticker = React.memo(function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div aria-hidden="true" style={{
      overflow: "hidden", borderTop: "1px solid #222", borderBottom: "1px solid #222",
      background: "#0a0a0a", padding: "10px 0",
    }}>
      <div style={{
        display: "flex", gap: "0", animation: "ticker 120s linear infinite",
        whiteSpace: "nowrap", willChange: "transform", width: "max-content",
      }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: FONTS.mono, fontSize: "11px", letterSpacing: "0.12em",
            color: "#909090", padding: "0 32px", textTransform: "uppercase", flexShrink: 0,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});

export default Ticker;
