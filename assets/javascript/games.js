
var wordsList = ["darkness", "light", "crystals", "strength", "jessica", "success", "failure", "blood", "sweat", "tears", "winning", "pumpkin", "power", "money", "wealth", "fire", "water", "earth", "wind", "confusion", "clarity", "love", "greed", "sleep", "journey", "excitment"];
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
    if (chosenWord === "darkness") {
      alert("You win! Your Fortune: Uh oh, there is darkness in your future. Beware.");
    }
    if (chosenWord === "light") {
      alert("You win! Your Fortune: I see light. Understanding or knowledge is on it's way to you.");
    }
    if (chosenWord === "crystals") {
      alert("You win! Your Fortune: Hmmm. Very interesting. I see crystals. You are in need of healing! Or you will come into some wealth. Only the crystals know.");
    }
    if (chosenWord === "strength") {
      alert("You win! Your Fortune: I see a surge of strenth about to burst within you!");
    }
    if (chosenWord === "jessica") {
      alert("You win! Your Fortune: Not Jessica! She's evil, do not listen to her. You must stay on your path.");
    }
    if (chosenWord === "success") {
      alert("You win! Your Fortune: Success is on it's way to you!");
    }
    if (chosenWord === "failure") {
      alert("You win! Your Fortune: Uh oh... failure is in your future. Do not worry, after failure comes growth!");
    }
    if (chosenWord === "blood") {
      alert("You win! Your Fortune: Blood. Very interesting. Blood is deep. It is powerful. It can be dangerous. Be careful.");
    }
    if (chosenWord === "sweat") {
      alert("You win! Your Fortune: Hard work is in store for you. Whether or not you will reap from the fruit of labor is yet to be determined.");
    }
    if (chosenWord === "tears") {
      alert("You win! Your Fortune: I see tears.");
    }
    if (chosenWord === "winning") {
      alert("You win! Your Fortune: I see a win. Well that was a fast fortune indeed.");
    }
    if (chosenWord === "pumpkin") {
      alert("You win! Your Fortune: A... a pumpkin? How strange. I see a cat nap in your future.");
    }
    if (chosenWord === "power") {
      alert("You win! Your Fortune: I see a surge in power. Use it wisely");
    }
    if (chosenWord === "money") {
      alert("You win! Your Fortune: I see.... Money! Not sure if you are spending it or receiving it though...");
    }
    if (chosenWord === "wealth") {
      alert("You win! Your Fortune: Wealth! Wealth is on it' way to you!");
    }
    if (chosenWord === "fire") {
      alert("You win! Your Fortune: I see fire. Cleansing, passion, renewal, burning. Some words to consider.");
    }
    if (chosenWord === "water") {
      alert("You win! Your Fortune: Ahh soothing water! Relaxtion, power, serenity. Some words to consider.");
    }
    if (chosenWord === "earth") {
      alert("You win! Your Fortune: Mighty Earth. Strength, endurance, grounded. Some words to consider.");
    }
    if (chosenWord === "wind") {
      alert("You win! Your Fortune: How fun! Wind! Curiosity, playfulness, chnage. Some words to consider.");
    }
    if (chosenWord === "confusion") {
      alert("You win! Your Fortune: Confusion. Hmmm, I'm not sure how to read that.");
    }
    if (chosenWord === "clarity") {
      alert("You win! Your Fortune: I see clarity in your future. You will learn the truth.");
    }
    if (chosenWord === "love") {
      alert("You win! Your Fortune: Love. How sweet. I see more love for you.");
    }
    if (chosenWord === "greed") {
      alert("You win! Your Fortune: Uh oh, greed. You will lust after something you cannot have.");
    }
    if (chosenWord === "sleep") {
      alert("You win! Your Fortune: You are in for some much needed rest.");
    }
    if (chosenWord === "journey") {
      alert("You win! Your Fortune: A journey! How exciting! Remind yourself to enjoy the journey as well as the destination.");
    }
    if (chosenWord === "excitment") {
      alert("You win! Your Fortune: Excitment!!! It doesn't get any more clear than that!");
    }


    document.getElementById("win-counter").innerHTML = "Games Won: " + winCounter;
    startGame();
  }

  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose. Guess your future is a mystery.");
    document.getElementById("loss-counter").innerHTML = "Games Lost: " + lossCounter;
    startGame();
  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};

