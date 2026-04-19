export function pageOneShellStyle() {
  return {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    background: `
      radial-gradient(circle at 50% 48%, rgba(255,160,60,0.14), transparent 14%),
      radial-gradient(circle at 18% 18%, rgba(255,80,20,0.08), transparent 24%),
      radial-gradient(circle at 82% 20%, rgba(255,200,120,0.07), transparent 22%),
      radial-gradient(circle at 50% 88%, rgba(180,30,0,0.10), transparent 28%),
      linear-gradient(180deg, #020100 0%, #110300 20%, #1b0600 46%, #100300 74%, #030100 100%)
    `,
    color: "#ffe0c2",
    fontFamily: "Inter, system-ui, sans-serif",
  };
}

export function redGridOverlayStyle() {
  return {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.04,
    backgroundImage:
      "linear-gradient(rgba(255,170,70,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,110,30,0.08) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };
}

export function bloodTextStyle() {
  return {
    color: "#ffb36b",
    textShadow:
      "0 0 10px rgba(255,140,50,0.65), 0 0 24px rgba(255,110,20,0.36), 0 0 42px rgba(110,20,0,0.25)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  };
}