function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
}

function getHumanChoice() {
  const playerMove = prompt("Enter your move: ", "");

  return playerMove.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
  if (human === "paper" && computer === "scissors") {
    console.log("Scissors cuts paper, point for the computer!");
    computerScore += 1;
  } else if (human === "rock" && computer === "scissors") {
    console.log("Rock beats scissors, point for you!");
    humanScore += 1;
  } else if (human === "scissors" && computer === "scissors") {
    console.log("It's a tie, no one gets a point!");
  } else if (human === "paper" && computer === "paper") {
    console.log("It's a tie, no one gets a point!");
  } else if (human === "rock" && computer === "paper") {
    console.log("Paper covers rock, point for the computer!");
    computerScore += 1;
  } else if (human === "scissors" && computer === "paper") {
    console.log("Scissors cuts paper, point for you!!");
    humanScore += 1;
  } else if (human === "paper" && computer === "rock") {
    console.log("Paper covers rock, point for you!");
    humanScore += 1;
  } else if (human === "rock" && computer === "rock") {
    console.log("It's a tie, no one gets a point!");
  } else if (human === "scissors" && computer === "rock") {
    console.log("Rock beats scissors, point for the computer!");
    computerScore += 1;
  }
}
