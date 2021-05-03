// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)

// f  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// n  1, 2, 3, 4, 5, 6,  7,  8,  9, 10,

function fibonacci(n) {
  let fibArr = [0, 1];
  if (n === 2) return 1;

  let num = 1;
  for (let i = 1; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i]);
  }
  return fibArr;
}

console.log(fibonacci(4));
