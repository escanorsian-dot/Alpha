import React, { useEffect, useMemo, useState } from "react";

const TITLE = ["S", "I", "E", "S", "T", "A"];

export default function IntroOverlay({ triggerA, flashKey = 0 }) {
  const [active, setActive] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [activeLetter, setActiveLetter] = useState(-1);

  const embers = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${4 + ((i * 91) % 92)}%`,
        size: 4 + (i % 5) * 3,
        duration: 6 + (i % 6),
        delay: (i % 7) * 0.7,
        opacity: 0.12 + (i % 4) * 0.04,
      })),
    []
  );

  useEffect(() => {
    if (!triggerA) return;

    setActive(false);
    setActiveLetter(-1);

    const startTimer = setTimeout(() => setActive(true), 60);

    const pulseTimers = [0, 180, 360, 540, 720, 900].map((delay, index) =>
      setTimeout(() => {
        setActiveLetter(index);
        setTimeout(() => {
          setActiveLetter((current) => (current === index ? -1 : current));
        }, 150);
      }, delay + 80)
    );

    return () => {
      clearTimeout(startTimer);
      pulseTimers.forEach(clearTimeout);
    };
  }, [triggerA]);

  useEffect(() => {
    if (!flashKey) return;
    setFlashOn(true);
    const timer = setTimeout(() => setFlashOn(false), 110);
    return () => clearTimeout(timer);
  }, [flashKey]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 3,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.14,
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.02) 1px, transparent 2px, transparent 4px)",
          backgroundSize: "100% 4px",
          mixBlendMode: "screen",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,210,140,0.08) 48%, rgba(255,130,40,0.12) 50%, rgba(255,210,140,0.08) 52%, transparent 100%)",
          opacity: active ? 0.85 : 0.35,
          transform: "translateY(-100%)",
          animation: "scanSweep 5.8s linear infinite",
          mixBlendMode: "screen",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: flashOn ? 1 : 0,
          transition: "opacity 90ms ease-out",
          background:
            "radial-gradient(circle at center, rgba(255,240,210,0.16), rgba(255,160,50,0.08) 28%, transparent 56%)",
          mixBlendMode: "screen",
        }}
      />

      {embers.map((ember) => (
        <div
          key={ember.id}
          style={{
            position: "absolute",
            left: ember.left,
            bottom: "-40px",
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,236,210,0.95) 0%, rgba(255,176,74,0.78) 35%, rgba(255,92,24,0.18) 68%, transparent 100%)",
            boxShadow:
              "0 0 8px rgba(255,190,90,0.35), 0 0 18px rgba(255,120,30,0.16)",
            opacity: active ? ember.opacity : 0,
            animation: active
              ? `emberRise ${ember.duration}s linear ${ember.delay}s infinite`
              : "none",
            willChange: "transform, opacity",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: active ? 1 : 0,
          transition: "opacity 1000ms ease",
          textAlign: "center",
          width: "min(96vw, 1320px)",
          paddingInline: "24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "0.055em",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            overflow: "visible",
          }}
        >
          {TITLE.map((char, index) => {
            const isPulsing = activeLetter === index;

            return (
              <span
                key={`${char}-${index}`}
                style={{
                  display: "inline-block",
                  paddingInline: "0.01em",
                  fontSize: "clamp(74px, 11vw, 182px)",
                  fontWeight: 1000,
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  background: isPulsing
                    ? "linear-gradient(180deg, #fffdf6 0%, #fff1cf 18%, #ffd98c 42%, #ffaf4d 68%, #7f3208 100%)"
                    : "linear-gradient(180deg, #fff8ea 0%, #ffe0b7 20%, #ffc06f 46%, #d27a2b 72%, #682807 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: isPulsing
                    ? "0 0 12px rgba(255,220,150,0.6), 0 0 35px rgba(255,140,40,0.5), 0 10px 30px rgba(0,0,0,0.4)"
                    : "0 15px 35px rgba(0,0,0,0.4)",
                  filter: isPulsing
                    ? "drop-shadow(0 0 12px rgba(255,220,140,0.65)) drop-shadow(0 0 30px rgba(255,145,40,0.4))"
                    : "drop-shadow(0 2px 0 rgba(255,250,240,0.18)) drop-shadow(0 0 25px rgba(255,170,80,0.15))",
                  transform: active
                    ? isPulsing
                      ? "translateY(-6px) scale(1.06)"
                      : "translateY(0) scale(1)"
                    : "translateY(-120px) scale(1.15)",
                  opacity: active ? 1 : 0,
                  transition:
                    "transform 140ms ease, filter 140ms ease, text-shadow 140ms ease, background 140ms ease",
                  animation: active
                    ? `letterDrop 900ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 180}ms forwards, titleFlicker 6.5s ease-in-out ${1500 + index * 120}ms infinite`
                    : "none",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "14px",
            fontSize: "clamp(13px, 1.5vw, 20px)",
            letterSpacing: "0.46em",
            textTransform: "uppercase",
            color: "rgba(255,224,194,0.8)",
            textShadow: "0 2px 10px rgba(0,0,0,0.28)",
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(24px)",
            transition: "all 1800ms ease 1300ms",
          }}
        >
          Holographic Command Deck
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "8.5%",
          transform: active
            ? "translateX(-50%) translateY(0) scale(1)"
            : "translateX(-50%) translateY(60px) scale(0.96)",
          opacity: active ? 1 : 0,
          transition: "all 1400ms cubic-bezier(0.16, 1, 0.3, 1) 1600ms",
          padding: "20px 32px",
          borderRadius: "24px",
          background: "linear-gradient(165deg, rgba(50,15,5,0.65), rgba(15,5,2,0.85))",
          border: "1px solid rgba(255,180,100,0.25)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px) saturate(120%)",
          WebkitBackdropFilter: "blur(20px) saturate(120%)",
          textAlign: "center",
          minWidth: "min(40vw, 500px)",
        }}
      >
        <div
          style={{
            fontSize: "clamp(26px, 2.5vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            textTransform: "uppercase",
            textShadow: "0 0 20px rgba(255,160,50,0.4), 0 4px 15px rgba(0,0,0,0.4)",
          }}
        >
          SYSTEM READY
        </div>

        <div
          style={{
            marginTop: "8px",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255,180,100,0.8)",
          }}
        >
          [ PRESS 'A' TO INITIALIZE INTERFACE ]
        </div>
      </div>

      <style>{`
        @keyframes scanSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes letterDrop {
          0% {
            transform: translateY(-100px) scale(1.12);
            filter: blur(8px);
            opacity: 0;
          }
          65% {
            transform: translateY(12px) scale(1.02);
            filter: blur(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            filter: blur(0px);
            opacity: 1;
          }
        }

        @keyframes titleFlicker {
          0%, 100% { opacity: 1; }
          8% { opacity: 0.96; }
          9% { opacity: 1; }
          48% { opacity: 0.98; }
          49% { opacity: 0.93; }
          50% { opacity: 1; }
          78% { opacity: 0.97; }
          79% { opacity: 1; }
        }

        @keyframes emberRise {
          0% {
            transform: translate3d(0, 0, 0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(18px, -120vh, 0) scale(1.35);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}