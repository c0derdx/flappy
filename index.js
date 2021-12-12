let pipe = document.querySelector(".pipe");
let hole = document.querySelector(".hole");
let character = document.querySelector(".character");
let jumping = 0;
let score = 0;

setInterval(() => {
    score++;
    document.querySelector(".score").innerHTML = score;
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    if (jumping == 0) {
        character.style.top = characterTop + 3 + "px";
    }
    if ((characterTop > 750) || ((pipeLeft < 50) && (pipeLeft > -50) && ((characterTop < holeTop) || (characterTop > holeTop + 150))) ) {
        alert("gameover");
        score = 0;
        character.style.top = 100 + "px";
    }
    
}, 10);

pipe.addEventListener("animationiteration", () => {
    let random = Math.floor(Math.random()*300 + 150);
    console.log(random);
    hole.style.top = random + "px";
});

function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));            
        if ((characterTop > 6) && (jumpCount<15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount>20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
    jumping = 0;
}

