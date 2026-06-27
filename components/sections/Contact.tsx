"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { budgetOptions, contactMethods, profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  budget: string;
  method: string;
};

const empty: Fields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  budget: budgetOptions[0],
  method: contactMethods[0],
};

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "Enter a valid email address.";
    if (fields.message.trim().length < 10)
      next.message = "Tell me a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Email integration placeholder — wire up to an API route / service here.
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("done");
    setTimeout(() => {
      setStatus("idle");
      setFields(empty);
    }, 3500);
  };

  const inputBase =
    "w-full rounded-2xl border bg-white/60 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500/40 dark:bg-white/[0.04]";

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="heading mt-3 text-balance">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60 dark:text-white/60">
            Advisory, product leadership, or a transformation mandate — share a
            few details and I&apos;ll get back to you personally.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="block font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            >
              {profile.email}
            </a>
            <p className="text-black/55 dark:text-white/55">{profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                  Name *
                </label>
                <input
                  value={fields.name}
                  onChange={set("name")}
                  className={`${inputBase} ${
                    errors.name
                      ? "border-red-400/70"
                      : "border-black/[0.08] dark:border-white/[0.1]"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                  Email *
                </label>
                <input
                  type="email"
                  value={fields.email}
                  onChange={set("email")}
                  className={`${inputBase} ${
                    errors.email
                      ? "border-red-400/70"
                      : "border-black/[0.08] dark:border-white/[0.1]"
                  }`}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                  Company
                </label>
                <input
                  value={fields.company}
                  onChange={set("company")}
                  className={`${inputBase} border-black/[0.08] dark:border-white/[0.1]`}
                  placeholder="Company"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                  Phone
                </label>
                <input
                  type="tel"
                  value={fields.phone}
                  onChange={set("phone")}
                  className={`${inputBase} border-black/[0.08] dark:border-white/[0.1]`}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                  Project Budget
                </label>
                <select
                  value={fields.budget}
                  onChange={set("budget")}
                  className={`${inputBase} border-black/[0.08] dark:border-white/[0.1]`}
                >
                  {budgetOptions.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                  Preferred Contact
                </label>
                <select
                  value={fields.method}
                  onChange={set("method")}
                  className={`${inputBase} border-black/[0.08] dark:border-white/[0.1]`}
                >
                  {contactMethods.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60">
                Message *
              </label>
              <textarea
                value={fields.message}
                onChange={set("message")}
                rows={4}
                className={`${inputBase} resize-none ${
                  errors.message
                    ? "border-red-400/70"
                    : "border-black/[0.08] dark:border-white/[0.1]"
                }`}
                placeholder="Tell me about your project or role…"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.01] disabled:opacity-80 dark:bg-white dark:text-ink"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Send size={16} /> Send Message
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </motion.span>
                )}
                {status === "done" && (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white"
                    >
                      <Check size={12} />
                    </motion.span>
                    Message sent — thank you!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
