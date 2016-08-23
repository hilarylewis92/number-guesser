number = Math.round(Math.random()*101);

var guessButton = document.querySelector('.guess-button');

guessButton.addEventListener('click', function() {
  var guess = document.getElementById('guess');
});


//
//
// if (guess == number) {
//   number.hint("That is correct! You win.");
//     }
//
// if (guess < number) {
//   number.hint ("That number was too low. Try again.");
//       }
//
//   if (guess > number) {
//       return "high. Try again.";
//       }
//
//
//   function clearFields() {
//        document.getElementById('guess').value = "";
//   }
//   function resetFields() {
//      document.getElementById('guess').value = "";
//      //reset random generator
//    }
