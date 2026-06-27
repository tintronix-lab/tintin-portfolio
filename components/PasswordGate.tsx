"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Lock } from "lucide-react";

// Lightly obfuscated so the literal password isn't sitting in the source as
// plain text. Note: a client-side gate on a static site is not real security —
// the content still ships in the page bundle.
const EXPECTED = "dGludGludmlld2N2"; // base64 of the password
const STORAGE_KEY = "tr_portfolio_unlocked";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem(STORAGE_KEY) === "1"
    ) {
      setUnlocked(true);
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok =
      typeof window !== "undefined" && window.btoa(value) === EXPECTED;
    if (ok) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setValue("");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-white px-6 dark:bg-[#08080a]">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-300/40 to-sky-200/30 blur-3xl dark:from-indigo-600/20 dark:to-sky-500/10" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-violet-300/40 to-fuchsia-200/30 blur-3xl dark:from-violet-600/20 dark:to-fuchsia-500/10" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass w-full max-w-sm rounded-4xl p-8 text-center shadow-glow"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
          className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-glow"
        >
          <Lock size={22} />
        </motion.div>

        <h1 className="mt-6 text-xl font-semibold tracking-tight">
          Tintin Razavian
        </h1>
        <p className="mt-1.5 text-sm text-black/55 dark:text-white/55">
          This portfolio is private. Enter the password to continue.
        </p>

        <form onSubmit={submit} className="mt-6">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={value}
              autoFocus
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              aria-label="Password"
              aria-invalid={error}
              className={`w-full rounded-2xl border bg-white/70 px-4 py-3 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500/40 dark:bg-white/[0.04] ${
                error
                  ? "border-red-400/70"
                  : "border-black/[0.1] dark:border-white/[0.12]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 transition hover:text-black/70 dark:text-white/40 dark:hover:text-white/70"
            >
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-xs font-medium text-red-500"
              >
                Incorrect password. Please try again.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-ink px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] dark:bg-white dark:text-ink"
          >
            Unlock
          </button>
        </form>
      </motion.div>
    </div>
  );
}
