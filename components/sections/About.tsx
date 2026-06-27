"use client";

import { motion } from "framer-motion";
import { stats, focusAreas } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { WorldMap } from "@/components/WorldMap";

export function About() {
  return (
    <section id="about" className="section scroll-mt-24">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 className="heading mt-3 max-w-2xl text-balance">
          A product leader at the intersection of strategy, engineering, and AI.
        </h2>
      </Reveal>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card h-full p-6">
              <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-black/55 dark:text-white/55">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Timeline of focus areas */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/60 via-violet-400/40 to-transparent" />
          <ul className="space-y-7">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06}>
                <li className="relative pl-8">
                  <motion.span
                    className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-indigo-400 bg-white dark:bg-ink"
                    whileInView={{ scale: [0.6, 1] }}
                    viewport={{ once: true }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  </motion.span>
                  <h3 className="text-base font-semibold">{area.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-black/55 dark:text-white/55">
                    {area.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* World map */}
        <Reveal delay={0.1}>
          <div className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Countries worked in</h3>
              <span className="pill">14 markets</span>
            </div>
            <WorldMap />
            <p className="mt-4 text-xs text-black/45 dark:text-white/45">
              Hover a node to explore engagements across four continents.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
