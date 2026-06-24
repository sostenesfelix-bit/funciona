function animacaojogo() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;

    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "jogo.html";
    }, 2000);

}
function animacadiao() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;
    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "pergunta.html";
    }, 2000);
}
