// Your code goes here

let game = confirm('Do you want to play a game?');
let repeatGame = true;
let totalPrize = 0;
let maxPrize = 100;
let midlPrize = maxPrize / 2;
let minPrize = maxPrize / 4;
let prize = maxPrize;
let attempt;
let enterNumber;
let randomNum; // = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

if ( game === true ) {
    while(repeatGame){
        for(attempt = 3; attempt > 0; attempt--) {
            randomNum = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
            enterNumber = prompt(`Choose a roulette pocket number from 0 to 8.` +
            `\n\rAttempts left: ${attempt}` +
            `\n\rTotal prize: ${totalPrize}$` +
            `\n\rPossible prize on current attempt: ${prize}$`, '');
            if(enterNumber === randomNum){
				if(attempt === 3){
					totalPrize += maxPrize;
                    attempt = 0;
				} else if(attempt === 2){
					totalPrize += midlPrize;
                    attempt = 0;
				} else if(attempt === 1){
                    totalPrize += minPrize;
				}
				repeatGame = true;
			} else {
				repeatGame = false;
            }
            if(repeatGame === true){
                repeatGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`);
                if(repeatGame){
                    maxPrize *= 2;
                    midlPrize = maxPrize / 2;
                    minPrize = maxPrize / 4;
                    attempt = 3;
                    randomNum += 4;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                    break;
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                game = confirm('Do you want to play a game?')
                if(repeatGame){
                    attempt = 0;
                    maxPrize = 100;
                    midlPrize = maxPrize / 2;
                    minPrize = maxPrize / 4;
                    totalPrize = 0;
                } else {
                    break;
                }
            }
    }
}
    }else{
        alert('You did not become a billionaire, but can.');
}
