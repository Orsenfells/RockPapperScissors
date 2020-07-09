let playerWins = 0;
let computerWins = 0;
let computerMoves = ["rock", "paper", "scissors"];
let playerChoice = document.querySelectorAll('.playerChoice');
let playerMove = document.querySelector('.playerMove')
let computerMove = document.querySelector('.computerMove')
function computerPlay() {
    return computerMoves[Math.floor(Math.random()*computerMoves.length)];
}
function play() {
    let computer = computerPlay();
    let player = this.innerText.toLowerCase();
    playerMove.innerText = player;
    computerMove.innerText = computer; 
}
function playRound() {
    
}
playerChoice.forEach((e) => e.addEventListener("click", play));

