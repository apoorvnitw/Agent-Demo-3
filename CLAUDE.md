# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Minimal TypeScript starter (WebStorm template). `src/index.ts` is a single `console.log`; there is no agent logic, test setup, or linter yet.

## Commands

- Build: `npm run build` (runs `tsc`, emits to `dist/`)
- Run source directly: `node src/index.ts` (Node 24 strips types; no build needed)
- Run compiled output: `node dist/src/index.js`

## Known issues

- TypeScript 6 errors with `TS5011` because `tsconfig.json` sets `outDir` without `rootDir`. `tsc` still emits, but into `dist/src/index.js` instead of the `dist/index.js` that `package.json` `main` expects. Fix: add `"rootDir": "src"` to `compilerOptions`.
- `dist/` is not in `.gitignore`.
