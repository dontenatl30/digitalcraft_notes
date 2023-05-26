// const sm3 = document.getElementById("sm3");

const form = document.querySelector("#usernameForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username");
    if(username.value.length <= 15) {
        console.log("input is valid");
    } else if(username.value.length > 15) {
        username.setCustomValidity('Username must be 15 characters or less.');
        username.reportValidity();
    }
});

// sm3.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const username = document.getElementById("username");
//     if (username.value.length <= 15) {
//         username.reportValidity("");
//     } else {
//         username.setCustomValidity("");
//     }



//     console.log("Username form was submitted" + username.value);
//     username.value

// document.forms["sm3"].addEventListener(
//     "submit",
//     () => {
//       document.forms["myform"].reportValidity();
//     },
//     false;
//   );

    // const input = document.getElementById("username").value;
    // const pattern = /^.{16,}$/;
    // const isvalid = pattern.test(input); // true or false

    // if (!isvalid) {
    //     console.log("input is valid")
    // }else {
    //     console.log("input should be less than 15 characters");
    // }
// })

// https://www.w3schools.com/TAGS/att_input_pattern.asp

// When entering a username that was 15 characters or less the input was valid, and when entering a username more than 15 characters it would also work.
// The issue with this code is once the error code executed, the input validation would then stop working. What I found that worked was setting a setCustomValidity to empty string oninput in the html, which made it work. the other issue was when submitting the form, the user would have to click the button twice for the submission to go through. I found that using the reportValidity() method when encountering an error prevented that from happening and made the form work as it should, hope this helps you guys!
// The reportValidity() method of the HTMLInputElement interface performs the same validity checking steps as the checkValidity() method. If the value is invalid, this method also fires the invalid event on the element, and (if the event isn't canceled) reports the problem to the user.

// https://www.w3schools.com/js/js_validation.asp