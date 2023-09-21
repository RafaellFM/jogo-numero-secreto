const menorValorT = document.querySelector('#menor-valor');
const maiorValorT = document.querySelector("#maior-valor");

const menorValor = 1;
const maiorValor = 20;

menorValorT.innerHTML = menorValor;
maiorValorT.innerHTML = maiorValor;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto)