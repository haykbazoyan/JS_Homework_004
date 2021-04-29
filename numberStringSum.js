// 14. Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

let mixArr = [1, 4, `i am a string`, `456`];

function mixArray(str) {
  let sumOfNum = 0;
  let sumOfStr = 0;

  for (let key of str) {
    if (typeof key === typeof String()) {
      sumOfStr += 1;
    } else if (typeof key === typeof Number()) {
      sumOfNum += 1;
    }
  }
  let result = `Numbers: ${sumOfNum}, Strings: ${sumOfStr}`;

  return result;
}

console.log(mixArray(mixArr));
