
var CG = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var won = 0;
var lost = 0;
var wrong =0;
var userGuess = []
var UG = ""
var alreadyGuessed=false;
var html =
"<p>wins: " + won + "</p>" +
"<p>losses: " + lost + "</p>" +
"<p>Guessed so far: " + userGuess + "</p>";

document.getElementById("won").innerHTML = html 

//Program thinks of a random letter
var computerGuess = CG[Math.floor(Math.random() * CG.length)];
 console.log(computerGuess)

//Program asks user to press a letter on the keyboard (in HTML)
document.onkeyup = function (event) {
    UG = event.key;
    if (event.keyCode <= 64 || event.keyCode >= 91){}
    else{
    for (var x = 0; x<userGuess.length;x++){
        if(userGuess[x]===UG){
            alreadyGuessed=true;
        }
    }
    if (alreadyGuessed === true) {
    console.log ("Already Guessed");
    alreadyGuessed = false;

    }
    else { userGuess.push(UG)
    
//Program compares the letter pressed to the random letter in the memory
//If guessed letter matches random letter the user wins
    if (UG === computerGuess) {won++; 
    computerGuess = CG[Math.floor(Math.random() * CG.length)];
    console.log(computerGuess)}
    else {wrong++;
    }
    if (wrong === 9) {lost++}
    console.log(wrong)
    var html =
"<p>wins: " + won + "</p>" +
"<p>losses: " + lost + "</p>" +
"<p>Guessed so far: " + userGuess + "</p>";

document.getElementById("won").innerHTML = html
}
}
}

// //If letter guess does not match comuputers letter then user needs to guess again and has up to 9 tries
//     // if (userGuess != computerGuess)
//     // }
//     // else () {lost++;

//     for (var i = 0; i < 9; i++) {
//         userGuess !== computerGuess, i; 
//         {lost++;
//         }
//     }

// //Guessed letter will appear in the "guessed so far bank"
// var guesses = ["x", "y", "z"]



// //If user guesses incorrectly all 9 times user loses
