// Checkpoint — handle four kinds of HTTP response
//
// Task
// Choose an order shape and write down its required fields. Use a fake loader returning local
// Response objects. Send four responses through one reader: valid orders with status 200, an
// empty 404, broken JSON with 200, and a wrong-shaped order in valid JSON with 200.
//
// Expected result
// The four cases report usable orders, an HTTP error with status 404, a parsing error, and an
// order validation error, respectively.

// Write your attempt below.
