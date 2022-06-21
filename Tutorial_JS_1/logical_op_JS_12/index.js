// Classical and or statements for programming

let temp = 15;

if(temp > 0 && temp < 30){                   // And operator
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad");
}

if(temp <= 0 || temp >= 30){
    console.log("The weather is bad");
}
else{
    console.log("The weather is good!");
}

// Also we have the ! Not logical operator

// It just checks if setting a ! in front of anything that you want to invert
// Ex: !(temp = 0) will search for anything that is not zero