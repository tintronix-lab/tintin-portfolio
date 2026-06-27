"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { countries } from "@/lib/data";

// Simple Mercator projection: converts lat/lon to SVG coordinates
function mercator(lat: number, lon: number, width: number, height: number) {
  const x = ((lon + 180) / 360) * width;
  const latRad = (lat * Math.PI) / 180;
  const y =
    ((1 -
      Math.log(Math.tan(Math.PI / 4 + latRad / 2)) / Math.PI) /
      2) *
    height;
  return { x, y };
}

export function WorldMap() {
  const [hover, setHover] = useState<string | null>(null);
  const width = 960;
  const height = 500;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/30 p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="World map of countries worked in"
      >
        <defs>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="countryGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle grid */}
        <g opacity="0.08" stroke="currentColor" strokeWidth="0.5">
          {Array.from({ length: 13 }).map((_, i) => (
            <line
              key={`lat-${i}`}
              x1="0"
              y1={(i / 12) * height}
              x2={width}
              y2={(i / 12) * height}
            />
          ))}
          {Array.from({ length: 25 }).map((_, i) => (
            <line
              key={`lon-${i}`}
              x1={(i / 24) * width}
              y1="0"
              x2={(i / 24) * width}
              y2={height}
            />
          ))}
        </g>

        {/* Simplified continent regions (landmass tint) */}
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="url(#oceanGradient)"
          opacity="0.15"
        />
        <defs>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59,130,246)" />
            <stop offset="100%" stopColor="rgb(37,99,235)" />
          </linearGradient>
        </defs>

        {/* Country markers */}
        {countries.map((c) => {
          const { x, y } = mercator(c.lat, c.lon, width, height);
          const isHover = hover === c.name;

          return (
            <g
              key={c.name}
              onMouseEnter={() => setHover(c.name)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
              filter="url(#mapGlow)"
            >
              {/* Glow circle */}
              <circle
                cx={x}
                cy={y}
                r={isHover ? 16 : 12}
                fill="url(#countryGradient)"
                className="transition-all duration-200"
              />

              {/* Main dot with animation */}
              <motion.circle
                cx={x}
                cy={y}
                r={isHover ? 5.5 : 3.5}
                className="fill-indigo-500"
                animate={{
                  scale: isHover ? 1.6 : 1,
                  opacity: isHover ? 1 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Pulse ring for non-hovered markers */}
              {!isHover && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r={3.5}
                  fill="none"
                  stroke="rgb(99,102,241)"
                  strokeWidth="0.8"
                  opacity="0.4"
                  animate={{ r: 8, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hover && (
        <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white shadow-lg dark:bg-white dark:text-ink">
          {hover}
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex items-center justify-between text-xs text-black/50 dark:text-white/50">
        <p>Hover for details • 23 countries across 4 continents</p>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Worked in
          </span>
        </div>
      </div>
    </div>
  );
}
