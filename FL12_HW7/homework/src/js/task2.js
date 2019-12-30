// Your code goes here

let game = confirm('Do you want to play a game?');
let repeatGame = true;
let random = 8;
let totalPrize = 0;
let maxPrize = 100;
let midlPrize = 50;
let minPrize = 25;
let prize = maxPrize;
let attempt;
const firstTry = 3;
const secondTry = 2;
const lastTry = 1;
const half = 2;
const quarter = 4;
let enterNumber;
let randomNum; // = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

if ( game === true ) {
    while(repeatGame){
        for(let attempt = 3; attempt > 0; attempt--) {
            randomNum = Math.floor(Math.random() * (random - 0 + 1)) + 0;
            if (attempt === firstTry) {
                prize = maxPrize;
            }else if (attempt === secondTry) {
                prize = midlPrize;
            }else if (attempt === lastTry) {
                prize = minPrize
            }
            enterNumber = Number(prompt(`Choose a roulette pocket number from 0 to 8.` +
            `\n\rAttempts left: ${attempt}` +
            `\n\rTotal prize: ${totalPrize}$` +
            `\n\rPossible prize on current attempt: ${prize}$`, ''));
            if(enterNumber === randomNum){
                switch (attempt) {
                    case firstTry:
                        totalPrize += maxPrize;
                        attempt = 0;
                        break;
                    case secondTry:
                        totalPrize += midlPrize;
                        attempt = 0;
                        break;
                    case lastTry:
                        prize = minPrize;
                        break;
                    default:
                        repeatGame = true;
                }
			} else {
				repeatGame = false;
            }
        }
            if(repeatGame === true){
                repeatGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. 
                Do you want to continue?`);
                if(repeatGame){
                    maxPrize *= half;
                    midlPrize = maxPrize / half;
                    minPrize = maxPrize / quarter;
                    attempt = firstTry;
                    randomNum += quarter;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                    break;
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                repeatGame = confirm('Do you want to play a game?');
                if(repeatGame){
                    attempt = 0;
                    totalPrize = 0;
                } else {
                    alert('You did not become a billionaire, but can.');
                    break;
                }
            }
    }
    }else{
        alert('You did not become a billionaire, but can.');
}
