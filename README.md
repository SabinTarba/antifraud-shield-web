# Antifraud Shield Web

A React + TypeScript application scaffold built with Vite.

## Getting started

```sh
npm install
npm run dev
```

Create a local `.env` from `.env.example` to configure the API base URL. The
default is `/api`.

## Available scripts

- `npm run dev` — start the Vite development server
- `npm run build` — type-check and create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — lint the project with Oxlint

## Project structure

```text
src/
  app/                 App-level setup and router
  api/                 API client and request helpers
  components/
    layout/            Shared application layouts
    ui/                Reusable UI components
  hooks/               Shared React hooks
  pages/               Route-level screens
  index.css            Tailwind import and global styles
  main.tsx             Application entry point
```

Use the `@/` alias for imports from `src/`. Add new routes in
`src/app/router.tsx`; API requests can use the typed helper in
`src/api/client.ts`.
