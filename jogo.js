const player = document.getElementById("player");
const scoreText = document.getElementById("score");
const quiz = document.getElementById("quiz");
const finalScreen = document.getElementById("final");

let x = 50;
let y = 300;
let score = 0;
let currentStar;

function beep(freq){
    const ctx = new(window.AudioContext || window.webkitAudioContext)();

    const osc = ctx.createOscillator();

    osc.frequency.value = freq;

    osc.connect(ctx.destination);

    osc.start();

    osc.stop(ctx.currentTime + 0.1);
}

function createStar(){

    if(currentStar){
        currentStar.remove();
    }

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "⭐";

    const game = document.getElementById("game");

star.style.left =
    Math.random() * (game.clientWidth - 50) + "px";

star.style.top =
    Math.random() * (game.clientHeight - 150) + "px";

    document.getElementById("game").appendChild(star);

    currentStar = star;
}

function collision(a,b){

    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return !(
        r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom
    );
}

document.addEventListener("keydown",(e)=>{

    if(quiz.style.display === "flex"){
        return;
    }

    if(e.key === "ArrowUp") y -= 15;
    if(e.key === "ArrowDown") y += 15;
    if(e.key === "ArrowLeft") x -= 15;
    if(e.key === "ArrowRight") x += 15;

    x = Math.max(0, Math.min(window.innerWidth - 50, x));
    y = Math.max(0, Math.min(window.innerHeight - 50, y));

    player.style.left = x + "px";
    player.style.top = y + "px";

    if(currentStar && collision(player,currentStar)){

        beep(700);

        score++;

        scoreText.textContent = score;

        if(score >= 10){

            quiz.style.display = "flex";

            currentStar.remove();

            return;
        }

        createStar();
    }
});

function answer(correct){

    if(correct){

        beep(1000);

        quiz.style.display = "none";

        finalScreen.style.display = "flex";

    }else{

        alert("Hmm... tenta de novo ");

    }
}

createStar();

function movePlayer(direction){
if(direction === "left"){
    x -= 15;
    player.style.transform = "scaleX(1)";
}

if(direction === "right"){
    x += 15;
    player.style.transform = "scaleX(-1)";
}
    
    if(direction === "up") y -= 15;e
    if(direction === "down") y += 15;
    if(direction === "left") x -= 15;
    if(direction === "right") x += 15;

    x = Math.max(0, Math.min(window.innerWidth - 50, x));
    y = Math.max(0, Math.min(window.innerHeight - 50, y));

    player.style.left = x + "px";
    player.style.top = y + "px";

    if(currentStar && collision(player,currentStar)){

        beep(700);

        score++;
        scoreText.textContent = score;

        if(score >= 10){
    quiz.style.display = "flex";
    currentStar.remove();
    return;
}

        createStar();
    }
}
