// let = variables are limited to block scope {}
// var = variables are limited to a function() {}

// global varibale = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// ----------------------

// Template literals

let userName = "Bro";
let items = 3;
let total = 75;

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

// ---------------------------

// format currency
// number.toLocaleString(locale, {options});
// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789;

myNum = myNum.toLocaleString("en-US"); // US English
myNum = myNum.toLocateString("hi_IN"); // Hindi

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
myNum = myNum.toLocateString("hi-IN", {style: "currency", currency: "INR"});

myNum = myNum.toLocateString(undefined, {style: "unit", unit:"celsius"});
console.log(myNum)