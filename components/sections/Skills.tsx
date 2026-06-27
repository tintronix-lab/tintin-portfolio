"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Cloud,
  Cpu,
  Compass,
  Users,
  Repeat,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { skills } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { RadarChart } from "@/components/RadarChart";

const icons: Record<string, React.ReactNode> = {
  "Product Management": <Boxes size={20} />,
  AI: <BrainCircuit size={20} />,
  Cloud: <Cloud size={20} />,
  IoT: <Cpu size={20} />,
  Strategy: <Compass size={20} />,
  Leadership: <Users size={20} />,
  Agile: <Repeat size={20} />,
  UX: <Sparkles size={20} />,
  "Business Development": <TrendingUp size={20} />,
};

export function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24">
      <Reveal>
        <p className="eyebrow">Skills</p>
        <h2 className="heading mt-3">Capabilities & craft</h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card group h-full p-5"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600 transition group-hover:from-indigo-500 group-hover:to-violet-500 group-hover:text-white dark:text-indigo-400">
                  {icons[skill.name]}
                </div>
                <h3 className="text-sm font-semibold leading-snug">
                  {skill.name}
                </h3>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="card grid place-items-center p-8">
            <RadarChart />
            <p className="mt-2 text-center text-xs text-black/45 dark:text-white/45">
              Core competency profile
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
