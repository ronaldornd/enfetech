# Codebase Concerns

## Technical Debt
- **Static Content**: Most application data (lessons, flashcards, POPs) is hardcoded in `src/data.ts`. This makes content management difficult without code changes.
- **State Persistence**: The XP and Level progress is currently stored in local state (`useState`) in `App.tsx`. Refreshing the app resets all progress.
- **Error Handling**: Minimal error handling for external integrations (Gemini API).

## Production Risks
- **Exposure of Credentials**: Ensure `GEMINI_API_KEY` is not leaked in the production bundle if clients are accessing it directly (the current setup uses Vite define).
- **Offline Support**: The app is educational/clinical. Practitioners might need access in hospital basements or areas with poor connection. Offline persistence is recommended.
- **Mobile Packaging**: The app lacks manifest, service worker, and app icons for a proper mobile installation.
