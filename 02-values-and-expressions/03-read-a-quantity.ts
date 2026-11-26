// Read a quantity from a text field
//
// 1. Pretend each input is text from a form. Try an empty string, three spaces, "0", and "12".
// 2. Decide whether the user entered anything. Print a message for a blank field and print a
//    number for a filled field.
// 3. Predict what would happen to the blank cases if you converted the text to a number first.
//    Try it separately to check.
// 4. Expect both blank inputs to print "Enter a quantity". The last two should give the
//    numbers 0 and 12.

// Write your attempt below.
const inputs = ["", "0", "12"];

for (let item of inputs) {
  if (item.trim()) {
    console.log(Number(item));
  } else {
    console.log("Enter a quantity");
  }
}

// for (let item of inputs) {
//   const newInput = Number(item.trim());
//   if (newInput) {
//     console.log(newInput);
//   } else {
//     console.log("Enter a quantity");
//   }
// }
