// Create a function that takes an array of numbers and returns the sum of all the numbers in the array.

const nums = [10, 20, 30, 40];

function sumArr(arr) {
let total = 0;
arr.forEach(item => total += item);
// console.log(total);
}

sumArr(nums);
//     Write a function that takes an array of strings and returns a new array with all the strings capitalized.

const arrOfString = ["earth", "pluto", "neptune"];
const capStrings = (arr) => arr.map(x => x.toUpperCase());

// console.log(capStrings(arrOfString));
//     Write a function that takes an array of numbers and returns a new array with only the even numbers.

const arrOfNums = [10, 20, 33, 42, 100, 101, 99];

function onlyEven(arr) {
const evenArr = arr.filter(x => x % 2 === 0);
return evenArr;
}

// console.log(onlyEven(arrOfNums));
//     Write a function that takes an array of strings and returns the longest string in the array.
const arrOfStrings = ["one", "twenty", "superman", "mississippi"];
function longestString(arr) {
let longest = arr[0];
for (i = 0; i < arr.length; i++){
    if (longest.length < arr[i].length) {
        longest = arr[i]
    }
}
// return longest; 
}

// longestString(arrOfString);
// console.log(longestString(arrOfStrings));
//     Create a function that takes two arrays of numbers and returns a new array with the sum of the corresponding elements in each array.
/* This code is creating two arrays of numbers, `numsArr1` and `numsArr2`. It then uses the `map()`
method to create a new array called `sumArr` that contains the sum of the corresponding elements in
each array. The `map()` method takes a function that is called for each element in the array, and
the function takes two arguments: the current element and its index. In this case, the function adds
the current element from `numsArr1` to the element at the same index in `numsArr2`. The resulting
`sumArr` array is then logged to the console. However, there is a syntax error in the code as the
arrow function in `const sumArr = numsArr1.map(a, i) => a + numsArr2[i];` should have the arguments
wrapped in parentheses like this: `const sumArr = numsArr1.map((a, i) => a + numsArr2[i]);`. */
// const numsArr1 = [4, 6, 8, 10, 12];
// const numsArr2 = [10, 20, 30, 40, 100];
// const sum = numsArr1.map(function (num, idx) { 
//     return num + numsArr2[idx];
//   })

// console.log(sum); // solution worked
// const sumArr = numsArr1.map((a, i) => a + numsArr2[i]);
// console.log(sumArr()); // this method is giving error with SumArr

// function sumArray(numsArr1, numsArr2) {
//     const c = [];
//     for (let i = 0; i < Math.max(numsArr1.length, numsArr2.length); i++) {
//         c.push((numsArr1[i] || 0) + (numsArr2[i] || 0));
//     }
//     return c;
// }
// const numsArr1 = [400, 600, 800, 100, 120];
// const numsArr2 = [100, 200, 300, 400, 100];
// console.log(sumArray(numsArr1, numsArr2)); // https://stackoverflow.com/questions/24094466/sum-two-arrays-in-single-iteration

//     Write a function that takes an array of numbers and returns the average of all the numbers in the array.
// let  numsArr1 = [400, 600, 800, 100, 1200];
//     let total = 0;
//      for (let i = 0; i< numsArr1.length; i++) {     
//         total += numsArr1[i];
//         avg = total / numsArr1.length;
// }
// console.log(avg);

// function avgNums(arr) {
// let total = 0;
// for (let i = 0; i< arr.length; i++) {
//     total += arr[i];
// }
// arr.forEach(item => total += item);
// console.log(total / arr.length);
// }

// avgNums([1,5,10,20,40]); // 15.2
// avgNums([2,2]); 2

//     Create a function that takes an array of strings and returns a new array with all the strings that contain the letter 'a'.
// const someArray = ["apple", "green", "potato", "cat", "dog"];

// function aString(arr) {
//     const newArray = arr.filter(item => item.includes("a"));
//     console.log(newArray);

// }

// aString(someArray); 
//     Write a function that takes an array of numbers and returns a new array with all the numbers sorted in descending order.
const numsArray = [4000, 5, 101, 34, 42, 250, 200];
// console.log(numsArray.sort((a, b) => b - a)); // it worked
//     Write a function that takes an array of strings and returns a new array with all the strings reversed.
const alphabetArray = ["b", "c", "d", "e", "f", "g", "h"];
// console.log(alphabetArray.reverse((a, b) => a - b)); // it worked
//     Create a function that takes two arrays of numbers and returns a new array with only the numbers that are present in both arrays. 

// https://www.w3schools.com/jsref/jsref_filter.asp

// const arr1 = [2, 5, 10, 20, 30, 50];
// const arr2 = [3, 5, 11, 20, 34, 50];

// const sortArray = (arr1, arr2) => {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let i = 0; i < arr2.length; i++) {
//             if(arr1[i] == arr2[i]) {   // conditional "if statement"
//                 newArr.push(arr1[i])
//             }
//         }
//         console.log(newArr);
//     }
// }
// sortArray(arr1, arr2); // check recording for answer

// const arr1 = [2, 5, 10, 20, 30, 50];
// const arr2 = [3, 5, 11, 20, 34, 50];

// const sortArray = () => {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//             if(arr1[i] == arr2[i]) {   // conditional "if statement"
//                 newArr.push(arr1[i]);
//         }
//         console.log(newArr);
//     }
// }
// sortArray(); 

// const arr1 = [2, 5, 10, 20, 5, 30, 50, 5];

// const newArr = arr1.filter(function(5) {
// return 5 > 7;
// }

// console.log(newArr);

// const creatures = [
//     {name: "Shark", habitat: "Ocean"},
//     {name: "Whale", habitat: "Ocean"},
//     {name: "Lion", habitat: "Savanna"},
//     {name: "Monkey", habitat: "Jungle"}
//   ];

//   const aquaticCreatures =  creatures.filter(function(creature) {
//     return creature.habitat == "Ocean";
//   });
  
//   console.log(aquaticCreatures); 

const arr1 = [2, 5, 10, 20, 5, 30, 50, 5];

const newArr = arr1.filter(function(number) {
return 5;
});

console.log(newArr);