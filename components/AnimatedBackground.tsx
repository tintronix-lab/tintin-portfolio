"use client";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.5]" />
      <div className="absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-indigo-300/40 to-sky-200/30 blur-3xl animate-blob-1 dark:from-indigo-600/20 dark:to-sky-500/10" />
      <div className="absolute right-[-10%] top-1/3 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-violet-300/40 to-fuchsia-200/30 blur-3xl animate-blob-2 dark:from-violet-600/20 dark:to-fuchsia-500/10" />
      <div className="absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/20 blur-3xl animate-blob-1 dark:from-emerald-600/10 dark:to-teal-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:to-[#08080a]" />
    </div>
  );
}
