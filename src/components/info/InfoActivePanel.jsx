import React from "react";

export default function InfoActivePanel({
  accent = "#58d5ff",
  activeItem,
  fallbackTitle = "Active Panel",
  fallbackDescription = "Press a key from the command tiles to switch modules.",
}) {
  const title = activeItem?.title || fallbackTitle;
  const description = activeItem?.description || fallbackDescription;
  const body = activeItem?.body || "Awaiting module selection.";
  const points = activeItem?.points || [];

  return (
    <div
      style={{
        gridColumn: "3 / 4",
        gridRow: "1 / 3",
        minHeight: 0,
        borderRadius: "30px",
        border: `1px solid ${accent}2f`,
        background:
          "linear-gradient(180deg, rgba(6,16,30,0.88), rgba(3,9,18,0.80))",
        boxShadow: `0 0 28px ${accent}12, inset 0 1px 0 rgba(255,255,255,0.04)`,
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "24px 26px",
          borderBottom: `1px solid ${accent}24`,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.00))",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: accent,
            marginBottom: "12px",
          }}
        >
          Active Panel
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 2.6vw, 50px)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {title}
          </h2>

          <div
            style={{
              whiteSpace: "nowrap",
              padding: "10px 16px",
              borderRadius: "999px",
              border: `1px solid ${accent}44`,
              background: `${accent}14`,
              color: "#dff8ff",
              fontSize: "14px",
            }}
          >
            LOCKED PREVIEW
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "26px",
          display: "grid",
          gap: "18px",
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            borderRadius: "24px",
            border: `1px solid ${accent}24`,
            background: "rgba(255,255,255,0.02)",
            padding: "18px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "16px",
            }}
          >
            Explanation Box
          </div>

          <p
            style={{
              margin: 0,
              color: "rgba(230,239,250,0.92)",
              fontSize: "17px",
              lineHeight: 1.75,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            borderRadius: "20px",
            border: `1px solid ${accent}20`,
            background: "rgba(255,255,255,0.03)",
            padding: "16px 18px",
            color: "rgba(240,246,255,0.92)",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          {body}
        </div>

        <div style={{ display: "grid", gap: "10px" }}>
          {points.map((point, index) => (
            <div
              key={index}
              style={{
                padding: "14px 16px",
                borderRadius: "18px",
                border: `1px solid ${accent}1e`,
                background: "rgba(255,255,255,0.03)",
                color: "rgba(235,243,252,0.92)",
                fontSize: "15px",
                lineHeight: 1.55,
              }}
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}