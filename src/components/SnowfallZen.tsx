import React from "react";

const ORIGAMI_SNOWFLAKES = [
    // Simple snowflake 1
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <g stroke="#C0C0C0C0" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7">
            <line x1="16" y1="2" x2="16" y2="30"/>
            <line x1="2" y1="16" x2="30" y2="16"/>
            <line x1="6" y1="6" x2="26" y2="26"/>
            <line x1="26" y1="6" x2="6" y2="26"/>
        </g>
    </svg>,
    // Simple snowflake 2
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <g stroke="#C0C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6">
            <line x1="14" y1="2" x2="14" y2="26"/>
            <line x1="2" y1="14" x2="26" y2="14"/>
            <line x1="7" y1="7" x2="21" y2="21"/>
            <line x1="21" y1="7" x2="7" y2="21"/>
        </g>
    </svg>,
    // Simple snowflake 3
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <g stroke="#C0C0C0C0" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5">
            <line x1="15" y1="3" x2="15" y2="27"/>
            <line x1="3" y1="15" x2="27" y2="15"/>
            <line x1="8" y1="8" x2="22" y2="22"/>
            <line x1="22" y1="8" x2="8" y2="22"/>
            <line x1="15" y1="15" x2="27" y2="3"/>
            <line x1="15" y1="15" x2="3" y2="27"/>
        </g>
    </svg>,
    // Simple snowflake 4
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g stroke="#C0C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6">
            <line x1="12" y1="2" x2="12" y2="22"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <line x1="5" y1="5" x2="19" y2="19"/>
            <line x1="19" y1="5" x2="5" y2="19"/>
        </g>
    </svg>,
];

const SNOWFLAKE_COUNT = 32;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const SnowfallZen: React.FC = () => {
  const flakes = Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => {
    const size = randomBetween(18, 38);
    const left = randomBetween(0, 100);
    const duration = randomBetween(8, 18);
    const delay = randomBetween(0, 10);
    const drift = randomBetween(-12, 12);
    const opacity = randomBetween(0.4, 0.8);
    const flakeType = ORIGAMI_SNOWFLAKES[i % ORIGAMI_SNOWFLAKES.length];

    return (
      <div
        key={i}
        className="pointer-events-none absolute top-0"
        style={{
          left: `${left}vw`,
          opacity,
          width: `${size}px`,
          height: `${size}px`,
          animation: `zen-snowfall ${duration}s linear ${delay}s infinite`,
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))",
        }}
      >
        <div
          style={{
            transform: `translateX(${drift}px)`,
            transition: "transform 1s",
            width: "100%",
            height: "100%",
          }}
        >
          {flakeType}
        </div>
      </div>
    );
  });

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      aria-hidden="true"
    >
      {flakes}
      <style>{`
        @keyframes zen-snowfall {
          0% { transform: translateY(-40px); }
          80% { transform: translateY(90vh); }
          100% { transform: translateY(100vh); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default SnowfallZen;
