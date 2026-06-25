const hearts = document.getElementById("hearts");

function criarCoracao(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
   const img = document.createElement("img");

img.src = "fofoo.png";

heart.appendChild(img);

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    const tempo = 4 + Math.random() * 4;
    heart.style.animationDuration = tempo + "s";

    heart.style.bottom = "0px";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    }, tempo * 1000);
}

setInterval(criarCoracao, 300);
