function reservar(){
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
    
    }

    
/* if (biqValue == true && maiValue == false && saiValue == false) {
        maiValue = false
        saiValue = false
        let listaMaios = document.querySelectorAll('.maio').forEach((e) => {
            e.remove();
        })
        let listaSaidas = document.querySelectorAll('.Saida de praia').forEach((e) => {
            e.remove();
        })
        renderProducts(biquini)

} else if (maiValue == true && biqValue == false && saiValue == false) {
        biqValue = false
        saiValue = false

        let listaBiquinis = document.querySelectorAll('.biquini').forEach((e) => {
            e.remove();
        })
        let listaSaidas = document.querySelectorAll('.Saida de praia').forEach((e) => {
            e.remove();
        })
        renderProducts(maio)

} else if (saiValue == true && biqValue == false && maiValue == false) {
        maiValue = false
        biqValue = false
        let listaBiquinis = document.querySelectorAll('.biquini').forEach((e) => {
            e.remove();
        })
        let listaSaidas = document.querySelectorAll('.maio').forEach((e) => {
            e.remove();
        })
        renderProducts(saida)
}
*/