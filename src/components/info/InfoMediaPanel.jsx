import React from "react";

export default function InfoMediaPanel({
  accent = "#58d5ff",
  title = "VISUAL MODULE",
  children,
}) {
  return (
    <div
      style={{
        gridColumn: "2 / 3",
        gridRow: "2 / 3",
        alignSelf: "stretch",
        justifySelf: "stretch",
        minHeight: 0,
        borderRadius: "28px",
        border: `1px solid ${accent}33`,
        background:
          "linear-gradient(180deg, rgba(8,18,34,0.82), rgba(4,10,20,0.72))",
        boxShadow: `0 0 26px ${accent}10, inset 0 1px 0 rgba(255,255,255,0.04)`,
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(110,180,255,0.10), transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "22px",
          fontSize: "12px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: accent,
          zIndex: 2,
        }}
      >
        {title}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          padding: "56px 22px 22px",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}