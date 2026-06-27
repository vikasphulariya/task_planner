# docs/architecture.md

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

---

# Folder Structure

```text
src/
└── app/
    ├── core/
    ├── shared/
    ├── layouts/
    └── features/
```

---

# core

Application-wide infrastructure.

Examples

- Authentication
- HTTP Interceptors
- Global Services
- Configuration
- Injection Tokens

Rules

- No feature-specific code
- Singleton services only

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

Rules

- Only move code here after it is reused
- Must not contain business logic

---

# layouts

Application layouts.

Examples

- Public Layout
- Protected Layout
- Header
- Sidebar
- Right Sidebar

---

# features

Business modules.

Every feature owns its own code.

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

Each feature should be independent.

---

# Dependency Rules

Allowed

```
Feature
    ↓
Shared
    ↓
Core
```

Avoid

```
Feature A
        ↓
Feature B
```

unless intentionally shared.

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

Example

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

---

# Future Topics

This document will expand with:

- Authentication
- State Management
- HTTP Architecture
- Error Handling
- Performance
- Lazy Loading
