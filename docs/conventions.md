# docs/conventions.md

# Coding Conventions

This document defines the coding standards followed throughout the project.

---

# Naming Convention

General format

```text
<name>.<role>.<extension>
```

Example

```text
task.service.ts
task.types.ts
task.constants.ts
```

---

# Standard Roles

| Role      | Example              |
| --------- | -------------------- |
| component | sidebar.component.ts |
| page      | dashboard.page.ts    |
| service   | task.service.ts      |
| types     | task.types.ts        |
| constants | task.constants.ts    |
| utils     | date.utils.ts        |
| routes    | tasks.routes.ts      |
| spec      | task.service.spec.ts |

---

# Angular Roles

Keep Angular naming conventions.

Examples

```text
auth.guard.ts
auth.interceptor.ts
capitalize.pipe.ts
click-outside.directive.ts
email.validator.ts
```

---

# Folder Naming

Use lowercase.

Examples

```text
dashboard
task-list
shared
layouts
```

---

# Component Naming

PascalCase class

```ts
DashboardPage;
SidebarComponent;
```

File

```text
dashboard.page.ts
sidebar.component.ts
```

Selector

```html
<app-sidebar></app-sidebar>
```

---

# Services

Keep services focused.

One responsibility per service.

Avoid "God Services".

---

# Types

Keep all related types together.

Example

```text
task.types.ts
```

Contains

- Interfaces
- Type aliases
- Enums

---

# Constants

Only immutable values.

Examples

```ts
export const MAX_FILE_SIZE = ...
```

Avoid business logic.

---

# Utilities

Utilities should be pure functions.

Avoid classes with static methods.

---

# Imports

Inside feature

```ts
../services/task.service
```

Outside feature

```ts
@shared/...
@core/...
```

---

# General Rules

- Prefer readonly
- Prefer const
- Avoid any
- Keep files small
- Prefer composition
- Keep components focused
