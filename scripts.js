var firstLine = document.getElementById('firstLine');
var minGuessInput = document.getElementById('minGuessInput');
var maxGuessInput = document.getElementById('maxGuessInput');
var secondLine = document.getElementById('secondLine');
var thirdLine = document.getElementById('thirdLine');
var guessInput = document.getElementById('guessInput');
var guessButton = document.getElementById('guessButton');
var clearButton = document.getElementById('clearButton');
var resetButton = document.getElementById('resetButton');
var errorPrompt = document.getElementById('errorPrompt');
var playAgainButton = document.getElementById('playAgainButton');

var minGuess = 0;
var maxGuess = 100;
var number = Math.round(Math.random()*101);

function generateRandomNumber() {
  number = Math.round(Math.random()*((maxGuess - minGuess)+1));
};

function clearError() {
    errorPrompt.innerText = '';
}

function clearMessageLines() {
    secondLine.innerText = '';
    thirdLine.innerText = '';
}

guessButton.addEventListener('click', function () {
  var guess = parseInt(guessInput.value);
  if (guess > number && guess < maxGuess) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Sorry, that guess is too high. Try a lower number.';
      clearError();
  }
  if (guess < number && guess > minGuess) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Sorry, that guess is too low. Try a higher number.';
      clearError();
  }
  if (guess === number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Congratulations! You guessed the number!';
      clearError();
      playAgainButton.style.display = 'inline-block';
  }
  if (guess < minGuess) {
      errorPrompt.innerText = '*That number is below the minimum guess.';
  }
  if (guess > maxGuess) {
      errorPrompt.innerText = '*That number is above the maximum guess';
  }
  if (isNaN(guess)) {
      errorPrompt.innerText = '*You need to guess a number';
  }
});

function clearGuessInput() {
  guessInput.value = '';
}

clearButton.addEventListener('click', function () {
    clearGuessInput();
});

resetButton.addEventListener('click', function () {
    minGuessInput.value = 0;
    maxGuessInput.value = 0;
    clearButton.disabled = true;
    clearGuessInput();
    clearMessageLines();
    clearError();
    generateRandomNumber();
});

playAgainButton.addEventListener('click', function() {
  minGuess = parseInt(minGuess) - 10;
  maxGuess = parseInt(maxGuess) + 10;
  minGuessInput.value = minGuess;
  maxGuessInput.value = maxGuess;
  clearButton.disabled = true;
  playAgainButton.style.display = 'none';
  clearGuessInput();
  clearMessageLines();
  clearError();
  generateRandomNumber();
});

addEventListener('click', function(){
  if (secondLine.innerText != '' || thirdLine.innerText != '' || errorPrompt.innerText != '') {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  };
});

addEventListener('keyup', function() {
  if (guessInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  };
});

minGuessInput.addEventListener('keyup', function(){
  if (parseInt(minGuessInput.value) != minGuess || parseInt(maxGuessInput.value) != maxGuess) {
    generateRandomNumber();
    clearMessageLines();
    errorPrompt.innerText = '*the random number has been reset';
  }
  minGuess = parseInt(minGuessInput.value);
});

maxGuessInput.addEventListener('keyup', function(){
  if (parseInt(maxGuessInput.value) != maxGuess) {
    generateRandomNumber();
    errorPrompt.innerText = '*the random number has been reset';
  }
  maxGuess = parseInt(maxGuessInput.value);
});
