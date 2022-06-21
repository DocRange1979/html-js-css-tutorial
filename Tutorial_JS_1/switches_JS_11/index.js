// Switches = it is similar like an if-else statement(s)

let grade = "A";                                        // Also with conditions

switch(grade){                                          // Set instead of a variable set true or false.
    case "A":                                           // Case that something is greater or lower, etc.
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good");
        break;
    case "C":
        console.log("You did okay");
        break;
    case "D":
        console.log("You passed... barely");
        break;
    case "F":
        console.log("You FAILED");
        break;
    default:                                            // Case that all others are false
        console.log(grade, "is not a letter grade")
}