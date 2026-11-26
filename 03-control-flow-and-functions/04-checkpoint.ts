// Checkpoint — select orders with shortages
//
// 1. Use three orders in order: A requests 5 with 5 available, B requests 6 with 4 available,
//    C requests 9 with 5 available.
// 2. Find the first order that cannot be filled. Return its ID, or undefined if every order
//    can be filled.
// 3. Write a function that takes a positive minimum shortage and returns a filter callback.
//    Keep shortages at or above that minimum.
// 4. Expect B as the first shortage. A minimum of 2 selects B and C; a minimum of 4 selects
//    only C. Also try an empty list.

// Write your attempt below.
