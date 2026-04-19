import React from "react";
import TypeRevealText from "./TypeRevealText";

function cardTheme(style, accent) {
  const base = {
    border: `1px solid ${accent}33`,
    boxShadow: `0 0 28px ${accent}14, inset 0 1px 0 rgba(255,255,255,0.05)`,
    background:
      "linear-gradient(180deg, rgba(30,8,2,0.84), rgba(10,3,1,0.74))",
  };

  if (style === "working") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(44,12,3,0.88), rgba(14,5,1,0.78))",
    };
  }

  if (style === "model") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(36,14,6,0.86), rgba(10,5,2,0.78))",
    };
  }

  if (style === "data") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(28,10,2,0.90), rgba(8,4,1,0.80))",
    };
  }

  if (style === "graphs") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(44,14,3,0.92), rgba(12,4,1,0.80))",
    };
  }

  if (style === "credits") {
    return {
      ...base,
      background:
        "linear-gradient(180deg, rgba(34,12,5,0.88), rgba(10,4,2,0.78))",
    };
  }

  return base;
}

function renderBlock(section) {
  const accent = section.accent;

  if (section.style === "data") {
    return (
      <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {[
          ["Voltage", "292.7 V"],
          ["Current", "8.78 A"],
          ["Power", "2571 W"],
          ["Relay", "ON"],
        ].map(([label, value], i) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              border: `1px solid ${accent}22`,
              borderRadius: 12,
              padding: "10px 12px",
              background: "rgba(255,255,255,0.03)",
              opacity: 0,
              animation: `rowFadeIn 360ms ease ${500 + i * 120}ms forwards`,
            }}
          >
            <span>{label}</span>
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
          marginTop: 16,
          height: 150,
          display: "flex",
          alignItems: "end",
          gap: 8,
          padding: 12,
          borderRadius: 16,
          border: `1px solid ${accent}22`,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {[44, 88, 70, 120, 82, 138].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: h,
              borderRadius: "10px 10px 0 0",
              background: `linear-gradient(180deg, ${accent}, rgba(255,120,30,0.32))`,
              boxShadow: `0 0 14px ${accent}22`,
              transformOrigin: "bottom",
              transform: "scaleY(0)",
              animation: `barRise 500ms cubic-bezier(0.16, 1, 0.3, 1) ${500 + i * 90}ms forwards`,
            }}
          />
        ))}
      </div>
    );
  }

  if (section.style === "credits") {
    return (
      <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {["Sriyansh Kumar", "Aniket Kumar", "Shubham", "Roshan", "Uday"].map((name, i) => (
          <div
            key={name}
            style={{
              borderRadius: 12,
              border: `1px solid ${accent}22`,
              padding: "10px 12px",
              background: "rgba(255,255,255,0.03)",
              opacity: 0,
              transform: "translateY(12px)",
              animation: `rowFadeInMove 360ms ease ${520 + i * 110}ms forwards`,
            }}
          >
            {name}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: 16,
        borderRadius: 16,
        border: `1px solid ${accent}22`,
        background: "rgba(255,255,255,0.03)",
        padding: 14,
        lineHeight: 1.7,
        color: "rgba(255,239,217,0.88)",
      }}
    >
      <TypeRevealText
        text="This section is active and ready for richer project-specific custom visuals."
        speed={14}
        delay={500}
      />
    </div>
  );
}

function FloatingCard({ section, index }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 7 + index,
        color: "#fff3e2",
        borderRadius: 24,
        padding: 20,
        backdropFilter: "blur(16px)",
        boxSizing: "border-box",
        animation: `floatCardIn 520ms cubic-bezier(0.16, 1, 0.3, 1)`,
        maxWidth: "92vw",
        ...section.position,
        ...cardTheme(section.style, section.accent),
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: section.accent,
          opacity: 0,
          animation: "rowFadeIn 320ms ease 80ms forwards",
        }}
      >
        {section.kicker} · Key {section.key}
      </div>

      <h3
        style={{
          marginTop: 12,
          marginBottom: 0,
          fontSize: "clamp(22px, 2vw, 34px)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          opacity: 0,
          animation: "rowFadeInMove 380ms ease 140ms forwards",
        }}
      >
        {section.title}
      </h3>

      <p
        style={{
          marginTop: 14,
          marginBottom: 0,
          color: "rgba(255,236,214,0.82)",
          lineHeight: 1.75,
          fontSize: 15,
          minHeight: 90,
        }}
      >
        <TypeRevealText text={section.description} speed={10} delay={260} />
      </p>

      <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
        {section.points.map((point, i) => (
          <div
            key={i}
            style={{
              borderLeft: `2px solid ${section.accent}`,
              paddingLeft: 10,
              lineHeight: 1.6,
              color: "rgba(255,242,226,0.92)",
              opacity: 0,
              transform: "translateX(12px)",
              animation: `pointSlideIn 360ms ease ${520 + i * 120}ms forwards`,
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
            transform: translateY(28px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes rowFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes rowFadeInMove {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pointSlideIn {
          0% {
            opacity: 0;
            transform: translateX(12px);
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