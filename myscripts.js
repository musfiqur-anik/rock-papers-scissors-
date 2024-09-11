//document.body.innerHTML ='<p>hello</p>';
let choice= '';
let Result= {Human:0, Computer:0}
function getComputerChoice() {
    let num= Math.random();
    
    if (num < 0.33) {
        choice = 'Rock';
    } else if (num < 0.66) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
}    

let humanchoice = '';

function getHumanChoice(para) {
         if (para === 'Rock') {
            humanchoice = 'Rock';
         }  else if (para === 'Scissors') {
            humanchoice = 'Scissors';
        } else {humanchoice = 'Paper';}
}

function calculate() {
    
getComputerChoice();
if (choice === humanchoice) {
    console.log('this is a tie');
    document.querySelector('.div').innerHTML= 'this is a Tie';
    document.querySelector('.class').innerHTML= `Your score: ${Result.Human}, Computer Score: ${Result.Computer}`;

}  else if ((humanchoice === 'Rock' && choice === 'Scissors') || (humanchoice === 'Paper' && choice === 'Rock') || (humanchoice === 'Scissors' && choice ==='Paper')) {
    console.log('You won!');
    document.querySelector('.div').innerHTML= `you pick ${humanchoice}, computer picks ${choice}, You won!`;
    Result.Human++;
    document.querySelector('.class').innerHTML= `Your score: ${Result.Human}, Computer Score: ${Result.Computer}`;
} else {
    console.log('You lost!');
    document.querySelector('.div').innerHTML= `you pick ${humanchoice}, computer picks ${choice}, You lost!`;
    Result.Computer++;
    document.querySelector('.class').innerHTML= `Your score: ${Result.Human}, Computer Score: ${Result.Computer}`;
}

}

