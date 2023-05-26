let c = null;

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.current_weather.temperature);
    c = data.current_weather.temperature;
    const f = Math.round(c * 1.8 + 32);
    // console.log(f);
    const newP = document.createElement("p");
    newP.textContent = f;
    newP.id = "temp";
    document.getElementById("root").appendChild(newP);
  })

  .catch((error) => {
    console.log("An error occurred:", error);
  });

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  console.log(c);
  document.getElementById("temp").textContent = c;
});

function cTof(temp) {
  return Math.round(temp * 1.8 + 32);
}
