// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const copasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(let i = 0; i < copasBrasil.length; i++) {
    console.log(`O brasil ganhou a copa de ${copasBrasil[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
    console.log(frutas)
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    
    if (frutas[i] ===  'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const lastFruit = frutas[frutas.length -1];

console.log(lastFruit);