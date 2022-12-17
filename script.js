import { biquinis, maios, saidas } from './assets/products.js';

//Variaveis utilizadas
const biq = biquinis;
const mai = maios;
const sai = saidas;

//Slide inicial de Banners
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
let timeMove = 1000;
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

const divCategory = document.querySelector('.cardCategory')
const divGeral = document.createElement('div')
divGeral.classList.add('Biquinis')
divCategory.appendChild(divGeral)
var indexBiq = 0;

//Criação da categoria de biquinis
biq.forEach(() => {

    
    const divBiquinis = document.createElement('div')
    const divCarrossel = document.createElement('div')
    const img = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const span = document.createElement('span')
    const p2 = document.createElement('p')

    divCarrossel.classList.add('carrossel')
    divCarrossel.setAttribute('id','carrossel-biquini')
    divCarrossel.onmouseover = function () { minhaFuncao(this) }
    divCarrossel.onmouseout = function () { stopMove() }
    
    divBiquinis.classList.add('card')
    divBiquinis.setAttribute('id','card-biquini')
    let text = document.createTextNode(biq[indexBiq].sizes)
    let text2 = document.createTextNode(biq[indexBiq].name)

    img.classList.add('active')
    img.setAttribute('src', biq[indexBiq].imgs[0].endereço)
    img2.setAttribute('src', biq[indexBiq].imgs[1].endereço)
    img3.setAttribute('src', biq[indexBiq].imgs[2].endereço)


    span.appendChild(text2)
    p2.appendChild(text)
    divBiquinis.appendChild(span)
    divBiquinis.appendChild(p2)
    divCarrossel.appendChild(img)
    divCarrossel.appendChild(img2)
    divCarrossel.appendChild(img3)
    divBiquinis.appendChild(divCarrossel)
    divCategory.appendChild(divBiquinis)
    divGeral.append(divBiquinis)
    
    indexBiq++
})

let divBiquinis = document.querySelectorAll('div-biquini')
//Criação da categoria de Maios

var indexMai = 0;
mai.forEach(() => {

    console.log(indexSai)
    const divMaios = document.createElement('div')
    const divCarrossel = document.createElement('div')
    const img = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const span = document.createElement('span')
    const p2 = document.createElement('p')

    divCarrossel.classList.add('carrossel')
    divCarrossel.onmouseover = function () { minhaFuncao(this) }
    divCarrossel.onmouseout = function () { stopMove() }
    divMaios.classList.add('card')
    let text = document.createTextNode(mai[indexMai].sizes)
    let text2 = document.createTextNode(mai[indexMai].name)

    img.classList.add('active')
    img.setAttribute('src', mai[indexMai].imgs[0].endereço)
    img2.setAttribute('src', mai[indexMai].imgs[1].endereço)
    img3.setAttribute('src', mai[indexMai].imgs[2].endereço)


    span.appendChild(text2)
    p2.appendChild(text)
    divMaios.appendChild(span)
    divMaios.appendChild(p2)
    divCarrossel.appendChild(img)
    divCarrossel.appendChild(img2)
    divCarrossel.appendChild(img3)
    divMaios.appendChild(divCarrossel)
    divCategory.appendChild(divMaios)
    
    indexMai++
})

var indexSai = 0;
//Criação da categoria de Saidas de praia
sai.forEach(() => {

    const divSaidas = document.createElement('div')
    const divCarrossel = document.createElement('div')
    const img = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const span = document.createElement('span')
    const p2 = document.createElement('p')

    divCarrossel.classList.add('carrossel')
    divCarrossel.onmouseover = function () { minhaFuncao(this) }
    divCarrossel.onmouseout = function () { stopMove() }
    divSaidas.classList.add('card')
    let text = document.createTextNode(sai[indexSai].sizes)
    let text2 = document.createTextNode(sai[indexSai].name)

    img.classList.add('active')
    img.setAttribute('src', sai[indexSai].imgs[0].endereço)
    img2.setAttribute('src', sai[indexSai].imgs[1].endereço)
    img3.setAttribute('src', sai[indexSai].imgs[2].endereço)


    span.appendChild(text2)
    p2.appendChild(text)
    divSaidas.appendChild(span)
    divSaidas.appendChild(p2)
    divCarrossel.appendChild(img)
    divCarrossel.appendChild(img2)
    divCarrossel.appendChild(img3)
    divSaidas.appendChild(divCarrossel)
    divCategory.appendChild(divSaidas)

    indexSai++
})

//funções de seleção de botões
let btBiquini = document.querySelector('#biq'),
    btMaio = document.querySelector('#mai'),
    btSaida = document.querySelector('#sai');

btMaio.onclick = function () { moveMaio() }
let biquiniEl = document.querySelector('.Biquini')
console.log(biquiniEl);
    function moveMaio(){
    biquiniEl.style.display = 'none';
    }

window.addEventListener('load', start)


