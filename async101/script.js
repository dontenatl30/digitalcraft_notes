// async / await

// we async the fucntion that will wait for another function to complete
// we await the function t

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         // process the data

//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log("Error fetching data", error);
//     }
// }
// fetchData("https://www.anapioficeandfire.com/api/books");

// // async function sayHello() {
// //     const data = await fetchData();
// //     console.log("Hello after fetch", data);
// // }

// // sayHello();

// async function starFire() {
//     const star = await fetchData("https://swapi.dev/api/people/2"); // c3po
//     const fire = await fetchData("https://www.anapioficeandfire.com/api/characters/4"); // the marling queen

//     console.log(star);
//     console.log(fire);
// }

// starFire();

// // fetch("https://www.anapioficeandfire.com/api/books")
// // .then(response => response.json())
// // .then(data => console.log(data))

// https://digitalcrafts.instructure.com/courses/254/pages/reading-promises

// fetch(`https://anapioficeandfire.com/api/characters/583`)
//   .then(response => response.json())
//   .then(data => console.log(data))

  

//   const getJSON = response => response.json();

//   const logData = data => {
//     console.log(data);
//     return data;
//   };
  
//   const extractAliases = character => {
//     const {aliases} = character;
//     return aliases;
//   };
  
//   const printAliases = aliases => {
//     for (let a of aliases) {
//       console.log(a);
//     }
//   };
  
//   fetch(`https://anapioficeandfire.com/api/characters/583`)
//     .then(getJSON)
//     .then(logData)
//     .then(extractAliases)
//     .then(printAliases)

// const getJSON = response => response.json();

// const logData = data => {
//   console.log(data);
//   return data;
// };

// const extractAliases = character => {
//   const {aliases} = character;
//   return aliases;
// };

// const printAliases = aliases => {
//   for (let a of aliases) {
//     console.log(a);
//   }
// };

// const reportError = () => {
//   console.error('There was an error');
// };

// fetch(`https://badbadbad.anapioficeandfire.com/api/characters/583`)
//   .then(getJSON)
//   .then(logData)
//   .then(extractAliases)
//   .then(printAliases)
//   .catch(reportError)

  // Notice that on line 23, we have intentionally set the URL to a non-existent hostname. This will trigger an Exception to be thrown, skipping over the .then()s and jumping to the .catch() on line 28.

//   const getJSON = response => response.json();

// const logData = data => {
//   console.log(data);
//   return data;
// };

// const extractAliases = character => {
//   const {aliases} = character;
//   return aliases;
// };

// const printAliases = aliases => {
//   for (let a of aliases) {
//     console.log(a);
//   }
//   return aliases.length;
// };

// const reportError = () => {
//   console.error('There was an error');
//   return 0;
// };

// const printSummary = (howMany) => {
//   console.log(`We printed ${howMany} aliases`);
// };

// fetch(`https://anapioficeandfire.com/api/characters/583`)
//   .then(getJSON)
//   .then(logData)
//   .then(extractAliases)
//   .then(printAliases)
//   .catch(reportError)
//   .then(printSummary)

  // printAliases now returns the length of the aliases array. When there are no Exceptions thrown, the .catch() never runs and this value is passed to printSummary.

// Try your code again, but with a gibberish domain name. This time, the .then()s are skipped, the .catch() runs, returning 0 to the Promise chain. The 0 is passed to the next .then() and printSummary receives it.

// How do you throw a custom Exception?
// Each of your functions has the opportunity to inspect its argument and determine if an error has occurred. Continuing with our fetch() example, we can modify the getJSON() function so that it checks the value of response.status. If the status === 200, then we choose to return the JSON data.

// The reportError() function can also be modified to receive the Error object that was thrown.

// To make sure it works, we can change value at the end of the URL so that it is outside the valid range for the API.

// const getJSON = response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Bad status code');
//     }
//   };
  
//   const logData = data => {
//     console.log(data);
//     return data;
//   };
  
//   const extractAliases = character => {
//     const {aliases} = character;
//     return aliases;
//   };
  
//   const printAliases = aliases => {
//     for (let a of aliases) {
//       console.log(a);
//     }
//     return aliases.length;
//   };
  
//   const reportError = (err) => {
//     console.error('There was an error', err);
//     return 0;
//   };
  
//   const printSummary = (howMany) => {
//     console.log(`We printed ${howMany} aliases`);
//   };
  
//   fetch(`https://anapioficeandfire.com/api/characters/58399`)
//     .then(getJSON)
//     .then(logData)
//     .then(extractAliases)
//     .then(printAliases)
//     .catch(reportError)
//     .then(printSummary)

    // Our .catch() shows our custom Error message and returns 0 to the Promise chain.

    // const promise = new Promise((resolve, reject) => {
    //     resolve(42);
    //   });
      
    //   promise.then(value => console.log(value));
    //   // 42

    // const loadFromStorage = key => {
    //     return new Promise((resolve, reject) => {
    //       const raw = localStorage.getItem(key);
    //       if (raw) {
    //         const data = JSON.parse(raw);
    //         resolve(data);          
    //       } else {
    //         reject(key);
    //       }
    //     });
    //   };

    // const loadFromStorage = key => {
    //     return new Promise((resolve, reject) => {
    //       const raw = localStorage.getItem(key);
    //       if (raw) {
    //         const data = JSON.parse(raw);
    //         resolve(data);          
    //       } else {
    //         reject(key);
    //       }
    //     });
    //   };
      
    //   const retrieveFromAPI = key => {
    //     return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
    //       .then(getJSON);
    //   };
      
    //   //...code omitted
      
    //   loadFromStorage('583')
    //     .catch(retrieveFromAPI)
    //     .then(logData)
    //     .then(extractAliases)
    //     .then(printAliases)
    //     .catch(reportError)
    //     .then(printSummary)

    // const retrieveFromAPI = key => {
    //     return fetch(`https://anapioficeandfire.com/api/characters/${key}`);
    //   };
      
    //   //...code omitted
      
    //   loadFromStorage('583')
    //     .catch(retrieveFromAPI)
    //     .then(getJSON) // This will *not* work the way we expect.
    //     .then(logData)
    //     .then(extractAliases)
    //     .then(printAliases)
    //     .catch(reportError)
    //     .then(printSummary)

//     Why not? If we do find the correct value in localStorage and we do not reject(), the first .then() is called. The problem is that the first .then() invokes getJSON() which expects to work with a response object.
// Since the value coming from localStorage() is not a response, our code will throw another exception and the next .catch() will be triggered.

// Here is the correct version of our code so far:

    // const loadFromStorage = key => {
    //     return new Promise((resolve, reject) => {
    //       const raw = localStorage.getItem(key);
    //       if (raw) {
    //         const data = JSON.parse(raw);
    //         resolve(data);          
    //       } else {
    //         reject(key);
    //       }
    //     });
    //   };
      
    //   const retrieveFromAPI = key => {
    //     return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
    //       .then(getJSON);
    //   };
      
    //   const getJSON = response => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else {
    //       throw new Error('Bad status code');
    //     }
    //   };
      
    //   const logData = data => {
    //     console.log(data);
    //     return data;
    //   };
      
    //   const extractAliases = character => {
    //     const {aliases} = character;
    //     return aliases;
    //   };
      
    //   const printAliases = aliases => {
    //     for (let a of aliases) {
    //       console.log(a);
    //     }
    //     return aliases.length;
    //   };
      
    //   const reportError = (err) => {
    //     console.error('There was an error', err);
    //     return 0;
    //   };
      
    //   const printSummary = (howMany) => {
    //     console.log(`We printed ${howMany} aliases`);
    //   };
      
    //   loadFromStorage('583')
    //     .catch(retrieveFromAPI)
    //     .then(logData)
    //     .then(extractAliases)
    //     .then(printAliases)
    //     .catch(reportError)
    //     .then(printSummary)

    const fetchHouse = houseURL => fetch(`https://anapioficeandfire.com/api/houses/${houseURL}`)
    .then(getJSON);
  
  const retrieveHousesFromAPI = houses => {
    const fetchArray = houses.map(houseURL => fetchHouse(houseURL));
    return Promise.all(fetchArray);
  };
  
  const extractHousesFromCharacter = character => {
    const {allegiances} = character;
    return houses;
  };
  
  const addHousesToCharacter = character => {
    return retrieveHousesFromAPI(extractHousesFromCharacter(character))
      .then(houseArray => {
        character.allegiances = houseArray;
        return character;
      });
  };