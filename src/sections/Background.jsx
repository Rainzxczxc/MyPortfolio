import React, { useState, useEffect, useMemo } from "react";

// Placeholder imports - replace these with your actual PNG imports, e.g.:
import planet1 from "../Pics/Planets/Planet1.png";
import planet2 from "../Pics/Planets/Planet2.png";
import planet3 from "../Pics/Planets/Planet3.png";
import planet4 from "../Pics/Planets/Planet4.png";
import planet5 from "../Pics/Planets/Planet5.png";
import planet6 from "../Pics/Planets/Planet6.png";

const planets = [planet1, planet2, planet3, planet4, planet5, planet6]; // Add your PNG sources here as an array of strings or imported images

function Background() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false); // Flag to delay rendering until after mount
  const numMeteors = 18;
  const half = Math.floor(numMeteors / 2);
  const lineHeight = 96; // Matches h-24 (6rem = 96px), for off-screen offsets
  const numPlanets = 3; // Number of planets to render (increased for multiple planets; adjust as needed)

  // Update dimensions on mount and window resize for dynamic responsiveness
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions(); // Initial set
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Delay initial render slightly to prevent flash on page load/reload
  useEffect(() => {
    // Small delay to ensure styles are applied before rendering meteors
    const timer = setTimeout(() => setIsLoaded(true), 50); // 50ms is usually enough
    return () => clearTimeout(timer);
  }, []);

  // Generate random planet configurations once on mount (stable across re-renders)
  const planetConfigs = useMemo(() => {
    if (planets.length === 0) return [];

    // Shuffle the planets
    const shuffledPlanets = [...planets].sort(() => Math.random() - 0.5);

    // Pick only as many as numPlanets allows
    const selectedPlanets = shuffledPlanets.slice(0, numPlanets);

    return selectedPlanets.map((planetSrc, index) => {
      const size = (24 + Math.random() * 72) * 3; // 3x larger
      const duration = 15 + Math.random() * 20; // Drift time
      const delay = index * 2; // small stagger so they don’t all spawn at once

      // Decide which edge to spawn from
      const edges = ["top", "bottom", "left", "right"];
      const startEdge = edges[Math.floor(Math.random() * edges.length)];
      let startX, startY, endX, endY;

      switch (startEdge) {
        case "top":
          startX = Math.random() * 100;
          startY = -10;
          endX = Math.random() * 100;
          endY = 110;
          break;
        case "bottom":
          startX = Math.random() * 100;
          startY = 110;
          endX = Math.random() * 100;
          endY = -10;
          break;
        case "left":
          startX = -10;
          startY = Math.random() * 100;
          endX = 110;
          endY = Math.random() * 100;
          break;
        case "right":
          startX = 110;
          startY = Math.random() * 100;
          endX = -10;
          endY = Math.random() * 100;
          break;
      }

      return {
        id: index,
        src: planetSrc, // Unique planet
        startX: `${startX}%`,
        startY: `${startY}%`,
        endX: `${endX}%`,
        endY: `${endY}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        size: `${size}px`,
      };
    });
  }, [numPlanets]);
  // Generate meteors dynamically based on current dimensions
  const topMeteors = Array.from({ length: half }, (_, i) => ({
    id: i,
    type: "top",
  }));
  const leftMeteors = Array.from({ length: numMeteors - half }, (_, i) => ({
    id: i + half,
    type: "left",
  }));

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white" />
    ); // Empty fixed div during load to reserve space without visible content
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      <style>{`
  @keyframes fallFromTop {
    0% {
      transform: translateX(0) translateY(-${lineHeight}px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(100vw) translateY(calc(100vh + ${lineHeight}px));
      opacity: 0;
    }
  }
  @keyframes fallFromLeft {
    0% {
      transform: translateX(-${lineHeight}px) translateY(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(100vw + ${lineHeight}px)) translateY(100vh);
      opacity: 0;
    }
  }
@keyframes driftLinear {
  0% {
    left: var(--start-x);
    top: var(--start-y);
    opacity: 0;
  }
  10% {
    opacity: 0.8; /* Fade in */
  }
  90% {
    opacity: 0.8; /* Stay visible during movement */
  }
  100% {
    left: var(--end-x);
    top: var(--end-y);
    opacity: 0; /* Fade out */
  }
}
  .falling-meteor {
    width: 8px;
    height: 8px;
    background: #333;
    border-radius: 50%;
    opacity: 0; /* Ensure initial opacity is 0 before animation starts */
    will-change: transform, opacity; /* Optimize for animation performance */
    box-shadow:
      0 0 4px rgba(0, 0, 0, 0.8), /* Glow around the dot */
      -4px -4px 0 rgba(0, 0, 0, 0.7), /* Fading tail segments (diagonal up-left) */
      -8px -8px 0 rgba(0, 0, 0, 0.5),
      -12px -12px 0 rgba(0, 0, 0, 0.4),
      -16px -16px 0 rgba(0, 0, 0, 0.3),
      -20px -20px 0 rgba(0, 0, 0, 0.2),
      -24px -24px 0 rgba(0, 0, 0, 0.1);
  }
  .fall-from-top {
    animation: fallFromTop 2s linear infinite;
  }
  .fall-from-left {
    animation: fallFromLeft 2s linear infinite;
  }
.planet {
  position: absolute;
  width: var(--size);
  height: var(--size);
  opacity: 0; /* Initial opacity handled in animation */
  will-change: left, top, opacity; /* Optimize for animation performance (changed from transform) */
  pointer-events: none;
  z-index: -5; /* Slightly above meteors but still background */
  animation: driftLinear linear infinite;
}

  .planet img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures PNG fills the container nicely */
    border-radius: inherit
  }
`}</style>
      {/* Meteors spawning from the top */}
      {topMeteors.map((meteor) => {
        const startLeft = Math.random() * 100; // Random across the full top width (0-100%)
        const delay = Math.random() * 4; // Random delay up to 4s for continuous effect
        const duration = 1.5 + Math.random() * 2.5; // Duration between 1.5-4s

        return (
          <div
            key={meteor.id}
            className="absolute falling-meteor fall-from-top"
            style={{
              left: `${startLeft}%`,
              top: "0",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
      {/* Meteors spawning from the left */}
      {leftMeteors.map((meteor) => {
        const startTop = Math.random() * 100; // Random down the full left height (0-100%)
        const delay = Math.random() * 4; // Random delay up to 4s for continuous effect
        const duration = 1.5 + Math.random() * 2.5; // Duration between 1.5-4s

        return (
          <div
            key={meteor.id}
            className="absolute falling-meteor fall-from-left"
            style={{
              left: "0",
              top: `${startTop}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
      {/* Planets drifting linearly around the screen */}
      {planetConfigs.map((config) => (
        <div
          key={config.id}
          className="planet"
          style={{
            "--size": config.size,
            "--start-x": config.startX,
            "--start-y": config.startY,
            "--end-x": config.endX,
            "--end-y": config.endY,
            animationDuration: config.duration,
            animationDelay: config.delay,
          }}
        >
          <img src={config.src} alt="Drifting Planet" />
        </div>
      ))}
    </div>
  );
}

export default Background;
