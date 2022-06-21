/*
 Two steps:
 1. Declaration (var, let, const)
 2. Assignment ( = assignment operator)
*/

// This is creating a variable
let age_1;
// This is setting the variable equal to whatever you want
age_1 = 21;

// Or you can combine them
let age_2 = 21;

// This could mean more a print on console
console.log(age_1);
console.log("They are different");
console.log(age_2);
console.log("Comments will be on the console now, so I study more too!");
console.log("There are different types of variables, for example:");

let my_boolean = true; //its with all lowercase
let my_string = "What's up bro!";
let my_integer = 21;

console.log(my_boolean, "Boolean");
console.log(my_string, "String");
console.log(my_integer, "Interger");

// This is how to print on the web page your variables
document.getElementById("p1").innerHTML = "This is an example " + my_boolean;
document.getElementById("p2").innerHTML = "Another example " + my_string;
document.getElementById("p3").innerHTML = "And also another one " + my_integer;
