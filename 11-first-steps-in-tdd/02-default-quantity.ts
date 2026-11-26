// Add a default without losing zero
//
// 1. Use two test-first rounds for a default-quantity function. For each round, write a check,
//    observe it fail, then implement the rule.
// 2. First check that an omitted quantity gives 1. Then add a check that an explicit 0 gives
//    0. Run both checks after each change.
// 3. Expect both checks to pass at the end. If the second check already passes, temporarily
//    break that rule and verify the check catches it before restoring the code.

// Write your attempt below.
