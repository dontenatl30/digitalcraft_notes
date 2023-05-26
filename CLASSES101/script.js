// const student = {
//     name: "Some NAme",
//     classes: {math: "8:00 AM", science: "10:30 AM"}
// }

// function to make objects

// Classes are object factories!

class dog{
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    description() {
            return `${this.name} is a ${this.age} year old ${this.species}`;
    }
    bark_at(other_dog) {
        console.log("this is", this);
        return `BORK! ${this.name} barked at ${other_dog.name}`
    }
}

let fido = new dog("fido", "french bulldog", 2);
let spot = new dog("spot", "dalmation", 5);

// console.log(fido);
// console.log(spot);

// console.log(`${fido.name} is a ${fido.age} year old ${fido.species}`);

console.log(fido.bark_at(spot));

console.log(fido.description());

// https://www.w3schools.com/Js/js_classes.asp

