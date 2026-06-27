# docs/development-guide.md

# Development Guide

This document explains the project tooling and development workflow.

---

# Requirements

- Node.js
- npm
- Angular CLI

---

# Installed Libraries

## Angular Material

Provides accessible UI components.

---

## Angular CDK

Provides low-level UI building blocks.

---

## @lucide/angular

Modern tree-shakeable icon library.

---

## ApexCharts

Interactive charts.

---

## Inter Font

Application typography.

---

# Development Tools

## ESLint

Maintains code quality.

Run

```bash
npm run lint
```

---

## Prettier

Maintains consistent formatting.

Run

```bash
npm run format
```

---

## Husky

Runs Git hooks before commits.

---

## lint-staged

Only lints and formats staged files.

---

## EditorConfig

Keeps editor settings consistent.

---

# Development Workflow

1. Create feature
2. Build UI
3. Add business logic
4. Add routing
5. Test
6. Commit

---

# Recommended VS Code Extensions

- Angular Language Service
- ESLint
- Prettier
- EditorConfig

---

# Useful Commands

Install

```bash
npm install
```

Start

```bash
ng serve
```

Build

```bash
ng build
```

Lint

```bash
npm run lint
```

Format

```bash
npm run format
```

Test

```bash
ng test
```

---

# Git Workflow

- Create feature branch
- Make small commits
- Ensure lint passes
- Open Pull Request
- Squash if necessary

---

# Future Topics

This guide will expand with:

- Mock Authentication
- Environment Configuration
- Deployment
- CI/CD
- Release Process
- Testing Strategy
