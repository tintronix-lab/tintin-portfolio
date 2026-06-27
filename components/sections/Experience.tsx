"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section scroll-mt-24">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="heading mt-3">Selected roles & impact</h2>
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-indigo-400/50 via-violet-400/30 to-transparent sm:block" />
        <div className="space-y-4">
          {experiences.map((exp, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={exp.role + exp.company} delay={i * 0.06}>
                <div className="relative sm:pl-12">
                  <span className="absolute left-2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-indigo-500 bg-white sm:block dark:bg-ink" />
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="card w-full p-6 text-left transition hover:shadow-glow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                          <Briefcase size={14} />
                          {exp.period}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          {exp.company}
                        </p>
                        <p className="mt-1 flex items-center gap-1 text-xs text-black/45 dark:text-white/45">
                          <MapPin size={12} /> {exp.location}
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/[0.08] text-black/60 dark:border-white/[0.12] dark:text-white/70"
                      >
                        <Plus size={16} />
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5">
                            <p className="text-sm leading-relaxed text-black/65 dark:text-white/65">
                              {exp.summary}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {exp.achievements.map((a) => (
                                <li
                                  key={a}
                                  className="flex items-start gap-2 text-sm text-black/65 dark:text-white/65"
                                >
                                  <CheckCircle2
                                    size={16}
                                    className="mt-0.5 shrink-0 text-emerald-500"
                                  />
                                  {a}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {exp.technologies.map((t) => (
                                <span key={t} className="pill">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
