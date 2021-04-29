// 1. Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the
// evens.

let mixArray = [8, 0, 1, `hey`, 12, 5, true, `2`, null, 7, 3];

function filterArrayNum(array) {
  let numberArr = [];
  let oddNumber = [];
  let evenNumber = [];

  for (let key of array) {
    if (typeof key === typeof Number()) {
      if (key % 2 === 0) evenNumber.push(key);
      else oddNumber.push(key);
    }
  }
  for (let key of oddNumber) {
    numberArr.push(key);
  }
  for (let key of evenNumber) {
    numberArr.push(key);
  }
  return numberArr;
}

console.log(filterArrayNum(mixArray));
