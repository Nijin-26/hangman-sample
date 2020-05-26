
const word = new Hangman('Dog',2)
const puzzleText = document.querySelector('#puzzle')
const remguess = document.querySelector('#guess')

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    word.makeGuess(guess)

    puzzleText.textContent = word.getPuzzle
    remguess.textContent = word.getStatusMessage
})