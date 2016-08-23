
function numberGenerator () {
  number = Math.round(Math.random()*101);
}

function myGuess (guess) {
  var numberGuess = document.getElementById('number');
  var guess = document.getElementById('guess').value;
}


if (guess == number) {
  number.hint("That is correct! You win.");
}
else {
  if (guess < number) {
  number.hint ("That number was too low. Try again.");
      }
  else {
    if (guess > number) {
      return "That number was too high. Try again.";
      }
    else {
      return NaN;
      }
    }
  }

  function clearFields() {
       document.getElementById('guess').value = "";
  }
  function resetFields() {
     document.getElementById('guess').value = "";
     //reset random generator
   }
