const messageElement = document.querySelector(".description");
const message = messageElement.innerHTML;
const scoreSpan = document.querySelector(".score");
const highscoreSpan = document.querySelector(".highscore");

// Generate a random number
const min = 1;
const max = 100;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const randomNumber = getRandomNumber(min, max);

console.log(randomNumber);

// USER INPUT
// input is accepted when submit button is clicked
document.getElementById("submit").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);

  // console.log(guessNumber);

  // CHECK INPUT VALIDITY
  // We are using number input field so user can only enter numbers and nothing else so we only have to check if the input number is in valid range or not

  if (guessNumber <= 0 || guessNumber > 100) {
    messageElement.innerHTML = "Plese enter a number between 1 to 100";
    messageElement.style.color = "#ff4500";
  } else {
    messageElement.innerHTML = message;
    messageElement.style.color = "#013f2c";
  }

  // IF GUESS IS RIGHT or WRONG
  let score = Number(scoreSpan.innerHTML);
  if (guessNumber != randomNumber && guessNumber > randomNumber) {
    document.querySelector(".container").style.background = "#ff0000"; //#008000
    score -= 1;
    scoreSpan.innerHTML = score;
    messageElement.innerHTML = "Your Guess a bit above the answer";
  } else if (guessNumber != randomNumber && guessNumber < randomNumber) {
    document.querySelector(".container").style.background = "#ff0000"; //#008000
    score -= 1;
    scoreSpan.innerHTML = score;
    messageElement.innerHTML = "Your Guess a bit below the answer";
  } else {
    document.querySelector(".container").style.background = "#008000";
    document.querySelector(".number").innerHTML = randomNumber;
    highscoreSpan.innerHTML = score;
    messageElement.innerHTML = "Your Guess is right 🎉";
  }

  //RESET function
  document.getElementById("reset").addEventListener("click", function () {
    location.reload();
  });
});
