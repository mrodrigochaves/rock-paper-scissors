      function computerPlay() {
        let getRandom = Math.floor(Math.random() * 3);
          if (getRandom === 0) {
            return "Rock";
        }
          else if (getRandom === 1) {
            return "Paper";
        }
          else {
            return "Scissors";
        }
      }
      
      function playRound(playerSelection, computerSelection){
       
        
      }
        playerSelection = playerPlay().toLowerCase();
        computerSelection = computerPlay().toLowerCase();
      
      function playerPlay() {
        let getSelect = prompt("Please select your option", "Rock");
          return getSelect;
      
      }
      
      
      
