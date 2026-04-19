import React from "react";
import { pageOneShellStyle, redGridOverlayStyle } from "../../styles/pageOneTheme";

export default function FullscreenShell({ children }) {
  return (
    <div style={pageOneShellStyle()}>
      <div style={redGridOverlayStyle()} />
      {children}
    </div>
  );
}