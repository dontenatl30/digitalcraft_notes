// let c3po = null;
const content = document.getElementById("content");
fetch("https://swapi.dev/api/people/2")
.then(response => response.json())
.then(data => {
    console.log(data);
    c3po = data;
    console.log(c3po);

    // for (const key in data) {
    //     const newP = document.createElement("p");
    //     newP.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
    //     content.appendChild(newP);
    // }
})
.catch(error => {
    console.log("An error Occurred", error)
})
// https://www.w3schools.com/js/js_api_fetch.asp

// fetch() allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.