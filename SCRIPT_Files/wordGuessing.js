// script.js

// 1. Words list (10 funky words)
const words = ["apple", "brain", "train", "plant", "chair", "spark", "house", "dream", "cloud", "magic"];

// 2. Randomly selecting one word
let selectedWord = words[Math.floor(Math.random() * words.length)];

// 3. Creating an array for display word where first 2 letters are shown, rest are '_'
let displayWord = [];
for (let i = 0; i < selectedWord.length; i++) {
  if (i < 2) {
    displayWord.push(selectedWord[i]); // Pehle 2 letter dikhenge
  } else {
    displayWord.push("_"); // Baaki hidden rahenge
  }
}

// 4. Setting total chances
let chancesLeft = 6;

// 5. Showing the word initially
document.getElementById("word-display").innerText = displayWord.join(" ");

// 6. Adding click event on "Guess" button
document.getElementById("guess-btn").addEventListener("click", function() {
  const input = document.getElementById("letter-input").value.toLowerCase();
  document.getElementById("letter-input").value = "";

  if (input && input.length === 1) {
    let correct = false;

    // 7. Checking guessed letter in word
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === input && displayWord[i] === "_") {
        displayWord[i] = input; // Agar match hua, update kar dena
        correct = true;
      }
    }

    // 8. If not correct, chances kam karo
    if (!correct) {
      chancesLeft--;
    }

    // 9. Update the display word and chances
    document.getElementById("word-display").innerText = displayWord.join(" ");
    document.getElementById("chances").innerText = `Chances left: ${chancesLeft}`;

    // 10. Check win or lose
    if (!displayWord.includes("_")) {
      document.getElementById("message").innerText = "🎉 You guessed the word! Awesome!";
      document.getElementById("guess-btn").disabled = true;
    } else if (chancesLeft === 0) {
      document.getElementById("message").innerText = `💔 Game Over! The word was "${selectedWord}".`;
      document.getElementById("guess-btn").disabled = true;
    }
  }
});
