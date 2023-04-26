
///🎆 Funciones Puras

//Funciones de orden superior 
function operacionFuncional(operation,a,b) {
    return operation(a,b)
}
function suma(a,b) {
    return a+b
}
function resta(a,b) {
    return a-b
}
console.log(operacionFuncional(suma,2,3));
console.log(operacionFuncional(resta,2,3));
//Metodos de Arrays
const cuadrado2=numeros.map(numero=> numero *numero )
console.log(cuadrado2);
const numerosPares=numeros.filter(numero=> numero%2===0)
const numerosPares1=numeros.filter(function (numero) { //2
    return  numero%2===0  //[2,4,6,8]
})
console.log(numerosPares);
console.log(cuadrado);
const numeros=[1,2,3,4,5,6,7,8,9,10,56,100,80] //
const cuadrado=numeros.map(function (numero) {
    return numero*numero   
})
const sumaNumeros=numeros.reduce(function (sum,numero) {
    return sum+numero
},0)
console.log(sumaNumeros);









