# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages (e.g., `app/snapcode/page.tsx`).
- `src/components/`: UI components (layout, editor, landing, UI primitives).
- `src/store/`: Zustand state (`useStore.ts`).
- `src/data/`: Static data and translations.
- `public/`: Static assets.
- `tailwind.config.ts`, `postcss.config.js`, `prettier.config.js`: styling/tooling configuration.

## Build, Test, and Development Commands
- `npm run dev`: start local dev server.
- `npm run build`: production build.
- `npm run start`: run the built app.
- `npm run lint`: lint via Next.js ESLint config.
- `npm run test`: run Vitest unit tests.
- `npm run test:ui`: open Vitest UI.

## Coding Style & Naming Conventions
- TypeScript + React (Next.js App Router).
- Use existing Tailwind utility classes and component patterns in `src/components/ui`.
- Keep filenames in `kebab-case` for new components (matches existing structure).
- Prefer existing constants and translation keys in `src/data/translations.ts` for UI text.
- Formatting is handled by Prettier (`prettier.config.js`) with Tailwind plugin.

## Testing Guidelines
- Framework: Vitest (`vitest.config.ts`).
- Prefer colocated tests near the feature or a dedicated test folder if introduced.
- Run `npm run test` before shipping significant changes; add tests for non-trivial logic.

## Commit & Pull Request Guidelines
- Commit messages follow `feat:` / `fix:` prefixes (see recent history). Keep them short and descriptive.
- PRs should include a concise summary and screenshots for UI changes.

## Configuration & Deployment Notes
- Deploys are configured for Vercel (`vercel.json`).
- If you add new env vars, document them in `README.md` and surface defaults where possible.
