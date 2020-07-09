
let computerMoves = ["rock", "paper", "scissors"];
let playerChoice  = document.querySelectorAll('.playerChoice');
let playerMove    = document.querySelector('.playerMove')
let computerMove  = document.querySelector('.computerMove')
let playerWins    = document.querySelector('.wins');
let computerWins  = document.querySelector('.losses');
let totalTies     = document.querySelector('.ties');
let wins = 0;
let losses = 0;
let ties = 0;
function computerPlay() {
    return computerMoves[Math.floor(Math.random()*computerMoves.length)];
}
function play() {
    let computer = computerPlay();
    let player = this.innerText.toLowerCase();
    playerMove.innerText = player;
    computerMove.innerText = computer;

    switch(player) {
        case 'rock':
            playRock(computer);
            break;
        case 'paper':
            playPaper(computer);
            break;
        case 'scissors':
            playScissors(computer);
            break;
    }
    score(); 
    return
}
function score() {
    playerWins.innerText = `Player Wins: ${wins}`;
    computerWins.innerText = `Computer Wins: ${losses}`;
    totalTies.innerText = `Ties ${ties}`;
    return
}
function playRock(computerMove) {
    if(computerMove == 'scissors') {
        return wins += 1;
    } else if(computerMove == 'paper') {
       return losses += 1;
    } else return ties += 1;   
}
function playPaper(computerMove) {
    if(computerMove == 'rock') {
        return wins += 1;
    } else if(computerMove == 'scissors') {
        return losses += 1;
    } else return ties += 1;
}
function playScissors(computerMove){
    if(computerMove == 'paper') {
        return wins += 1;
    } else if(computerMove == 'rock') {
        return losses += 1;
    } else return ties += 1;
}
playerChoice.forEach((e) => e.addEventListener("click", play));

