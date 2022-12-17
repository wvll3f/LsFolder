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

const divCategory = document.querySelector('.cardCategory')
var indexNow = 0;

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
    divCarrossel.onmouseover = function () { minhaFuncao(this) }
    divCarrossel.onmouseout = function () { stopMove() }
    divBiquinis.classList.add('card')
    let text = document.createTextNode( biq[indexNow].sizes)
    let text2 = document.createTextNode( biq[indexNow].name)

    img.classList.add('active')
    img.setAttribute('src', biq[indexNow].imgs[0].endereço)
    img2.setAttribute('src', biq[indexNow].imgs[1].endereço)
    img3.setAttribute('src', biq[indexNow].imgs[2].endereço)


    span.appendChild(text2)
    p2.appendChild(text)
    divBiquinis.appendChild(span)
    divBiquinis.appendChild(p2)
    divCarrossel.appendChild(img)
    divCarrossel.appendChild(img2)
    divCarrossel.appendChild(img3)
    divBiquinis.appendChild(divCarrossel)
    divCategory.appendChild(divBiquinis)

    indexNow++
})

//Criação da categoria de Maios
mai.forEach(() => {

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
    let text = document.createTextNode( mai[indexNow].sizes)
    let text2 = document.createTextNode( mai[indexNow].name)

    img.classList.add('active')
    img.setAttribute('src', mai[indexNow].imgs[0].endereço)
    img2.setAttribute('src', mai[indexNow].imgs[1].endereço)
    img3.setAttribute('src', mai[indexNow].imgs[2].endereço)


    span.appendChild(text2)
    p2.appendChild(text)
    divMaios.appendChild(span)
    divMaios.appendChild(p2)
    divCarrossel.appendChild(img)
    divCarrossel.appendChild(img2)
    divCarrossel.appendChild(img3)
    divMaios.appendChild(divCarrossel)
    divCategory.appendChild(divMaios)

    indexNow++
})

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
    let text = document.createTextNode( sai[indexNow].sizes)
    let text2 = document.createTextNode( sai[indexNow].name)

    img.classList.add('active')
    img.setAttribute('src', sai[indexNow].imgs[0].endereço)
    img2.setAttribute('src', sai[indexNow].imgs[1].endereço)
    img3.setAttribute('src', sai[indexNow].imgs[2].endereço)


    span.appendChild(text2)
    p2.appendChild(text)
    divSaidas.appendChild(span)
    divSaidas.appendChild(p2)
    divCarrossel.appendChild(img)
    divCarrossel.appendChild(img2)
    divCarrossel.appendChild(img3)
    divSaidas.appendChild(divCarrossel)
    divCategory.appendChild(divSaidas)

    indexNow++
})

window.addEventListener('load', start)


