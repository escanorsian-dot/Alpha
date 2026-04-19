import React from "react";

function panelTheme(style, accent) {
  const base = {
    border: `1px solid ${accent}33`,
    boxShadow: `0 0 30px ${accent}18, inset 0 1px 0 rgba(255,255,255,0.05)`,
    background:
      "linear-gradient(180deg, rgba(30,8,2,0.88), rgba(10,3,1,0.78))",
  };

  if (style === "working") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(42,12,2,0.90), rgba(14,5,1,0.82))",
    };
  }

  if (style === "model") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(36,14,6,0.88), rgba(10,5,2,0.82))",
    };
  }

  if (style === "data") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(28,10,2,0.92), rgba(8,4,1,0.84))",
    };
  }

  if (style === "graphs") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(44,14,3,0.92), rgba(12,4,1,0.82))",
    };
  }

  if (style === "credits") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(32,12,5,0.90), rgba(10,4,2,0.82))",
    };
  }

  return base;
}

function renderStyleBlock(section) {
  const accent = section.accent;

  if (section.style === "data") {
    return (
      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 10,
        }}
      >
        {[
          ["Voltage", "292.7 V"],
          ["Current", "8.78 A"],
          ["Power", "2571 W"],
          ["Mode", "ACTIVE"],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              border: `1px solid ${accent}22`,
              borderRadius: 14,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.03)",
              color: "#fff2de",
            }}
          >
            <span style={{ opacity: 0.8 }}>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    );
  }

  if (section.style === "graphs") {
    return (
      <div
        style={{
          marginTop: 18,
          display: "flex",
          alignItems: "end",
          gap: 10,
          height: 170,
          padding: 14,
          borderRadius: 18,
          border: `1px solid ${accent}22`,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {[54, 96, 78, 132, 88, 150].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: h,
              borderRadius: "10px 10px 0 0",
              background: `linear-gradient(180deg, ${accent}, rgba(255,120,30,0.35))`,
              boxShadow: `0 0 18px ${accent}22`,
            }}
          />
        ))}
      </div>
    );
  }

  if (section.style === "credits") {
    return (
      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 10,
        }}
      >
        {["Sriyansh Kumar", "Aniket Kumar", "Shubham", "Roshan", "Uday"].map(
          (name) => (
            <div
              key={name}
              style={{
                borderRadius: 14,
                border: `1px solid ${accent}22`,
                padding: "12px 14px",
                background: "rgba(255,255,255,0.03)",
                color: "#fff2de",
                letterSpacing: "0.04em",
              }}
            >
              {name}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: 18,
        borderRadius: 18,
        border: `1px solid ${accent}22`,
        background: "rgba(255,255,255,0.03)",
        padding: 16,
        color: "rgba(255,239,217,0.88)",
        lineHeight: 1.8,
      }}
    >
      This mode is active and ready for richer custom visuals, text blocks,
      diagrams, or narration-specific content.
    </div>
  );
}

export default function InfoPanel({ section }) {
  if (!section) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        right: "3.5%",
        zIndex: 6,
        width: "min(34vw, 500px)",
        maxWidth: "92vw",
        minWidth: "unset",
        borderRadius: 28,
        backdropFilter: "blur(18px)",
        padding: 24,
        color: "#fff4e5",
        animation: "panelEnter 420ms cubic-bezier(0.16, 1, 0.3, 1)",
        boxSizing: "border-box",
        overflow: "hidden",
        ...panelTheme(section.style, section.accent),
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: section.accent,
        }}
      >
        {section.kicker} · Key {section.key}
      </div>

      <h2
        style={{
          marginTop: 14,
          marginBottom: 0,
          fontSize: "clamp(24px, 2.2vw, 42px)",
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          color: "#fff3df",
          textShadow: "0 6px 18px rgba(0,0,0,0.28)",
        }}
      >
        {section.title}
      </h2>

      <p
        style={{
          marginTop: 16,
          marginBottom: 0,
          color: "rgba(255,238,214,0.82)",
          fontSize: 16,
          lineHeight: 1.8,
        }}
      >
        {section.description}
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 10,
        }}
      >
        {section.points.map((point, i) => (
          <div
            key={i}
            style={{
              borderLeft: `2px solid ${section.accent}`,
              paddingLeft: 12,
              color: "rgba(255,241,220,0.92)",
              lineHeight: 1.7,
            }}
          >
            {point}
          </div>
        ))}
      </div>

      {renderStyleBlock(section)}

      <style>{`
        @keyframes panelEnter {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}