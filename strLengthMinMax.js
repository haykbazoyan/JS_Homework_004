// 15. Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
// theirlengths.

// [“anymore”, “raven”, “me”, “communicate”]
//       7        5       2         11
function arrString(arrStr) {
  let minString = ``;
  let maxString = ``;
  let minNumber = 0;
  let maxNumber = 0;

  for (let key of arrStr) {
    if (key.length > maxNumber) {
      maxNumber = key.length;
      maxString = key;
    } else {
      minNumber = key.length;
      minString = key;
    }
  }
  let minMaxLengthSum = minNumber + maxNumber;

  return minMaxLengthSum;
}

arrString([`anymore`, `raven`, `me`, `communicate`]);
