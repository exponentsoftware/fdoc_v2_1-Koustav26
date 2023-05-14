/*
1.c. Write a function called `sumOfPrimes` that takes a number as input and returns the sum of all prime numbers less than or 
equal to the input number.
```js
console.log(sumOfPrimes(10));
17 // 2 + 3 + 5 + 7 = 17
*/

function sumOfPrimes(num) {
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfPrimes(10));
