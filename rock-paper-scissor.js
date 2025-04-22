function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;
  
    if (userChoice === computerChoice) {
      document.getElementById("winner").textContent = "It's a Draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      document.getElementById("winner").textContent = "You Win! 🎉";
    } else {
      document.getElementById("winner").textContent = "You Lose! 😢";
    }
  }