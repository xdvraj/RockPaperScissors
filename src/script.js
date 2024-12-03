const BtnRock = document.getElementById("ROCK");
const BtnPaper = document.getElementById("PAPER");
const COMPUTER_NAME = document.getElementById("COMPUTER_NAME");
const BtnScissors = document.getElementById("SCISSORS");
const PlayerSelected = document.getElementById("SELECTED_ONE");
const COMPUTER = document.getElementById("COMPUTER_TEXT");
const WINNER = document.getElementById("RESULT");
let playerName = "";
let computerName = "Computer"; 

window.onload = function () {
  playerName = prompt("Please enter your name:");
  if (playerName) {
    document.getElementById("PLAYER_NAME").textContent =
      playerName.toUpperCase();
  }


  fetchRandomUser();
};


async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    computerName = `${data.results[0].name.first} ${data.results[0].name.last}`;
    COMPUTER_NAME.textContent = computerName.toUpperCase();
  } catch (error) {
    console.error("Error fetching computer name:", error);
    COMPUTER_NAME.textContent = "Computer"; 
  }
}

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
  const THINKING = "THINKING...";

  COMPUTER.textContent = THINKING;
  const computerChoice = getComputerChoice();

  setTimeout(() => {
    COMPUTER.textContent = computerChoice; 
    let result = determineWinner(playerChoice, computerChoice);
    WinnerResult(result);
  }, 2000);
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
    return `${computerName} wins!!`; 
  }
}

BtnPaper.addEventListener("click", Paper);
BtnRock.addEventListener("click", Rock);
BtnScissors.addEventListener("click", Scissors);

function WinnerResult(result) {
  WINNER.textContent = result.toUpperCase();
}
