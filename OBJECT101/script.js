// const person = {
//     name: " john doe",
//     age: 30,
//     gender: "male",
//     hobbies: ["reading", "running", "traveling"],
//     address: {
//         street: "123 main st",
//         city: "new york",
//         State: "NY",
//         zipcode: "10001"
//     },
//     greet: fucntion() {
//         console.log("this is", this)
//         return `Hello ${this.name}!`
//     },
// }:

// console.log(person.name); // john doe
// console.log(person.age); // 30
// console.log(person.hobbies[1]); // running
// console.log(person.address.city); // new york
// console.log(person.greet());

// const book = {
//     title: " the hitchhikers guide to the galaxy",
//     author: "douglas Adms",
//     year: 1979,
//     genres: ["sciensce fiction", "comedy", "satire"],
//     publishers: {
//         name: "pan books",
//         location: "london"
//     }
// }

// book.pages = 216;
// book.a = "this is a test of how objects dont care about order";
// // console.log(book.title);
// // console.log(book.year);
// // console.log(book.genres[2]);
// // console.log(book.publishers.location);
// // console.log(book);

// // console.log(`${book.year}, ${book.genres[1]}, ${book.publishers.location}`);

// book.publishers.location = "iceland";



// // delete book.pages;
// console.log(book["year"]);

// https://www.w3schools.com/js/js_objects.asp

const bankAccount = {
    accountNumber: "123456789",
    AccountHolder: "jane doe",
    balance: 5000,
    transactions: [
        { date: "2022-03-01", description: "deposit", amount: 2000},
        { date: "2022-03-15", description: "withdrawal", amount: -1000},
        { date: "2022-04-01", description: "deposit", amount: 1500},
    ],
    getBalance: function() {
        return this.balance;
    },
    deposit: function(amount) {
        this.balance += amount;
        this.transactions.push({
            date: new Date().toISOString(),
            description: "deposit",
            amount,
        })
    },
    withdraw: function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push({date: new Date().toISOString(), description: "withdrawal", amount: amount})
        } else {
            console.log("insufficient dalance");
        }
    },

};

// consolelog(bankAccount);

console.log(bankAccount.getBalance());
bankAccount.deposit(1000);
console.log(bankAccount);
bankAccount.withdraw(10000);
bankAccount.withdraw(500);
console.log(bankAccount);