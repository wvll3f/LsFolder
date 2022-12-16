import {biquinis,maios,saidas} from './assets/products.js';

//Slide inicial de Banners
//Variaveis utilizadas
const biq = biquinis;
const mai = maios;
const sai = saidas;

console.log(biquinis)

let time = 3000,
    indexC = 0,
    currentImageIndex = 0,
    imagens = document.querySelectorAll("#slide img"),
    max = imagens.length;

//Função que inicia o slide
function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

// Função que faz a imagens passarem 
function nextImage() {

    imagens[currentImageIndex].classList.remove("imgfocus")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }

    imagens[currentImageIndex].classList.add("imgfocus")
}

// aplicando a funcionalidade de passar imagens nos botões
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

// Area de funções relacionados aos produtos
let timeMove = 1500;
let intervalo;

//Função de slide de imagens dos produtos
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

//Para o slide do produto
function stopMove() {
    clearInterval(intervalo)
}


window.addEventListener('load', start)


