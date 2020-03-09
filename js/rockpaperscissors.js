let para = document.createElement('p');
const playerSelection = 'Rock';
let computerSelection = computerPlay();
function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    let computerMove = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerMove;
}
function getPlayerMove() {
    let playerMove;
     playerMove = prompt('Rock, Paper, Scissors playa');
        switch(playerMove) {
            case 'Rock':
                return playRock();
            case 'Paper':
                return playPaper();
            case 'Scissors':
                return playScissors();
            default:
                getPlayerMove();
        }
}
function playRock() {
    let computerMove = computerPlay();
    if(computerMove == 'Rock') {
        alert("Computer Move: " + computerMove + "\nIt's a Tie");
    }
    else if(computerMove == 'Paper') {
        alert("Computer Move: " + computerMove + "\nYou Lost");
    }
    else if(computerMove == 'Scissors') {
        alert("Computer Move: " + computerMove + "\nYou Won");
    }
}
function playPaper() {
    let computerMove = computerPlay();
    if(computerMove == 'Paper') {
        alert("Computer Move: " + computerMove + "\nIt's a Tie");
    }
    else if(computerMove == 'Scissors') {
        alert("Computer Move: " + computerMove + "\nYou Lost");
    }
    else if(computerMove == 'Rock') {
        alert("Computer Move: " + computerMove + "\nYou Won");
    }
}
function playScissors() {
    let computerMove = computerPlay();
    if(computerMove == 'Paper') {
        alert("Computer Move: " + computerMove + "\nYou won");
    }
    else if(computerMove == 'Scissors') {
        alert("Computer Move: " + computerMove + "\nIt's a Tie");
    }
    else if(computerMove == 'Rock') {
        alert("Computer Move: " + computerMove + "\nYou Lost");
    }
}
function playRound(getPlayerMove, computerPlay) {
    let playerMove;
    let computerMove;
    getPlayerMove();
    computerMove = computerPlay();
   // if((playerMove == 'Rock' && computerMove == 'Paper') || (playerMove == 'Rock' && computerMove == 'Scissors')) {
     //   alert("Winner Winner Flippin Dinner");
    //}
    
}
            
          //  para.textContent = computerPlay();
            //document.getElementById("myDiv").appendChild(para);