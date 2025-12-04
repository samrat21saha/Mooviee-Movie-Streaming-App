<!-- AI agent instructions for working in this repository -->
# copilot-instructions — mooviee (React + Vite)

Short, practical guidance for AI coding agents working on this repository. Focus on the actual discoverable patterns and commands — not generic advice.

## Big picture
- Single-page React app bootstrapped with Vite. Entry point: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Minimal codebase: components and CSS live under `src/`. Static assets live under `public/` or `src/assets/`.
- Build system: Vite (see `vite.config.js`). Linting: ESLint (`eslint.config.js`). See `package.json` scripts for common tasks.

## Where to look first (important files)
- `src/App.jsx` — primary UI for this small app (shows functional components pattern).
- `src/main.jsx` — application entry and React StrictMode bootstrapping.
- `index.html` — where the app is mounted (`#root`) and the module entry is injected.
- `vite.config.js` — Vite plugins and dev server configuration.
- `eslint.config.js` — custom lint rules (notable rule below).
- `package.json` — quick commands and dependency list.

## Critical developer workflows (commands you can run)
- Start dev server (HMR): npm run dev
- Build for production: npm run build
- Preview production build: npm run preview
- Lint the codebase: npm run lint

If a command fails locally, look at terminal output in the Vite dev server — it usually includes file/line numbers and instant console tracebacks.

## Project-specific conventions & patterns
- **JS + JSX** (no TypeScript). Modern ESM imports; components use default or named exports.
- **Tailwind CSS for styling** — utility classes in `className` attributes. See `src/App.jsx` for current example with `text-3xl font-bold underline`.
- ESLint rules in `eslint.config.js` ignore unused variables with names starting with capital letter (components) or underscore (intentional prefixes).
- React 19 features like [useActionState](https://react.dev/reference/react/useActionState) and improved hydration are available if needed.

## Discoverable pitfalls and examples
- Component usage is case-sensitive in JSX. `src/App.jsx` defines `Card` but uses `<card .../>` (lowercase) — this is a real, visible issue. When adding or fixing components, keep component names PascalCase and import/usage consistent.
  - Example fix: change `<card title="Star Wars"/>` to `<Card title="Star Wars"/>` and ensure `Card` is exported or defined in the same file.

## When you modify code
- Keep exported components as default or named exports consistent with how they're imported across `src/`.
- Keep changes minimal and runnable: after edits, validate by running `npm run dev` and checking the browser console and terminal for HMR messages and errors.

## Integration points / dependencies
- **Runtime**: `react@19.2.0`, `react-dom@19.2.0` (React 19 with latest APIs).
- **Styling**: `tailwindcss@4.1.17` with `@tailwindcss/vite@4.1.17` plugin for utility-first CSS.
- **Build/dev**: `vite@7.2.4`, `@vitejs/plugin-react@5.1.1` for HMR, `eslint@9.39.1` with `react-hooks` and `react-refresh` plugins.
- No backend API or remote services wired; all logic is client-side.

## Styling approach
- **Tailwind CSS only** — use utility classes in JSX (e.g., `className="text-3xl font-bold underline"`).
- `src/index.css` and `src/App.css` exist but are minimal. Prefer Tailwind utilities over custom CSS for consistency.
- Tailwind is integrated via Vite plugin for fast HMR — changes to class names rebuild instantly.

## When working with React components
- Use **functional components with hooks** (React 19 standard).
- Component names must be **PascalCase** (e.g., `Card`, not `card`).
- Export as default or named; keep imports and JSX usage consistent.
- React 19 simplifies event handling and hydration; refer to [React docs](https://react.dev/) for latest patterns.

## Example tasks an AI agent can safely attempt
- Add new components in `src/` and style with Tailwind utility classes.
- Refactor existing components or extract reusable sub-components.
- Create a `src/components/` folder and move components there as the codebase grows.
- Update `src/App.jsx` to build the movie app UI — currently a template placeholder.

## Final notes
- This is a **starter template**; the current `src/App.jsx` is a "hello world" with Tailwind. Expect it to be replaced as features are added.
- No tests or CI scripts are configured — if needed, ask for confirmation before adding Jest, Vitest, or GitHub Actions.
- Keep changes minimal and validate with `npm run dev` to see HMR feedback in real time.

If anything is unclear, tell me which section needs more detail and I will iterate.
