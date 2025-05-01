const studyWords = [
  "Atom", "Molecule", "Force", "Gravity", "Energy",
  "Photosynthesis", "Neuron", "Fraction", "Velocity", "Density"
];

let gameSequence = [];
let level = 0;

const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");

const levelTitle = document.getElementById("level-title");
const wordSequenceEl = document.getElementById("word-sequence");
const userInput = document.getElementById("user-input");
const message = document.getElementById("message");

// Start Game
document.getElementById("start-btn").addEventListener("click", () => {
  switchToSection2();
  startGame();
});

// Quit from Section 1
document.getElementById("quit-btn-1").addEventListener("click", () => {
  window.location.href = "/BrainBlitz/HTML_Files/index.html";
});

// Quit from Section 2
document.getElementById("quit-btn-2").addEventListener("click", () => {
  switchToSection1();
});

// Restart Game from Section 2
document.getElementById("restart-btn").addEventListener("click", () => {
  startGame();
});

// Submit Answer
document.getElementById("submit-btn").addEventListener("click", () => {
  const userAnswer = userInput.value.trim().toLowerCase();
  const correctAnswer = gameSequence.join(" ").toLowerCase();

  if (userAnswer === correctAnswer) {
    message.textContent = "✅ Correct! Next level!";
    setTimeout(() => {
      nextLevel();
    }, 1000);
  } else {
    message.textContent = "❌ Wrong! Press Restart.";
  }
});

// Core Game Functions
function startGame() {
  level = 0;
  gameSequence = [];
  message.textContent = "";
  userInput.value = "";
  nextLevel();
}

function nextLevel() {
  level++;
  levelTitle.textContent = `Level ${level}`;
  userInput.value = "";
  const randomWord = studyWords[Math.floor(Math.random() * studyWords.length)];
  gameSequence.push(randomWord);
  showSequence();
}

function showSequence() {
  wordSequenceEl.textContent = gameSequence.join(" ➔ ");
  setTimeout(() => {
    wordSequenceEl.textContent = "Now type the sequence!";
  }, 1000);
}

// Section Switching
function switchToSection1() {
  section1.classList.remove("hidden");
  section2.classList.add("hidden");
}

function switchToSection2() {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
}
