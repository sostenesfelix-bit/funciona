function movePlayer(direction){

    if(direction === "left"){
        x -= 15;
        player.style.transform = "scaleX(1)";
    }

    if(direction === "right"){
        x += 15;
        player.style.transform = "scaleX(-1)";
    }

    if(direction === "up") y -= 15;
    if(direction === "down") y += 15;

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
