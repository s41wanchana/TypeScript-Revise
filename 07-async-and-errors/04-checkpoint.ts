// Checkpoint — stop an older search from replacing a newer one
//
// 1. Simulate a search box with a variable for the visible result. Start searches for "tea"
//    and then "toast".
// 2. Give each fake request a promise you can finish on demand, so you control the order
//    without relying on a timer.
// 3. Finish toast successfully, inspect the visible result, then finish tea successfully and
//    inspect it again. Repeat with tea failing late.
// 4. Expect toast's result after both completions in each run. The late failure should leave
//    the visible toast result intact.

// Write your attempt below.
