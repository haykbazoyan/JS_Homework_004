// Given an array of numbers and a number. Find the index of a first element which is equal to that number.
// If there is not such a number, that find the index of the first element which is the closest to it.

let arrNum = [21, -9, 15, 2116, -70, 33],
  num = -71;
//             0    1   2    3    4    5

function findElementInArr(array, number) {
  let result = 0;
  let diff = 0;

  for (let key in array) {
    if (array[key] === number) {
      return key;
    } else {
      // I haven't finished this code yet
    }
  }
}

console.log(findElementInArr(arrNum, num));
