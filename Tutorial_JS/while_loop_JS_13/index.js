let userName="";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);

// do while loops on JS, does the code once, if false, then keeps repeating
// while loops if condition is false from the beginning it does not do the loop

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);

// for loop, normally you can use i instead of counter

for(let counter = 1; counter <= 10; counter += 1){
    console.log(counter);
}

console.log("HAPPY NEW YEAR!");