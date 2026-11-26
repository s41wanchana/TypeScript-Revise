// Checkpoint — change the quantity parser's rules
//
// Task
// Drive a quantity parser with executable checks. Initially accept digit strings including "01"
// and reject blank text. Choose how to report rejection. Check "0", "12", blank text, and "01".
// Then change the rule to reject leading zeros except "0" itself. Update the test first, record
// the failure, implement the change, and rerun after tidying the code.
//
// Expected result
// Initially "01" gives 1. The revised check fails against the old behavior. In the finished
// version, "0" and "12" give numeric 0 and 12. Blank text and "01" are rejected. All checks
// pass.

// Write your attempt below.
