class Hangman{
    constructor(word,remainingGuess){   
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.guessedLetter = []
        this.status = 'Playing'
    }

    makeGuess(guess){
        guess = guess.toLowerCase()
        const uniqueGuess = !this.guessedLetter.includes(guess)
        const badGuess = !this.word.includes(guess)

        if(this.status !== 'Playing'){
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
        
        if(this.status === 'Playing'){
            return `Remaining Guess: ${this.remainingGuess}`
        }else if(this.status === 'Finished'){
            return `Success! You did it. - ${this.word.join('')}`
        }else if(this.status === 'Failed'){
            return `FAILED! Give it an another try.`
        }
    }

    recalculateStatus(){
        const Finished = this.word.every((letter) => this.guessedLetter.includes(letter))

        if(this.remainingGuess === 0){
            this.status = 'Failed'
        }else if(Finished){
            this.status = 'Finished'
        }else{
            this.status = 'Playing'
        }
    }
}