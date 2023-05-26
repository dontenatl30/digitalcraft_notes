
// let n = 0;
// let counter = "";

// const createCounter = function(n) {
//     return function() {
//         return n++
//     };
// };
// let counterCheck = createCounter(10);
// console.log(counterCheck());
// console.log(counterCheck());
// console.log(counterCheck());


// let car = new Promise(function(resolve,reject) {
//     fuel_fullTank = false;
//     if(fuel_fullTank)
//      resolve()
//      else 
//      reject()
// });

// car.then(function() {
//     document.write("the fuel tank is full. happy driving")
// }).catch(function() {
//     document.write("the fuel tank is not empty")
// })

// https://www.youtube.com/watch?v=KFQVgi0uJdM

// let empty_tank = function(msg) {
//     return new Promise(function(resolve,reject) {
//         resolve(msg + "the car doesnt have enough fuel.")
//     })
// }
// let engine = function(msg) {
//     return new Promise(function(resolve,reject) {
//         resolve(msg + "the engine is over heating")
//     })
// }
// let travel = function(msg) {
//     return new Promise(function(resolve,reject) {
//         resolve(msg + "car aint safe for traveling")
//     })
// }

// empty_tank().then(function(result) {
//     return engine(result)
// }).then(function(result) {
//     return travel(result)
// }).then(function(result){
//     console.log("Done!!" + result)
// })

const urlKey = "9a80d6efaba8a2d55c84bee2087378d7";
const urlApi ='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
// ativating the search bar...
const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function weatherApp(city){
  try{
    const resp = await fetch(urlApi + city + `&appid=${urlKey}`);
    // inputing the function variable(city: Atlanta), we can change the data when we fetch it. i understand why it was cut but it looks amateurish. Fix it later.
  const data = await resp.json();
  // console.log(resp)
    console.log(data);
    // getting the information from the API which display the data in the console.
    document.querySelector('.city').innerHTML = `${data.name}`;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity-percentage').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind-percentage').innerHTML = `${data.wind.speed} mph`;
  const weatherImage = document.querySelector('.atmosphere');
    //searching through the data and find the location of the data we want to manipulate into the app. And then add it to to the HTML.
    // if statement is written to change the image of the app base on the number value given to us from the data.
    if(data.weather[0].main == "Clouds"){
      weatherImage.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherImage.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherImage.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherImage.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherImage.src="images/mist.png";
    }
  }catch(error){
    console.log("Error: ", error);
    // Why no errors didn't pop up?
  }
}
searchBtn.addEventListener("click", (e =>{
  e.preventDefault();
  // console.log("hello")
  weatherApp(searchBar.value.toLowerCase());
}));
weatherApp("atlanta")

// https://www.youtube.com/watch?v=54dnv1ha3sw