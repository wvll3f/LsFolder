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

let buttonSecond = document.querySelector("#mai");
let buttonFirst = document.querySelector("#biq");
let buttonThird = document.querySelector("#sai");

let categoria = document.querySelector(".cardCategory")

let coordenadas = categoria.getBoundingClientRect()
console.log(coordenadas) 

function moveEixoY() {

    console.log(coordenadas)
    
    categoria.scrollBy({
        top: 1100,
        behavior: 'smooth'
      });

}
window.addEventListener('load', start)


