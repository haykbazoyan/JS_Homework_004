// 11. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
// print the quotient, otherwise print the remainder.

// let number = 1234;

function numToStringInArr(number) {
  let arrStrNumberDig = [];
  let numStr = String(number);

  for (let i = 0; i < numStr.length; i++) {
    arrStrNumberDig[i] = numStr[i];
  }
  return arrStrNumberDig;
}

function multiplyNumbers(number) {
  if (number === 0) return `Cannot calculate.`;
  if (number < 10) return `Quotient is ${number}`;

  let mulOfArrDigits = 1;
  let sumOfArrDigits = 0;
  let result = 0;
  let numStr = numToStringInArr(number);

  for (let key of numStr) {
    mulOfArrDigits *= Number(key);
    sumOfArrDigits += Number(key);
  }

  if (mulOfArrDigits % sumOfArrDigits === 0) {
    result = mulOfArrDigits / sumOfArrDigits;
    return `Quotient is ${result}`;
  } else if (mulOfArrDigits % sumOfArrDigits !== 0) {
    result = mulOfArrDigits % sumOfArrDigits;
    return `Remainder is ${result}`;
  }
}

console.log(multiplyNumbers(1233));
