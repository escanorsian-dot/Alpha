import React from "react";

export default function InfoHero({
  eyebrow = "SYSTEM INTERFACE",
  title = "Project Information Page",
  description = "Main project presentation dashboard with command-driven modules.",
  accent = "#58d5ff",
  status = "ONLINE",
}) {
  return (
    <div
      style={{
        gridColumn: "1 / 3",
        gridRow: "1 / 2",
        alignSelf: "start",
        paddingTop: "2px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          letterSpacing: "0.42em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: "16px",
        }}
      >
        {eyebrow}
      </div>

      <h1
        style={{
          margin: 0,
          fontSize: "clamp(42px, 5.4vw, 80px)",
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          maxWidth: "900px",
          color: "rgba(255,255,255,0.98)",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          marginTop: "28px",
          marginBottom: "20px",
          maxWidth: "780px",
          fontSize: "17px",
          lineHeight: 1.7,
          color: "rgba(220,232,248,0.86)",
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 18px",
          borderRadius: "999px",
          border: `1px solid ${accent}55`,
          color: "#e8f8ff",
          background: `${accent}12`,
          fontSize: "14px",
          fontWeight: 600,
          boxShadow: `0 0 18px ${accent}18`,
        }}
      >
        STATUS: {status}
      </div>
    </div>
  );
}