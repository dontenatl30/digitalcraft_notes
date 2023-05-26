// // i love JS 
// // always start at 0 with arrays when counting
// const pets = ["Inky", "tiny", "lord byron", "luna", "charles", [1, 2, 42]];

// // console.log(pets[0], pets[3]);

// // console.log(pets[5][2]);

// // for (let i = 0; i < pets.length; i++) {
// //     console.log(pets[i]);
// // }

// // pets[60] = "batman";

// pets.push("robin");

// // console.log(pets);

// pets.pop();
// pets.pop();
// const charlie = pets.pop();
// const Inky = pets.shift(); 

// pets.unshift([charlie,Inky]);

// console.log(pets);
// console.log(charlie, Inky);

// console.log(pets[2]);

// const lb = pets[2];

// console.log(lb); // lord byron

// pets[2] = "mark twain";
// console.log(pets);
// console.log(pets[0]); // array was changed pets.unshift([charlie,Inky]);

// console.log(pets[0][1]);

// console.log(pets.toString());

// console.log(pets.join(' | '));

// console.log(pets.join(' '));
// console.log(pets.join(' , '));

// const petStr = pets.join(" ,");
// console.log(petStr);
// const myPetsArr = petStr.split(",");
// console.log(myPetsArr);

// const joinArr = pets.concat(myPetsArr);
// console.log(joinArr);

// console.log([100, 200, 300, 400].concat(joinArr));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // splice is used to add new items to an array 
// // fruits[2] = "bad apple";
// fruits.splice(2, 0, "peppermint", "strawberry"); // ["Banana", "Orange", "Apple", "Mango"]; second number will delete an item

// // console.log(fruits);

// // const newFruits = fruits.slice(1, 3); // 
// const newFruits = fruits.slice(0);

// // console.log(newFruits);
// // console.log(fruits);

// const copyOfArray = [...fruits, "pineapple", "spinach", "chocolate"];

// // console.log(copyOfArray);
// console.log(fruits); //[ 'Banana', 'Orange', 'peppermint', 'strawberry', 'Apple', 'Mango' ] 

// console.log(fruits.sort());
// console.log(fruits.reverse());

const nums = [20, 30, 42, 10, 1000, 500, 5];

// console.log(nums.sort((a, b) => a - b));

// function sortNums(someArr) {
//     for (let i = 0; i < someArr.length; i++) {
//         // several lines of code needed
//     }
// }

// map returns a new array after executing a function on each item of an array 
// .mao()

const doubleNums = nums.map(item => item * 2);

// console.log(doubleNums);
// console.log(nums);

// function doubleNums(item) {
//     return item * 2
// }

// const dbNum = (item) => {
//     return item * 2
// }

// console.log(doubleNums);
// console.log(nums);

const over29 = nums.filter(item => item > 29); //[30, 42, 1000, 500]

console.log(over29);

over29.forEach(item => console.log(item));