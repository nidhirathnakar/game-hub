let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

checkBtn.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "⛔ Please enter a valid number between 1 and 100!";
    message.style.color = "#ff595e";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Congratulations! You guessed it right in ${attempts} attempts!`;
    message.style.color = "#38b000";
    guessInput.disabled = true;
    checkBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "#f77f00";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "#3a86ff";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
});