/*
1.b. Write a function called `filterByLength` that takes an array of strings and a number as input and returns an array of all the 
strings in the input array whose length is greater than or equal to the input number.
```js
const arr = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(filterByLength(arr, 6));
["banana", "cherry", "elderberry"]
*/

/*
const arr = ["apple", "banana", "cherry", "date", "elderberry"];

const filterByLength = (arr, number) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= number) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(filterByLength(arr, 6));
*/
//  ANOTHER APPROCH---

const arr = ["apple", "banana", "cherry", "date", "elderberry"];

const newArray = arr.filter((item) => item.length >= 6);

console.log(newArray);
