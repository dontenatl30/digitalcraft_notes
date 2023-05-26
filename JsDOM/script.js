console.log("Hello DOM!");

const content = document.getElementById("content");

// console.dir(content); // console.dir when in google chrome
// console.log(content);
const title = document.createElement("h1");

// avoid innerHTML! use textContent the innerHTML can cause issues if someone changes
title.textContent = "Hello DOM!";

content.appendChild(title);
// console.dir(title);

const text = document.createElement("p");

text.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro harum ex sapiente distinctio delectus, reiciendis non quos blanditiis illo tempore animi doloribus minima omnis placeat necessitatibus! Neque, ut! Vel, culpa!";

content.appendChild(text);

// In VS Code, you can install an extension to generate Lorem Ipsum placeholder text. Here are the steps to do so:

// Open VS Code and click on the Extensions icon on the left-hand side (or use the shortcut Ctrl + Shift + X on Windows or Cmd + Shift + X on Mac).
// In the search bar, type in "Lorem Ipsum" and press Enter.
// You will see a list of extensions that generate Lorem Ipsum text. Choose one that you prefer and click on the Install button.
// Once the extension is installed, you can use it by typing in "lorem" followed by the number of words or paragraphs you want to generate. For example, if you want 5 paragraphs of Lorem Ipsum text, you can type "lorem5p" and press Enter. The extension will generate the text for you.

const h2 = document.getElementById("h2")

h2.textContent = "I took over your h2!!";

h2.style.color = "#FF0000";
console.dir(h2.style);
console.dir(h2.style.color);

// event listeners

// events happen on elements
// select an element
// you add the event listener to the selected element

const btn = document.getElementsByTagName("button")[0];
// console.dir(btn);

btn.addEventListener("click", () => alert("Hello world!"));

// title.addEventListener("mouseover", function() {
//     console.log("you scrolled over the mouse title")
// });

// adding more content / elements to the page
const aName = "Luke";

const moreText = `Hello ${aName}, the DOM is so cool`;

console.dir(content.children);
content.children[1].textContent += moreText;

// working with input values

// object.addEventListener("change", myScript);

const input = document.getElementById("input");
const todoBtn = document.getElementById("todobtn");
const ul = document.getElementById("ul");

let newLI = "";

input.addEventListener("input", (e) => {
    // console.log(e);
    console.log(e.target.value);
    newLI = e.target.value;
});

// console.log(input);

todoBtn.addEventListener("click", (e) => {
    if (newLI == "") {
        alert("please insert a valid task");
        return;
    }
const tempLI = document.createElement("li");
tempLI.textContent = newLI;
    ul.appendChild(tempLI);
    input.value = "";
    newLI;
});

// console.log(ul.children);






