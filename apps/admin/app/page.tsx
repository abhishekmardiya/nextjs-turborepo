import { DemoRequestForm } from "@repo/shared-form";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgb(99_102_241/0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgb(99_102_241/0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgb(59_130_246/0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgb(59_130_246/0.12),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col px-6 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 space-y-4 sm:mb-12">
          <p className="inline-flex items-center rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            Admin portal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
            Welcome, admin
          </h1>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Shared demo form from{" "}
            <code className="rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[0.8em] text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              @repo/shared-form
            </code>{" "}
          </p>
        </header>
        <DemoRequestForm contextLabel="Submitting as: admin.yourdomain.com" />
      </div>
    </div>
  );
}
