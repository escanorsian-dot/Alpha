import React from "react";

export default function InfoPageShell({
  children,
  accent = "#58d5ff",
  background = `
    radial-gradient(circle at 20% 20%, rgba(88,213,255,0.08), transparent 22%),
    radial-gradient(circle at 80% 30%, rgba(120,140,255,0.08), transparent 18%),
    linear-gradient(180deg, #020814 0%, #030b18 100%)
  `,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background,
        color: "white",
        }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.22,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "10%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          border: `10px solid ${accent}22`,
          opacity: 0.7,
          filter: "blur(0.4px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "-6%",
          width: "25vw",
          height: "25vw",
          borderRadius: "50%",
          border: `8px solid ${accent}33`,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "-8%",
          bottom: "-20%",
          width: "60vw",
          height: "30vw",
          borderRadius: "50%",
          border: `8px solid ${accent}22`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            borderRadius: "50%",
            background: accent,
            opacity: 0.35 + (i % 4) * 0.12,
            left: `${5 + ((i * 17) % 88)}%`,
            top: `${8 + ((i * 13) % 80)}%`,
            boxShadow: `0 0 12px ${accent}`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1.2fr 0.9fr 1fr",
          gridTemplateRows: "auto 1fr auto",
          gap: "18px",
          height: "100vh",
          padding: "28px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </div>
  );
}