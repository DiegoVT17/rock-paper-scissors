function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
}
