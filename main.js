function computerPlay() {
      let getRandom = Math.floor(Math.random() * 3);
        if (getRandom === 0) {
          return "Rock";
        }
        if (getRandom === 1) {
          return "Paper";
        }
        else {
            return "Scissors";
        }
      }
      
      function playerPlay() {
        let getSelect = prompt("Please select your option", "Rock, Paper or Scissors");
        return getSelect;
        document.getElementById("demo").innerHTML =
    "Hello " + getSelect + "! How are you today?";
      }
      
      function playRound(playerSelection, computerSelection){
       playerSelection = playerPlay.toLowerCase();
       computerSelection = computerPlay.toLowerCase();
  
      }
      
