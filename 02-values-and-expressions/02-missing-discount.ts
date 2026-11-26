// Tell a missing discount apart from a zero discount
//
// 1. A shop uses a 10 percent discount when no discount was supplied. Zero is a deliberate
//    choice.
// 2. Try undefined, 0, and 25. First choose the discount using the input as an if condition.
//    Record all three results.
// 3. Try again with a check specifically for a missing value. Identify the input for which the
//    two versions disagree.
// 4. Expect the shop's rule to give 10, 0, and 25 respectively.

// Write your attempt below.
let discount: number | undefined = undefined;
if (discount != undefined) {
  console.log(discount);
} else {
  console.log(10);
}
