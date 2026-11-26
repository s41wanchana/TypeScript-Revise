// Checkpoint — accept whole quantities from text
//
// Task
// Read a whole quantity from text. Ignore spaces at the ends. Accept one or more digits from 0
// to 9 only when the value is a safe integer in JavaScript. Choose how to report invalid input
// and explain when conversion happens.
//
// Expected result
// " 12 " gives 12 and "0" gives 0. Reject "", "   ", "2x", "1.5", "-1", and "9007199254740992".

// Write your attempt below.
const textNumber: string[] = [
  " 12 ",
  "0",
  "21",
  "1.0",
  "10",
  "", //done
  "   ", //done
  "2x",
  "1.5",
  "-1",
  "9007199254740992",
];

for (const item of textNumber) {
  let isValid = true;
  const trimmedText = item.trim();

  if (!trimmedText) {
    console.log("invalid input");
    continue;
  }

  for (const n of trimmedText) {
    if (!"0123456789".includes(n)) {
      isValid = false;
      break;
    }
  }

  if (isValid && Number.isSafeInteger(Number(trimmedText))) {
    console.log(Number(trimmedText));
  } else {
    console.log("invalid input");
  }
}
