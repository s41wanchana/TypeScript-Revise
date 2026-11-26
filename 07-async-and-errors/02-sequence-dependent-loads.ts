// Load orders only after finding their user
//
// 1. Create two local async functions. One supplies a user with ID A; the other receives a
//    user ID and supplies its orders.
// 2. Run the success case. Record which ID the order loader received and how many times it was
//    called.
// 3. Start a fresh run where the user loader throws an Error. Repeat with a thrown string.
//    Treat the caught value as unknown.
// 4. Expect one order call with A on success, zero calls on each failure, and a readable error
//    message in both failure cases.

// Write your attempt below.
