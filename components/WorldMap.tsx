"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { countries } from "@/lib/data";

export function WorldMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
      <svg viewBox="0 0 100 80" className="h-auto w-full" role="img" aria-label="Map of countries worked in">
        <defs>
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* subtle dotted world silhouette */}
        {Array.from({ length: 22 }).map((_, row) =>
          Array.from({ length: 38 }).map((_, col) => {
            const x = 4 + col * 2.45;
            const y = 8 + row * 2.9;
            // crude landmass mask using sine bands for an abstract globe feel
            const land =
              Math.sin(col * 0.5) + Math.cos(row * 0.6) > -0.4 &&
              (col < 6 || col > 8) &&
              row > 1 &&
              row < 21;
            if (!land) return null;
            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                r={0.35}
                className="fill-black/[0.10] dark:fill-white/[0.10]"
              />
            );
          })
        )}

        {countries.map((c) => (
          <g
            key={c.name}
            onMouseEnter={() => setHover(c.name)}
            onMouseLeave={() => setHover(null)}
            className="cursor-pointer"
          >
            <circle cx={c.x} cy={c.y} r={2.6} fill="url(#dotGlow)" />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r={hover === c.name ? 1.5 : 1}
              className="fill-indigo-500"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>

      {hover && (
        <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-ink">
          {hover}
        </div>
      )}
    </div>
  );
}
