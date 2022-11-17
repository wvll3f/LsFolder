
//Slide inicial de Banners
//Variaveis utilizadas
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

console.log(intervalo)

//Para o slide do produto
function stopMove() {
    clearInterval(intervalo)
}

//Aréa de seleção das categorias de produtos
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

//seleção da categoria de biquini
function moveBiquini() {

        categoria.scrollBy({
            top: -2260,
            behavior: 'smooth'
        });
    
}
console.log(categoria.DOCUMENT_POSITION_CONTAINED_BY)

//seleção da categoria de Maio
function moveMaio() {

    categoria.scrollBy({
        top: 1120,
        behavior: 'smooth'
    });
    console.log(posiCategoria);
}

//seleção da categoria de Saida de praia
function moveSaida() {

    categoria.scrollBy({
        top: 2260,
        behavior: 'smooth'
    });
    console.log(posiCategoria);
}

window.addEventListener('load', start)


