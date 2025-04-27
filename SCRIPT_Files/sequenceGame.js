// script.js

// 1. Study related words
const studyWords = ["Atom", "Molecule", "Force", "Gravity", "Energy", "Photosynthesis", "Neuron", "Fraction", "Velocity", "Density"];

// 2. Game sequence
let gameSequence = [];
let level = 0;
let started = false;

// 3. Start Button
document.getElementById("start-btn").addEventListener("click", function() {
  if (!started) {
    level = 0;
    gameSequence = [];
    document.getElementById("message").innerText = "";
    nextLevel();
    started = true;
    this.style.display = "none"; // Hide Start Button
  }
});

// 4. Next Level function
function nextLevel() {
  level++;
  document.getElementById("level-title").innerText = `Level ${level}`;
  document.getElementById("user-input").value = "";

  // Add new random word
  let randomWord = studyWords[Math.floor(Math.random() * studyWords.length)];
  gameSequence.push(randomWord);

  showSequence();
}

// 5. Show Sequence to user
function showSequence() {
  let sequenceText = gameSequence.join(" ➔ ");
  document.getElementById("word-sequence").innerText = sequenceText;

  // Hide sequence after 3 seconds
  setTimeout(() => {
    document.getElementById("word-sequence").innerText = "Now type the sequence!";
  }, 3000);
}

// 6. Submit Button
document.getElementById("submit-btn").addEventListener("click", function() {
  let userAnswer = document.getElementById("user-input").value.trim();
  let correctAnswer = gameSequence.join(" ").toLowerCase();

  if (userAnswer.toLowerCase() === correctAnswer) {
    document.getElementById("message").innerText = "✅ Correct! Next Level!";
    setTimeout(() => {
      nextLevel();
    }, 1000);
  } else {
    document.getElementById("message").innerText = "❌ Wrong! Press Start to try again!";
    startOver();
  }
});

// 7. Reset Game
function startOver() {
  started = false;
  document.getElementById("start-btn").style.display = "block"; // Show Start button again
}

