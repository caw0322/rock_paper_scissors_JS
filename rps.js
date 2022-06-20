function computerPlay(){
    let randomNumber = Math.floor(Math.random() *3);
    if(randomNumber  === 0){
        return 'Rock';
    }
    else if(randomNumber  === 1){
        return 'Paper';
    }
    else if(randomNumber  === 2){
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie! Try Again"
    }
    else if (playerSelection === 'Rock'){
        if(computerSelection === 'Scissors'){
            
            return 'PS'
            
        }
        else if(computerSelection === 'Paper'){
            
            return 'CS'
            
        }
    }
    else if (playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
           
            return 'PS'
            
        }
        else if(computerSelection === 'Scissors'){
            
            return 'CS'
            
        }
        else if (playerSelection === 'Scissors'){
            if(computerSelection === 'Paper'){
                
                return 'PS'
                
            }
            else if(computerSelection === 'Rock'){
                
                return 'CS'
                
            }
        }
    }

    
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Rock, Paper, Scissors");
        let computerSelection = computerPlay();
        
        playRound(playerSelection, computerSelection);
        if(playRound(playerSelection, computerSelection)==='PS'){
            playerScore += 1;
        }
        else if(playRound(playerSelection, computerSelection) ==='CS'){
            computerScore += 1;
        }
        
    }
    if(playerScore > computerScore){
        return `Player ${playerScore} Computer ${computerScore}, Player Wins!`
    }
    else if(computerScore > playerScore){
        return `Player ${playerScore} Computer ${computerScore}, Computer Wins!`
    }
    else{
        return `Player ${playerScore} Computer ${computerScore}, Tie Game!`
    }
}

console.log(game());