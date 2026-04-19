import React from "react";

function BulletList({ bullets = [] }) {
  return (
    <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
      {bullets.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            opacity: 0,
            animation: `pt4FadeUp 420ms ease ${320 + index * 120}ms forwards`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              marginTop: 8,
              background: "linear-gradient(180deg, #caffea, #42ff9d)",
              boxShadow: "0 0 10px rgba(66,255,157,0.65)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              color: "rgba(223,255,240,0.9)",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PageFourOverlay({ active, introKey = 0 }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          overflow: "hidden",
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 20% 20%, rgba(70,255,170,0.10), transparent 18%), radial-gradient(circle at 82% 28%, rgba(120,255,210,0.08), transparent 16%), linear-gradient(180deg, rgba(3,17,12,0.12), rgba(3,12,9,0.42))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(70,255,170,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(70,255,170,0.045) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            opacity: 0.24,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(150,255,210,0.05) 50%, transparent 75%)",
            transform: "translateX(-100%)",
            animation: "pt4Sweep 7s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "7%",
            left: "4%",
            maxWidth: "34vw",
          }}
        >
          <div
            style={{
              color: "#7cffc7",
              textTransform: "uppercase",
              letterSpacing: "0.46em",
              fontSize: 12,
              opacity: 0,
              animation: "pt4FadeUp 700ms ease 120ms forwards",
            }}
          >
            Emerald Control Layer
          </div>

          <div
            key={`intro-title-${introKey}-${active?.title}`}
            style={{
              marginTop: 16,
              color: "#f4fff9",
              fontWeight: 900,
              fontSize: "clamp(44px, 5vw, 84px)",
              lineHeight: 0.94,
              letterSpacing: "-0.05em",
              textShadow: "0 0 24px rgba(90,255,180,0.14)",
              opacity: 0,
              animation: "pt4TitleIn 900ms cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {active?.title || "Emerald Control"}
          </div>

          <div
            style={{
              marginTop: 22,
              maxWidth: "32vw",
              color: "rgba(220,255,235,0.84)",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0,
              animation: "pt4FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.description}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "4%",
            top: "14%",
            width: "30vw",
            minHeight: "56vh",
            borderRadius: 30,
            border: "1px solid rgba(100,255,180,0.18)",
            background:
              "linear-gradient(180deg, rgba(6,24,17,0.84), rgba(4,15,11,0.72))",
            boxShadow:
              "0 0 40px rgba(70,255,170,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(14px)",
            padding: "26px 24px",
          }}
        >
          <div
            style={{
              color: "#8cffcf",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: 11,
              opacity: 0,
              animation: "pt4FadeUp 700ms ease 180ms forwards",
            }}
          >
            {active?.eyebrow}
          </div>

          <div
            key={`panel-title-${active?.title}`}
            style={{
              marginTop: 14,
              color: "#f3fff8",
              fontSize: "clamp(28px, 2.5vw, 44px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              opacity: 0,
              animation: "pt4FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.title}
          </div>

          <div
            style={{
              marginTop: 18,
              color: "rgba(224,255,239,0.9)",
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0,
              animation: "pt4FadeUp 700ms ease 340ms forwards",
            }}
          >
            {active?.body}
          </div>

          <div
            style={{
              marginTop: 22,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(100,255,180,0.3), transparent)",
              opacity: 0,
              animation: "pt4FadeUp 700ms ease 420ms forwards",
            }}
          />

          <BulletList bullets={active?.bullets || []} />

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 30,
              boxShadow: "inset 0 0 80px rgba(120,255,190,0.04)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: "4%",
            bottom: "4%",
            width: "42vw",
            height: 78,
            borderRadius: 24,
            border: "1px solid rgba(100,255,180,0.15)",
            background:
              "linear-gradient(180deg, rgba(4,20,14,0.74), rgba(3,13,10,0.62))",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            opacity: 0,
            animation: "pt4FadeUp 700ms ease 360ms forwards",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#6effb9",
              boxShadow: "0 0 16px rgba(110,255,185,0.8)",
              marginRight: 14,
              animation: "pt4Blink 1.8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              color: "rgba(220,255,236,0.85)",
              letterSpacing: "0.12em",
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Emerald command layer active
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pt4Sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pt4FadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pt4TitleIn {
          0% {
            opacity: 0;
            transform: translateY(36px) scale(0.97);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes pt4Blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}