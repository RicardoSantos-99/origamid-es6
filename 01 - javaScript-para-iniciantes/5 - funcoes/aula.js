// Crie uma função para verificar se um valor é Truthy

const isTruthy = (val) => {
  return !!val;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

const quadradoPeri = (lado) => {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

const nomeCompleto = (nome, sobreNome) => {
  return `${nome} ${sobreNome}`
}

// Crie uma função que verifica se um número é par
const isEven = (num) => {
  return num % 2 === 0 ? true : false;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const type = (props) => {
  return typeof props;
}
 
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
const botao = document.querySelector('#botao');
botao.addEventListener('click', function() {
  console.log("Ricardo")
});

// Corrija o erro abaixo

var totalPaises = 193; // Corrigido

function precisoVisitar(paisesVisitados) {
  // var totalPaises = 193;
	  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {

  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
