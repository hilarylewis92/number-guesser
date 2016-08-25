var firstLine = document.getElementById('firstLine');
var inputDisplay = document.getElementById('inputDisplay');
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
  }
  if (guess > number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Sorry, that guess is too high. Try a lower number.';
      clearError();
  }
  if (guess < number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Sorry, that guess is too low. Try a higher number.';
      clearError();
  }
  if (guess === number) {
      secondLine.innerText = 'You guessed ' + guess;
      thirdLine.innerText = 'Congratulations! You guessed the number!';
      errorPrompt.innerText = '';
      minGuess -= 10;
      maxGuess += 10;
      minGuessInput.value = minGuess;
      maxGuessInput.value = maxGuess;
      numberGenerator();
    }

  if (guess < minGuess) {
      errorPrompt.innerText = '*That number is below the minimum guess.';
  }
  if (guess > maxGuess) {
      errorPrompt.innerText = '*That number is above the maximum guess';
  }
});

clearButton.addEventListener('click', function () {
    guessInput.value = '';
    clearButton.disabled = true;
});

resetButton.addEventListener('click', function () {
    minGuess = 0;
    maxGuess = 100;
    minGuessInput.value = minGuess;
    maxGuessInput.value = maxGuess;
    clearButton.disabled = true;
    guessInput.value = '';
    clearMessageLines();
    clearError();
});

addEventListener('click', function(){
  if (thirdLine.innerText !== '' || errorPrompt.innerText !== '') {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
});

addEventListener('keyup', function(){
  if (thirdLine.innerText !== '' || errorPrompt.innerText !== '') {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
});

addEventListener ('keyup', function () {
  if (guessInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
});

minGuessInput.addEventListener ('keyup', function () {
  if (parseInt(minGuessInput.value) != minGuess) {
    minGuess = parseInt(minGuessInput.value);
    numberGenerator();
    clearMessageLines();
    errorPrompt.innerText = '*The random number has been reset.';
  }
});

maxGuessInput.addEventListener ('keyup', function () {
  if (parseInt(maxGuessInput.value) != maxGuess) {
    maxGuess = parseInt(maxGuessInput.value);
    numberGenerator();
    clearMessageLines();
    errorPrompt.innerText = '*The random number has been reset.';
  }
});

minGuessInput.addEventListener ('click', function () {
  if (parseInt(minGuessInput.value) != minGuess) {
    minGuess = parseInt(minGuessInput.value);
    numberGenerator();
    clearMessageLines();
    errorPrompt.innerText = '*The random number has been reset.';
  }
});

maxGuessInput.addEventListener ('click', function () {
  if (parseInt(maxGuessInput.value) != maxGuess) {
    maxGuess = parseInt(maxGuessInput.value);
    numberGenerator();
    clearMessageLines();
    errorPrompt.innerText = '*The random number has been reset.';
  }
});
