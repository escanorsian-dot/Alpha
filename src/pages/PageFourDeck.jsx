import React, { useEffect, useMemo, useRef, useState } from "react";
import FullscreenShell from "../components/common/FullscreenShell";
import PageFourScene from "../components/page4/PageFourScene";
import PageFourOverlay from "../components/page4/PageFourOverlay";
import { PAGE4_CONTENT } from "../data/page4Content";
import { createAudio, safePlay, stopAudio } from "../utils/audio";

export default function PageFourDeck() {
  const [activeKey, setActiveKey] = useState("q");
  const [introKey, setIntroKey] = useState(0);
  const [pulse, setPulse] = useState(0);

  const ambientAudioRef = useRef(null);
  const tickAudioRef = useRef(null);

  useEffect(() => {
    ambientAudioRef.current = createAudio("/audio/power-ambient.mp3", {
      loop: true,
      volume: 0.22,
    });

    tickAudioRef.current = createAudio("/audio/ui-tick.mp3", {
      loop: false,
      volume: 0.5,
    });

    safePlay(ambientAudioRef.current);

    return () => {
      stopAudio(ambientAudioRef.current);
      stopAudio(tickAudioRef.current);
    };
  }, []);

  const playTick = () => {
    if (!tickAudioRef.current) return;
    tickAudioRef.current.currentTime = 0;
    safePlay(tickAudioRef.current);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (key === "a") {
        setIntroKey((prev) => prev + 1);
        setPulse((prev) => prev + 1);
        playTick();
        return;
      }

      if (["q", "w", "e", "r", "t", "y"].includes(key)) {
        setActiveKey(key);
        setPulse((prev) => prev + 1);
        playTick();
        return;
      }

      if (key === "x") {
        setActiveKey("q");
        setPulse((prev) => prev + 1);
        playTick();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const active = useMemo(() => PAGE4_CONTENT[activeKey], [activeKey]);

  return (
    <FullscreenShell>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, rgba(60,255,160,0.16), transparent 22%), linear-gradient(180deg, #03110c 0%, #020c09 100%)",
        }}
      >
        <PageFourScene pulse={pulse} />
        <PageFourOverlay active={active} introKey={introKey} />
      </div>
    </FullscreenShell>
  );
}