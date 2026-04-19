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
            animation: `pt2FadeUp 420ms ease ${320 + index * 120}ms forwards`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              marginTop: 8,
              background: "linear-gradient(180deg, #bff2ff, #63d7ff)",
              boxShadow: "0 0 10px rgba(99,215,255,0.65)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              color: "rgba(220,241,255,0.88)",
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

export default function PageTwoOverlay({ active, introKey = 0 }) {
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
            "radial-gradient(circle at 18% 22%, rgba(100,220,255,0.12), transparent 20%), radial-gradient(circle at 82% 28%, rgba(70,120,255,0.10), transparent 18%), linear-gradient(180deg, rgba(2,10,20,0.18), rgba(2,8,18,0.5))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(120,220,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(120,220,255,0.045) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            opacity: 0.32,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(180,245,255,0.06) 45%, transparent 70%)",
            transform: "translateX(-100%)",
            animation: "pt2Sweep 7s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "6%",
            left: "4%",
            maxWidth: "36vw",
          }}
        >
          <div
            style={{
              color: "#7fdfff",
              textTransform: "uppercase",
              letterSpacing: "0.46em",
              fontSize: 12,
              opacity: 0,
              animation: "pt2FadeUp 700ms ease 120ms forwards",
            }}
          >
            Cryo Presentation Layer
          </div>

          <div
            key={`intro-title-${introKey}-${active?.title}`}
            style={{
              marginTop: 16,
              color: "#f2fbff",
              fontWeight: 900,
              fontSize: "clamp(44px, 5vw, 84px)",
              lineHeight: 0.94,
              letterSpacing: "-0.05em",
              textShadow: "0 0 24px rgba(110,220,255,0.12)",
              opacity: 0,
              animation: "pt2TitleIn 900ms cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {active?.title || "Cryo Interface"}
          </div>

          <div
            style={{
              marginTop: 22,
              maxWidth: "34vw",
              color: "rgba(218,240,255,0.84)",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0,
              animation: "pt2FadeUp 700ms ease 260ms forwards",
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
            border: "1px solid rgba(120,220,255,0.18)",
            background:
              "linear-gradient(180deg, rgba(6,18,34,0.84), rgba(3,10,20,0.74))",
            boxShadow:
              "0 0 40px rgba(85,190,255,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(14px)",
            padding: "26px 24px",
          }}
        >
          <div
            style={{
              color: "#84e1ff",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: 11,
              opacity: 0,
              animation: "pt2FadeUp 700ms ease 180ms forwards",
            }}
          >
            {active?.eyebrow}
          </div>

          <div
            key={`panel-title-${active?.title}`}
            style={{
              marginTop: 14,
              color: "#f3fbff",
              fontSize: "clamp(28px, 2.5vw, 44px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              opacity: 0,
              animation: "pt2FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.title}
          </div>

          <div
            style={{
              marginTop: 18,
              color: "rgba(220,239,252,0.9)",
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0,
              animation: "pt2FadeUp 700ms ease 340ms forwards",
            }}
          >
            {active?.body}
          </div>

          <div
            style={{
              marginTop: 22,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(120,220,255,0.3), transparent)",
              opacity: 0,
              animation: "pt2FadeUp 700ms ease 420ms forwards",
            }}
          />

          <BulletList bullets={active?.bullets || []} />

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 30,
              boxShadow: "inset 0 0 80px rgba(130,220,255,0.04)",
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
            border: "1px solid rgba(120,220,255,0.15)",
            background:
              "linear-gradient(180deg, rgba(4,14,26,0.76), rgba(3,10,18,0.64))",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            opacity: 0,
            animation: "pt2FadeUp 700ms ease 360ms forwards",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#82e2ff",
              boxShadow: "0 0 16px rgba(130,226,255,0.8)",
              marginRight: 14,
              animation: "pt2Blink 1.8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              color: "rgba(220,240,255,0.85)",
              letterSpacing: "0.12em",
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Cryo command layer active
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pt2Sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pt2FadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pt2TitleIn {
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
        @keyframes pt2Blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}