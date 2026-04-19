import React, { useEffect, useState } from "react";

export default function TypeRevealText({ text, speed = 16, delay = 0 }) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;
    let intervalId;

    setVisible("");

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setVisible(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <span>
      {visible}
      <span style={{ opacity: 0.7 }}>▋</span>
    </span>
  );
}