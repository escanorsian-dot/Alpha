import React, { useEffect, useMemo, useRef, useState } from "react";
import FullscreenShell from "../components/common/FullscreenShell";
import PageSevenScene from "../components/page7/PageSevenScene";
import PageSevenOverlay from "../components/page7/PageSevenOverlay";
import { PAGE7_CONTENT } from "../data/page7Content";
import { createAudio, safePlay, stopAudio } from "../utils/audio";

export default function PageSevenDeck() {
  const [activeKey, setActiveKey] = useState("q");
  const [introKey, setIntroKey] = useState(0);
  const [pulse, setPulse] = useState(0);

  const ambientAudioRef = useRef(null);
  const tickAudioRef = useRef(null);

  useEffect(() => {
    ambientAudioRef.current = createAudio("/audio/power-ambient.mp3", {
      loop: true,
      volume: 0.2,
    });

    tickAudioRef.current = createAudio("/audio/ui-tick.mp3", {
      loop: false,
      volume: 0.45,
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

  const active = useMemo(() => PAGE7_CONTENT[activeKey], [activeKey]);

  return (
    <FullscreenShell>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, rgba(255,185,80,0.10), transparent 24%), linear-gradient(180deg, #090704 0%, #060403 100%)",
        }}
      >
        <PageSevenScene pulse={pulse} />
        <PageSevenOverlay active={active} introKey={introKey} />
      </div>
    </FullscreenShell>
  );
}