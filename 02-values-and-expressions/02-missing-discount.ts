// Tell a missing discount apart from a zero discount
//
// Task
// Choose a discount for each input. A missing discount defaults to 10 percent. An explicitly
// supplied discount, including zero, keeps its value.
//
// Expected result
// undefined gives 10, 0 gives 0, and 25 gives 25.
//
// Experiment
// Keep your working rule. Separately, try using the input itself as an if condition for the
// same three cases. Which result disagrees with the shop's rule? Keep your observation and
// remove or comment out the trial.

// Write your attempt below.
let discount: number | undefined = undefined;
if (discount != undefined) {
  console.log(discount);
} else {
  console.log(10);
}
