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

console.log(emojipedia)

const somenteNomes = emojipedia.map(function(names){
    return names.meaning.substring(0,50);
})

console.log(somenteNomes)



const textoSemBiceps = emojipedia.filter(function (removerBiceps){
    return removerBiceps.meaning.includes("biceps")
})

console.log(textoSemBiceps)
