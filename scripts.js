var firstLine = document.getElementById('firstLine');
var secondLine = document.getElementById('secondLine');
var thirdLine = document.getElementById('thirdLine');
var guessInput = document.getElementById('guessInput');
var guessButton = document.getElementById('guessButton');
var clearButton = document.getElementById('clearButton');
var resetButton = document.getElementById('resetButton');
var errorPrompt = document.getElementById('errorPrompt');
var minGuess = 0;
var maxGuess = 100;

number = Math.round(Math.random()*101);

function clearError() {
    errorPrompt.innerText = '';
}

function clearMessageLines() {
    secondLine.innerText = '';
    thirdLine.innerText = '';
}

guessButton.addEventListener('click', function () {
  var guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
      errorPrompt.innerText = '*You need to guess a number';
      clearMessageLines();
  }
  if (guess > number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Sorry, that guess is too high. Try a lower number.';
      errorPrompt.innerText = '';
  }
  if (guess < number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Sorry, that guess is too low. Try a higher number.';
      errorPrompt.innerText = '';
  }
  if (guess === number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Congradulations! You guessed the number!';
      errorPrompt.innerText = '';
  }
  if (guess < minGuess) {
      errorPrompt.innerText = '*That number is below the minimum guess.';
      clearMessageLines();
  }
  if (guess > maxGuess) {
      errorPrompt.innerText = '*That number is above the maximum guess';
      clearMessageLines();
  }
});

clearButton.addEventListener('click', function () {
    guessInput.value = '';
});

resetButton.addEventListener('click', function () {
    guessInput.value = '';
    clearMessageLines();
    clearError();
    number = Math.round(Math.random()*101);
});

// guessInput.addEventListener('keypress', function(){
// });

addEventListener('click', function(){
  // resetButton.disabled = false;
});

function disableClearButtonCheck() {
  if (guessInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
}}

setInterval(disableClearButtonCheck, 500);
