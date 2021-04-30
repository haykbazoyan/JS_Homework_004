// Given an array of a size smallerthan 100. It consists of numbers from 0 to 99 in any order. Create a new
// array where each element from that array is placed underthe index of its value. Start from the smallest
// value and end with the biggest one. If there are missing values, put in its places undefined.

// [4, 3, 0, 9] | [0, undefined, undefined, 3, 4, undefined, undefined, undefined, undefined, 9]

let mixedNumArray = [4, 3, 0, 9];

function sameIndexElement(array) {
  let sortArray = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    sortArray[array[i]] = array[i];
  }
  return sortArray;
}
let newSortArr = sameIndexElement(mixedNumArray);
console.log(newSortArr);
