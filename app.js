console.log("Game JS Loaded");

// Scores
let userScore = 0;
let computerScore = 0;

// Select elements
const choices = document.querySelectorAll(".choice");
const userScorePara = document.getElementById("user-score");
const computerScorePara = document.getElementById("computer-score");
const messagePara = document.getElementById("message");

// Debug
console.log("Choices:", choices);

// Computer choice
function generateComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

// Show winner
function showWinner(userWin, userChoice, computerChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = `Score: ${userScore}`;
        messagePara.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        messagePara.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = `Score: ${computerScore}`;
        messagePara.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        messagePara.style.backgroundColor = "red";
    }
}

// Play game
function playGame(userChoice) {
    console.log("User clicked:", userChoice);

    const computerChoice = generateComputerChoice();
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
        messagePara.innerText = "It's a Tie!";
        messagePara.style.backgroundColor = "#081b31";
        return;
    }

    let userWin;

    if (userChoice === "rock") {
        userWin = computerChoice !== "paper";
    } else if (userChoice === "paper") {
        userWin = computerChoice !== "scissors";
    } else {
        userWin = computerChoice !== "rock";
    }

    showWinner(userWin, userChoice, computerChoice);
}

// Click listeners
choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        const userChoice = this.id;
        playGame(userChoice);
    });
});
