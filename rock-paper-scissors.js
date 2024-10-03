const game = {
    userScore: 0,
    computerScore: 0,
    ties: 0,
    choices: ['rock', 'paper', 'scissors'],
    
    computerPick() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    },
    
    evaluateGame(userPick) {
        const computerPick = this.computerPick();
        let result;
        
        if (userPick === computerPick) {
            result = 'Tie!';
            this.ties++;
        } else if (
            (userPick === 'rock' && computerPick === 'scissors') ||
            (userPick === 'paper' && computerPick === 'rock') ||
            (userPick === 'scissors' && computerPick === 'paper')
        ) {
            result = 'You Won!';
            this.userScore++;
        } else {
            result = 'You Lost!';
            this.computerScore++;
        }
        
        this.updateUI(result, userPick, computerPick);
    },
    
    updateUI(result, userPick, computerPick) {
        document.getElementById('result').textContent = result;
        document.getElementById('detailed-result').textContent = `Computer chose ${computerPick}, you chose ${userPick}`;
        document.getElementById('score').textContent = `Won = ${this.userScore}, Lost = ${this.computerScore}, Tie = ${this.ties}`;
    },
    
    reset() {
        this.userScore = 0;
        this.computerScore = 0;
        this.ties = 0;
        this.updateUI('Game Reset', '-', '-');
    }
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => game.evaluateGame(button.id));
});

document.getElementById('reset').addEventListener('click', () => game.reset());