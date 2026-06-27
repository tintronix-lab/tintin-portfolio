"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  Sphere,
} from "react-simple-maps";
import { countries } from "@/lib/data";
import geoData from "@/lib/world-110m.json";

export function WorldMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50/80 to-indigo-50/40 ring-1 ring-black/[0.04] dark:from-slate-900/40 dark:to-indigo-950/30 dark:ring-white/[0.06]">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 165, center: [12, 8] }}
        width={800}
        height={380}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Ocean sphere + graticule */}
        <Sphere
          id="ocean-sphere"
          fill="transparent"
          stroke="currentColor"
          strokeWidth={0.5}
          className="text-black/[0.06] dark:text-white/[0.08]"
        />
        <Graticule
          stroke="currentColor"
          strokeWidth={0.4}
          className="text-black/[0.04] dark:text-white/[0.05]"
        />

        {/* Land masses */}
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-slate-200/90 stroke-white outline-none transition-colors duration-300 hover:fill-slate-300 dark:fill-slate-700/60 dark:stroke-slate-900 dark:hover:fill-slate-600"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Markers */}
        {countries.map((c) => {
          const isHover = hover === c.name;
          return (
            <Marker
              key={c.name}
              coordinates={[c.lon, c.lat]}
              onMouseEnter={() => setHover(c.name)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
            >
              {/* Soft glow */}
              <circle
                r={isHover ? 11 : 7}
                className="fill-indigo-500/25 transition-all duration-200"
              />
              {/* Pulse ring */}
              {!isHover && (
                <motion.circle
                  r={3}
                  fill="none"
                  stroke="rgb(99,102,241)"
                  strokeWidth={1}
                  initial={{ r: 3, opacity: 0.6 }}
                  animate={{ r: 9, opacity: 0 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              {/* Core dot */}
              <motion.circle
                className="fill-indigo-500 stroke-white dark:stroke-slate-900"
                strokeWidth={isHover ? 1.2 : 0.8}
                animate={{ r: isHover ? 4.5 : 2.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
              {/* Hover label */}
              {isHover && (
                <g transform="translate(0,-14)">
                  <rect
                    x={-(c.name.length * 3 + 8)}
                    y={-11}
                    width={c.name.length * 6 + 16}
                    height={18}
                    rx={9}
                    className="fill-ink dark:fill-white"
                  />
                  <text
                    textAnchor="middle"
                    y={2}
                    className="fill-white text-[9px] font-semibold dark:fill-ink"
                  >
                    {c.name}
                  </text>
                </g>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Legend */}
      <div className="flex items-center justify-between border-t border-black/[0.04] px-5 py-3 text-xs text-black/50 dark:border-white/[0.06] dark:text-white/50">
        <p>Hover a marker for details</p>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
          </span>
          {countries.length} countries · 4 continents
        </span>
      </div>
    </div>
  );
}
