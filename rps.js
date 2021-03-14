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

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

function playRound(playerSelection, computerSelection) {
    let playerValue = getValues(playerSelection);
    let computerValue = getValues(computerSelection);

    let resultValue = playerValue - computerValue;

    if (resultValue === 0) {
        return "It's a tie!";
    }
    else if (resultValue === 1 || resultValue === -2) {
        playerWinCounter++;
        playerScore.textContent = playerWinCounter;

        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (resultValue === -1 || resultValue === 2) {
        computerWinCounter++;
        computerScore.textContent = computerWinCounter;

        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

const page = document.querySelector(".page");

const selectionContainer = document.querySelector(".selection-container");
const computerSelectionContainer = document.querySelector(".computer-selection-container");
const computerSelectionText = document.querySelector(".computer-selection")

const finalResultText = document.createElement("div");
finalResultText.classList.add("final-result-text");

const playAgainButtonContainer = document.createElement("div");
playAgainButtonContainer.classList.add("play-again-button-container");
playAgainButtonContainer.classList.add("flex");

const playAgainButton = document.createElement("button");
playAgainButton.classList.add("play-again-button");
playAgainButton.textContent = "play again?"

function resetGame() {
    playerWinCounter = 0;
    playerScore.textContent = 0;

    computerWinCounter = 0;
    computerScore.textContent = 0;

    // page.removeChild(page.lastChild);
    // page.removeChild(page.lastChild);
    // page.removeChild(page.lastChild);

    finalResultText.remove();
    playAgainButtonContainer.remove();

    computerSelectionText.remove();

    page.appendChild(selectionContainer, page.lastChild);
    page.appendChild(computerSelectionContainer, page.lastChild);
}

const playerSelections = Array.from(document.querySelectorAll(".selection"));

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const selectionName = document.createElement("div");
selectionName.classList.toggle("selection-name");

playerSelections.forEach(selection => {
    selection.addEventListener("mouseover", () => {
        selection.style.transform = "scale(1.2, 1.2)";

        if (selection === rock) {
            selection.style.fill = "lightsalmon";
            selectionName.textContent = "ROCK";
        }
        else if (selection === paper) {
            selection.style.fill = "aquamarine";
            selectionName.textContent = "PAPER";
        }
        else if (selection === scissors) {
            selection.style.fill = "khaki";
            selectionName.textContent = "SCISSORS";
        }

        selection.appendChild(selectionName, selection.firstChild);
    });

    selection.addEventListener("mouseout", () => {
        selection.style.transform = "scale(1, 1)";
        selection.style.fill = "white";
        selection.removeChild(selectionName);
    });

    selection.addEventListener("click", () => {
        const computerSelection = computerPlay();
        const playerSelection = selection.value;

        let result = playRound(playerSelection, computerSelection);

        computerSelectionText.textContent = computerSelection;

        if (computerSelection === "Rock") {
            computerSelectionText.style.color = "lightsalmon";
        }
        else if (computerSelection === "Paper") {
            computerSelectionText.style.color = "aquamarine";
        }
        else if (computerSelection === "Scissors") {
            computerSelectionText.style.color = "khaki";
        }

        computerSelectionText.remove();
        computerSelectionContainer.appendChild(computerSelectionText, computerSelectionContainer.firstChild);

        console.log("player selection: " + playerSelection + "\ncomputer selection: " + computerSelection);
        console.log(result);
        console.log("player wins: " + playerWinCounter + "\ncomputer wins: " + computerWinCounter);

        if (playerWinCounter === 5 || computerWinCounter === 5) {
            page.removeChild(selectionContainer);

            if (playerWinCounter === 5) {
                finalResultText.textContent = "YOU WON!";

                console.log("YOU WON");
            }
            else if (computerWinCounter === 5) {
                finalResultText.textContent = "YOU LOST..."

                console.log("YOU LOST");
            }

            page.insertBefore(finalResultText, computerSelectionContainer);

            page.removeChild(computerSelectionContainer);
            page.appendChild(playAgainButtonContainer);
            playAgainButtonContainer.appendChild(playAgainButton);

            playAgainButton.addEventListener("click", () => {
                resetGame();
            });
        }
    });
});