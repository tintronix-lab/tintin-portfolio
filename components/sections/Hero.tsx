"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(
      () => {
        setSub((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, speed, pause]);

  return sub;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pill mb-6 gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for select advisory & leadership roles
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
      >
        {profile.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 flex min-h-[2rem] items-center justify-center text-lg font-medium text-black/70 sm:text-2xl dark:text-white/70"
      >
        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
          {typed}
        </span>
        <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-indigo-500 sm:h-7" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="text-balance mx-auto mt-8 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg dark:text-white/60"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href="/Tintin-Razavian-CV.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:scale-[1.03] dark:bg-white dark:text-ink"
        >
          <Download size={16} className="transition group-hover:translate-y-0.5" />
          Download CV
        </a>
        <a
          href="#contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:scale-[1.03]"
        >
          <Mail size={16} />
          Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-8 flex items-center gap-2 text-xs text-black/40 dark:text-white/40"
      >
        <MapPin size={14} />
        {profile.location}
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/40 dark:text-white/40"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
