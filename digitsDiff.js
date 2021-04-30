// Enter a number. Find the difference between its biggest and smallest digits.

// 4593653   -   6  // 1 2 3 4 5 6 7 8 9

function numberDigitsDiff(number) {
  if (number > -10 && number < 10) return 0;

  let arrNum = [];
  let num = 0;
  let diff = 0;

  do {
    num = number % 10;
    arrNum.push(num);
    number = (number - num) / 10;
  } while (number > 0);

  let min = arrNum[0];
  let max = 0;

  for (let key of arrNum) {
    if (key > max) {
      max = key;
    } else if (key < min) {
      min = key;
    }
  }
  diff = max - min;
  return diff;
}

console.log(numberDigitsDiff(4593653));
