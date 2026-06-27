"use client";

import { motion } from "framer-motion";
import { radarSkills } from "@/lib/data";

export function RadarChart() {
  const size = 240;
  const center = size / 2;
  const radius = 92;
  const n = radarSkills.length;

  const point = (i: number, value: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return {
      x: center + Math.cos(angle) * radius * value,
      y: center + Math.sin(angle) * radius * value,
    };
  };

  const rings = [0.25, 0.5, 0.75, 1];
  const polygon = radarSkills
    .map((s, i) => {
      const p = point(i, s.value);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full max-w-xs" role="img" aria-label="Skills radar chart">
      {rings.map((r) => (
        <polygon
          key={r}
          points={radarSkills
            .map((_, i) => {
              const p = point(i, r);
              return `${p.x},${p.y}`;
            })
            .join(" ")}
          className="fill-none stroke-black/[0.08] dark:stroke-white/[0.1]"
        />
      ))}
      {radarSkills.map((s, i) => {
        const p = point(i, 1);
        return (
          <line
            key={s.axis}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            className="stroke-black/[0.06] dark:stroke-white/[0.08]"
          />
        );
      })}

      <motion.polygon
        points={polygon}
        className="fill-indigo-500/20 stroke-indigo-500"
        strokeWidth={1.5}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
      />

      {radarSkills.map((s, i) => {
        const p = point(i, s.value);
        const label = point(i, 1.18);
        return (
          <g key={s.axis}>
            <circle cx={p.x} cy={p.y} r={3} className="fill-indigo-500" />
            <text
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-black/55 text-[8px] font-medium dark:fill-white/55"
            >
              {s.axis}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
