let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target)=>{
    let humanResult = Math.abs(target - human);
    let robotResult = Math.abs(target - computer);
    return (humanResult <= robotResult ? true : false);
 
}

const updateScore = winner =>{
    winner === 'human' ? humanScore += 1 : computerScore += 1;
    
}

const advanceRound = () => currentRoundNumber += 1;

const alert = value =>{
    if (value < 0 || value >9){
        return 'Please insert a number from 0 to 9'
    }
  }