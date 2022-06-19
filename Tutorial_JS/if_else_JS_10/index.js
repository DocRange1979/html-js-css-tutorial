// If else statements are esential for programming

let age = 18;

if(age >= 18){
    console.log("You are an adult!");
}

else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET");
}

else{
    console.log("You are a child!");
}

// check method

document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");
    if(myCheckBox.checked){
        console.log("you are subscribed!");
    }
    else{
        console.log("you are not subscribed")
    }
}