//A quick game of rock, paper, scissors, implemented via the console.
//Author: BW-01

let humanScore = 0;
let computerScore = 0;

//Randomly generate computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  let humanChoice = event.target.textContent;
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
});

//Play a single round of the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("You both picked " + humanChoice + ", it's a draw.");
  } else if (
    (humanChoice == "Rock" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Rock")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  } else {
    console.log("You lost! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  }
}

//Play multiple rounds of the game
function playGame() {
  for (round = 1; round <= 5; round++) {
    console.log("Round " + round);
    // let humanChoice = getHumanChoice();
    // let computerChoice = getComputerChoice();

    // playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Well done! You won with a score of " + humanScore + "/5!");
  } else {
    console.log("Sadly, you lost with a score of " + humanScore + "/5.");
  }
}

// playGame();
