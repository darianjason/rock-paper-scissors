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

const playerScore=document.querySelector("#player-score");
const computerScore=document.querySelector("#computer-score");

function playRound(playerSelection, computerSelection) {
    let playerValue = getValues(playerSelection);
    let computerValue = getValues(computerSelection);

    let resultValue = playerValue - computerValue;

    if (resultValue === 0) {
        return "It's a tie!";
    }
    else if (resultValue === 1 || resultValue === -2) {
        playerWinCounter++;
        playerScore.textContent=playerWinCounter;

        return "You win! " + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (resultValue === -1 || resultValue === 2) {
        computerWinCounter++;
        computerScore.textContent=computerWinCounter;

        return "You lose! " + computerSelection + " beats " + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase();
    }
}

function resetGame() {
    playerWinCounter = 0;
    playerScore.textContent=0;

    computerWinCounter = 0;
    computerScore.textContent=0;
}

const playerSelections = Array.from(document.querySelectorAll(".selection"));

const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");

const selectionName=document.createElement("div");
selectionName.classList.toggle("selection-name");

playerSelections.forEach(selection => {
    selection.addEventListener("mouseover", () => {
        selection.style.transform="scale(1.2, 1.2)";
        
        if(selection===rock) {
            selection.style.fill="lightsalmon";
            selectionName.textContent="ROCK";
        }
        else if(selection===paper) {
            selection.style.fill="aquamarine";
            selectionName.textContent="PAPER";
        }
        else if(selection===scissors) {
            selection.style.fill="khaki";
            selectionName.textContent="SCISSORS";
        }

        selection.appendChild(selectionName, selection.firstChild);
    });

    selection.addEventListener("mouseout", ()=> {
        selection.style.transform="scale(1, 1)";
        selection.style.fill="white";
        selection.removeChild(selectionName);
    });

    selection.addEventListener("click", () => {
        const computerSelection = computerPlay();
        const playerSelection = selection.value;

        let result = playRound(playerSelection, computerSelection);

        console.log("player selection: " + playerSelection + "\ncomputer selection: " + computerSelection);
        console.log(result);
        console.log("player wins: " + playerWinCounter + "\ncomputer wins: " + computerWinCounter);

        if(playerWinCounter===5 || computerWinCounter===5) {
            if (playerWinCounter === 5) {
                console.log("YOU WON");
            }
            else if (computerWinCounter === 5) {
                console.log("YOU LOST");
            }

            // CSS display: hide selection div's (foreach) to show result

            resetGame();
        }
    });
});