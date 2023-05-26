const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
const username = document.getElementById("username");

if (username.value.length < 6) {
    username.setCustomValidity("The username must be at least 6 characters long.");
    return;
}
console.log("username and email arent valid");
console.log(e.target.elements);
})