// Checkpoint — notice a newly added state
//
// 1. In this file, model loading, success with rows, and failure. Make the label function
//    check that it has handled every possible state.
// 2. Add a cancelled state to the type before giving it a label. Run the type check and locate
//    the diagnostic for the unhandled case.
// 3. Handle cancellation and check again. For success, look up a row by ID and handle a miss
//    without a type assertion.
// 4. Expect the type error to disappear. With only row A present, looking up A should return
//    its label and looking up B should give your missing-row result.

// Write your attempt below.
