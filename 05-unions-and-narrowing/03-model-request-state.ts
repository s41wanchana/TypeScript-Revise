// Give each request state its own data
//
// 1. Model three alternatives for a request. Loading carries no data, success carries rows,
//    and failure carries a message.
// 2. Write a function that produces a label for each state. Try loading, success with two
//    rows, and failure with the message "offline".
// 3. Expect the labels to distinguish waiting, two available rows, and the offline error.
// 4. Try reading rows before checking the state. Read the compiler message and explain which
//    cases make that access unsafe. Repair it before moving on.

// Write your attempt below.
