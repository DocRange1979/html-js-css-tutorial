// Type Conversion: change the data type to another
// String -> Boolean -> Number -> Boolean -> etc...

/* An example of this can be the following:

let age = window.prompt("How old are you?");  // asks user
console.log(typeof age);                      // its a string
age = Number(age);                            // changes to number
console.log(typeof age);                      // its a number
age += 1;                                     // adds one to the number
console.log("Happy Birthday! You are ", age, " years old");  // print
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");  // If not empty, then true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

