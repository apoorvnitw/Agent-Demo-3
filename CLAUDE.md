# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Minimal TypeScript starter (WebStorm template). `src/index.ts` is a single `console.log`; there is no agent logic, test setup, or linter yet.

## Commands

- Build: `npm run build` (runs `tsc`, emits to `dist/`)
- Run source directly: `node src/index.ts` (Node 24 strips types; no build needed)
- Run compiled output: `node dist/index.js`
- Test: `npm test` (Node's built-in `node:test`; single file: `node --test src/temperature.test.ts`)

Tests import siblings with a `.ts` extension (`./temperature.ts`) so Node can run them directly; `rewriteRelativeImportExtensions` in `tsconfig.json` makes `tsc` rewrite these on build. Test files are excluded from the build.

## Known issues

- `dist/` is not in `.gitignore`.
