let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){  
        e.preventDefault()      //to stop value to go on server
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
        return false
    }
    if(guess < 1){
        alert('please enter a number more than 1')
        return false
    }
    if(guess > 100){
        alert('please enter a number less than 100')
        return false
    }else {
        prevGuess.push(guess)
        if(numGuesses == 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You guessed it Right`)
        endGame()
    }
    else if(guess < randomNumber){

        displayMessage(`Number is too Low`)
    
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id = "newGame">Star new Game</button>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}