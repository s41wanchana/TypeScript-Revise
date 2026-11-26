// Load orders only after finding their user
//
// Task
// Create local async loaders for a user and their orders. Use the returned user ID for the
// order lookup. Record the order loader's argument and call count. Handle failures when the
// user loader throws either an Error or a string. Treat the caught value as unknown.
//
// Expected result
// A successful user lookup for A leads to one order call with A. In each failure case there are
// zero order calls and a readable error message.

// Write your attempt below.
