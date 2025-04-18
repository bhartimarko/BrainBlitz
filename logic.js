const puzzles = [
    { question: "5 + 3", answer: "8" },
    { question: "12 - 4", answer: "8" },
    { question: "7 * 2", answer: "14" },
    { question: "15 / 3", answer: "5" },
    { question: "9 + 6", answer: "15" },
  ];
  
  let currentPuzzle = 0;
  let score = 0;
  let timeLeft = 30;
  let timer;
  
  function startGame() {
    loadPuzzle();
    startTimer();
  }
  
  function loadPuzzle() {
    document.getElementById("question").innerText = puzzles[currentPuzzle].question;
    document.getElementById("answer").value = '';
  }
  
  function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").innerText = timeLeft;
      if (timeLeft === 0) {
        nextPuzzle();
      }
    }, 1000);
  }
  
  function submitAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer === puzzles[currentPuzzle].answer) {
      score++;
      document.getElementById("score").innerText = score;
    }
    nextPuzzle();
  }
  
  function nextPuzzle() {
    clearInterval(timer);
    currentPuzzle++;
    if (currentPuzzle < puzzles.length) {
      loadPuzzle();
      startTimer();
    } else {
      document.getElementById("question").innerText = "🎉 Game Over!";
      document.getElementById("answer").style.display = "none";
      document.querySelector("button").style.display = "none";
      document.getElementById("timer").innerText = "0";
    }
  }
  
  startGame();
  