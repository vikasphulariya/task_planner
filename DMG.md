## Documentation Maintenance Guide

Keep the documentation up to date whenever making architectural or development changes.

| If you change...                                      | Update                      |
| ----------------------------------------------------- | --------------------------- |
| Project overview, goals, features, roadmap            | `README.md`                 |
| Add/remove libraries or tools                         | `docs/development-guide.md` |
| Change ESLint, Prettier, Husky, scripts, Node version | `docs/development-guide.md` |
| Change folder structure                               | `docs/architecture.md`      |
| Add/remove top-level folders                          | `docs/architecture.md`      |
| Change feature/module organization                    | `docs/architecture.md`      |
| Add or modify path aliases                            | `docs/architecture.md`      |
| Change routing strategy                               | `docs/architecture.md`      |
| Change authentication strategy                        | `docs/architecture.md`      |
| Add new naming conventions                            | `docs/conventions.md`       |
| Add new file roles                                    | `docs/conventions.md`       |
| Change coding standards                               | `docs/conventions.md`       |
| Change SCSS conventions                               | `docs/conventions.md`       |
| Change import rules                                   | `docs/conventions.md`       |
| Change Git workflow                                   | `docs/development-guide.md` |
| Add development commands                              | `docs/development-guide.md` |

### Rule of Thumb

- **README.md** → What the project is.
- **architecture.md** → How the project is organized.
- **conventions.md** → How code should be written.
- **development-guide.md** → How to develop and contribute.

> Before merging a change, ask: **"Will another developer need to know this?"** If yes, update the appropriate documentation.
