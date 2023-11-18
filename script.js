"use strict";

const secretnumber = Math.floor(Math.random() * 10) + 1;
let score1 = 6;

// function display message
const displayMessage = (DMessage) => {
  document.querySelector(".message").textContent = DMessage;
};

// Check Result
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    displayMessage("😒 Enter Number!");

    // when player win
  } else if (guess === secretnumber) {
    displayMessage("😍 Correct Number!");
    document.querySelector(".highscore").textContent = score1;
    document.querySelector(".mysection").classList.add("active");
    document.querySelector(".number").textContent = secretnumber;
  } else if (guess !== secretnumber) {
    if (score1 >= 1) {
      displayMessage(guess > secretnumber ? "😯 Too High!" : "😥 Too Low!");
      score1--;
      document.querySelector(".score").textContent = score1;
    } else {
      displayMessage("😭 You Lost the Game!");
    }
  }
});

// Reset Game or Again Play
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".mysection").classList.remove("active");
  alert("Going to Reset Your Game!");
  location.reload();
  score1 = 6;
  displayMessage("Start Guessing!");
  document.querySelector(".highscore").textContent = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score1;
});
