startProgram();

function startProgram(){
    let userName = "Bro";
    let age = "21";

    happyBirthday(userName, age);
}

function happyBirthday(name, number){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", name);
    console.log("Happy birthday to you!");
    console.log("You are", number, " years old!");
}

// return statement

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height){
    let result = width * height;
    return result;
}