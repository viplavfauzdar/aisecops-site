# Repository Guidelines

## Project Structure & Module Organization

This is an Astro + Tailwind static site for `aisecops.net`. Page routes live in `src/pages/`, reusable layouts in `src/layouts/`, shared UI in `src/components/`, and global styles in `src/styles/global.css`. Markdown content is organized under `src/content/`, with schemas defined in `src/content/config.ts`; blog posts live in `src/content/blog/` and whitepapers in `src/content/whitepapers/`. Static assets are in `public/`, including `public/logo.svg`, generated whitepaper PDFs, and small browser scripts in `public/js/`. Netlify serverless code is under `netlify/functions/`, and build utilities are in `scripts/`.

## Build, Test, and Development Commands

- `npm install`: install project dependencies from `package-lock.json`.
- `npm run dev`: start the Astro development server.
- `npm run build`: build the site and regenerate the whitepaper PDF.
- `npm run preview`: preview the built site locally.
- `npm run check:pdf`: verify the whitepaper PDF output.
- `npm run build:verify`: run the full build plus PDF verification.
- `npm run build:netlify`: install Chromium for Playwright, then run the verified build used by Netlify.

## Coding Style & Naming Conventions

Use ES modules and TypeScript-friendly patterns. Existing files use two-space indentation, double quotes in JavaScript/TypeScript config files, and semicolons. Astro components should use PascalCase filenames, such as `Header.astro`; route files should use lowercase kebab-case where practical, such as `reference-architecture.astro`. Keep content slugs stable because they define public URLs. Prefer Tailwind utility classes and existing layout/component patterns before adding new CSS.

## Testing Guidelines

There is no dedicated unit test suite. Treat `npm run build:verify` as the primary regression check before shipping changes. For PDF-related edits, also run `npm run check:pdf`. When changing routes, metadata, RSS, Mermaid rendering, or Netlify functions, verify the affected page or endpoint through `npm run dev` or `npm run preview`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries, for example `added google analytics` and `Wire markdown content into site pages`. Keep commits focused and describe the user-facing change. Pull requests should include a brief summary, verification commands run, linked issues when applicable, and screenshots for visual changes. Note any environment or deployment changes explicitly.

## Security & Configuration Tips

Do not commit secrets. Use `.env.example` for documented variables and configure deployment values in Netlify. `PUBLIC_GA_ID` is safe for client exposure; mail or service credentials used by Netlify functions should remain server-side only.
