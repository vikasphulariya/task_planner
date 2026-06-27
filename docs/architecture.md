# Architecture Guide

This document describes the architectural decisions followed throughout the project.

---

# Architecture Principles

- Feature-first architecture
- Standalone Angular APIs
- Self-contained features
- Single responsibility
- Prefer composition over inheritance
- Keep business logic close to its feature
- Move code to shared only after reuse
- Strong typing
- Lazy loading by feature
- Use Signals where appropriate
- Prefer functional APIs (guards, interceptors)

---

# Folder Structure

```text
src/
├── app/
│   ├── core/
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   ├── styles/
│   │   │   ├── abstracts/
│   │   │   ├── base/
│   │   │   ├── themes/
│   │   │   └── index.scss
│   │   ├── types/
│   │   └── utils/
│   │
│   ├── layouts/
│   └── features/
│
└── styles.scss
```

---

# core

Application-wide infrastructure.

Examples

- Authentication
- HTTP Interceptors
- Route Guards
- Global Services
- Configuration
- Injection Tokens

Rules

- No feature-specific code
- Singleton services only
- No UI components

---

# shared

Reusable code shared by multiple features.

Examples

- UI Components
- Directives
- Pipes
- Validators
- Constants
- Types
- Utilities
- Global Styles

Rules

- Only move code here after it is reused
- Must not contain business logic
- Should remain framework-agnostic where possible

---

# shared/styles

Centralized styling system for the application.

```text
styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _typography.scss
│   └── _index.scss
│
├── base/
│   ├── _reset.scss
│   ├── _globals.scss
│   └── _index.scss
│
├── themes/
│   ├── _light.scss
│   ├── _dark.scss
│   └── _index.scss
│
└── index.scss
```

## Responsibilities

### abstracts

Contains reusable SCSS utilities.

- Variables
- Functions
- Mixins
- Typography tokens

These files should never output CSS directly.

### base

Contains global CSS.

Examples

- CSS Reset
- Global element styles
- Body styles
- Selection styles

### themes

Contains application themes.

Current

- Light Theme

Future

- Dark Theme

Themes expose design tokens through CSS custom properties.

---

# layouts

Application layouts.

Examples

- Public Layout
- Protected Layout
- Header
- Sidebar
- Right Sidebar

Layouts compose the application structure but should contain minimal business logic.

---

# features

Business modules.

Each feature owns its own code.

Example

```text
tasks/
├── pages/
├── components/
├── services/
├── types/
├── constants/
├── utils/
└── tasks.routes.ts
```

Rules

- Features should be independent.
- Business logic stays inside the feature.
- Features communicate through shared abstractions, not direct dependencies.

---

# Dependency Rules

Allowed

```text
Feature
    ↓
Shared
    ↓
Core
```

Avoid

```text
Feature A
        ↓
Feature B
```

If code is needed by multiple features, move it into `shared`.

---

# Path Aliases

Only top-level aliases are used.

```text
@core
@shared
@layouts
@features
```

Example

```ts
import { ThemeService } from '@core/services/theme.service';
import { ButtonComponent } from '@shared/components/button/button.component';
```

Inside the same feature, use relative imports.

```ts
import { TaskService } from '../services/task.service';
```

---

# Routing

Each feature owns its own routing.

Example

```text
tasks.routes.ts
profile.routes.ts
```

The root router only composes feature routes.

Rules

- Lazy load features where appropriate.
- Keep route definitions close to the feature.

---

# Styling Guidelines

- Use SCSS modules with `@use` and `@forward`.
- Avoid `@import`.
- Use design tokens instead of hardcoded values.
- Prefer CSS custom properties for themeable values.
- Keep component styles scoped.
- Avoid global utility classes unless genuinely reusable.

---

# Future Topics

This document will expand with:

- Authentication
- State Management
- HTTP Architecture
- Error Handling
- Performance
- Lazy Loading
- Theming
- Accessibility
- Testing
- Deployment
