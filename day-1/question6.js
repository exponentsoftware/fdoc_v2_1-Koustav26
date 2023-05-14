/*
2.b. Write a function called `findMissingNumber` that takes an array of integers from 1 to n with one number missing and returns the missing number.
```js
const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(findMissingNumber(arr));
4
*/

const findMissingNumber = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] !== i) {
      return i;
    }
  }
};
console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10]));
