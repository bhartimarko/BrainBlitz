// script.js

// // 1. Words list (10 funky words)
// const words = ["apple", "brain", "train", "plant", "chair", "spark", "house", "dream", "cloud", "magic"];

// // 2. Randomly selecting one word
// let selectedWord = words[Math.floor(Math.random() * words.length)];

// // 3. Creating an array for display word where first 2 letters are shown, rest are '_'
// let displayWord = [];
// for (let i = 0; i < selectedWord.length; i++) {
//   if (i < 2) {
//     displayWord.push(selectedWord[i]); // Pehle 2 letter dikhenge
//   } else {
//     displayWord.push("_"); // Baaki hidden rahenge
//   }
// }

// // 4. Setting total chances
// let chancesLeft = 6;

// // 5. Showing the word initially
// document.getElementById("word-display").innerText = displayWord.join(" ");

// // 6. Adding click event on "Guess" button
// document.getElementById("guess-btn").addEventListener("click", function() {
//   const input = document.getElementById("letter-input").value.toLowerCase();
//   document.getElementById("letter-input").value = "";

//   if (input && input.length === 1) {
//     let correct = false;

//     // 7. Checking guessed letter in word
//     for (let i = 0; i < selectedWord.length; i++) {
//       if (selectedWord[i] === input && displayWord[i] === "_") {
//         displayWord[i] = input; // Agar match hua, update kar dena
//         correct = true;
//       }
//     }

//     // 8. If not correct, chances kam karo
//     if (!correct) {
//       chancesLeft--;
//     }

//     // 9. Update the display word and chances
//     document.getElementById("word-display").innerText = displayWord.join(" ");
//     document.getElementById("chances").innerText = `Chances left: ${chancesLeft}`;

//     // 10. Check win or lose
//     if (!displayWord.includes("_")) {
//       document.getElementById("message").innerText = "🎉 You guessed the word! Awesome!";
//       document.getElementById("guess-btn").disabled = true;
//     } else if (chancesLeft === 0) {
//       document.getElementById("message").innerText = `💔 Game Over! The word was "${selectedWord}".`;
//       document.getElementById("guess-btn").disabled = true;
//     }
//   }
// });

const wordData = [
  { masked: "a_az_ng", missing: "mi" },
  { masked: "p__zle", missing: "uz" },
  { masked: "ki_ko_", missing: "wi" },
  { masked: "_el_oc_ty", missing: "vi" },
  { masked: "sy__heti__", missing: "nt" },
  { masked: "_odepen_e_ce", missing: "ind" },
  { masked: "com_ut_r", missing: "pe" },
  { masked: "_rti_ic__", missing: "aa" },
  { masked: "re__lar", missing: "gu" },
  { masked: "a_g__ith__", missing: "lor" }
];

let index = 0;
let score = 0;
let timeLeft = 60;
let timer;

function startGame() {
  document.getElementById("welcome-section").classList.add("hidden");
  document.getElementById("game-section").classList.remove("hidden");

  score = 0;
  index = 0;
  timeLeft = 60;

  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("high-score").textContent = "High Score: " + getHighScore();
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("restart-btn").classList.add("hidden");
  document.getElementById("user-input").classList.remove("hidden");
  document.getElementById("submit-btn").classList.remove("hidden");
  document.getElementById("word-container").classList.remove("hidden");

  showWord();
  timer = setInterval(updateTimer, 1000);
}

function quitGame() {
  clearInterval(timer);
    // Reset and go back to welcome section
  document.getElementById("game-section").classList.add("hidden");
  document.getElementById("welcome-section").classList.remove("hidden");

  // Reset everything visually
  document.getElementById("user-input").value = "";
  document.getElementById("timer").textContent = "Time Left: 60s";
  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("word-container").textContent = "";
  document.getElementById("game-over").textContent = "";
  document.getElementById("restart-btn").classList.add("hidden");

  // Optional: Alert or log quit status
  console.log("User quit the game and returned to the main menu.");
}

function nextGame() {
  setTimeout(()=>{
    window.location.href = "/BrainBlitz/HTML_Files/sequenceGame.html"
},500)
}

function showWord() {
  if (index < wordData.length) {
    document.getElementById("word-container").textContent = wordData[index].masked;
    document.getElementById("user-input").value = "";
  } else {
    endGame();
  }
}

function submitGuess() {
  const input = document.getElementById("user-input").value.trim().toLowerCase();
  if (input === wordData[index].missing.toLowerCase()) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  index++;
  showWord();
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
  if (timeLeft <= 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  document.getElementById("user-input").classList.add("hidden");
  document.getElementById("submit-btn").classList.add("hidden");
  document.getElementById("word-container").classList.add("hidden");

  const finalText = `Game Over! Your score: ${score}/${wordData.length}`;
  document.getElementById("game-over").textContent = finalText;
  document.getElementById("game-over").classList.remove("hidden");
  document.getElementById("restart-btn").classList.remove("hidden");

  updateHighScore(score);
}

function restartGame() {
  startGame();
}

function getHighScore() {
  return localStorage.getItem("highScore") || 0;
}

function updateHighScore(currentScore) {
  const high = getHighScore();
  if (currentScore > high) {
    localStorage.setItem("highScore", currentScore);
    document.getElementById("high-score").textContent = "High Score: " + currentScore;
  }
}
