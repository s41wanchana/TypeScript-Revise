# TypeScript fluency

Work through the numbered directories in order. Each numbered entry is one exercise. Open its TypeScript file, read the comments, and write your attempt below them. The final entry in every unit is a checkpoint. Return after a few days for a fresh variation during review.

- `01-run-and-inspect-typescript/` — 4 exercises
- `02-values-and-expressions/` — 4 exercises
- `03-control-flow-and-functions/` — 4 exercises
- `04-objects-arrays-and-algorithms/` — 4 exercises
- `05-unions-and-narrowing/` — 4 exercises
- `06-reusable-types-and-modules/` — 4 exercises
- `07-async-and-errors/` — 4 exercises
- `08-http-json-and-external-data/` — 4 exercises
- `09-browser-interactions/` — 4 exercises
- `10-debugging-and-web-data/` — 4 exercises
- `11-first-steps-in-tdd/` — 3 exercises
- `12-independent-fluency-check/` — 3 exercises

## Running your work

From the workbook root in PowerShell, use Node 24 to run a file directly. For example:

```powershell
node ./01-run-and-inspect-typescript/01-first-run.ts
```

Check all exercise files with `tsc --noEmit` if TypeScript is installed. Otherwise use `npm exec --package=typescript@5.9.3 -- tsc --noEmit` (requires a download the first time). During a diagnostic exercise, repair the deliberate error before checking the next file. For the module exercise, import the helper using its `.ts` extension.

For each browser exercise, open PowerShell in its numbered subdirectory and compile the script:

```powershell
npm exec --package=typescript@5.9.3 -- tsc exercise.ts --target ES2022 --module none --strict --outFile exercise.js
```

Open the adjacent `index.html` in a browser. Recompile and refresh after each edit. Use the browser console to inspect values.
