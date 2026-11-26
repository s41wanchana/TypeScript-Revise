// Describe three ways a product is used
//
// Task
// Start with a product containing an ID, name, and price. Derive a list row (ID and name) with
// Pick, a new product (no generated ID yet) with Omit, and an editable patch with Partial. A
// patch may supply name, price, or both.
//
// Expected result
// A list row can omit price, a new product can omit ID, and a patch containing only a zero
// price passes the type check.
//
// Experiment
// Try a patch literal containing an ID and a new product missing its name. Look for a
// diagnostic for each, then remove or repair the two invalid examples.

// Write your attempt below.
