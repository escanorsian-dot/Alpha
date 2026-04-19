import React from "react";

export default function PageTwoIntroPulse({ triggerA = 0, accent = "#7dd3fc" }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 6,
        overflow: "hidden",
      }}
    >
      {triggerA > 0 && (
        <div
          key={`page2-intro-${triggerA}`}
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "12%",
              transform: "translateX(-50%)",
              fontSize: "clamp(56px, 8vw, 132px)",
              fontWeight: 900,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(220,245,255,0.96)",
              textShadow: `0 0 24px ${accent}, 0 0 54px ${accent}66`,
              animation: "page2TitlePulse 1400ms cubic-bezier(0.16,1,0.3,1)",
              whiteSpace: "nowrap",
            }}
          >
            CRYO
          </div>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "18vw",
              height: "18vw",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: `2px solid ${accent}66`,
              boxShadow: `0 0 36px ${accent}22`,
              animation: "ringPulse 1200ms ease-out forwards",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "30vw",
              height: "30vw",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: `1px solid ${accent}44`,
              animation: "ringPulseLarge 1400ms ease-out forwards",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at center, ${accent}22, transparent 30%)`,
              animation: "screenFlash 900ms ease-out forwards",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes page2TitlePulse {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-80px) scale(0.86);
            filter: blur(12px);
          }
          40% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.04);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes ringPulse {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.8);
          }
        }

        @keyframes ringPulseLarge {
          0% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.45);
          }
        }

        @keyframes screenFlash {
          0% { opacity: 0.55; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}