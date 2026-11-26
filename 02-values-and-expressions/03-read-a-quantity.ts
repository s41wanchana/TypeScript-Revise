// Read a quantity from a text field
//
// Task
// Treat each input as text from a form. Print "Enter a quantity" for a blank field and the
// numeric value for a filled field. Try "", "   " (three spaces), "0", and "12".
//
// Expected result
// The first two inputs each print "Enter a quantity". The last two print the numbers 0 and 12.
//
// Experiment
// Keep your working code. Separately, predict the numeric results for "   " and "0", then
// convert those two values and compare them. Can you tell which field was blank from the
// results alone? Two observations are enough. You can remove the trial afterward.

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
