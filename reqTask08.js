// Enter a number. Reverse its first and last digits. Print the new number.

let number = 234;
let reversNum = "";
let numStr = String(number);

for (let i = numStr.length - 1; i >= 0; i--) {
  reversNum += numStr[i];
}
reversNum = +reversNum;
console.log(reversNum);
