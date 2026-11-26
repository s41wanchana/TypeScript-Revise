# TypeScript fluency

Work through the numbered directories in order. Each numbered entry is one exercise. Open its TypeScript file, read the comments, and write your attempt below them. The final entry in every unit is a checkpoint. Return after a few days for a fresh variation during review.

**Task** describes what to build or demonstrate. **Expected result** gives the outputs or observations you can use to check your attempt.

**Experiment** appears when there is a separate comparison to try. Keep your working solution while you explore. The exercise tells you which trial changes to undo and which observations to keep.

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

## Run an exercise in PowerShell

The **workbook root** is the `TypeScript Fluency` folder containing `package.json`. Use Node 24 for these exercises. On a fresh checkout, run `npm ci` once from the root to install the compiler version recorded in the lockfile.

**To see what your program prints**, open a terminal in the numbered unit folder and run the file by name. For the first exercise:

```powershell
node .\01-first-run.ts
```

Save after each edit. Press the up arrow and Enter in the terminal to repeat the command. A file with only comments produces no output. For the two-file catalog checkpoint, run `exercise.ts` from its own folder.

**To check the types**, open a second terminal in the workbook root and run:

```powershell
npm run typecheck
```

This checks all 12 units. A successful run returns to the prompt with no compiler errors. A diagnostic includes the filename, line, error code, and message. During an exercise that asks you to cause an error, look for the filename you edited, record what the compiler caught, and repair the example.

**To see diagnostics on every save**, run `npm run typecheck -- --watch` once from the root. Leave that terminal open while you work. After a repair, look for the error to disappear. Press Ctrl+C to stop watching.

## Run the browser exercises in Unit 9

Each exercise folder contains `exercise.ts` and `index.html`. The page loads a compiled file named `exercise.js`. From that exercise's folder, run:

```powershell
npm exec -- tsc exercise.ts --target ES2022 --module none --strict --outFile exercise.js
```

Open the adjacent HTML file in your browser. Use the form on the page and the Console tab in browser developer tools to inspect the results. After editing TypeScript, save, repeat the compile command, and refresh the page. For storage exercises, use the same browser and page for each trial so you can inspect the same stored key.

## Review your work

Each numbered entry is independent. When a prompt asks you to choose a rule, write your prediction before you run the case. When an exercise asks you to explain something, one sentence beside your attempt is enough. For a checkpoint, try the task using your own code, then compare your observations with the expected results. Say which files are ready for review when you want feedback.
