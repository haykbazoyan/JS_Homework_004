// 1.Given a number. Print “odd” if the numberis odd and “even” if itʼs even.

let number = 20;

if (number % 2 === 0) console.log("Even");
else console.log("Odd");

// 2. Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the
// angles of a triangle equals 180 degrees).

let alphaAngle = 45;
let betaAngle = 90;
let gammaAngle = 180 - (alphaAngle + betaAngle);

console.log(gammaAngle);

// 3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted numberis 0, numberremains the same.

let originNumber = 367;
let curNum = originNumber % 10;
originNumber = Math.floor(originNumber / 10);
originNumber = +(String(curNum) + originNumber);

console.log(originNumber);

// 4. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let checkNumber = 100;

if (checkNumber % 3 === 0 && checkNumber % 5 !== 0 && checkNumber % 7 !== 0) {
  console.log(`${checkNumber} is a multiple of 3`);
} else if (
  checkNumber % 5 === 0 &&
  checkNumber % 3 !== 0 &&
  checkNumber % 7 !== 0
) {
  console.log(`${checkNumber} is a multiple of 5`);
} else if (
  checkNumber % 7 === 0 &&
  checkNumber % 3 !== 0 &&
  checkNumber % 5 !== 0
) {
  console.log(`${checkNumber} is a multiple of 7`);
} else if (
  checkNumber % 5 === 0 &&
  checkNumber % 3 !== 0 &&
  checkNumber % 7 !== 0
) {
  console.log(`${checkNumber} is a multiple of 5`);
} else if (
  checkNumber % 3 === 0 &&
  checkNumber % 5 === 0 &&
  checkNumber % 7 !== 0
) {
  console.log(`${checkNumber} is a multiple of 3 and 5`);
} else if (
  checkNumber % 3 === 0 &&
  checkNumber % 5 !== 0 &&
  checkNumber % 7 === 0
) {
  console.log(`${checkNumber} is a multiple of 3 and 7`);
} else if (
  checkNumber % 3 !== 0 &&
  checkNumber % 5 === 0 &&
  checkNumber % 7 === 0
) {
  console.log(`${checkNumber} is a multiple of 5 and 7`);
} else {
  console.log(`${checkNumber} is not a multiple of 3, 5 and 7`);
}

// 5.
// with .sort() method & function
let arrNumbers = [5, 2, 1, 4, 3, 7, 6];

arrNumbers.sort(function (a, b) {
  return a - b;
});

// 6.

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

console.log(sign);

// 7.
