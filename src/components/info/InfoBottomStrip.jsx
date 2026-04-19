import React from "react";

export default function InfoBottomStrip({
  accent = "#58d5ff",
  logs = [],
}) {
  return (
    <div
      style={{
        gridColumn: "2 / 4",
        gridRow: "3 / 4",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "12px",
        alignSelf: "end",
      }}
    >
      <div
        style={{
          borderRadius: "24px",
          border: `1px solid ${accent}28`,
          background:
            "linear-gradient(180deg, rgba(8,18,34,0.74), rgba(4,10,18,0.66))",
          boxShadow: `0 0 18px ${accent}10`,
          padding: "18px",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: accent,
            marginBottom: "12px",
          }}
        >
          Command Log
        </div>

        <div style={{ display: "grid", gap: "10px" }}>
          {logs.map((log, index) => (
            <div
              key={index}
              style={{
                borderRadius: "16px",
                background: "rgba(255,255,255,0.04)",
                padding: "12px 14px",
                color: "rgba(230,239,248,0.92)",
                fontSize: "15px",
              }}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}