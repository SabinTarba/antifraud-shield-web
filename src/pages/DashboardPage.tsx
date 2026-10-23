import { FiLayers, FiNavigation, FiPackage, FiZap } from 'react-icons/fi'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const features = [
  {
    title: 'Routing is ready',
    description: 'React Router handles nested layouts, page routes, and not-found states.',
    icon: <FiNavigation aria-hidden="true" size={19} />,
  },
  {
    title: 'Tailwind is ready',
    description: 'Build responsive interfaces with utility classes and Vite integration.',
    icon: <FiZap aria-hidden="true" size={19} />,
  },
  {
    title: 'Icons are ready',
    description: 'Use tree-shakeable icons from the React Icons library.',
    icon: <FiPackage aria-hidden="true" size={19} />,
  },
]

const structure = [
  ['app/', 'Application setup and route configuration'],
  ['api/', 'API client and server communication'],
  ['components/', 'Reusable UI and layout components'],
  ['hooks/', 'Shared React hooks'],
  ['pages/', 'Route-level page components'],
]

export function DashboardPage() {
  useDocumentTitle('Dashboard')

  return (
    <div>
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Starter workspace
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Your app foundation is ready.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          A clean, typed React setup with the essentials wired together. Add features
          as your product grows.
        </p>
      </div>

      <section aria-label="Included tools" className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
          <FiLayers aria-hidden="true" className="text-indigo-700" size={19} />
          <h2 className="font-semibold text-slate-900">Project structure</h2>
        </div>
        <ul className="divide-y divide-slate-100 px-5 sm:px-6">
          {structure.map(([folder, description]) => (
            <li
              key={folder}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:gap-5"
            >
              <code className="min-w-32 font-mono text-sm font-semibold text-indigo-700">
                {folder}
              </code>
              <span className="text-sm text-slate-600">{description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
