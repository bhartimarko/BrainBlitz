const wordData = [
  { word: "a_az_ng", missing: "mi" },
  { word: "p__zle", missing: "uz" },
  { word: "sh_d_w", missing: "ao" },
  { word: "_eloc_ty", missing: "vi" },
  { word: "Bu__le", missing: "bb" },
  { word: "Ro_k_t", missing: "ce" },
  { word: "com_ut_r", missing: "pe" },
  { word: "M_rr_r", missing: "io" },
  { word: "re__lar", missing: "gu" },
  { word: "C_s_l_e", missing: "ate" }
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

function quitGameFirst(){
  setTimeout(()=>{
    window.location.href = "/BrainBlitz/HTML_Files/index.html"
},500)
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
