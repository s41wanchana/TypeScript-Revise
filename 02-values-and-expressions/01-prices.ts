// Display a price stored in satang
//
// Task
// Choose three variables for a product name, whole-number price in satang, and availability
// (true or false). Display the price in baht with the ฿ sign and two decimal places. There are
// 100 satang in one baht.
//
// Expected result
// 5 satang displays as ฿0.05. 1250 satang displays as ฿12.50.
//
// Experiment
// Compare the editor's inferred types for const and let using the same starting values. Switch
// the declaration and hover again, or use different variable names. Record what changed. Keep
// one working set of declarations.
//
// Your notes
//      -> error TS2451: Cannot redeclare block-scoped variable 'productName'.

// Write your attempt below.
let productName = "Hat";
let productPrice = 500;
let productAvailable = true;

// const productName = "Can";
console.log("฿" + (productPrice / 100).toFixed(2));
