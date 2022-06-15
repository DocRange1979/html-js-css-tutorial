let a;
let b;
let c;

a = window.prompt("Enter side a: ");
a = Number(a);

b = window.prompt("Enter side b: ");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C: ", c);