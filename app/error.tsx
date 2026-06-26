"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-gutter">
      <p className="font-mono-label text-mono-label text-primary uppercase tracking-widest mb-4">
        Error
      </p>
      <h1 className="font-display-hero-mobile font-extrabold text-on-surface mb-4">
        Something went wrong
      </h1>
      <p className="text-text-muted mb-10 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-200"
      >
        Try again
      </button>
    </section>
  );
}
