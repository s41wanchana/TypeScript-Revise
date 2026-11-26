// Read a page number and preserve a URL path segment
//
// 1. Read page from a URL. Before writing code, choose what to do when it is missing,
//    repeated, fractional, or negative.
// 2. Try ?page=2, no query, ?page=2&page=3, ?page=1.5, and ?page=-1. Record your predicted
//    result for each and compare it to the run.
// 3. Then place the ID "A/B C" into one URL path segment. Read the segment back and decode it.
// 4. Expect the ordinary page to give 2 and each unusual case to follow your stated rule. The
//    ID must occupy one segment and come back exactly as "A/B C".

// Write your attempt below.
