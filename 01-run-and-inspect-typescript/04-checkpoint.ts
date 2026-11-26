// Checkpoint — print and check a stock count
//
// 1. A stock count is how many items are available. Choose an item and a count, store the
//    count in a variable, and print it.
// 2. Introduce a type mismatch of your choice. Save and check the watch terminal, or run npm
//    run typecheck from the workbook root.
// 3. A diagnostic is the compiler's message about the problem. Copy its code and message into
//    a comment here, then fix the mismatch.
//      -> error TS2322: Type 'boolean' is not assignable to type 'number'
// 4. Check again. From this exercise folder, run node .\04-checkpoint.ts. In a comment,
//    explain what each command let you observe.
//      -> tsc --noEmit, this one does help the type miss match observe, the node .\04-checkpoint.ts doesn't provide error, it allow to change type
// 5. Expect the diagnostic to disappear and Node to print the count you chose.

// Write your attempt below.
let itemCount = 4;

// itemCount = "3";
itemCount = 3;

console.log(itemCount);
