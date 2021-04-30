// Find factorial

function findFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(findFactorial(5));
