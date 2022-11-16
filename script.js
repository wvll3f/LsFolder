let time = 3000,
    indexC = 0,
    currentImageIndex = 0,
    imagens = document.querySelectorAll("#slide img"),
    max = imagens.length;

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

function nextImage() {

    imagens[currentImageIndex].classList.remove("imgfocus")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }

    imagens[currentImageIndex].classList.add("imgfocus")
}

let btLeft = document.querySelector("#left")
let btRight = document.querySelector("#right")

btRight.addEventListener('click', NextButton)
btLeft.addEventListener('click', bfrButton)

function NextButton() {
    console.log(currentImageIndex)
    imagens[currentImageIndex].classList.remove("imgfocus")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    imagens[currentImageIndex].classList.add("imgfocus")
}

function bfrButton() {
    console.log(currentImageIndex)
    imagens[currentImageIndex].classList.remove("imgfocus")

    currentImageIndex--

    if (currentImageIndex < 0) {
        currentImageIndex = 2;
    }

    imagens[currentImageIndex].classList.add("imgfocus")
}

let timeMove = 1500;
let intervalo;

function minhaFuncao(e) {
    let limit = e.children.length;

    intervalo = setInterval(() => {
        e.children[indexC].classList.remove("active")

        indexC++

        if (indexC >= limit) {
            indexC = 0;
        }

        e.children[indexC].classList.add("active")
    }, timeMove);

}

console.log(intervalo)

function stopMove() {
    clearInterval(intervalo)
}

let buttonSecond = document.querySelector("#mai"),
    buttonFirst = document.querySelector("#biq"),
    buttonThird = document.querySelector("#sai");

let categoria = document.querySelector(".cardCategory"),
    posiCategoria = categoria.getBoundingClientRect();

console.log(posiCategoria);

let posBiquini = document.querySelector(".biquinis").getBoundingClientRect(),
    posMaio = document.querySelector(".maios").getBoundingClientRect(),
    posSaida = document.querySelector(".saidaPraia").getBoundingClientRect();

//console.log(posBiquini)
//console.log(posMaio)
//console.log(posSaida)

function moveBiquini() {

    if (posiCategoria.top > 0) {
        categoria.scrollBy({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        console.log("já esta na posição");
    }
}

function moveMaio() {

    categoria.scrollBy({
        top: 1100,
        behavior: 'smooth'
    });
    console.log(posiCategoria);
}

function moveSaida() {

    categoria.scrollBy({
        top: 2200,
        behavior: 'smooth'
    });
    console.log(posiCategoria);
}

window.addEventListener('load', start)


