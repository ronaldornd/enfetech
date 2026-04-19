# Codebase Conventions

## Coding Standards
- **Framework**: Functional React components with Hooks.
- **Language**: TypeScript with strict types (where possible).
- **Styling**: Vanilla Tailwind CSS v4 strings. No complex CSS-in-JS.
- **Components**: PascalCase for files and components.
- **State**: Centralized local state in `App.tsx` for core navigation and XP, shared via props to sub-components.

## UI/UX Guidelines
- **Viewport**: Strictly mobile-first, centered in a `max-w-md` container on desktop.
- **Aesthetics**: Premium dark mode with vibrant accent colors (Accent: #E7FF52, Success: #00F5A0, Warning: #FF3B3B).
- **Interactions**: Subtle hover scales and spring-based entry animations (Motion/Framer).
