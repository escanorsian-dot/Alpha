import React, { useEffect, useMemo, useRef, useState } from "react";
import FullscreenShell from "../components/common/FullscreenShell";
import PageTwoScene from "../components/page2/PageTwoScene";
import PageTwoOverlay from "../components/page2/PageTwoOverlay";
import { PAGE2_CONTENT } from "../data/page2Content";
import { createAudio, safePlay, stopAudio } from "../utils/audio";

export default function PageTwoDeck() {
  const [activeKey, setActiveKey] = useState("q");
  const [introKey, setIntroKey] = useState(0);
  const [pulse, setPulse] = useState(0);

  const ambientAudioRef = useRef(null);
  const tickAudioRef = useRef(null);

  useEffect(() => {
    ambientAudioRef.current = createAudio("/audio/power-ambient.mp3", {
      loop: true,
      volume: 0.24,
    });

    tickAudioRef.current = createAudio("/audio/ui-tick.mp3", {
      loop: false,
      volume: 0.52,
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

  const active = useMemo(() => PAGE2_CONTENT[activeKey], [activeKey]);

  return (
    <FullscreenShell>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, rgba(20,80,140,0.22), transparent 24%), linear-gradient(180deg, #030816 0%, #030b18 100%)",
        }}
      >
        <PageTwoScene pulse={pulse} />
        <PageTwoOverlay active={active} introKey={introKey} />
      </div>
    </FullscreenShell>
  );
}