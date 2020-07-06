let para = document.createElement('p');
let score;
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
        switch(playerMove.toLowerCase()) {
            case 'rock':
                return playRock();
            case 'paper':
                return playPaper();
            case 'scissors':
                return playScissors();
            default:
                getPlayerMove();
        }
}
function playRock() {
    let computerMove = computerPlay();
    if(computerMove == 'Rock') {
        alert("Computer Move: " + computerMove + "\nIt's a Tie\nScore: " + score);
    }
    else if(computerMove == 'Paper') {
        alert("Computer Move: " + computerMove + "\nYou Lost\nScore: " + score);
    }
    else if(computerMove == 'Scissors') {
        score++
        alert("Computer Move: " + computerMove + "\nYou Won\nScore: " + score);
    }
}
function playPaper() {
    let computerMove = computerPlay();
    if(computerMove == 'Paper') {
        alert("Computer Move: " + computerMove + "\nIt's a Tie\nScore: " + score);
    }
    else if(computerMove == 'Scissors') {
        alert("Computer Move: " + computerMove + "\nYou Lost\nScore: " + score);
    }
    else if(computerMove == 'Rock') {
        score++;
        alert("Computer Move: " + computerMove + "\nYou Won\nScore: " + score);
    }
}
function playScissors() {
    let computerMove = computerPlay();
    if(computerMove == 'Paper') {
        score++
        alert("Computer Move: " + computerMove + "\nYou Won\nScore: " + score);
    }
    else if(computerMove == 'Scissors') {
        alert("Computer Move: " + computerMove + "\nIt's a Tie\nScore: " + score);
    }
    else if(computerMove == 'Rock') {
        alert("Computer Move: " + computerMove + "\nYou Lost\nScore: " + score);
    }
}
function playRound(getPlayerMove, computerPlay) {
    getPlayerMove();
    computerMove = computerPlay(); 
}
function game() {
    score = 0;
    for(i = 0;i < 5; i++) {
    getPlayerMove();   
    }
}