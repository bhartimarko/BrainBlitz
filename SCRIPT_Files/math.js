const startBtn = document.querySelector("#start");
const sectionOne = document.querySelector(".section-1")
const sectionTwo = document.querySelector(".section-2")
const quitBtn = document.querySelector("#quit")
const nextGameBtn = document.querySelector("#next-game")
const quitBtn2 = document.querySelector("#quit-2")

startBtn.addEventListener('click', ()=>{
    
    // hide section-1
    sectionOne.classList.add("hidden")

    //show kro section-2
    sectionTwo.style.display = 'flex'
})

quitBtn.addEventListener("click", ()=>[
    // jaise hi quit btn me click hoga window index page me chale jayega
    setTimeout(()=>{
    window.location.href = "/BrainBlitz/HTML_Files/index.html"
    },500) 
])

nextGameBtn.addEventListener("click", ()=>{
    // jaise hi next-game btn me click hoga window next-game page me chale jayega
    setTimeout(()=>{
        window.location.href = "/BrainBlitz/HTML_Files/wordGuessing.html"
    },500)
})

quitBtn2.addEventListener("click", ()=>[
    // jaise hi quit2 btn me click hoga window math game page me chale jayega
    setTimeout(()=>{
    window.location.href = "/BrainBlitz/HTML_Files/math.html"
    },100) 
])

//sbse pehle pure variable create kr lete h
let question = []
let currentQuestion = 0
let score = 0
let timer
let timerLeft = 60

// ab sare variables ko document se le lete h
const questionText = document.getElementById('question')
const optionButtons = document.querySelectorAll('.option-btn')
const scoreDisplay = document.getElementById('score')
const timerDisplay = document.getElementById('timer')
const progressDisplay = document.getElementById('progress')
const resultDisplay = document.querySelector('#result-screen')
const finalScore = document.getElementById('final-score')

// ye function questions generate krega 
function generateQuestions(){

    const operators = ['+', '-', '*', '/'];
    const tricky = Math.random() > 0.5
    // So Math.random() > 0.5 means:
    // Sometimes true (when number is above 0.5)
    // Sometimes false (when number is below or equal to 0.5)

    let q = '';
    let ans = 0;

    if(tricky) {
        // tricky question ye abc me store honge means a = 10, b = 2, c = 4 etc.
        let a = Math.floor(Math.random() * 10 + 1)
        let b = Math.floor(Math.random() * 10 + 1)
        let c = Math.floor(Math.random() * 10 + 1)
        let d = Math.floor(Math.random() * 10 + 1)

        // pick krenge koi bhi operators ko like op1 = +, op2 = * op = /; 
        let op1 = operators[Math.floor(Math.random() * 3)]
        let op2 = operators[Math.floor(Math.random() * 3)]
        let op3 = operators[Math.floor(Math.random() * 3)]

        //q me jo number or operators select hue h usko dalenge.
        q = `${a} ${op1} ${b} ${op2} ${c} ${op3} ${d}`
        ans = eval(q); //eval() convert krta h string ko calculation me. kyuki hamara (q)string hai
       }
     else{
        //agar tricky q. ni aaye to simple q. lao
        let a = Math.floor(Math.random() * 20 + 1)
        let b = Math.floor(Math.random() * 10 + 1)
        let c = Math.floor(Math.random() * 20 + 1)
        let op1 = operators[Math.floor(Math.random() * 3)]
        let op2 = operators[Math.floor(Math.random() * 3)]
        q = `${a} ${op1} ${b} ${op2} ${c}`
        ans = eval(q)
     }
     
     ans = Math.round(ans) // decimal ko hta do.
     let options = [ans]

     while(options.length < 4){
        // yaha 4 answer create hone 1 real or 3 fake. 
        let fake = ans + Math.floor(Math.random() * 10 -5)
        if(!options.includes(fake)) options.push(fake) //ye line ensure krega ki koi option duplicate to nhi h 
    }

    options = shuffle(options) // options me sare options shuffle rhenge
    return {question: q,  //obj k form me return honge
            answer: ans,
            options
    };
}

function shuffle(array){
        return array.sort(()=> Math.random() - 0.5)
        // randomly shuffeels options to correct answer index 0 me nhi rhega
}

function showQuestion() {
        if(currentQuestion >= question.length){
            endGame() // agr sare questions complete ho jate h to endgame ko call kr do or bta do user ki tumne sare q. solve kr diye h
            return
        }

const q = question[currentQuestion]
questionText.textContent = q.question
progressDisplay.textContent = `Question ${currentQuestion + 1} / 10`

optionButtons.forEach((btn, i) => {
    btn.textContent = q.options[i]
    btn.onclick = ()=> checkAnswer(q.options[i], q.answer)
})

}

//answer check krne k liye function
function checkAnswer(selected, correct){
    if(selected === correct){
        score += 5;
        scoreDisplay.textContent = `Score : ${score}`
    }
    currentQuestion++;
    showQuestion()
}

function startTimer(){
    clearInterval(timer)
    timer = setInterval(()=>{
        timerLeft--;
        timerDisplay.textContent = `⏱️ ${timerLeft}s`
        if(timerLeft <= 0){
            endGame()
        }
    },1000);
}

//game start krne ka function
function startGame(){
    question = Array.from({length : 10}, generateQuestions)
    currentQuestion = 0
    score = 0
    timerLeft = 60
    resultDisplay.classList.add('hidden')
    document.querySelector('.options').classList.remove('hidden')
    document.querySelector('.question-box').classList.remove('visible')
    progressDisplay.classList.remove('hidden')
    scoreDisplay.classList.remove('hidden')
    timerDisplay.classList.remove('hidden')
    scoreDisplay.textContent = `Score : 0`
    timerDisplay.textContent = `⏱️ 60s`
    showQuestion()
    startTimer()
}

// Game over handle karna
function endGame(){
    clearInterval(timer); // Timer ko stop karte hai

    // Question box aur options ko hide karna
    document.querySelector('.options').classList.add("hidden") //Hide options
    document.querySelector('.question-box').classList.add("visible") //Hide question box
    progressDisplay.classList.add('hidden') // Hide progress display
    timerDisplay.classList.add('hidden') // Hide timer display
    scoreDisplay.classList.add('hidden') // Hide score.

    // Result screen ko show karna
    resultDisplay.classList.remove('hidden'); // Show result screen
    finalScore.textContent = `Your final score is: ${score}`; // Display final score 
}

//start game page load hone pr
window.onload = () =>{
    resultDisplay.classList.add('hidden');
    startGame();
}


