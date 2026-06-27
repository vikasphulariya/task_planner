# README.md

# Task Flow

A production-style **Task Management Dashboard** built with **Angular 22** to learn modern Angular through real-world development.

The goal of this project is not only to build an application, but also to learn how enterprise Angular applications are structured, developed, and maintained.

---

## Goals

- Learn Angular by building a production-style application
- Follow scalable architecture from day one
- Use modern Angular APIs and best practices
- Keep features self-contained
- Maintain clean and consistent code
- Document architectural decisions

---

## Tech Stack

### Framework

- Angular 22
- TypeScript
- SCSS

### UI

- Angular Material
- Angular CDK
- @lucide/angular
- ApexCharts
- Inter Font

### Development Tools

- ESLint
- Prettier
- Husky
- lint-staged
- EditorConfig

---

## Features

- Dashboard
- Workspace
- Tasks
- Reports
- Profile
- Settings

---

## Documentation

Project documentation is split into focused guides.

| Document                  | Description                               |
| ------------------------- | ----------------------------------------- |
| docs/architecture.md      | Project architecture and folder structure |
| docs/conventions.md       | Coding standards and naming conventions   |
| docs/development-guide.md | Development setup and tooling             |

---

## Project Structure

```text
src/
└── app/
    ├── core/
    ├── shared/
    ├── layouts/
    └── features/
```

See `docs/architecture.md` for the complete explanation.

---

## Styling Architecture

All shared styling lives in `src/app/shared/styles`.

```text
styles/
├── abstracts/
│   ├── _constants.scss
│   ├── _functions.scss
│   ├── _variables.scss
│   ├── _typography.scss
│   ├── _mixins.scss
│   └── _index.scss
├── base/
│   ├── _reset.scss
│   ├── _globals.scss
│   └── _index.scss
├── themes/
│   ├── _light.scss
│   ├── _dark.scss
│   └── _index.scss
└── index.scss
```

- `abstracts/` contains compile-time SCSS constants, functions, variables, typography, and mixins.
- `base/` contains the browser reset and application-wide global defaults only.
- `themes/` contains runtime color tokens exposed as CSS custom properties.

The project uses Angular `stylePreprocessorOptions`, so shared style imports use include paths such as `@use 'abstracts/functions' as fn;` and `@use 'themes';`.

---

## Getting Started

Install dependencies

```bash
nvm install
nvm use
npm install
```

Start development server

```bash
ng serve
```

Run linting

```bash
npm run lint
```

Format code

```bash
npm run format
```

---

## Project Status

Currently under active development.

Milestone 1 — Foundation
