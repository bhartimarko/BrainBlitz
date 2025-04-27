// Scores ko localStorage se uthana
const mathScore = localStorage.getItem('mathScore') || 0;
const wordScore = localStorage.getItem('wordScore') || 0;
const sequenceScore = localStorage.getItem('sequenceScore') || 0;

// Scores ko set karna
document.getElementById('mathScore').innerText = mathScore;
document.getElementById('wordScore').innerText = wordScore;
document.getElementById('sequenceScore').innerText = sequenceScore;

// Play Again button functionality
document.getElementById('playAgainBtn').addEventListener('click', () => {
  localStorage.clear(); // Scores reset karna
  window.location.href = 'index.html'; // Main page ya first game page pe redirect karna
});
