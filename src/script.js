const BtnRock = document.getElementById("ROCK");
const BtnPaper = document.getElementById("PAPER");
const BtnScissors = document.getElementById("SCISSORS");
const PlayerSelected = document.getElementById("SELECTED_ONE");
const COMPUTER = document.getElementById("COMPUTER_TEXT");
const WINNER = document.getElementById("RESULT");
let playerName = ""; 

window.onload = function () {
  playerName = prompt("Please enter your name:");
  if (playerName) {
    document.getElementById("PLAYER_NAME").textContent = playerName.toUpperCase();
  }
};

function Paper() {
  PlayerSelected.textContent = "PAPER";
  playGame("PAPER");
}

function Rock() {
  PlayerSelected.textContent = "ROCK";
  playGame("ROCK");
}

function Scissors() {
  PlayerSelected.textContent = "SCISSORS";
  playGame("SCISSORS");
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  COMPUTER.textContent = computerChoice;
  let result = determineWinner(playerChoice, computerChoice);
  WinnerResult(result);
}

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!!";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    return `${playerName} wins!!`;
  } else {
    return "Computer wins!!";
  }
}

BtnPaper.addEventListener("click", Paper);
BtnRock.addEventListener("click", Rock);
BtnScissors.addEventListener("click", Scissors);

function WinnerResult(result) {
  WINNER.textContent = result;
}
