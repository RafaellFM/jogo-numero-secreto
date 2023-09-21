function verificaOChute(fala){
    const numero = +fala;
    if (chuteParaNumero(numero)){
        elementoBox.innerHTML += `<div>Valor Inválido</div>`
        return
    }
    if(numeroForMaiorOuMenor(numero)){
        elementoBox.innerHTML += `<div>Valor incorreto, fora dos parametros</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente" class="play">Play</button>`
    }else if(numero < numeroSecreto){
            elementoBox.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
        }
        if(numero > numeroSecreto){
            elementoBox.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></i></div>`
        }
}

function chuteParaNumero(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", evento => {
    if(evento.target.id == "jogarNovamente"){
        window.location.reload();
    }
})

 