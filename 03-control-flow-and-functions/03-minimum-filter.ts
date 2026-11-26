// Reuse a minimum quantity as a filter
//
// 1. A callback is a function another function calls. Array.filter calls yours for each item
//    and keeps the items it accepts.
// 2. Write a function that takes a minimum and returns a callback for quantities at least that
//    large.
// 3. Create callbacks for 3 and 5. Apply both to [2, 3, 5], then use the first callback again.
// 4. Expect [3, 5], then [5], then [3, 5]. Each callback should remember its own minimum.

// Write your attempt below.
