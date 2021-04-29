// Insert a number. Print ‘yesʼ if the numbers prime, ‘noʼ otherwise.

function primeNumber(number) {
  let check = false;
  if (number === 1 || number === 2 || number === 3) return `Yes`;

  for (let i = 2; i < Math.floor(number / 2); i++) {
    if (number % i === 0) {
      check = false;
      break;
    } else {
      check = true;
    }
  }
  if (check === false) return `No`;
  else return `Yes`;
}
let result = primeNumber(10);
console.log(result);
