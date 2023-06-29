'use strict';

// Examples of DOM manipulation
// console.log(document.querySelector('.message')); // This will print the element with the class called 'message'
// console.log(document.querySelector('.message').textContent); // This will print the text content of the element with the class called 'message'
// document.querySelector('.message').textContent = 'Correct Number!'; // This will change the text content of the element with the class called 'message'
// document.querySelector('.number').textContent = 13; // This will change the text content of the element with the class called 'number'
// document.querySelector('.score').textContent = 10; // This will change the text content of the element with the class called 'score'
// console.log(document.querySelector('.guess').value); // This will print the value of the element with the class called 'guess'
// document.querySelector('.guess').value = 23; // This will change the value of the element with the class called 'guess'

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1; // This will generate a random number between 1 and 20
let score = 20; // This will set the score to 20
let highscore = 0; // This will set the highscore to 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message; // This will change the text content of the element with the class called 'message'
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number; // This will change the text content of the element with the class called 'number'
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score; // This will change the text content of the element with the class called 'score'
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); // This will convert the value of the element with the class called 'guess' to a number
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = 'No number!'; // This will change the text content of the element with the class called 'message'
        displayMessage('No number!');
    }

    // When player wins
    else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!'; // This will change the text content of the element with the class called 'message'
        displayMessage('Correct Number!');
        // document.querySelector('.number').textContent = secretNumber; // This will change the text content of the element with the class called 'number'
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347'; // This will change the background color of the body
        document.querySelector('.number').style.width = '30rem'; // This will change the width of the element with the class called 'number'
    
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; // This will change the text content of the element with the class called 'highscore'
        }

    }

    // When guess is wrong
    else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!'; // This will change the text content of the element with the class called 'score'
            const message = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(message);
            score--;
            // document.querySelector('.score').textContent = score; // This will change the text content of the element with the class called 'score'
            displayScore(score);
        } 

        else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            // document.querySelector('.score').textContent = 0; // This will change the text content of the element with the class called 'score'
            displayScore(0);
        }
    }

    // // When guess is too high
    // else if(guess > secretNumber) {
    //     document.querySelector('.message').textContent = 'Too high!'; // This will change the text content of the element with the class called 'message'
        
    //     if(score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score; // This will change the text content of the element with the class called 'score'
    //     } 

    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0; // This will change the text content of the element with the class called 'score'
    //     }
    // }

    // // When guess is too low
    // else if(guess < secretNumber) {
    //     document.querySelector('.message').textContent = 'Too low!'; // This will change the text content of the element with the class called 'message'
        
    //     if(score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score; // This will change the text content of the element with the class called 'score'
    //     }

    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0; // This will change the text content of the element with the class called 'score'
    //     }
    // }
});

// Coding Challenge #1
// Reset the game when the 'Again!' button is clicked
document.querySelector('.again').addEventListener('click', function () {
    score = 20; // This will set the score to 20
    secretNumber = Math.trunc(Math.random() * 20) + 1; // This will generate a random number between 1 and 20
    // document.querySelector('.message').textContent = 'Start guessing...'; // This will change the text content of the element with the class called 'message'
    displayMessage('Start guessing...');
    // document.querySelector('.score').textContent = score; // This will change the text content of the element with the class called 'score'
    displayScore(score);
    // document.querySelector('.number').textContent = '?'; // This will change the text content of the element with the class called 'number'
    displayNumber('?');
    document.querySelector('.guess').value = ''; // This will change the value of the element with the class called 'guess'
    document.querySelector('body').style.backgroundColor = '#222'; // This will change the background color of the body
    document.querySelector('.number').style.width = '15rem'; // This will change the width of the element with the class called 'number'
});