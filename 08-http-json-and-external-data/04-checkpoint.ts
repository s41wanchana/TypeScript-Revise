// Checkpoint — handle four kinds of HTTP response
//
// 1. Make a fake loader that returns a local Response object. Choose a simple order shape and
//    write down its required fields.
// 2. Create four sample responses: 200 with valid orders, 404 with an empty body, 200 with
//    broken JSON, and 200 with valid JSON containing a wrong-shaped order.
// 3. Run each through the same reader. A 200 status means the HTTP request succeeded; the body
//    still needs checking.
// 4. Expect four distinguishable results: usable orders, an HTTP error with status 404, a
//    parsing error, and an order validation error.

// Write your attempt below.
