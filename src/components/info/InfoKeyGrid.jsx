import React from "react";

function KeyTile({ item, isActive, accent, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: `1px solid ${isActive ? accent : `${accent}2b`}`,
        background: isActive ? `${accent}18` : "rgba(255,255,255,0.02)",
        color: "white",
        borderRadius: "22px",
        padding: "18px 16px",
        minHeight: "104px",
        cursor: "pointer",
        textAlign: "left",
        boxShadow: isActive ? `0 0 22px ${accent}18` : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: "10px",
        }}
      >
        KEY {item.key}
      </div>

      <div
        style={{
          fontSize: "17px",
          lineHeight: 1.25,
          color: "rgba(245,249,255,0.96)",
        }}
      >
        {item.label}
      </div>
    </button>
  );
}

export default function InfoKeyGrid({
  items = [],
  activeKey,
  onSelect,
  accent = "#58d5ff",
}) {
  return (
    <div
      style={{
        gridColumn: "1 / 2",
        gridRow: "2 / 4",
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "14px",
        alignContent: "start",
      }}
    >
      {items.map((item) => (
        <KeyTile
          key={item.key}
          item={item}
          isActive={activeKey === item.key}
          accent={accent}
          onClick={() => onSelect?.(item.key)}
        />
      ))}
    </div>
  );
}