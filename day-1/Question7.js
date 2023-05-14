/*
2.c. Write a function called `findNthLargest` that takes an array of numbers and a number n as input and returns the nth largest number 
in the array.
```js
const arr = [3, 1, 7, 4, 5];
console.log(findNthLargest(arr, 3));
4
*/

const findNthLargest = (arr, number) => {
  let value;
  for (let i = 0; i <= arr.length; i++) {
    // for(let j = 0; j <= number; j++)
    while (arr[i] > number) {
      value = arr[i];
      break;
      number++;
    }
  }
  return value;
};

console.log(findNthLargest([3, 1, 7, 4, 5], 3));
