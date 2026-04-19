import React from "react";

function BulletList({ bullets = [] }) {
  return (
    <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
      {bullets.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: 10,
            opacity: 0,
            animation: `pt7FadeUp 420ms ease ${320 + index * 120}ms forwards`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              marginTop: 7,
              background: "linear-gradient(180deg, #fff1c9, #ffbf5f)",
              boxShadow: "0 0 10px rgba(255,191,95,0.55)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              color: "rgba(245,231,205,0.92)",
              fontSize: 15,
              lineHeight: 1.65,
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}

function FinalImageStrip() {
  const images = [
    "/images/page7/final1.jpg",
    "/images/page7/final2.jpg",
    "/images/page7/final3.jpg",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
        marginTop: 18,
      }}
    >
      {images.map((src, index) => (
        <div
          key={src}
          style={{
            height: 110,
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,210,130,0.14)",
            background: "rgba(255,255,255,0.03)",
            opacity: 0,
            animation: `pt7FadeUp 500ms ease ${240 + index * 100}ms forwards`,
          }}
        >
          <img
            src={src}
            alt={`Final visual ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function PageSevenOverlay({ active, introKey = 0 }) {
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
            "radial-gradient(circle at 18% 20%, rgba(255,185,80,0.08), transparent 18%), radial-gradient(circle at 84% 20%, rgba(255,230,180,0.06), transparent 18%), linear-gradient(180deg, rgba(9,7,4,0.10), rgba(8,6,4,0.44))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,220,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,220,170,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "4%",
            top: "7%",
            width: "42vw",
          }}
        >
          <div
            style={{
              color: "#ffd28a",
              textTransform: "uppercase",
              letterSpacing: "0.44em",
              fontSize: 12,
              opacity: 0,
              animation: "pt7FadeUp 700ms ease 120ms forwards",
            }}
          >
            Grand Finale Layer
          </div>

          <div
            key={`intro-title-${introKey}-${active?.title}`}
            style={{
              marginTop: 16,
              color: "#fff8e8",
              fontWeight: 900,
              fontSize: "clamp(48px, 5.3vw, 92px)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              textShadow: "0 0 24px rgba(255,190,90,0.10)",
              opacity: 0,
              animation: "pt7TitleIn 900ms cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {active?.title || "Thank You"}
          </div>

          <div
            style={{
              marginTop: 20,
              maxWidth: "38vw",
              color: "rgba(244,232,206,0.86)",
              fontSize: 17,
              lineHeight: 1.8,
              opacity: 0,
              animation: "pt7FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.description}
          </div>

          <div
            style={{
              marginTop: 22,
              maxWidth: "39vw",
              color: "rgba(236,224,200,0.90)",
              fontSize: 15,
              lineHeight: 1.85,
              opacity: 0,
              animation: "pt7FadeUp 700ms ease 340ms forwards",
            }}
          >
            {active?.body}
          </div>

          <BulletList bullets={active?.bullets || []} />

          <FinalImageStrip />
        </div>

        <div
          style={{
            position: "absolute",
            right: "4%",
            top: "13%",
            width: "27vw",
            borderRadius: 30,
            border: "1px solid rgba(255,205,120,0.14)",
            background:
              "linear-gradient(180deg, rgba(24,16,9,0.84), rgba(14,10,7,0.74))",
            boxShadow:
              "0 0 34px rgba(255,180,70,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(12px)",
            padding: "24px 22px",
          }}
        >
          <div
            style={{
              color: "#ffd596",
              textTransform: "uppercase",
              letterSpacing: "0.32em",
              fontSize: 11,
            }}
          >
            Project Credits
          </div>

          <div
            style={{
              marginTop: 18,
              color: "#fff6e6",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Team
          </div>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gap: 12,
              color: "rgba(242,230,205,0.9)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            <div>Sriyansh Kumar</div>
            <div>Aniket Kumar</div>
            <div>Shubham Kumar</div>
            <div>Roshan Kumar</div>
            <div>Uday Kumar</div>
          </div>

          <div
            style={{
              marginTop: 24,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(255,200,120,0.24), transparent)",
            }}
          />

          <div
            style={{
              marginTop: 20,
              color: "#ffd596",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontSize: 11,
            }}
          >
            Institution
          </div>

          <div
            style={{
              marginTop: 12,
              color: "rgba(242,230,205,0.9)",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Department of Electrical Engineering
            <br />
            Your College Name
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "4%",
            bottom: "5%",
            width: "27vw",
            height: 86,
            borderRadius: 24,
            border: "1px solid rgba(255,205,120,0.14)",
            background:
              "linear-gradient(180deg, rgba(24,16,9,0.72), rgba(14,10,7,0.62))",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            opacity: 0,
            animation: "pt7FadeUp 700ms ease 360ms forwards",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ffcf7d",
              boxShadow: "0 0 16px rgba(255,207,125,0.75)",
              marginRight: 14,
              animation: "pt7Blink 1.8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              color: "rgba(245,232,207,0.86)",
              letterSpacing: "0.12em",
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Presentation complete
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pt7FadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pt7TitleIn {
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
        @keyframes pt7Blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}