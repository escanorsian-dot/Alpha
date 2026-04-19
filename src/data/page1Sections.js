export const PAGE1_SECTIONS = {
  q: {
    key: "Q",
    id: "overview",
    kicker: "Project Overview",
    title: "Siesta Smart Presentation Deck",
    accent: "#ffd08a",
    position: {
      top: "16%",
      left: "3.5%",
      width: "min(28vw, 420px)",
    },
    description:
      "This deck presents the project as a cinematic holographic command interface. It combines a 3D model, responsive visuals, audio-driven motion, and key-based exploration for an immersive technical showcase.",
    points: [
      "Interactive holographic project presentation",
      "Keyboard driven cinematic storytelling",
      "3D Blender model integrated into web deck",
      "Expandable structure for AI, data, graphs, and narration",
    ],
    style: "overview",
  },

  w: {
    key: "W",
    id: "working",
    kicker: "Working Principle",
    title: "How The Deck Operates",
    accent: "#ffb15e",
    position: {
      top: "16%",
      right: "3.5%",
      width: "min(29vw, 430px)",
    },
    description:
      "The deck reacts to commands and transforms the same page into multiple project viewpoints. Each section can reveal technical explanations, highlight features, and later connect with Siesta AI narration and gesture control.",
    points: [
      "A triggers the cinematic intro",
      "Q-W-E-R-T-Y switch the information modes",
      "Visual pulse syncs with beat timing",
      "Future ready for voice and gesture integration",
    ],
    style: "working",
  },

  e: {
    key: "E",
    id: "model",
    kicker: "Model Highlight",
    title: "3D Hologram Focus",
    accent: "#ffe0ad",
    position: {
      top: "52%",
      left: "4%",
      width: "min(27vw, 390px)",
    },
    description:
      "This mode is for explaining the Blender model itself. It can be used to highlight structure, smart zones, embedded devices, sensors, or any visual part of the project model.",
    points: [
      "Use for structural model explanation",
      "Can later include hotspot zoom targets",
      "Supports section-based technical breakdown",
      "Ideal for guided narration by Siesta AI",
    ],
    style: "model",
  },

  r: {
    key: "R",
    id: "data",
    kicker: "Data Layer",
    title: "Measured Values And Tables",
    accent: "#ffc773",
    position: {
      top: "62%",
      right: "4%",
      width: "min(27vw, 390px)",
    },
    description:
      "This mode will hold your technical values, observations, comparisons, and result tables. It acts as the data console of the presentation deck.",
    points: [
      "Voltage, current, power and status values",
      "Case study comparison",
      "Observed behavior under conditions",
      "Ready for real project tables",
    ],
    style: "data",
  },

  t: {
    key: "T",
    id: "graphs",
    kicker: "Performance View",
    title: "Visual Analysis And Trends",
    accent: "#ff9d4d",
    position: {
      bottom: "7%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "min(34vw, 520px)",
    },
    description:
      "This mode is meant for animated bars, line graphs, or result trends. It will visually show performance, comparison, scheduling, or efficiency patterns in a cinematic form.",
    points: [
      "Graph-ready section",
      "Ideal for scheduling and system performance",
      "Can display trend lines and bars",
      "Presentation-friendly visual analytics",
    ],
    style: "graphs",
  },

  y: {
    key: "Y",
    id: "credits",
    kicker: "Creators And Mentors",
    title: "Project Team Deck",
    accent: "#ffdcb2",
    position: {
      top: "34%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "min(30vw, 460px)",
    },
    description:
      "This mode acknowledges the team behind the project. It can present creators, mentors, department, and credits in a polished closing layout.",
    points: [
      "Student creators and contributors",
      "Guide and mentor details",
      "Department and institute identity",
      "Closing credit screen style section",
    ],
    style: "credits",
  },
};