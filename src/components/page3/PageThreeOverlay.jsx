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
            animation: `pt3FadeUp 420ms ease ${320 + index * 120}ms forwards`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              marginTop: 8,
              background: "linear-gradient(180deg, #ffe0a8, #ffad4a)",
              boxShadow: "0 0 10px rgba(255,173,74,0.65)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              color: "rgba(255,236,214,0.9)",
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

export default function PageThreeOverlay({ active, introKey = 0 }) {
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
            "radial-gradient(circle at 16% 24%, rgba(255,190,90,0.11), transparent 18%), radial-gradient(circle at 80% 20%, rgba(255,120,50,0.09), transparent 16%), linear-gradient(180deg, rgba(18,9,3,0.10), rgba(12,6,3,0.42))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,190,120,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,190,120,0.045) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            opacity: 0.24,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "7%",
            right: "4%",
            maxWidth: "34vw",
            textAlign: "right",
          }}
        >
          <div
            style={{
              color: "#ffca78",
              textTransform: "uppercase",
              letterSpacing: "0.46em",
              fontSize: 12,
              opacity: 0,
              animation: "pt3FadeUp 700ms ease 120ms forwards",
            }}
          >
            Architecture Intelligence Layer
          </div>

          <div
            key={`intro-title-${introKey}-${active?.title}`}
            style={{
              marginTop: 16,
              color: "#fff7ef",
              fontWeight: 900,
              fontSize: "clamp(42px, 4.8vw, 80px)",
              lineHeight: 0.94,
              letterSpacing: "-0.05em",
              textShadow: "0 0 24px rgba(255,190,100,0.14)",
              opacity: 0,
              animation: "pt3TitleIn 900ms cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {active?.title || "Architecture Layer"}
          </div>

          <div
            style={{
              marginTop: 22,
              marginLeft: "auto",
              maxWidth: "32vw",
              color: "rgba(255,230,205,0.84)",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0,
              animation: "pt3FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.description}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "4%",
            top: "16%",
            width: "30vw",
            minHeight: "56vh",
            borderRadius: 30,
            border: "1px solid rgba(255,190,100,0.18)",
            background:
              "linear-gradient(180deg, rgba(28,12,4,0.84), rgba(16,8,4,0.72))",
            boxShadow:
              "0 0 40px rgba(255,163,71,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(14px)",
            padding: "26px 24px",
          }}
        >
          <div
            style={{
              color: "#ffcf82",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: 11,
              opacity: 0,
              animation: "pt3FadeUp 700ms ease 180ms forwards",
            }}
          >
            {active?.eyebrow}
          </div>

          <div
            key={`panel-title-${active?.title}`}
            style={{
              marginTop: 14,
              color: "#fff7ef",
              fontSize: "clamp(28px, 2.5vw, 44px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              opacity: 0,
              animation: "pt3FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.title}
          </div>

          <div
            style={{
              marginTop: 18,
              color: "rgba(255,235,215,0.9)",
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0,
              animation: "pt3FadeUp 700ms ease 340ms forwards",
            }}
          >
            {active?.body}
          </div>

          <div
            style={{
              marginTop: 22,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(255,190,100,0.3), transparent)",
              opacity: 0,
              animation: "pt3FadeUp 700ms ease 420ms forwards",
            }}
          />

          <BulletList bullets={active?.bullets || []} />

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 30,
              boxShadow: "inset 0 0 80px rgba(255,194,120,0.04)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: "4%",
            bottom: "4%",
            width: "40vw",
            height: 76,
            borderRadius: 24,
            border: "1px solid rgba(255,190,100,0.15)",
            background:
              "linear-gradient(180deg, rgba(28,12,5,0.72), rgba(15,8,4,0.62))",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 22px",
            opacity: 0,
            animation: "pt3FadeUp 700ms ease 360ms forwards",
          }}
        >
          <div
            style={{
              color: "rgba(255,232,210,0.86)",
              letterSpacing: "0.12em",
              fontSize: 13,
              textTransform: "uppercase",
              marginRight: 14,
            }}
          >
            Architecture layer active
          </div>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ffca75",
              boxShadow: "0 0 16px rgba(255,202,117,0.8)",
              animation: "pt3Blink 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pt3FadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pt3TitleIn {
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
        @keyframes pt3Blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}