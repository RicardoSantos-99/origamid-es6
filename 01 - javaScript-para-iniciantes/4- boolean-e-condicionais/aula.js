// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

const myAge = 23;
const familyAge = 30

if (myAge < familyAge) {
    console.log('É menor');
} else if (myAge === familyAge) {
    console.log('É igual');
} else {
    console.log('È maior');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy;
var idade = 28; ////Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207; 
var china = 1340;

if(brasil > china) {
    console.log(`Brasil tem mais habitantes`);
} else if(brasil < china) {
    console.log(`China tem mais habitantes`);
} else {
    console.log(`Brasil e China tem o mesmo tanto de habitantes`);
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // Cão
} else {
  console.log('Falso');
}