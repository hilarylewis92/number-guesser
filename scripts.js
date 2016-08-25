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

function numberGenerator() {
number = Math.round(Math.random() * (maxGuess - minGuess)) + minGuess;
}

numberGenerator();


firstLine.innerText = 'Guess a whole number between ' +minGuess+ ' and ' +maxGuess+ ':';

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
      minGuess -= 10;
      maxGuess += 10;
      numberGenerator();
      firstLine.innerText = 'Guess a whole number between ' +minGuess+ ' and ' +maxGuess+ ':';
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
    minGuess = minGuess - 10;
    maxGuess = maxGuess + 10;
    numberGenerator();
});

addEventListener('click', function(){
  if (thirdLine.innerText !== '' || errorPrompt.innerText !== '') {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
});

function disableClearButtonCheck() {
  if (guessInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }

}
setInterval(disableClearButtonCheck, 500);
