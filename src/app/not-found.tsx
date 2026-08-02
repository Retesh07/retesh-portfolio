import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/40 mb-4">404</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">Page not found</h1>
        <p className="text-white/60 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
