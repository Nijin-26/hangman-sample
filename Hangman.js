class Hangman{
    constructor(word,remainingGuess){   
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.guessedLetter = []
        this.status = 'playing'
    }

    makeGuess(guess){
        guess = guess.toLowerCase()
        const uniqueGuess = !this.guessedLetter.includes(guess)
        const badGuess = !this.word.includes(guess)

        if(this.status !== 'playing'){
            return
        }

        if(uniqueGuess){
            this.guessedLetter.push(guess)
        }

        if(uniqueGuess && badGuess){
            this.remainingGuess--
        }
        this.recalculateStatus()
    }   

    getPuzzle(){

        let puzzle = ''

        this.word.forEach((letter) => {
        if(this.guessedLetter.includes(letter)){
            puzzle+=letter
        }else{
            puzzle+='*'
        }
        })

        return puzzle
    }

    getStatusMessage(){
        
        if(this.status === 'playing'){
            return `Remaining Guess: ${this.remainingGuess}`
        }else if(this.status === 'finished'){
            return `Success! You did it. - ${this.word.join('')}`
        }else if(this.status === 'failed'){
            return `FAILED! Give it an another try.`
        }
    }

    recalculateStatus(){
        const Finished = this.word.every((letter) => this.guessedLetter.includes(letter))

        if(this.remainingGuess === 0){
            this.status = 'failed'
        }else if(Finished){
            this.status = 'finished'
        }else{
            this.status = 'playing'
        }
    }
}