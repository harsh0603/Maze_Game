
const nextBtn = document.querySelector(".next-btn");

const levelOne = document.querySelector(".level-one") ;


const levelTwo = document.querySelector(".level-two") ;



const uiLevel = document.querySelector(".level");
const uiMessage = document.querySelector(".message");


const spooky = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream");



const collisionCheck = (value) =>{
    if(value === "maze-border") alert("you lose the game, Try Again...");
    if(value === "finish"){
          nextBtn.style.opacity = 1;
          nextBtn.style.pointerEvents = "all";
          levelOne.style.pointerEvents = "none";
    }

    if(value === "end-game"){
        setTimeout(
            function(){
                spooky.style.display = "block";
                document.body.style.background = "black";
            },1100
        );
      screamSound.play();
     
      
    }
}



nextBtn.addEventListener("click",()=>{
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextBtn.style.opacity = 0;
    nextBtn.style.pointerEvents = "none";

    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "This is the last level(BE AWARE)....";
})


window.addEventListener('mousemove',(e)=>{
    let check = e.target.classList.value;
    collisionCheck(check);
})