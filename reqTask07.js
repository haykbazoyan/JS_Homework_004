// 7. Insert a digit and a number. Check whether the digits contains in the number or not.

function checkDigit(digit, number) {
  numString = String(number);
  let result;
  for (let i = 0; i < numString.length; i++) {
    if (digit === Number(numString[i])) {
      result = `Yes`;
    } else result = `No`;
  }
  return result;
}
let res = checkDigit(8, 123345678);
console.log(res);
