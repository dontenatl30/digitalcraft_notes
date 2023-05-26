// Write a program that prints the numbers from 1 to 50, but prints "Fizz" instead of numbers divisible by 3, "Buzz" instead of numbers divisible by 5, and "FizzBuzz" instead of numbers divisible by both 3 and 5.

function FizzBuzz(num) {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// FizzBuzz(100);

let i = 0;

while (i <= 10) { // while true
// console.log(i);
i++;
}

const someArray = [1, 2, 3, 4, 5];

// for (let i = 0; i < someArray.length; i++) {
//     console.log(someArray[i]);
// }

// for (let x of someArray) {
//     console.log(x);
// }

const someObject = {
    name: "luke",
    job: "jedi",
    bff: "c3P0"
}

for ( key in someObject) {
    console.log(key + ": " + someObject[key])
}