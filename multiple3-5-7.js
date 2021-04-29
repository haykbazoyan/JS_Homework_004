// 4. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let checkNumber = 100;

if (checkNumber % 3 === 0 && checkNumber % 5 !== 0 && checkNumber % 7 !== 0) {
  console.log(`${checkNumber} is a multiple of 3`);
} else if (
  checkNumber % 5 === 0 &&
  checkNumber % 3 !== 0 &&
  checkNumber % 7 !== 0
) {
  console.log(`${checkNumber} is a multiple of 5`);
} else if (
  checkNumber % 7 === 0 &&
  checkNumber % 3 !== 0 &&
  checkNumber % 5 !== 0
) {
  console.log(`${checkNumber} is a multiple of 7`);
} else if (
  checkNumber % 5 === 0 &&
  checkNumber % 3 !== 0 &&
  checkNumber % 7 !== 0
) {
  console.log(`${checkNumber} is a multiple of 5`);
} else if (
  checkNumber % 3 === 0 &&
  checkNumber % 5 === 0 &&
  checkNumber % 7 !== 0
) {
  console.log(`${checkNumber} is a multiple of 3 and 5`);
} else if (
  checkNumber % 3 === 0 &&
  checkNumber % 5 !== 0 &&
  checkNumber % 7 === 0
) {
  console.log(`${checkNumber} is a multiple of 3 and 7`);
} else if (
  checkNumber % 3 !== 0 &&
  checkNumber % 5 === 0 &&
  checkNumber % 7 === 0
) {
  console.log(`${checkNumber} is a multiple of 5 and 7`);
} else {
  console.log(`${checkNumber} is not a multiple of 3, 5 and 7`);
}
