const answer = Math.floor(Math.random() * 10 + 1);  // Check if right
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("submitButton").value;
    guesses += 1;

    if(guess == answer){
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if(guess < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
}

