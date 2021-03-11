function computerPlay() {
    const randomOption = Math.floor(Math.random() * 3);

    if (randomOption === 0) {
        return "Rock";
    }
    else if (randomOption === 1) {
        return "Paper";
    }
    else if (randomOption === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerValue = 0;
    let computerValue = 0;

    if (playerSelection.toUpperCase() == "ROCK") {
        playerValue = 0;
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        playerValue = 1;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        playerValue = 2;
    }

    if (computerSelection.toUpperCase() == "ROCK") {
        computerValue = 0;
    }
    else if (computerSelection.toUpperCase() == "PAPER") {
        computerValue = 1;
    }
    else if (computerSelection.toUpperCase() == "SCISSORS") {
        computerValue = 2;
    }

    let resultValue = playerValue - computerValue;

    if (resultValue === 0) {
        return "It's a tie!";
    }
    else if (resultValue === 1 || resultValue === -2) {
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (resultValue === -1 || resultValue === 2) {
        return "You lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
}

function game(numberOfRounds) {
    for (let index = 0; index < numberOfRounds; index++) {
        const playerSelection = window.prompt("Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}