function computerPlay(){
    let pick=Math.floor(Math.random()*3);
    
    if (pick===2){
        return "rock"
    }
    else if (pick===1){
        return "paper";
    }
    else { 
        return "scissors";
    }
    
}


function playRound(playerChoice, computerChoice){
    if (playerChoice===computerChoice){
      return "Tie."
      }
      
    else if (playerChoice==="paper"){
    
      if (computerChoice==="rock"){
        return "You Win.";
      }
      else if (computerChoice==="scissors"){
        return "You lose. Scissors beats paper.";
      }
    }
    else if (playerChoice==="rock"){
      if (computerChoice==="paper"){
        return "You lose. Paper beats rock.";
      }
      else if (computerChoice==="scissors"){
        return "You win.";
      }
    }
    else if (playerChoice==="scissors"){
      if (computerChoice==="paper"){
        return "You win.";
     }
      else if (computerChoice==="rock"){
        return "You lose. Rock beats scissors.";
      }
    }
    else{
        return "That is not an option.";
    }
  }
function playerChoice(){
    let pick=prompt("Pick rock, paper, or scissors.");
    let final=pick.toLowerCase();
    return final;
}
function game(player, computer){
    alert(playRound(player, computer));
}
game(playerChoice(), computerPlay());
