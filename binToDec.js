// Bin to Dec

function convertBinToDec(number) {
  let decNumber = 0;

  for (let i = number.length - 1, j = 0; i >= 0; i--, j++) {
    decNumber += number[i] * Math.pow(2, j);
  }
  return decNumber;
}

console.log(convertBinToDec("0101011"));
