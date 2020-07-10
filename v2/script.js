
let computerMoves = ["rock", "paper", "scissors"];
let playerChoice  = document.querySelectorAll('.playerChoice');
let playerMove    = document.querySelector('.playerMove')
let computerMove  = document.querySelector('.computerMove')
let playerWins    = document.querySelector('.wins');
let computerWins  = document.querySelector('.losses');
let totalTies     = document.querySelector('.ties');
let rockImg     = new Image();
let paperImg    = new Image();
let scissorsImg = new Image();
rockImg.src = 'images/rock.png';
paperImg.src = 'images/paper.png';
scissorsImg.src = 'images/scissors.png';
let wins = 0;
let losses = 0;
let ties = 0;
function computerPlay() {
    return computerMoves[Math.floor(Math.random()*computerMoves.length)];
}
function play() {
    let computer = computerPlay();
    let player = this.innerText.toLowerCase();
    let playerImg;
    playerMove.innerText = player;
    computerMove.innerText = computer;

    switch(player) {
        case 'rock':
            playRock(computer);
            appendImage(player, computer);
            break;
        case 'paper':
            playPaper(computer);
            appendImage(player, computer);
            break;
        case 'scissors':
            playScissors(computer);
            appendImage(player, computer);
            break;
    }
    score(); 
    return
}
function appendImage(player, computer) {
    computerMove.textContent = "";
    playerMove.textContent = "";
    switch(computer) {
        case 'rock':
            computerMove.append(rockImg);
            break;
        case 'paper':
            computerMove.append(paperImg);
            break
        case 'scissors':
            computerMove.append(scissorsImg);
            break
    }
    switch(player) {
        case 'rock':
            playerMove.append(rockImg);
            break;
        case 'paper':
            playerMove.append(paperImg);
            break;
        case 'scissors':
            playerMove.append(scissorsImg);
            break;
    }
}
function score() {
    playerWins.innerText = `Player Wins: ${wins}`;
    computerWins.innerText = `Computer Wins: ${losses}`;
    totalTies.innerText = `Ties ${ties}`;
    return
}
function playRock(computerPlay) {
    
    if(computerPlay == 'scissors') {
        return wins += 1;
    } else if(computerPlay == 'paper') {
       return losses += 1;
    } else return ties += 1;   
}
function playPaper(computerPlay) {
    if(computerPlay == 'rock') {
        return wins += 1;
    } else if(computerPlay == 'scissors') {
        return losses += 1;
    } else return ties += 1;
}
function playScissors(computerPlay){
    if(computerPlay == 'paper') {
        return wins += 1;
    } else if(computerPlay == 'rock') {
        return losses += 1;
    } else return ties += 1;
}
playerChoice.forEach((e) => e.addEventListener("click", play));

