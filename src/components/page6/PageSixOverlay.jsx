import React from "react";

function StatCard({ label, value, delay = 0 }) {
  return (
    <div
      style={{
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "linear-gradient(180deg, rgba(34,39,48,0.86), rgba(20,24,32,0.74))",
        padding: "16px 18px",
        opacity: 0,
        animation: `pt6FadeUp 500ms ease ${delay}ms forwards`,
      }}
    >
      <div
        style={{
          color: "#cdd8e8",
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 10,
          color: "#f8fbff",
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function DataTable({ rows = [] }) {
  return (
    <div
      style={{
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "linear-gradient(180deg, rgba(28,32,40,0.92), rgba(18,21,28,0.80))",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1.2fr 0.8fr 0.8fr 0.9fr",
          padding: "14px 18px",
          background: "rgba(255,255,255,0.04)",
          color: "#d5deea",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.24em",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div>Unit</div>
        <div>Mode</div>
        <div>Value</div>
        <div>State</div>
        <div>Remark</div>
      </div>

      {rows.map((row, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.2fr 0.8fr 0.8fr 0.9fr",
            padding: "14px 18px",
            color: "rgba(240,245,255,0.92)",
            fontSize: 14,
            borderBottom:
              index !== rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
          }}
        >
          {row.map((cell, cellIndex) => (
            <div key={cellIndex}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

function MiniBars() {
  const bars = [68, 82, 74, 91, 88, 95];

  return (
    <div
      style={{
        height: 170,
        borderRadius: 24,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "linear-gradient(180deg, rgba(28,32,40,0.84), rgba(18,21,28,0.72))",
        padding: "18px",
        display: "flex",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      {bars.map((bar, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            height: `${bar}%`,
            borderRadius: "16px 16px 8px 8px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(186,200,221,0.78))",
            boxShadow: "0 0 18px rgba(255,255,255,0.08)",
            opacity: 0,
            animation: `pt6Grow 700ms ease ${180 + index * 90}ms forwards`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

export default function PageSixOverlay({ active, introKey = 0 }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          overflow: "hidden",
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 24% 18%, rgba(255,255,255,0.07), transparent 18%), radial-gradient(circle at 84% 20%, rgba(220,228,240,0.06), transparent 18%), linear-gradient(180deg, rgba(14,17,23,0.10), rgba(10,12,17,0.44))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            opacity: 0.14,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "6%",
            left: "4%",
            maxWidth: "34vw",
          }}
        >
          <div
            style={{
              color: "#d8e1ee",
              textTransform: "uppercase",
              letterSpacing: "0.42em",
              fontSize: 12,
              opacity: 0,
              animation: "pt6FadeUp 700ms ease 120ms forwards",
            }}
          >
            Data Result Layer
          </div>

          <div
            key={`intro-title-${introKey}-${active?.title}`}
            style={{
              marginTop: 16,
              color: "#ffffff",
              fontWeight: 900,
              fontSize: "clamp(42px, 4.8vw, 80px)",
              lineHeight: 0.94,
              letterSpacing: "-0.05em",
              textShadow: "0 0 18px rgba(255,255,255,0.08)",
              opacity: 0,
              animation: "pt6TitleIn 900ms cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {active?.title || "Data Console"}
          </div>

          <div
            style={{
              marginTop: 22,
              maxWidth: "32vw",
              color: "rgba(230,236,245,0.84)",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0,
              animation: "pt6FadeUp 700ms ease 260ms forwards",
            }}
          >
            {active?.description}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "24%",
            top: "17%",
            width: "33vw",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          {(active?.stats || []).map((item, index) => (
            <StatCard
              key={item.label}
              label={item.label}
              value={item.value}
              delay={220 + index * 100}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            left: "24%",
            bottom: "8%",
            width: "33vw",
          }}
        >
          <MiniBars />
        </div>

        <div
          style={{
            position: "absolute",
            right: "4%",
            top: "16%",
            width: "34vw",
          }}
        >
          <div
            style={{
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "linear-gradient(180deg, rgba(30,34,42,0.84), rgba(18,21,28,0.74))",
              boxShadow: "0 0 28px rgba(255,255,255,0.04)",
              padding: "22px",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                color: "#d5deea",
                textTransform: "uppercase",
                letterSpacing: "0.30em",
                fontSize: 11,
                marginBottom: 16,
              }}
            >
              {active?.eyebrow}
            </div>

            <div
              style={{
                color: "#ffffff",
                fontSize: "clamp(26px, 2.2vw, 40px)",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              {active?.title}
            </div>

            <div
              style={{
                marginTop: 16,
                color: "rgba(230,236,245,0.9)",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              {active?.body}
            </div>

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gap: 10,
              }}
            >
              {(active?.bullets || []).map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: 10,
                    color: "rgba(230,236,245,0.86)",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      marginTop: 7,
                      background: "#eef4ff",
                      boxShadow: "0 0 10px rgba(255,255,255,0.35)",
                      flexShrink: 0,
                    }}
                  />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <DataTable rows={active?.table || []} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pt6FadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pt6TitleIn {
          0% {
            opacity: 0;
            transform: translateY(36px) scale(0.97);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes pt6Grow {
          0% {
            opacity: 0;
            transform: scaleY(0.2);
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </>
  );
}