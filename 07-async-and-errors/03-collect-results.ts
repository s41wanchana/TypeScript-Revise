// Collect successes even if one request fails
//
// 1. Create three local async requests named A, B, and C. Start all three before waiting for
//    their results.
// 2. Make B fail with "offline". Arrange for C to finish before A, then report the three
//    outcomes in the original request order.
// 3. Expect a success for A, the offline failure for B, and a success for C. Verify the report
//    includes both successful values.

// Write your attempt below.
