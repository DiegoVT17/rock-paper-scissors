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

  playerScore.textContent = `Player Score: ${humanScore}`;
  computerScore.textContent = `Computer Score: ${compScore}`;
}

const btnContainer = document.querySelector(".options");

btnContainer.addEventListener("click", (e) => {
  const humanChoice = e.target.className;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
});

// if (humanScore > computerScore) {
//   alert(`Your score is ${humanScore}, you win!!`);
// } else if (humanScore < computerScore) {
//   alert(`Computer's score is ${computerScore}, you lose!!`);
// } else {
//   alert("It's a freaking tie!!");
// }
