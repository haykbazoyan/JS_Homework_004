// 6. Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let arrNum = [2, -3, 4];
let sign = function (arrNum) {
  let check = 0;
  for (let key of arrNum) {
    if (key === 0) {
      return `unsigned`;
    } else if (key < 0) {
      check += 1;
    }
  }
  if (check % 2 === 0) return `+`;
  else return `-`;
};

console.log(sign(arrNum));
