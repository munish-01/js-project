const input = document.getElementById('input')
const btn = document.getElementById('btn')
const wrng = document.querySelector('.wrng')
const guesses = document.getElementById('guesses')

let answer = Math.floor(Math.random() * 100) + 1;
// console.log(answer)
let numGuesses = 0

btn.addEventListener('click', () => {
    guessesNumber();
})
function guessesNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrng.innerHTML = "Please enter a number between 1 and 100"
    } else {
        numGuesses++;
        guesses.innerHTML = "No. of Guess: " + numGuesses;
        if (input.value > answer) {
            wrng.innerHTML = "You guessed too high!"
            input.value = ""
        } else if (input.value < answer) {
            wrng.innerHTML = ("You guessed too low!!!")
            input.value = ""
        } else {
            wrng.innerHTML = ("Congrats....You guessed the rigth answer")
            setTimeout(() => {
                resetGame();
            }, 5000)
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = ""
    guesses.innerHTML = "No. of Guess: " + numGuesses;
}