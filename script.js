function animacaodiaum() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;

    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "jogo.html";
    }, 2000);

}
function animacaodiadois() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;
    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "pergunta.html";
    }, 2000);
}

function animacaodistres() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;
    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "pergunta2.html";
    }, 2000);
}
