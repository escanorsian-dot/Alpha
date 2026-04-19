export const PAGE6_CONTENT = {
  q: {
    eyebrow: "Data Overview",
    title: "Technical Data Console",
    description:
      "This page is built to present measured values, system readings, and concise technical proof in a premium lab-console style.",
    body:
      "Use this page when explaining test results, operating values, and overall technical evidence gathered from the project.",
    bullets: [
      "Measurement-focused presentation",
      "Clean technical proof layer",
      "Built for result discussion",
    ],
    stats: [
      { label: "Voltage", value: "230 V" },
      { label: "Current", value: "5.2 A" },
      { label: "Power", value: "1.19 kW" },
      { label: "Efficiency", value: "91%" },
    ],
    table: [
      ["Case 1", "Grid Only", "230 V", "5.2 A", "Stable"],
      ["Case 2", "RES Only", "220 V", "4.8 A", "Moderate"],
      ["Case 3", "Grid + RES", "228 V", "5.0 A", "Best"],
    ],
  },

  w: {
    eyebrow: "Measurement Layer",
    title: "Live Reading Matrix",
    description:
      "This mode is ideal for displaying system readings, sensor outputs, and important measured parameters collected during working conditions.",
    body:
      "Use it to explain how values were captured and how different operational states changed the observed readings.",
    bullets: [
      "Reading-oriented view",
      "Sensor and meter values",
      "Useful for live result narration",
    ],
    stats: [
      { label: "Frequency", value: "50 Hz" },
      { label: "PF", value: "0.96" },
      { label: "Load", value: "82%" },
      { label: "THD", value: "3.1%" },
    ],
    table: [
      ["Sensor 1", "Input Voltage", "229 V", "Normal", "Active"],
      ["Sensor 2", "Line Current", "5.1 A", "Normal", "Active"],
      ["Sensor 3", "Temp", "34 °C", "Safe", "Active"],
    ],
  },

  e: {
    eyebrow: "Process Result",
    title: "Execution Data Flow",
    description:
      "This state is useful for presenting the relationship between commands, process stages, and the resulting outputs observed from the system.",
    body:
      "Use it to connect logic flow with measurable data and show how each stage of execution affects results.",
    bullets: [
      "Logic-to-data explanation",
      "Process-linked measurements",
      "Strong for system validation",
    ],
    stats: [
      { label: "Latency", value: "180 ms" },
      { label: "Response", value: "Fast" },
      { label: "Switch Time", value: "0.8 s" },
      { label: "Retry Count", value: "0" },
    ],
    table: [
      ["Step 1", "Input Detected", "180 ms", "Yes", "Passed"],
      ["Step 2", "Relay Triggered", "0.8 s", "Yes", "Passed"],
      ["Step 3", "Output Stable", "1.1 s", "Yes", "Passed"],
    ],
  },

  r: {
    eyebrow: "Result Comparison",
    title: "Case Comparison Table",
    description:
      "This mode highlights case-wise comparison and helps explain how system performance changes under different configurations.",
    body:
      "Use it to compare operating cases and justify which setup performs better and why.",
    bullets: [
      "Best for case comparison",
      "Clear result table storytelling",
      "Good for viva explanation",
    ],
    stats: [
      { label: "Best Case", value: "Case 3" },
      { label: "Worst Case", value: "Case 2" },
      { label: "Stability", value: "High" },
      { label: "Errors", value: "0" },
    ],
    table: [
      ["Case 1", "Grid Only", "Medium", "Stable", "Accepted"],
      ["Case 2", "RES Only", "Lower", "Moderate", "Accepted"],
      ["Case 3", "Grid + RES", "Highest", "Best", "Preferred"],
    ],
  },

  t: {
    eyebrow: "Analysis Layer",
    title: "Trend And Performance Data",
    description:
      "This mode supports discussion of trends, pattern changes, and summary interpretation of measured performance.",
    body:
      "Use it when you want the data page to feel more analytical and conclusion-driven rather than only value-based.",
    bullets: [
      "Analysis-focused mode",
      "Trend explanation ready",
      "Supports conclusion building",
    ],
    stats: [
      { label: "Trend", value: "Improving" },
      { label: "Deviation", value: "Low" },
      { label: "Accuracy", value: "94%" },
      { label: "Repeatability", value: "High" },
    ],
    table: [
      ["Trial 1", "89%", "Low", "Good", "Recorded"],
      ["Trial 2", "91%", "Lower", "Better", "Recorded"],
      ["Trial 3", "94%", "Lowest", "Best", "Recorded"],
    ],
  },

  y: {
    eyebrow: "Validation Layer",
    title: "Final Data Summary",
    description:
      "This state gives the page a final technical summary role where the most important values and conclusions are presented together.",
    body:
      "Use it near the end of the presentation when closing the data portion and moving toward final conclusions.",
    bullets: [
      "Final technical proof view",
      "Summary-oriented presentation",
      "Strong ending for results section",
    ],
    stats: [
      { label: "Overall Result", value: "Successful" },
      { label: "System Health", value: "Stable" },
      { label: "Confidence", value: "High" },
      { label: "Recommendation", value: "Approved" },
    ],
    table: [
      ["Validation", "Electrical", "Passed", "Stable", "Approved"],
      ["Validation", "Response", "Passed", "Fast", "Approved"],
      ["Validation", "Integration", "Passed", "Clean", "Approved"],
    ],
  },
};