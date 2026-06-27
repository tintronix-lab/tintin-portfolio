"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="section scroll-mt-24">
      <Reveal>
        <p className="eyebrow">Certifications</p>
        <h2 className="heading mt-3">Credentials & learning</h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              className="card flex items-start gap-4 p-5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 text-amber-600 dark:text-amber-400">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-black/55 dark:text-white/55">
                  {c.issuer}
                </p>
                <span className="mt-2 inline-block text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {c.year}
                </span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
