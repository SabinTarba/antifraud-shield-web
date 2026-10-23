import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page not found')

  return (
    <section className="mx-auto max-w-lg py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
        404 error
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Back to dashboard
      </Link>
    </section>
  )
}
