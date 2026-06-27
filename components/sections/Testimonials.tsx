"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = useCallback((d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paginate]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section scroll-mt-24">
      <Reveal>
        <p className="eyebrow">Testimonials</p>
        <h2 className="heading mt-3">What collaborators say</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="relative mt-12 overflow-hidden">
          <div className="card relative min-h-[260px] p-8 sm:p-12">
            <Quote
              className="absolute right-8 top-8 text-indigo-500/15"
              size={64}
            />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-balance max-w-3xl text-lg font-medium leading-relaxed sm:text-2xl">
                  “{current.quote}”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                    {current.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{current.name}</p>
                    <p className="text-xs text-black/50 dark:text-white/50">
                      {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-7 bg-ink dark:bg-white"
                      : "w-2 bg-black/20 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => paginate(-1)}
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => paginate(1)}
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
