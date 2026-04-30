# Romio CV / Portfolio

A premium, data-driven CV/portfolio website for a Technical Architect / Fullstack Engineer. The site is built with Vite, React, TypeScript, and CSS Modules, and is ready to deploy on GitHub Pages.

## Tech Stack

- Vite
- React
- TypeScript with strict mode
- CSS Modules
- JSON-driven content in `src/features/data`
- GitHub Pages deployment via GitHub Actions

## Features

- Professional dark-first UI with light/dark toggle
- Sticky navigation with smooth scrolling
- Fully data-driven CV content loaded from JSON
- Independent sections for hero, about, skills, experience, projects, architecture, education, contact, and footer
- Responsive layout for desktop, tablet, and mobile
- Client-side contact form validation with success toast

## Project Structure

```text
src/
  components/      Reusable UI building blocks
  data/            JSON content for the portfolio
  sections/        Page-level sections
  styles/          Global theme tokens
  types/           TypeScript models
  utils/           Data loading and validation helpers
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run export:cv
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Export CV (TeX -> PDF)

`npm run export:cv` now generates only 2 TeX files:

- `public/[en]_nguyen_duy_khuong_cv.tex`
- `public/[vi]_nguyen_duy_khuong_cv.tex`

### Generate PDF with Overleaf

1. Run:

```bash
npm run export:cv
```

2. Open [Overleaf](https://www.overleaf.com/).
3. Create a new blank project and upload one of the generated `.tex` files.
4. Compile in Overleaf and download the PDF.
5. Create `public/cv/` if it does not exist, then copy the downloaded PDF there with one of these exact names:
   - `en_khuongnd_cv.pdf`
   - `vi_khuongnd_cv.pdf`

## GitHub Pages Deployment

The project is configured for GitHub Pages with:

- `base` set in `vite.config.ts`
- GitHub Actions workflow at `.github/workflows/deploy.yml`

### Important

If your repository name is not `romio-cv`, update the `base` value in `vite.config.ts`.

Example:

```ts
base: '/your-repo-name/'
```

### Deploy Steps

1. Push the project to GitHub.
2. Ensure the default branch is `main`, or update the workflow if needed.
3. In GitHub repository settings, enable Pages and use the GitHub Actions source.
4. Push to `main` to trigger the deployment workflow.

## Quality Notes

- TypeScript strict mode is enabled.
- Content is not hard-coded in UI components.
- Accessibility basics are included: labels, aria-labels, semantic headings, and form labels.
- The build and lint scripts are intended to pass before deployment.
