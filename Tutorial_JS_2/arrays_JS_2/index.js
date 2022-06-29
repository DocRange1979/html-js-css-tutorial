// Arrays

let fruits = ["apple", "orange", "banana"];

console.log(fruits); // whole array
console.log(fruits[0]); // First object on the array

fruits[0] = "coconut";  // Change the a value in the array
fruits.push("lemon");  // Add an element on last index
fruits.pop();  // Removes last element
fruits.unshift("mango");  // Add an element on first index
fruits.shift();  // Removes first element

let length = fruits.length;  // Lenght of the array
let index = fruits.indexOf("banana");  // Index of object, -1 if does not exists

// Loop on arrays

let prices = [5, 10, 15, 20];


for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}

for(let price of prices){
    console.log(price);
}
// Sort arrays

fruits = fruits.sort();
fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}