let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessCounter = 0;

const numberInput = document.getElementById("number");
const submitButton = document.getElementById("submit");
const responseText = document.getElementById("response");
const historyList = document.querySelector("ul");

submitButton.addEventListener("click", handleClick)

function handleClick() {
    let numberGuess = numberInput.value;
    guessCounter++;

    switch (true) {

        case numberGuess < 1:
            responseText.textContent = "Please enter a valid number between 1 and 100";
            break;
        case numberGuess > 100:
            responseText.textContent = "Please enter a valid number between 1 and 100";
            break;
        case numberGuess > numberToGuess:
            responseText.textContent = "Too high! Try again.";
            break;
        case numberGuess < numberToGuess:
            responseText.textContent = "Too low! Try again.";
            break;
        case numberGuess == numberToGuess:
            responseText.textContent = `Congratulations! You guessed the number in ${guessCounter} attempts`;
            const guessHistory = document.createElement("li");
            guessHistory.textContent = `Number to guess was ${numberToGuess}, Attempts : ${guessCounter}`;
            historyList.appendChild(guessHistory);
            numberToGuess = Math.floor(Math.random() * 100) + 1; 
            break;
    }

}