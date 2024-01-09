let playerChoices = document
  .querySelector(".playerchoice")
  .querySelectorAll("i");
const playerSelectionElement = document
  .querySelector(".player-selection")
  .querySelector("i");
const computerSelectionElement = document
  .querySelector(".computer-selection")
  .querySelector("i");

const playerScoreElement = document.querySelector(".player-selection span");
const computerScoreElement = document.querySelector(".computer-selection span");
const drwaScroreElement = document.querySelector(".draw span");

const resultElement = document.querySelector(".result");

const playerChoiceElement = document.querySelector(".playerchoice");
const restart = document.querySelector(".restart");
const btnRestart = document.querySelector("button");
let score = [0, 0, 0];

let totalRound = 0;
const choices = [
  "fa-regular fa-hand-rock",
  "fa-regular fa-hand-paper",
  "fa-regular fa-hand-scissors",
];

playerChoices.forEach((element) => {
  element.addEventListener("click", palyerSelection);
});

btnRestart.addEventListener("click", restartGame);

function palyerSelection(e) {
  if (totalRound < 5) {
    playerSelectionElement.setAttribute("class", e.target.classList);
    CompouterSelection();
  }
}

function CompouterSelection() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerSelectionElement.setAttribute("class", computerChoice);
  displayScore();
}

function displayScore() {
  let playerChoiceIndex = choices.indexOf(
    playerSelectionElement.classList.value
  );
  let ComputerChoiceIndex = choices.indexOf(
    computerSelectionElement.classList.value
  );
  if (playerChoiceIndex === ComputerChoiceIndex) {
    score[2]++; // draw
  } else if ((ComputerChoiceIndex + 1) % 3 === playerChoiceIndex) {
    score[0]++; // player win
  } else {
    score[1]++; // computer win
  }

  playerScoreElement.innerText = `Player Score: ${score[0]}`;
  computerScoreElement.innerText = `Computer Score: ${score[1]}`;
  drwaScroreElement.innerText = `Draw: ${score[2]}`;
  ++totalRound;
  if (totalRound >= 5) displayResult();
}

function displayResult() {
  resultElement.innerText =
    score[0] === score[1]
      ? "Its Draw"
      : score[0] > score[1]
      ? "Player has won"
      : "Computer has won";
  playerChoiceElement.style.display = "none";
  restart.style.display = "flex";
}

function restartGame(e) {
  totalRound = 0;
  score = [0, 0, 0];
  playerSelectionElement.setAttribute("class", "");
  computerSelectionElement.setAttribute("class", "");

  playerScoreElement.innerText = "";
  computerScoreElement.innerText = "";
  drwaScroreElement.innerText = "";

  resultElement.innerText = "";
  playerChoiceElement.style.display = "flex";
  restart.style.display = "none";
}
