"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="section scroll-mt-24 pt-0">
      <Reveal>
        <p className="eyebrow">Education</p>
        <h2 className="heading mt-3">Academic foundation</h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <motion.div whileHover={{ y: -4 }} className="card h-full p-7">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600 dark:text-indigo-400">
                <GraduationCap size={22} />
              </div>
              <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                {e.year}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {e.degree}
              </h3>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {e.school}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/50 dark:text-white/50">
                {e.detail}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
