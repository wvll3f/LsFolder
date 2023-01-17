import { biquinis, maios, saidas } from './assets/products.js';

//Variaveis utilizadas
const biquini = biquinis;
const maio = maios;
const saida = saidas;


//Slide inicial de Banners
let time = 3000,
    indexC = 0,
    currentImageIndex = 0,
    imagens = document.querySelectorAll("#slide img"),
    max = imagens.length,
    biqValue = false,
    maiValue = false,
    saiValue = false;

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
function stopMove(e) {
    clearInterval(intervalo)
}

//funções de render dos botões
function moveBiquini() {

    renderProducts(biquini)
    saiValue = false;
    maiValue = false;
    biqValue = true;

    let listaMaios = document.querySelectorAll('#cardmaio').forEach((e) => {
        e.remove();
    })
    let listaSaidas = document.querySelectorAll('#cardSaida de praia').forEach((e) => {
        e.remove();
    })


}
function moveMaio() {

    renderProducts(maio)

    saiValue = false;
    biqValue = false;
    maiValue = true;

    let listaBiquinis = document.querySelectorAll('#cardbiquini').forEach((e) => {
        e.remove();
    })
    let listaSaidas = document.querySelectorAll('#cardSaida de praia').forEach((e) => {
        e.remove();
    })

}
function moveSaida() {

    renderProducts(saida)
    biqValue = false;
    maiValue = false;
    saiValue = true;

    let listaBiquinis = document.querySelectorAll('#cardbiquini').forEach((e) => {
        e.remove();
    })
    let listaSaidas = document.querySelectorAll('#cardmaio').forEach((e) => {
        e.remove();
    })
}

//Atrelando evento onclick e função de render nos botões.
let btBiquini = document.querySelector('#biq')
btBiquini.addEventListener("click", function () { moveBiquini() });

let btMaio = document.querySelector('#mai')
btMaio.addEventListener("click", function () { moveMaio() });

let btSaida = document.querySelector('#sai')
btSaida.addEventListener("click", function () { moveSaida() });


const corpo = document.querySelector('body')
const modalBody = document.querySelector('.main')

function renderShop(product) {
    let selecionado = ''

    if (product.children[4].classList == 'biquini') {
         selecionado = biquini.find(e => e.id = product.id)
    } else if (product.children[4].classList == 'maio'){
         selecionado = maio.find(e => e.id = product.id)
    }else if (product.children[4].classList == 'Saida de praia'){
         selecionado = saida.find(e => e.id = product.id)
    }

    let h1 = document.querySelector('#nome').innerHTML = selecionado.name;
    let imgPrincipal = document.querySelector('#imgPrincipal').setAttribute('src', selecionado.imgs[0].endereço);
    let img1 = document.querySelector('#img-shop-one').setAttribute('src', selecionado.imgs[0].endereço);
    let img2 = document.querySelector('#img-shop-two').setAttribute('src', selecionado.imgs[0].endereço);
    let img3 = document.querySelector('#img-shop-three').setAttribute('src', selecionado.imgs[0].endereço);
    let modal = document.querySelector('.modal-div').style.display = 'flex'
    modalBody.style.display = 'none'

    let btClose = document.querySelector('.bt-close')
    btClose.addEventListener("click", function () { closeModal() });

    let tamanhos = document.querySelectorAll(".description h2").forEach(element => {
        element.addEventListener("click", function () { colorSel(this) });
    }); 
}

function colorSel(element){
    let tamanhos = document.querySelectorAll(".description h2").forEach( e =>{
        e.style.backgroundColor ='white'
        e.style.color ='#FF017E'
    })

    element.style.backgroundColor ='#FF017E'
    element.style.color ='white'
}

function closeModal() {
    let modal = document.querySelector('.modal-div').style.display = 'none'
    modalBody.style.display = 'flex'
}

//Selecionando div dos protudos
const listaProdutos = document.querySelector('.cardCategory')
//Função de controle de renderização de objetos
function renderProducts(product) {
    let categProducts = '';
    let index = '';

    product.forEach((product, id) => {
        id = product.id;
        categProducts += `
            <div class="card ${product.type}" id="${id}">
            <div class="carrossel" id="${product.type}${product.id.toString()}">
                <img class="active" src="${product.imgs[0].endereço}" alt="">
                <img src="${product.imgs[1].endereço}" alt="">
                <img src="${product.imgs[2].endereço}" alt="">
            </div>
            <span> ${product.name}</span>
            <p>Disponivel</p>
            <p> P M G</p>
            <div class="${product.type}"></div> 
        </div> 
            `
    })

    index++
    listaProdutos.innerHTML = categProducts;

    let divCard = document.querySelectorAll('.card')
    divCard.forEach((e) => {
        e.addEventListener("click", function () { renderShop(this) });
    })

    let divCarrossel = document.querySelectorAll('.carrossel')
    divCarrossel.forEach((e) => {
        e.onmouseover = function () { minhaFuncao(this) }
        e.onmouseout = function () { stopMove() }
    })
}
//renderizando o produto inicial
renderProducts(biquini)

//startando o slide de banners.
window.addEventListener('load', start)



