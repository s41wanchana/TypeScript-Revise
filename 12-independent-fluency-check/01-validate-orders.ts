// Validate orders without assuming their shape
//
// 1. Start with JSON text. Treat parsed rows as unknown. Require a string branch and a whole,
//    nonnegative requested count.
// 2. A fulfilled count can be omitted. State how your reader handles its absence and require
//    any supplied count to be a whole, nonnegative number.
// 3. Try branch A with 3 requested and 1 fulfilled, then omit fulfilled. Separately try
//    missing requested, requested as text, and a non-array body.
// 4. Expect the complete row to pass, the omitted field to follow your stated policy, and all
//    three malformed inputs to produce clear failures.

// Write your attempt below.
