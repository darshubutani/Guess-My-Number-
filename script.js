"use strict";
let secretNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
  }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ Please Enter Number!");
  } else if (guess === secretNumber) {
    //Random number generator
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("👏 Correct Guess!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > 20 || guess < 0) {
    document.querySelector(".guess").value = "";
    displayMessage("🛑 Please Enter valid Input! ");
  } else if (guess !== secretNumber) {
    const value =
      guess < secretNumber
        ? displayMessage("📉 Too Low!")
        : displayMessage("📈 Too High!");
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      displayMessage("💣 Sorry You Lost!");
      document.querySelector("body").style.backgroundColor = "#961010";
      document.querySelector(".score").textContent = 0;
    }
  }
});
