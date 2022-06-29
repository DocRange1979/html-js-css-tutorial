// 2D arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

groceryList[0][0] = "mangoes"; // To change something inside of the multidimensional array