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

