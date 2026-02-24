//var numbers = [3, 56, 2, 48, 5];




//Map -Create a new array by doing something with each item in an array.

/*function Triple(x){
    return x * 3;
}
const novoNumero = numbers.map(Triple)
console.log(novoNumero);
*/

//Filter - Create a new array by keeping the items that return true.

/*function removerImpares(x){
    return x % 2 === 0;
}
const novosNumeros = numbers.filter(removerImpares)
console.log(novosNumeros);
*/
// OR

/*const novoNumero = numbers.filter(function(num){
    return num > 48;
});
console.log(novoNumero);
*/

//Reduce - Accumulate a value by doing something to each item in an array.

/*var total = numbers.reduce(function(acumulador,numeroSeguinte){
    console.log("O número acumulador é: " + acumulador);
    console.log("O número seguinte é: " + numeroSeguinte);
    return acumulador + numeroSeguinte;
})
console.log("O total é: "+ total);
*/

//Find - find the first item that matches from an array.

/*var novoNumero = numbers.find(function(num){
    return num > 10;
})
console.log(novoNumero);
*/

//FindIndex - find the index of the first item that matches.

/*var novoNumero =numbers.findIndex(function(num){
    return num > 3 
;})
console.log("A lista de números é:" + numbers)
console.log(novoNumero)
*/

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import emojipedia from "./emojipedia"




var numerosSorteados = [2,4,13,25,36,66,78,79];

console.log("Os números sorteados são: " + numerosSorteados)


function numeroPares(x){
    return x % 2 === 0;
}

function multiplicador(y){
    return y * 3;
}



console.log(numerosSorteados.filter(numeroPares))
console.log(numerosSorteados.map(multiplicador))


function reduzindo(acumulador,numeroSeguinte){
    console.log("O número Acumulador é: " + acumulador)
    console.log("O número Seguinte é: " + numeroSeguinte)
    return acumulador + numeroSeguinte
};

var novoNumero = numerosSorteados.reduce(reduzindo)
console.log(novoNumero)


function numerosPequenos(x){
    return x < 10
};

var numerosBaixos = numerosSorteados.findIndex(numerosPequenos)+1
console.log("O primeiro número abaixo de 10 está na posição: " + numerosBaixos +"º")