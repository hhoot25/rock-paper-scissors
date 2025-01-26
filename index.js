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

    function playRound(humanChoice, computerChoice){
        let human = getHumanChoice().toLowerCase();
    
        if(human === 'rock' && computerChoice === 'scissor' || human === 'paper' && computerChoice === 'rock' || human === 'scissor' && computerChoice === 'papper' ){
            humanScore++;
            console.log(`You Won! ${human} beat ${computerChoice}!`);
        }
        else if(human === 'rock' && computerChoice === 'paper' || human === 'paper' && computerChoice === 'scissor' || human === 'scissor' && computerChoice === 'rock' ){
            computerScore++;
            console.log(`You Lose! ${computerChoice} beat ${human}!`);
        }
        else{
            console.log(`It's a tie! Both are ${human}!`);
        }
        
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        console.log("you win!");
    }
    else if(computerScore > humanScore){
        console.log("you lose!");
    }
    else{
        console.log("its a tie!");
    }

    
}

playGame();


