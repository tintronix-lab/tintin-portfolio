"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-bold text-white">
                TR
              </span>
              {profile.name}
            </button>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-black/50 dark:text-white/50">
              <MapPin size={14} /> {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass grid h-11 w-11 place-items-center rounded-full transition hover:scale-105"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass grid h-11 w-11 place-items-center rounded-full transition hover:scale-105"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="glass grid h-11 w-11 place-items-center rounded-full transition hover:scale-105"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] pt-6 text-xs text-black/45 sm:flex-row dark:border-white/[0.08] dark:text-white/45">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed & built with care · Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
