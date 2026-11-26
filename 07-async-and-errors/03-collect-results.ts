// Collect successes even if one request fails
//
// Task
// Start three independent fake requests, A, B, and C, before waiting for results. Make B fail
// with "offline" and make C finish before A. Report each outcome in the original request order.
//
// Expected result
// The report contains A's successful value, B's offline failure, and C's successful value, in
// that order.

// Write your attempt below.
