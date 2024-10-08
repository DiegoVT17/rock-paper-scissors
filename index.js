function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
}

let humanScore = 0;
let compScore = 0;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

playerScore.textContent = `Player Score: ${humanScore}`;
computerScore.textContent = `Computer Score: ${compScore}`;

function playRound(human, computer) {
  const roundMessage = document.querySelector(".round-message");
  const winnerMessage = document.querySelector(".final-score");

  if (human === "paper" && computer === "scissors") {
    roundMessage.textContent = "Scissors cuts paper, point for the computer!";
    compScore += 1;
  } else if (human === "rock" && computer === "scissors") {
    roundMessage.textContent = "Rock beats scissors, point for you!";
    humanScore += 1;
  } else if (human === "scissors" && computer === "scissors") {
    roundMessage.textContent = "It's a tie, no one gets a point!";
  } else if (human === "paper" && computer === "paper") {
    roundMessage.textContent = "It's a tie, no one gets a point!";
  } else if (human === "rock" && computer === "paper") {
    roundMessage.textContent = "Paper covers rock, point for the computer!";
    compScore += 1;
  } else if (human === "scissors" && computer === "paper") {
    roundMessage.textContent = "Scissors cuts paper, point for you!!";
    humanScore += 1;
  } else if (human === "paper" && computer === "rock") {
    roundMessage.textContent = "Paper covers rock, point for you!";
    humanScore += 1;
  } else if (human === "rock" && computer === "rock") {
    roundMessage.textContent = "It's a tie, no one gets a point!";
  } else if (human === "scissors" && computer === "rock") {
    roundMessage.textContent = "Rock beats scissors, point for the computer!";
    compScore += 1;
  }

  winnerMessage.textContent = "";
  winnerMessage.classList.remove("winner");
  checkWinner();

  playerScore.textContent = `Player Score: ${humanScore}`;
  computerScore.textContent = `Computer Score: ${compScore}`;
}

const btnContainer = document.querySelector(".options");

btnContainer.addEventListener("click", (e) => {
  const humanChoice = e.target.className;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
});

function checkWinner() {
  const winnerMessage = document.querySelector(".final-score");
  const roundMessage = document.querySelector(".round-message");

  if (humanScore === 5) {
    roundMessage.textContent = "";
    winnerMessage.textContent = `Player: ${humanScore}, Computer: ${compScore}. You win!!`;
    winnerMessage.classList.add("winner");

    humanScore = 0;
    compScore = 0;
  } else if (compScore === 5) {
    roundMessage.textContent = "";
    winnerMessage.textContent = `Player: ${humanScore}, Computer: ${compScore}. You lose!!`;
    winnerMessage.classList.add("winner");

    humanScore = 0;
    compScore = 0;
  }
}
