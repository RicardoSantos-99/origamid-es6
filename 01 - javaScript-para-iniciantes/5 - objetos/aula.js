// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dados = {
  nome: 'Ricardo',
  sobrenome: 'Santos',
  idade: 23,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`; 
} 

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 30;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const labrador = {
  cor: 'Preto',
  idade: 10,
  
  verHomem: function() {
    console.log("Aua Aua")
  },

  verCachorro() {
    console.log("Aua Aua AuA Aua AUa")
  }

}

