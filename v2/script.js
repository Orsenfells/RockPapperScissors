
let computerMoves = ["rock", "paper", "scissors"];
let playerChoice  = document.querySelectorAll('.playerChoice');
let playerMove    = document.querySelector('.playerMove')
let computerMove  = document.querySelector('.computerMove')
let playerWins    = document.querySelector('.wins');
let computerWins  = document.querySelector('.losses');
let totalTies     = document.querySelector('.ties');
let computerRockImg     = new Image();
let computerPaperImg    = new Image();
let computerScissorsImg = new Image();
computerRockImg.src = 'images/rock.png';
computerPaperImg.src = 'images/paper.png';
computerScissorsImg.src = 'images/scissors.png';
let playerRockImg     = new Image();
let playerPaperImg    = new Image();
let playerScissorsImg = new Image();
playerRockImg.src = 'images/rock.png';
playerPaperImg.src = 'images/paper.png';
playerScissorsImg.src = 'images/scissors.png';
let wins = 0;
let losses = 0;
let ties = 0;
function computerPlay() {
    return computerMoves[Math.floor(Math.random()*computerMoves.length)];
}
function play() {
    let computer = computerPlay();
    let player = this.innerText.toLowerCase();

    switch(player) {
        case 'rock':
            playRock(computer);
            appendComputerImage(computer);
            appendPlayerImage(player);
            break;
        case 'paper':
            playPaper(computer);
            appendComputerImage(computer);
            appendPlayerImage(player);
            break;
        case 'scissors':
            playScissors(computer);
            appendComputerImage(computer);
            appendPlayerImage(player);
            break;
    }
    score(); 
    return
}
function appendComputerImage(computer) {
    computerMove.textContent = "";
    
    switch(computer) {
        case 'rock':
            console.log("computer")
            computerMove.append(computerRockImg);
            break;
        case 'paper':
            computerMove.append(computerPaperImg);
            break;
        case 'scissors':
            computerMove.append(computerScissorsImg);
            break;
    }
    
}
function appendPlayerImage(player) {
    playerMove.textContent = "";
    switch(player) {
        case 'rock':
            console.log("thsudj")
            playerMove.append(playerRockImg);
            break;
        case 'paper':
            playerMove.append(playerPaperImg);
            break;
        case 'scissors':
            playerMove.append(playerScissorsImg);
            break;
    }
    return
}
function score() {
    playerWins.innerText = `Player Wins: ${wins}`;
    computerWins.innerText = `Computer Wins: ${losses}`;
    totalTies.innerText = `Ties: ${ties}`;
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

