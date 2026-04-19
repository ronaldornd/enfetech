# Codebase Structure

## Project Root
- `.planning/`: GSD planning and codebase mapping
- `src/`: Application source code
- `public/`: Static assets
- `package.json`: Project configuration and dependencies
- `vite.config.ts`: Vite build configuration

## Source Directory (`src/`)
- `components/`: React functional components
  - `DictionaryExplorer.tsx`
  - `DripRateCalculator.tsx`
  - `FlashcardDeck.tsx`
  - `GlobalSearch.tsx`
  - `LessonViewer.tsx`
  - `PillViewer.tsx`
  - `POPViewer.tsx`
- `lib/`: Shared utility functions and constants
  - `temporal-constants.ts`
- `App.tsx`: Root component
- `main.tsx`: Application entry point
- `index.css`: Global styles (v4 Tailwind imports)
