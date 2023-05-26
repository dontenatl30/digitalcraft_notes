// https://digitalcrafts.instructure.com/courses/254/pages/lecture-plan-browser-events?module_item_id=69710

// https://www.w3schools.com/js/js_events.asp

// https://developer.mozilla.org/en-US/docs/Web/Events

const div1 = document.getElementById("div1");  // you must use camel casing for code to work in JS 

div1.addEventListener("click", (e) => {  // you must use camel casing for code to work in JS 
    console.log(e.target);
    e.target.style.backgroundColor = "red"; // you must use camel casing for code to work in JS 
    e.target.style.padding = "10px";
});

