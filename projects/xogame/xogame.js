const container = document.querySelector(".xocontainer");
const rastartBtn = document.querySelector(".restart");
let boxes = [];
let nonTicketdElementIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let isXturn = true;
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let isGameFinished = false;

rastartBtn.addEventListener("click", restart);
//create boxes
for (let index = 0; index < nonTicketdElementIndexes.length; index++) {
  let element = document.createElement("div");
  element.classList.add("box");
  element.setAttribute("data-index", index);
  element.addEventListener("click", handleClick);
  boxes.push(element);
}

container.append(...boxes);

function handleClick(e) {
  let element = e.target || e;
  if (!element.innerText && !isGameFinished) {
    element.append(document.createTextNode(isXturn ? "X" : "O"));
    nonTicketdElementIndexes.splice(
      nonTicketdElementIndexes.indexOf(parseInt(element.dataset.index)),
      1
    );
    console.log(nonTicketdElementIndexes);
    if (nonTicketdElementIndexes.length < 5) {
      checkResult(isXturn);
    }
    swapTurn();
  }
}

function checkResult(isXturn) {
  const turn = isXturn ? "X" : "O";
  const result = winningCombination.some((combinination) => {
    return combinination.every((index) => boxes[index].innerText === turn);
  });

  if (result) {
    displayResult(turn);
  } else if (nonTicketdElementIndexes.length === 0) {
    displayResult(false);
  }
}

function swapTurn() {
  isXturn = !isXturn;
  if (!isXturn) computerMove();
}

function computerMove() {
  const randomIndex =
    nonTicketdElementIndexes[
      Math.floor(Math.random() * nonTicketdElementIndexes.length)
    ];
  handleClick(boxes[randomIndex]);
}

function displayResult(turn) {
  if (turn) {
    document.querySelector(".winner").innerText = turn + " is winner";
  } else {
    document.querySelector(".winner").innerText = "Its draw";
  }
  rastartBtn.style.display = "block";
  isGameFinished = true;
}

function restart(e) {
  document.querySelector(".winner").innerText = "";
  boxes.forEach((element) => {
    element.innerText = "";
  });
  isXturn = true;
  isGameFinished = false;
  nonTicketdElementIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  e.target.style.display = "none";
}
