// Checkpoint — change the quantity parser's rules
//
// 1. Use executable checks to drive a parser. Initially accept digit strings including "01"
//    and reject blank text. Choose how to report rejection.
// 2. Check "0", "12", blank text, and "01". Verify all four before changing the requirement.
// 3. Now reject numbers with leading zeros except "0" itself. Change the expectation for "01"
//    first and record the failing result. Update the parser, then tidy it and rerun.
// 4. Expect numeric 0 and 12 for the first two inputs. Blank and "01" should now be rejected,
//    and every final check should pass.

// Write your attempt below.
