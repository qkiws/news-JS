# Daily Dispatch

A responsive news reader powered by News API. The application is written in TypeScript and bundled with Webpack.

## Getting started

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and provide an API key from [News API](https://newsapi.org/).
3. Start the development server with `npm start`.

The default API URL uses the RS School proxy, which also provides `/mocks/sources` and `/mocks/everything` for development.

## Checks and production

- `npm run lint` checks the TypeScript sources with ESLint.
- `npm run typecheck` runs the strict TypeScript compiler.
- `npm run build` creates the production bundle in `dist`.
- `npm run deploy` builds the app and publishes `dist` to the `gh-pages` branch. The repository's GitHub Pages URL is configured as `https://qkiws.github.io/news-JS/`.

The page uses an editorial-inspired layout, horizontal source navigation, and responsive story cards that adapt down to 320px.
