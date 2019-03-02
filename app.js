
// This funciton return a called randomly
function computerPlay() {
  const option = ["r", "p", "s"];
  const getRandom = Math.floor(Math.random() * 3);
  return option[getRandom];
}

// This function plays a single round
function playRound(playerSelection, computerSelection) {
	switch (playerSelection + computerSelection) {
    case "rs":
    case "pr":
    case "sp":
      console.log("User Wins!");
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("User Loses!");
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("It's a draw!");
      break;
  }
}

const playerSelection = 'r'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

