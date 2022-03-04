function computerPlay() {
  let pick = Math.floor(Math.random() * 3);

  if (pick === 2) {
    return "rock"
  } else if (pick === 1) {
    return "paper";
  } else {
    return "scissors";
  }

}


function playRound(playerChoice, computerChoice) {
  if (playerChoice === "end") {
    quit();
  }
  console.log(`player choice was ${playerChoice} and computer chose ${computerChoice}`);
  if (playerChoice === computerChoice) {
    return "Tie."

  } else if (playerChoice === "paper") {

    if (computerChoice === "rock") {
      return "You win that round.";
    } else if (computerChoice === "scissors") {
      alert("You lose. Scissors beats paper.");
      return "computer";
    }
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      alert("You lose. Paper beats rock.")
      return "computer";
    } else if (computerChoice === "scissors") {
      return "You win that round.";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win that round.";
    } else if (computerChoice === "rock") {
      alert("You lose. Rock beats scissors.");
      return "computer";
    }
  } else {
    
    return "That is not an option.";

  }
}

function playerChoice() {
  let pick = prompt("Pick rock, paper, or scissors.  Type end to end");
  let final = pick.toLowerCase();
  return final;
}

function game() {

let rounds= prompt("How many rounds?");
  alert(`Best out of ${rounds}.`);
  let playerScore = 0;
  let compScore = 0;
  let game = 0;
  let i = 0;
  while (i < rounds) {
    i++
    game = playRound(playerChoice(), computerPlay());

    if (game === "Tie." || game === "That is not an option.") {
      alert(game + `  Score is Player:${playerScore}  Computer:${compScore}`);
    } else if (game === "You win that round.") {
      playerScore++;
      alert(game + ` Score is Player:${playerScore}  Computer:${compScore}`);
    } else {
      compScore++;
      alert(`Computer won that round.  Score is Player:${playerScore}  Computer:${compScore}`);
    }
  }

  if (compScore > playerScore) {
    alert("Computer wins the game.");
  } else if (playerScore > compScore) {
    alert("You win the game.");
  } else {
    alert("Tie game.")
  }
}
