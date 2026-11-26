// Checkpoint — print and check a stock count
//
// Task
// Choose an item and print its stock count (how many are available). Run npm run typecheck from
// the workbook root and node .\04-checkpoint.ts from this exercise folder. Explain what each
// command shows you.
//
// Expected result
// The type check passes for this file and Node prints your count.
//
// Experiment
// Temporarily introduce a type mismatch of your choice. Find this file in the compiler output
// and copy the error code and message into a comment. Undo the mismatch, keep the comment, and
// rerun both commands.
//
// Your notes
//      -> error TS2322: Type 'boolean' is not assignable to type 'number'
//      -> tsc --noEmit, this one does help the type miss match observe, the node .\04-checkpoint.ts doesn't provide error, it allow to change type

// Write your attempt below.
let itemCount = 4;

// itemCount = "3";
itemCount = 3;

console.log(itemCount);
