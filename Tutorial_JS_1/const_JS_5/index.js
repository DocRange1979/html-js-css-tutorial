// const = a variable that can't be changed

const PI = 3.14159;  // just define with const and normal practice every letter capital
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

// PI = 420.69;    // This won't work because "PI" is a const

circumference = 2 * PI * radius;
console.log("The circumference is: ", circumference)