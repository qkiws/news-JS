# Daily Dispatch

A responsive news reader powered by News API. The application is written in TypeScript and bundled with Webpack.

## Getting started

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`. The default configuration uses the proxy's mock endpoints.
3. Start the development server with `npm start`.

The default API URL uses the RS School proxy's `/mocks/sources` and `/mocks/everything` endpoints, so no personal API key is needed.

## Checks and production

- `npm run lint` checks the TypeScript sources with ESLint.
- `npm run typecheck` runs the strict TypeScript compiler.
- `npm run build` creates the production bundle in `dist`.
- `npm run deploy` builds the app and publishes `dist` to the `gh-pages` branch. The repository's GitHub Pages URL is configured as `https://qkiws.github.io/news-JS/`.

The page preserves the original HTML and CSS interface.
