// JavaScript
document.getElementById('checkButton').addEventListener('click', function() {
    var guess = document.getElementById('guessInput').value.toLowerCase();
    var correctAnswer = 'LeviAckerman'; // Correct answer
    var result = (guess === correctAnswer) ? 'Correct!' : 'Incorrect. Try again!';
    document.getElementById('animeImage').src = (guess === correctAnswer) ? 'levi.png' : 'levi1.png';
    document.getElementById('animeImage').alt = result;
  
    // Display error message for incorrect guess
    if (guess !== correctAnswer) {
      document.getElementById('errorMessage').innerText = 'Incorrect guess. Please try again!';
      document.getElementById('errorMessage').style.display = 'block';
    } else {
      document.getElementById('errorMessage').style.display = 'none';
    }
  });