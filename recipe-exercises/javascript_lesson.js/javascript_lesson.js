// const firstName = 'travis';
// const lastName = 'Ramos';
// const currentDate = '28';
// let  programingLanguage = 'Javascript';

// function introduction(firstName, lastName) {
// const currentMonth = 'February';
// const currentYear = 2023;

// console.log(`Hello my name is ${firstName} ${lastName}.`);
// console.log(`i am currently learning how to program in ${programingLanguage}.`);
// return;
// programingLanguage = `C++`;
// console.log(`we changed the program language to ${programingLanguage}.`);
// }

// introduction(firstName, lastName);

// console.log(currentDate);

//ARRAYS

// const firstArray = ['travis', 'ramos', 'javascript'];
// const secondArray = [];

// function introduction(ourFirstArray, ourSecondArray) {
//     ourFirstArray.push('Lobsters');
//     ourSecondArray.push(55);
//     console.log(ourFirstArray);
//     console.log(ourSecondArray);
//     console.log(`hello! my name is ${ourFirstArray[0] + ' ' + ourFirstArray[1]}.`);
//     console.log(`i am currently learning how to program in ${ourFirstArray[2]}`);
//     ourFirstArray[2] = `HTML/CSS`;
//     console.log(`and i'm learning ${ourFirstArray[2]}`);
// }

// introduction(firstArray, secondArray);

// console.log(firstArray.length);

// const stringArray = ("HTML", "CSS", "JavaScript", "React", "Bananas")
// function reIntroduction (stringArray) {
//     stringArray.pop();
//     // .splice acts on the array and changes it
//     // slice returns a new array nd doesnt change the one your slicing.
//     stringArray.slice();
//     const newArray = stringArray(0, 3);
//     stringArray.splice(2, 3);
// const languages = stringArray.join(' ');
// console.log(language);
// }

// reIntroduction(stringArray);

//objects

// const myObject = {
//     firstName: 'travis',
//     lastName: 'ramos',
//     programingLanguage: 'javascript',
//     currentDate: 21
// }

// const myFirstName = myObject.firstName;

// function introduction() {
//     console.log (`hello my first name is ${myFirstName.firstName}`);
//     console.log(myObject);
//     myObject.currentMonth = 'october';
//     myObject['currentYear'] = 2021;
//     delete myObject.currentMonth
//     console.log(myObject);
// }

// introduction();


const myFriendsSchedule = {
    sundeay: true,
    monday: true,
    tuesday: false,
    wednesday: true,
    thursday: faulse,
    friday: true,
    saturday: false
}

const myMondaySchedule = {
    sunday: 20,
    monday: 15,
    tuesday: 15,
    wednesday: 10,
    thursday: 17,
    friday: 12,
    saturday: 5,
}

function canWeGoToTheMovies(dayOfWeek) {
    const canWeGoToTheMovies = myFriendsSchedule[`${dayOfWeek}']; 
    const money = my
}


canWeGoToTheMovies('sunday');


Practice 4 Loops 

// Lets check all days of the week using FOR Loop
Use the same variables from the other exercise
const myMondaySchedule = {
    sunday: 20,
    monday: 15,
    tuesday: 15,
    wednesday: 10,
    thursday: 17,
    friday: 12,
    saturday: 5,
}
// create a new variable called DAYS_OF_WEEK that is a string array of all the days of the week i.e. ["sunday"]
// create a function called canWeGoToTheMovies that has not parameters
// create a variable called whatDaysCanWeGoToTheMovies that is an empty string. i.e. there is nothing inside the open and close quotes
// output/print the days of the week we are checking. What would we use to do that?
// i.e. We are checking the days of the week: DAYS_OF_WEEK
// Create a for loop using the length of DAYS_OF_WEEK as the condition
// create a variable called dayOfWeek that will have the day of week as we iterate over the array
// create an if statement for myFriendsSchedule and myMoneySchedule.
// Using bracket notation lookup the day of the week for both objects, find out if my friend is free AND I have the money
// If they have the time AND I have the money then we can go! Add that to the whatDaysCanWeGoToTheMovies string
// ex. "On " + theDateWeWantToGo + "? Yes, lets go to the movies!!"
// Create an else/if statement to check if my friend has the time OR if I have the money
// If they have the time OR I have the money then we can go!  Add that to the whatDaysCanWeGoToTheMovies string
// ex. "On " + theDateWeWantToGo + "? One of us can go to the movies"
// Create an else statement
// if NEITHER they have the time AND I don't have the money then we can not go :(
// ex: "On " + theDateWeWantToGo + "? We can't go to the movies"
// output/print the variable whatDaysCanWeGoToTheMovies
// exit the function
// call the function