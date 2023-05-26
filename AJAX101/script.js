let xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.dev/api/planets/2", true);

xhr.onreadystatechange = function() {
    // checking if the request is fully processed and successul
    if (xhr.readyState == 4 && xhr.status == 200) {
        // log the response text
        // console.log(xhr);
        // console.log(JSON.parse(xhr.responseText));
        let data = JSON.parse(xhr.responseText)
        console.log(xhr.responseText);

        // select or create a DOM element
        // loop over response, add to DOM
        // append DOM with new HTML created from API response

    //     const content = document.getElementById("content");
    //     for (const key in data) {
    //         console.log(`${key}: ${data[key]}`);
    //         const newP = document.createElement("p");
    //         newP.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
    //         content.appendChild(newP);
    //     }
    }
};

xhr.onerror = function() {
    console.log("Request failed")
}

// send the request
xhr.send();

// Get API Key for Weather Map

//     OpenWeatherMap.org
//     Click on API at the top of the page
//     Go to weathermap.org
//     click on API link at top of page
//     Inside of API documentation click API Key
//     Click Sign up
//     Click API key in the tool bar