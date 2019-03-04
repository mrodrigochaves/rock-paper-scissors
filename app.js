// This funciton return a called randomly
function computerPlay() {
  const option = ["rock", "paper", "scissor"];
  const getRandom = Math.floor(Math.random() * 3);
  return option[getRandom];
}

// This function plays a single round
function playRound(playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      playerScore++;
      console.log(`User Wins! ${playerSelection} beats ${computerSelection}`);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      computerScore++;
      console.log(`User Loses! ${computerSelection} beats ${playerSelection}`);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      drawScore++;
      console.log("It's a draw!");
      break;
  }
}

// This get user and computer values
function getValue() {
  playerSelection = prompt(`Round:${round} - Rock, paper or scissor`);

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
}

// This function game
function game() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  round = 0;

  // This run five rounds
  while (round < 5) {
    getValue();

    // This call game rounds
    playRound(playerSelection, computerSelection);
    round++;
  }

  // This return text in green color
  console.log("%c Final Score!", "color: #00ff00");
  console.log("%c *****************************", "color: #00ff00");

  // This return the winner of game based on their highest points
  if (playerScore > computerScore) {
    console.log(
      `You are the winner with a score of ${playerScore} to ${computerScore}, and ${drawScore} for draw!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Computer is the winner with a score of ${computerScore} to ${playerScore}, and ${drawScore} for draw!`
    );
  } else {
    console.log(
      `This is a drawn with a ${drawScore} draws, ${playerScore} for player and ${computerScore} for computer!`
    );
  }
  console.log("\n");
}

let playerSelection, computerSelection;
let playerScore, computerScore, drawScore;
let round;

console.log(game());
