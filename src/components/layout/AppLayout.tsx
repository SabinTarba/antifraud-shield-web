import { FiShield } from 'react-icons/fi'
import { NavLink, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <NavLink to="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <FiShield aria-hidden="true" size={21} />
            </span>
            <span>Antifraud Shield</span>
          </NavLink>
          <nav aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              Dashboard
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Outlet />
      </main>
    </div>
  )
}
