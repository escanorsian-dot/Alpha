import React, { useEffect, useState } from "react";
import PageOneDeck from "./pages/PageOneDeck";
import PageTwoDeck from "./pages/PageTwoDeck";
import PageThreeDeck from "./pages/PageThreeDeck";
import PageFourDeck from "./pages/PageFourDeck";
import PageFiveDeck from "./pages/PageFiveDeck";
import PageSixDeck from "./pages/PageSixDeck";
import PageSevenDeck from "./pages/PageSevenDeck";

export default function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const onKeyDown = (event) => {
      console.log("KEY PRESSED =", event.key);

      if (event.key === "1") setPage(1);
      if (event.key === "2") setPage(2);
      if (event.key === "3") setPage(3);
      if (event.key === "4") setPage(4);
      if (event.key === "5") setPage(5);
      if (event.key === "6") setPage(6);
      if (event.key === "7") setPage(7);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  console.log("CURRENT PAGE =", page);

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden", background: "#000" }}>
      {page === 1 && <PageOneDeck />}
      {page === 2 && <PageTwoDeck />}
      {page === 3 && <PageThreeDeck />}
      {page === 4 && <PageFourDeck />}
      {page === 5 && <PageFiveDeck />}
      {page === 6 && <PageSixDeck />}
      {page === 7 && <PageSevenDeck />}
    </div>
  );
}