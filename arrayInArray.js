// [1, 10], [2, 3, 4, 5, 6, 7, 8, 9]

function addTwoArrays(firstArr, secArr) {
  let resultArr = [];

  resultArr.push(firstArr[0]);
  for (let j = 0; j < secArr.length; j++) {
    resultArr[j + 1] = secArr[j];
  }
  resultArr.push(firstArr[1]);

  return resultArr;
}

let fArr = [1, 10];
let sArr = [2, 3, 4, 5, 6, 7, 8, 9];

console.log(addTwoArrays(fArr, sArr));
