import React from "react";
import TypeRevealText from "./TypeRevealText";

function cardTheme(style, accent) {
  const base = {
    border: `1px solid ${accent}44`,
    boxShadow: `0 0 35px ${accent}15, inset 0 1px 1px rgba(255,255,255,0.08)`,
    background: "linear-gradient(165deg, rgba(25,7,2,0.92), rgba(8,3,1,0.85))",
  };

  if (style === "working") {
    return {
      ...base,
      background: "linear-gradient(165deg, rgba(40,10,2,0.95), rgba(12,4,1,0.88))",
    };
  }

  if (style === "model") {
    return {
      ...base,
      background: "linear-gradient(165deg, rgba(32,12,5,0.94), rgba(10,4,2,0.88))",
    };
  }

  if (style === "data") {
    return {
      ...base,
      background: "linear-gradient(165deg, rgba(24,8,2,0.96), rgba(8,4,1,0.90))",
    };
  }

  if (style === "graphs") {
    return {
      ...base,
      background: "linear-gradient(165deg, rgba(42,12,3,0.96), rgba(10,4,1,0.88))",
    };
  }

  if (style === "credits") {
    return {
      ...base,
      background: "linear-gradient(165deg, rgba(30,10,4,0.94), rgba(8,3,2,0.88))",
    };
  }

  return base;
}

function renderBlock(section) {
  const accent = section.accent;

  if (section.style === "data") {
    return (
      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        {[
          ["Voltage", "292.7 V"],
          ["Current", "8.78 A"],
          ["Power", "2571 W"],
          ["Relay", "ACTIVE"],
        ].map(([label, value], i) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              border: `1px solid ${accent}18`,
              borderRadius: 14,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.02)",
              opacity: 0,
              animation: `rowFadeIn 400ms ease ${550 + i * 100}ms forwards`,
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{label}</span>
            <strong style={{ fontSize: 15, color: accent, textShadow: `0 0 10px ${accent}44` }}>{value}</strong>
          </div>
        ))}
      </div>
    );
  }

  if (section.style === "graphs") {
    return (
      <div
        style={{
          marginTop: 20,
          height: 160,
          display: "flex",
          alignItems: "end",
          gap: 6,
          padding: "16px 14px",
          borderRadius: 18,
          border: `1px solid ${accent}18`,
          background: "rgba(255,255,255,0.02)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `linear-gradient(${accent}33 1px, transparent 1px)`, backgroundSize: "100% 20px", pointerEvents: "none" }} />
        {[44, 88, 70, 120, 82, 138, 95].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: h,
              borderRadius: "4px 4px 1px 1px",
              background: `linear-gradient(180deg, ${accent}, ${accent}33)`,
              boxShadow: `0 0 12px ${accent}33`,
              transformOrigin: "bottom",
              transform: "scaleY(0)",
              animation: `barRise 600ms cubic-bezier(0.2, 1, 0.2, 1) ${600 + i * 80}ms forwards`,
            }}
          />
        ))}
      </div>
    );
  }

  if (section.style === "credits") {
    return (
      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        {["Sriyansh Kumar", "Aniket Kumar", "Shubham", "Roshan", "Uday"].map((name, i) => (
          <div
            key={name}
            style={{
              borderRadius: 14,
              border: `1px solid ${accent}18`,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.02)",
              opacity: 0,
              transform: "translateY(10px)",
              animation: `rowFadeInMove 400ms ease ${550 + i * 90}ms forwards`,
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              gap: 12
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
            {name}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: 20,
        borderRadius: 18,
        border: `1px solid ${accent}18`,
        background: "rgba(255,255,255,0.02)",
        padding: 18,
        lineHeight: 1.7,
        color: "rgba(255,245,230,0.9)",
        fontSize: 14,
        position: "relative"
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 18, transform: "translateY(-50%)", background: "#110401", padding: "0 8px", fontSize: 10, color: accent, letterSpacing: "0.1em" }}>TERMINAL_OUTPUT</div>
      <TypeRevealText
        text="Interface synchronized. Sub-system diagnostics confirmed. Ready for project-specific visual data injection."
        speed={14}
        delay={600}
      />
    </div>
  );
}

function FloatingCard({ section, index }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10 + index,
        color: "#fff",
        borderRadius: 28,
        padding: "24px 28px",
        backdropFilter: "blur(24px) saturate(120%)",
        WebkitBackdropFilter: "blur(24px) saturate(120%)",
        boxSizing: "border-box",
        animation: `floatCardIn 600ms cubic-bezier(0.2, 1, 0.2, 1) forwards`,
        maxWidth: "94vw",
        width: "min(400px, 94vw)",
        ...section.position,
        ...cardTheme(section.style, section.accent),
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: section.accent,
          opacity: 0,
          animation: "rowFadeIn 400ms ease 100ms forwards",
          marginBottom: 16
        }}
      >
        {section.kicker} · 0{index + 1}
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: "clamp(24px, 2.5vw, 38px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          opacity: 0,
          animation: "rowFadeInMove 500ms ease 150ms forwards",
          color: "#fff",
          textShadow: "0 2px 10px rgba(0,0,0,0.3)"
        }}
      >
        {section.title}
      </h3>

      <div
        style={{
          marginTop: 18,
          marginBottom: 0,
          color: "rgba(255,240,225,0.85)",
          lineHeight: 1.7,
          fontSize: 15,
          minHeight: 80,
        }}
      >
        <TypeRevealText text={section.description} speed={12} delay={300} />
      </div>

      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        {section.points.map((point, i) => (
          <div
            key={i}
            style={{
              borderLeft: `2px solid ${section.accent}`,
              paddingLeft: 14,
              lineHeight: 1.6,
              color: "rgba(255,248,240,0.95)",
              fontSize: 14,
              opacity: 0,
              transform: "translateX(15px)",
              animation: `pointSlideIn 450ms ease ${500 + i * 110}ms forwards`,
            }}
          >
            {point}
          </div>
        ))}
      </div>

      {renderBlock(section)}

      <style>{`
        @keyframes floatCardIn {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes rowFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes rowFadeInMove {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pointSlideIn {
          0% {
            opacity: 0;
            transform: translateX(15px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes barRise {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function FloatingInfoCards({ activeKeys, sectionsMap }) {
  return (
    <>
      {activeKeys.map((key, index) => {
        const section = sectionsMap[key];
        if (!section) return null;
        return <FloatingCard key={`${key}-${index}`} section={section} index={index} />;
      })}
    </>
  );
}