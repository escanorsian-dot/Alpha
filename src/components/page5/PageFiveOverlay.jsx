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
            animation: `pt5FadeUp 420ms ease ${320 + index * 120}ms forwards`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              marginTop: 8,
              background: "linear-gradient(180deg, #ffd2ff, #d965ff)",
              boxShadow: "0 0 10px rgba(217,101,255,0.65)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              color: "rgba(245,226,255,0.9)",
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

export default function PageFiveOverlay({ active, introKey = 0 }) {
  const currentPhoto = active?.photo || "/images/page5/photo1.jpg";

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
            "radial-gradient(circle at 22% 20%, rgba(217,101,255,0.12), transparent 18%), radial-gradient(circle at 82% 22%, rgba(255,140,220,0.08), transparent 18%), linear-gradient(180deg, rgba(18,5,23,0.10), rgba(14,5,18,0.40))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(220,120,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,120,255,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            opacity: 0.22,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "6%",
            left: "4%",
            maxWidth: "34vw",
          }}
        >
          <div
            style={{
              color: "#f0b8ff",
              textTransform: "uppercase",
              letterSpacing: "0.44em",
              fontSize: 12,
              opacity: 0,
              animation: "pt5FadeUp 700ms ease 120ms forwards",
            }}
          >
            Visual Media Layer
          </div>

          <div
            key={`intro-title-${introKey}-${active?.title}`}
            style={{
              marginTop: 16,
              color: "#fff7ff",
              fontWeight: 900,
              fontSize: "clamp(42px, 4.8vw, 82px)",
              lineHeight: 0.94,
              letterSpacing: "-0.05em",
              textShadow: "0 0 24px rgba(220,120,255,0.14)",
              opacity: 0,
              animation: "pt5TitleIn 900ms cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {active?.title || "Visual Showcase"}
          </div>

          <div
            style={{
              marginTop: 22,
              maxWidth: "32vw",
              color: "rgba(245,226,255,0.84)",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0,
              animation: "pt5FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.description}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "28%",
            top: "18%",
            width: "28vw",
            height: "34vh",
            borderRadius: 28,
            border: "1px solid rgba(220,120,255,0.20)",
            background:
              "linear-gradient(180deg, rgba(30,10,36,0.82), rgba(16,7,22,0.72))",
            boxShadow:
              "0 0 34px rgba(190,90,255,0.10), inset 0 1px 0 rgba(255,255,255,0.05)",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          <img
            src={currentPhoto}
            alt="Project visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 16,
              top: 14,
              color: "#ffd8ff",
              fontSize: 11,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              background: "rgba(0,0,0,0.26)",
              padding: "8px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            Photo Frame
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "28%",
            bottom: "9%",
            width: "28vw",
            height: "24vh",
            borderRadius: 28,
            border: "1px solid rgba(220,120,255,0.20)",
            background:
              "linear-gradient(180deg, rgba(30,10,36,0.82), rgba(16,7,22,0.72))",
            boxShadow:
              "0 0 34px rgba(190,90,255,0.10), inset 0 1px 0 rgba(255,255,255,0.05)",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          <video
            src="/videos/demo.mp4"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            autoPlay
            muted
            loop
            playsInline
          />

          <div
            style={{
              position: "absolute",
              left: 16,
              top: 14,
              color: "#ffd8ff",
              fontSize: 11,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              background: "rgba(0,0,0,0.26)",
              padding: "8px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            Demo Clip
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
            border: "1px solid rgba(220,120,255,0.18)",
            background:
              "linear-gradient(180deg, rgba(28,10,34,0.84), rgba(16,7,21,0.72))",
            boxShadow:
              "0 0 40px rgba(190,90,255,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(14px)",
            padding: "26px 24px",
          }}
        >
          <div
            style={{
              color: "#f3bcff",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: 11,
              opacity: 0,
              animation: "pt5FadeUp 700ms ease 180ms forwards",
            }}
          >
            {active?.eyebrow}
          </div>

          <div
            key={`panel-title-${active?.title}`}
            style={{
              marginTop: 14,
              color: "#fff7ff",
              fontSize: "clamp(28px, 2.5vw, 44px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              opacity: 0,
              animation: "pt5FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.title}
          </div>

          <div
            style={{
              marginTop: 18,
              color: "rgba(244,226,255,0.9)",
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0,
              animation: "pt5FadeUp 700ms ease 340ms forwards",
            }}
          >
            {active?.body}
          </div>

          <div
            style={{
              marginTop: 22,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(220,120,255,0.3), transparent)",
              opacity: 0,
              animation: "pt5FadeUp 700ms ease 420ms forwards",
            }}
          />

          <BulletList bullets={active?.bullets || []} />

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 30,
              boxShadow: "inset 0 0 80px rgba(220,120,255,0.04)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pt5FadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pt5TitleIn {
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
      `}</style>
    </>
  );
}