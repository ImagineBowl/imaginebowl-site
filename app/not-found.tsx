import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-gutter">
      <p className="font-mono-label text-mono-label text-primary uppercase tracking-widest mb-4">
        404
      </p>
      <h1 className="font-display-hero-mobile font-extrabold text-on-surface mb-4">
        Page not found
      </h1>
      <p className="text-text-muted mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-200"
      >
        Back home
      </Link>
    </section>
  );
}
