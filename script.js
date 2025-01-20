//game logic
//function for generating a random number
const min = 1;
const max = 100;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// console.log(getRandomNumber(min, max));

document.getElementById("submit").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  //   console.log(guessNumber, typeof guessNumber);

  if (guessNumber <= 0 || guessNumber >= 100) {
    let message = document.querySelector(".description");
    message.innerHTML = "Please enter a number between 1 to 100";
    message.style.color = "#ff0000";
  }
});
