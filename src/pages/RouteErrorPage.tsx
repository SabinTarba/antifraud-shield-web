import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function RouteErrorPage() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'An unexpected error occurred.'

  useDocumentTitle('Something went wrong')

  return (
    <section className="mx-auto max-w-lg py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700">
        Application error
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        Something went wrong
      </h1>
      <p role="alert" className="mt-3 text-slate-600">
        {message}
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
