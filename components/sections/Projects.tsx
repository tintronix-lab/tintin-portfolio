"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { projects, projectCategories } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = filter === "All" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="section scroll-mt-24">
      <Reveal>
        <p className="eyebrow">Projects</p>
        <h2 className="heading mt-3">Selected work</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  filter === cat
                    ? "text-white dark:text-ink"
                    : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-ink dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="glass w-full rounded-full py-2 pl-9 pr-4 text-sm outline-none placeholder:text-black/40 focus:ring-2 focus:ring-indigo-500/40 dark:placeholder:text-white/40 sm:w-56"
            />
          </div>
        </div>
      </Reveal>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="card group overflow-hidden"
            >
              <div
                className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <span className="absolute left-4 top-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                  {p.category}
                </span>
                <motion.div
                  className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/30 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      aria-label={`Open ${p.title}`}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/[0.08] text-black/50 transition group-hover:bg-ink group-hover:text-white dark:border-white/[0.12] dark:text-white/60 dark:group-hover:bg-white dark:group-hover:text-ink"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-black/55 dark:text-white/55">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-t border-black/[0.06] pt-3 text-xs font-medium text-emerald-600 dark:border-white/[0.08] dark:text-emerald-400">
                  {p.outcome}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-black/50 dark:text-white/50">
          No projects match your search.
        </p>
      )}
    </section>
  );
}
