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

function getValues(selection) {
    if (selection == "Rock") {
        return 0;
    }
    else if (selection == "Paper") {
        return 1;
    }
    else if (selection == "Scissors") {
        return 2;
    }
}

let playerWinCounter = 0;
let computerWinCounter = 0;

function playRound(playerSelection, computerSelection) {
    let playerValue = getValues(playerSelection);
    let computerValue = getValues(computerSelection);

    let resultValue = playerValue - computerValue;

    if (resultValue === 0) {
        return "It's a tie!";
    }
    else if (resultValue === 1 || resultValue === -2) {
        playerWinCounter++;
        return "You win! " + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (resultValue === -1 || resultValue === 2) {
        computerWinCounter++;
        return "You lose! " + computerSelection + " beats " + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase();
    }
}

function resetGame() {
    playerWinCounter = 0;
    computerWinCounter = 0;
}

const playerSelections = Array.from(document.querySelectorAll(".selection"));

playerSelections.forEach(selection => selection.addEventListener("click", e => {
    let computerSelection = computerPlay();
    let result = playRound(e.target.value, computerSelection);
    console.log("player selection: " + e.target.value + "\ncomputer selection: " + computerSelection);
    console.log(result);
    console.log("player wins: " + playerWinCounter + "\ncomputer wins: " + computerWinCounter);

    if (playerWinCounter === 5) {
        console.log("YOU WON");
        resetGame();
    }
    else if (computerWinCounter === 5) {
        console.log("YOU LOST");
        resetGame();
    }
}));