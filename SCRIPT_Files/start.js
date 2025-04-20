//pehla function or button start k liye 
const startBtn = startButton();

function startButton(){
    const btn = document.querySelector("#start-btn");
    btn.addEventListener("click", function(){
        window.location.href = "/BrainBlitz/HTML_Files/math.html"
    })
}

//or dusra function or button quit k liye 
const quitBtn = quitButton();
function quitButton() {
    const btn =  document.querySelector("#quit-btn")
    btn.addEventListener("click", ()=>{
        alert("Thanks for visiting BrainBlitz! Come back soon.");
    })
}



