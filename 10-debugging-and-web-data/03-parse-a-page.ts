// Read a page number and preserve a URL path segment
//
// Task
// Read a page number from a URL. State your policy for missing, repeated, fractional, and
// negative values. Try ?page=2, no query, ?page=2&page=3, ?page=1.5, and ?page=-1. Also send
// the ID "A/B C" as one URL path segment and read it back.
//
// Expected result
// The ordinary page gives 2 and each unusual case follows your stated policy. The ID occupies
// one segment and decodes to exactly "A/B C".

// Write your attempt below.
