let compPick = ''
let userPick = ''
let result = ''

function computerPick() {
    const num = Math.random()

    if (num < 1/3){
        compPick = 'rock'
    } else if (num > 1/3 && num < 2/3) {
        compPick = 'paper'
    } else {
        compPick = 'scissors'
    }
}


function evaluateGame (myPick) {
    computerPick();
    userPick = myPick
    if (compPick === myPick) {
        result = 'Tie!'

    } else if ((compPick === 'rock' && myPick === 'paper') || 
            (compPick === 'paper' && myPick === 'scissors') || 
            (compPick === 'scissors' && myPick === 'rock')) {
        result = 'You Won!'

    } else {
        result = 'you Lost!'
    }
    console.log(result)
}

