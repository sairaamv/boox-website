import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center">
      <div className="text-8xl font-mono font-bold text-muted-foreground mb-4">404</div>
      <h1 className="text-2xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-brand-forest text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-brand-forest-light transition-colors"
      >
        Back to home
      </Link>
    </section>
  );
}
