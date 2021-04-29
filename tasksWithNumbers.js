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
