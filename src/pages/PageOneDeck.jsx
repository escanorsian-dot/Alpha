import React, { useEffect, useRef, useState } from "react";
import FullscreenShell from "../components/common/FullscreenShell";
import RedScene from "../components/page1/RedScene";
import IntroOverlay from "../components/page1/IntroOverlay";
import FloatingInfoCards from "../components/page1/FloatingInfoCards";
import { PAGE1_SECTIONS } from "../data/page1Sections";
import { createAudio, safePlay, stopAudio } from "../utils/audio";

export default function PageOneDeck() {
  const [triggerA, setTriggerA] = useState(0);
  const [entered, setEntered] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const [activeKeys, setActiveKeys] = useState([]);

  const ambientAudioRef = useRef(null);
  const impactAudioRef = useRef(null);
  const uiTickAudioRef = useRef(null);
  const beatTimeoutsRef = useRef([]);

  useEffect(() => {
    ambientAudioRef.current = createAudio("/audio/power-ambient.mp3", {
      loop: true,
      volume: 0.38,
    });

    impactAudioRef.current = createAudio("/audio/impact-beat.mp3", {
      loop: false,
      volume: 0.95,
    });

    uiTickAudioRef.current = createAudio("/audio/ui-tick.mp3", {
      loop: false,
      volume: 0.55,
    });

    return () => {
      beatTimeoutsRef.current.forEach(clearTimeout);
      stopAudio(ambientAudioRef.current);
      stopAudio(impactAudioRef.current);
      stopAudio(uiTickAudioRef.current);
    };
  }, []);

  const playUITick = () => {
    if (!uiTickAudioRef.current) return;
    uiTickAudioRef.current.currentTime = 0;
    safePlay(uiTickAudioRef.current);
  };

  const playLetterBeats = () => {
    beatTimeoutsRef.current.forEach(clearTimeout);
    beatTimeoutsRef.current = [];

    const timings = [0, 180, 360, 540, 720, 900];

    timings.forEach((delay) => {
      const id = setTimeout(() => {
        if (impactAudioRef.current) {
          impactAudioRef.current.currentTime = 0;
          safePlay(impactAudioRef.current);
        }
        setFlashKey((prev) => prev + 1);
      }, delay);

      beatTimeoutsRef.current.push(id);
    });
  };

  const handleEnter = async () => {
    if (entered) return;
    setEntered(true);
    await safePlay(ambientAudioRef.current);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (key === "enter" && !entered) {
        handleEnter();
        return;
      }

      if (!entered) return;

      if (key === "a") {
        setTriggerA((prev) => prev + 1);
        playLetterBeats();
        playUITick();
        return;
      }

      if (PAGE1_SECTIONS[key]) {
        playUITick();
        setActiveKeys((prev) => {
          if (prev.includes(key)) return prev;
          return [...prev, key];
        });
        return;
      }

      if (key === "x") {
        setActiveKeys([]);
        playUITick();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [entered]);

  return (
    <FullscreenShell>
      <RedScene triggerA={triggerA} flashKey={flashKey} activeKeys={activeKeys} />
      <IntroOverlay triggerA={triggerA} flashKey={flashKey} />
      <FloatingInfoCards activeKeys={activeKeys} sectionsMap={PAGE1_SECTIONS} />

      {!entered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "grid",
            placeItems: "center",
            background:
              "radial-gradient(circle at center, rgba(255,120,0,0.12), transparent 20%), rgba(0,0,0,0.72)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "32px",
              border: "1px solid rgba(255,120,0,0.22)",
              borderRadius: "28px",
              background: "rgba(18,4,0,0.6)",
              boxShadow: "0 0 40px rgba(255,80,0,0.15)",
              maxWidth: "700px",
              width: "min(90vw, 700px)",
            }}
          >
            <div
              style={{
                color: "#ffb26b",
                fontSize: "12px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
              }}
            >
              SIESTA CINEMATIC DECK
            </div>

            <h1
              style={{
                marginTop: "18px",
                fontSize: "clamp(36px, 6vw, 88px)",
                lineHeight: 0.95,
                color: "#ffd0a8",
                textTransform: "uppercase",
                textShadow:
                  "0 0 14px rgba(255,120,0,0.35), 0 0 32px rgba(255,60,0,0.18)",
              }}
            >
              Enter The Deck
            </h1>

            <p
              style={{
                marginTop: "16px",
                color: "rgba(255,220,190,0.78)",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Click Power On or press Enter to initialize the cinematic environment.
            </p>

            <button
              onClick={handleEnter}
              style={{
                marginTop: "24px",
                border: "1px solid rgba(255,150,50,0.34)",
                background:
                  "linear-gradient(180deg, rgba(255,120,30,0.22), rgba(120,20,0,0.3))",
                color: "#fff1e4",
                padding: "16px 28px",
                borderRadius: "999px",
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 0 24px rgba(255,90,0,0.18)",
              }}
            >
              Power On
            </button>

            <div
              style={{
                marginTop: "16px",
                color: "rgba(255,220,190,0.5)",
                fontSize: "13px",
                letterSpacing: "0.12em",
              }}
            >
              Enter = power on · A = intro · Q W E R T Y = info · X = clear
            </div>
          </div>
        </div>
      )}
    </FullscreenShell>
  );
}