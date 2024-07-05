//A quick game of rock, paper, scissors, implemented via the console.
//Author: BW-01

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

//Randomly generate computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

//Prompt user for their choice
function getHumanChoice() {
  let choice = prompt("Type a word to choose 'rock', 'paper', or 'scissors'").toLowerCase();
  while (!choices.includes(choice)) {
    console.log("Invalid choice!");
    choice = prompt(
      "Invalid choice! Enter the word 'rock', 'paper', or 'scissors' without the surrounding quotes"
    ).toLowerCase();
  }
  return choice;
}

//Play a round of the game
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

function playGame() {
  console.log("Welcome to Rock, Paper, Scissors. The game will play for 5 rounds.");
  for (round = 1; round <= 5; round++) {
    console.log("Round " + round);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // make first letter uppercase
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Well done! You won with a score of " + humanScore + "/5!");
  } else {
    console.log("Sadly, you lost with a score of " + humanScore + "/5.");
  }
}

playGame();
