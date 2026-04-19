# Codebase Architecture

## High-Level Pattern
- **Component-Driven Development**: UI is built with atomic and composite components in `src/components`.
- **Mobile-First Design**: The application is constrained to a mobile viewport (`max-w-md`) even on desktop, facilitating a native-like experience.
- **State Management**: Local React state (`useState`, `useMemo`) is used for UI transitions and data filtering.
- **Client-Side Data**: Mock data is imported from `src/data.ts`.

## Key Modules
- **Learning System**: Modules, lessons, and flashcards.
- **Clinical Tools**: Drip rate calculator, dictionary explorer, and POP viewer.
- **Gamification**: XP system and level-up mechanics.

## Design System
- **Dark Mode**: High-contrast dark theme.
- **Typography**: Tracking-tight and black font weights for headings.
- **Animations**: Using `motion/react` for transitions and feedback.
