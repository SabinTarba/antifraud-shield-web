import type { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
        {icon}
      </div>
      <h2 className="font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}
