
var wordsList = ["darkness", "light", "crystals", "strength", "jennifer", "success", "failure", "blood", "sweat", "tears", "winning", "pumpkin", "power", "money", "wealth", "fire", "water", "earth", "wind", "confusion", "clarity", "love", "greed", "sleep", "journey", "excitment"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame() {
  numGuesses = 9;
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;

  console.log(chosenWord);


  blanksAndSuccesses = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }


  console.log(blanksAndSuccesses);



  document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = "Letters Guessed: " + wrongGuesses.join(" ");
}

function checkLetters(letter) {
  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {

    for (var j = 0; j < numBlanks; j++) {

      if (chosenWord[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
    console.log(blanksAndSuccesses);
  }
  else {
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = "Letters Guessed: " + wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    alert("You win!");

    document.getElementById("win-counter").innerHTML = "Games Won: " + winCounter;
    startGame();
  }

  // If we've run out of guesses..
  else if (numGuesses === 0) {
    // Add to the loss counter.
    lossCounter++;
    // Give the user an alert.
    alert("You lose");

    // Update the loss counter in the HTML.
    document.getElementById("loss-counter").innerHTML = "Games Won: " + lossCounter;
    // Restart the game.
    startGame();
  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};

