const choices = ['rock', 'paper', 'scissor'];



function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getHumanChoice(){
    let choice = prompt("choose rock, paper, or scissors:");
    if(choice === 'scissors'){
        choice = 'scissor';
    }

    return choice;
}



function playGame(){


    let humanScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    const output = document.querySelector('#output');

    function playRound(humanChoice, computerChoice){
        gamesPlayed++;
        let human = humanChoice;

    
        if(human === 'rock' && computerChoice === 'scissor' || human === 'paper' && computerChoice === 'rock' || human === 'scissor' && computerChoice === 'papper' ){
            humanScore++;
            output.innerHTML=(`You Won! ${human} beat ${computerChoice}!`);
        }
        else if(human === 'rock' && computerChoice === 'paper' || human === 'paper' && computerChoice === 'scissor' || human === 'scissor' && computerChoice === 'rock' ){
            computerScore++;
            output.innerHTML=(`You Lose! ${computerChoice} beat ${human}!`);
        }
        else{
            output.innerHTML=(`It's a tie! Both are ${human}!`);
        }

        if(gamesPlayed >= 5){
            if(humanScore > computerScore){
                output.innerHTML=("you win!");
            }
            else if(computerScore > humanScore){
                output.innerHTML=("you lose!");
            }
            else{
                output.innerHTML=("its a tie!");
            }
        }

        
    }

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissor = document.querySelector('#scissor');

    rock.addEventListener('click',() => {playRound('rock', getComputerChoice())});
    paper.addEventListener('click',() => {playRound('paper', getComputerChoice())});
    scissor.addEventListener('click',() => {playRound('scissor', getComputerChoice())});

 
    if(gamesPlayed >= 5){
        if(humanScore > computerScore){
            output.innerHTML=("you win!");
        }
        else if(computerScore > humanScore){
            output.innerHTML=("you lose!");
        }
        else{
            output.innerHTML=("its a tie!");
        }
    }
    

    
}

playGame();


