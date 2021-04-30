// 19. . Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

// [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] [45, 8, 0, -6]

function sumArrNumbers(array) {
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    let numbersSum = 0;
    for (let key of array[i]) {
      numbersSum += key;
    }
    resultArr.push(numbersSum);
  }
  return resultArr;
}

let arrArr = [[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]];
let res = sumArrNumbers(arrArr);
console.log(res);
