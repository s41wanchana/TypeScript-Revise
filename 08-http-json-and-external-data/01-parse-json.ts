// Distinguish unreadable JSON from an unexpected value
//
// 1. Write a reader that takes text and attempts to parse JSON. Treat the parsed value as
//    unknown until you inspect it.
// 2. Give it three strings whose contents are: a single opening bracket, an empty pair of
//    brackets, and the word null.
// 3. Expect three distinct outcomes: invalid JSON, a valid empty array, and valid JSON
//    containing a non-array. Show all three in one run.

// Write your attempt below.
