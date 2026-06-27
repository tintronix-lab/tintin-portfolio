"use client";

import { useState } from "react";
import { Download, Eye, FileText, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const CV_URL = "/Tintin-Razavian-CV.pdf";

export function CVSection() {
  const [preview, setPreview] = useState(false);

  return (
    <section id="cv" className="section scroll-mt-24">
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-400/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Curriculum Vitae</p>
              <h2 className="heading mt-3 text-balance">
                The full story, in one elegant document.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60 dark:text-white/60">
                A concise, beautifully formatted overview of roles, impact, and
                expertise. Preview it inline or download the PDF.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CV_URL}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:scale-[1.03] dark:bg-white dark:text-ink"
                >
                  <Download size={16} /> Download PDF
                </a>
                <button
                  onClick={() => setPreview(true)}
                  className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:scale-[1.03]"
                >
                  <Eye size={16} /> View Online
                </button>
              </div>
            </div>

            <button
              onClick={() => setPreview(true)}
              className="group relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-glow dark:border-white/[0.1]"
              aria-label="Preview CV"
            >
              <div className="flex h-full flex-col p-6 text-left">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500" />
                <div className="mt-4 h-3 w-2/3 rounded bg-black/80" />
                <div className="mt-2 h-2 w-1/2 rounded bg-black/30" />
                <div className="mt-6 space-y-2">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded bg-black/10"
                      style={{ width: `${90 - i * 7}%` }}
                    />
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs font-medium text-black/40">
                  <FileText size={14} /> PDF · 1 page
                </div>
              </div>
              <div className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition group-hover:bg-ink/40 group-hover:opacity-100">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink">
                  Click to preview
                </span>
              </div>
            </button>
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(false)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-glow"
            >
              <button
                onClick={() => setPreview(false)}
                aria-label="Close preview"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-ink text-white"
              >
                <X size={16} />
              </button>
              <object
                data={CV_URL}
                type="application/pdf"
                className="h-full w-full"
              >
                <div className="grid h-full place-items-center p-8 text-center text-sm text-black/60">
                  <div>
                    <FileText className="mx-auto mb-3 text-black/40" size={32} />
                    Add your CV at{" "}
                    <code className="rounded bg-black/[0.06] px-1.5 py-0.5">
                      public{CV_URL}
                    </code>{" "}
                    to enable the inline preview.
                    <div className="mt-4">
                      <a
                        href={CV_URL}
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white"
                      >
                        <Download size={14} /> Download instead
                      </a>
                    </div>
                  </div>
                </div>
              </object>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
