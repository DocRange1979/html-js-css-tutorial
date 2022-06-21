// Inputs on Javascript
// EASY WAY

/*
let username = window.prompt("What's your name");
console.log(username);
*/

// DIFFICULT FORM

let username;  // Create variable

document.getElementById("myButton").onclick = function(){ // Create function
    username = document.getElementById("myText").value;  // Get information from the text and save it on the variable
    console.log(username);  // Display on console
    document.getElementById("myLabel").innerHTML = "Hello " + username; // Change label selected
}