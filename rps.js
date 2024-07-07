//A quick game of rock, paper, scissors, implemented via the console.
//Author: BW-01

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

//Randomly generate computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

let buttons = document.querySelector(".buttons");
const round = document.querySelector(".round");
const results = document.querySelector(".results");

buttons.addEventListener("click", (event) => {
  let humanChoice = event.target.textContent;
  let computerChoice = getComputerChoice();

  if (roundsPlayed < maxRounds) {
    playRound(humanChoice, computerChoice);
  }

  if (roundsPlayed == maxRounds) {
    round.textContent = "Game Over. Thanks for playing.";
  } else {
    round.textContent = "Round " + (roundsPlayed + 1) + " of " + maxRounds;
  }
});

//Play a round of the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("You both picked " + humanChoice + ", it's a draw.");
  } else if (
    (humanChoice == "Rock" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Rock")
  ) {
    console.log("You win the round! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  } else {
    console.log("You lost the round! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  }

  roundsPlayed++;

  results.textContent = "Scores: Player: " + humanScore + " Computer: " + computerScore;
}
