export function pageOneShellStyle() {
  return {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    background: `
      radial-gradient(circle at 50% 45%, rgba(255,140,40,0.18), transparent 22%),
      radial-gradient(circle at 15% 20%, rgba(255,60,10,0.12), transparent 30%),
      radial-gradient(circle at 85% 15%, rgba(255,180,100,0.10), transparent 28%),
      radial-gradient(circle at 50% 95%, rgba(160,20,0,0.15), transparent 35%),
      linear-gradient(180deg, #010000 0%, #0d0401 25%, #160500 50%, #0d0401 75%, #010000 100%)
    `,
    color: "#ffebd6",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  };
}

export function redGridOverlayStyle() {
  return {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.05,
    backgroundImage: `
      linear-gradient(rgba(255,150,50,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,90,20,0.1) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
    maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 90%)",
    WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 90%)",
  };
}

export function bloodTextStyle() {
  return {
    color: "#ffb26b",
    textShadow: `
      0 0 4px rgba(255,160,60,0.8),
      0 0 12px rgba(255,100,20,0.4),
      0 0 28px rgba(255,80,0,0.2),
      0 0 45px rgba(180,30,0,0.1)
    `,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontWeight: "700",
  };
}