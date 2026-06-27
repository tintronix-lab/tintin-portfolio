"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="glass flex w-full max-w-3xl items-center justify-between rounded-full px-3 py-2 shadow-soft">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-2 flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-[11px] font-bold text-white">
            TR
          </span>
          <span className="hidden sm:inline">Tintin Razavian</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="relative rounded-full px-3 py-1.5 text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-black/[0.06] dark:bg-white/[0.1]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/[0.08] text-black/70 md:hidden dark:border-white/[0.12] dark:text-white/80"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-3xl p-2 shadow-glow md:hidden"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                active === link.id
                  ? "bg-black/[0.06] text-black dark:bg-white/[0.1] dark:text-white"
                  : "text-black/60 dark:text-white/60"
              }`}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
