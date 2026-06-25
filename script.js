function animacao1() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;

    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "jogo.html";
    }, 2000);

}
function animacao2() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;
    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "pergunta.html";
    }, 2000);
}

function animacao3() {

    const img = document.getElementById("figurinha");

    img.classList.remove("animar");
    void img.offsetWidth;
    img.classList.add("animar");

    setTimeout(() => {
        window.location.href = "pergunta2.html";
    }, 2000);
}
