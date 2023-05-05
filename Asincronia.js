/*! "En un lenguaje de programación asíncrono como JavaScript, las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.

Esta característica del lenguaje existe para mejorar el rendimiento del mismo, porque nos permite aprovechar al máximo las capacidades del equipo en el que se está ejecutando nuestro código.

Por lo general las tareas que se esperan sean más tardadas, o que necesiten esperar respuesta de algún otro elemento del sistema, son candidatas a ser delegadas a este proceso de espera y ejecución.

JavaScript es un lenguaje de ejecución sobre un solo hilo, esto significa que sólo puede ejecutar una tarea a la vez. Cuando una operación tarda demasiado o está esperando la respuesta de otra, decimos que bloquea las demás instrucciones, precisamente porque JavaScript no puede ejecutar dos a la vez.

Para solucionar esto, JavaScript introduce el event loop, o ciclo de eventos. El event loop se compone de dos componentes principales, una cola de mensajes y un ciclo que se encuentra iterando esta cola de mensajes. La programación asíncrona en JavaScript funciona empujando ciertas operaciones a esta cola de actividades, para que no bloqueen la ejecución de código mientras terminan, el trabajo del event loop es estar preguntando las operaciones de la cola de actividades si ya han finalizado, y cuando lo hacen, reanuda la ejecución de dicha operación, la recupera por así decirlo.

Para que todo esto funcione, necesitas una forma de delegar ciertas operaciones a esta cola, y una forma de saber cuándo estas operaciones han terminado, para hacerlo JavaScript introdujo inicialmente el concepto de callbacks, y después el de promesas, finalmente a la sintaxis se introdujeron las funciones asíncronas, todos estos conceptos están diseñados para que esta comunicación entre el event loop, la cola de actividades y tu código, suceda." */


// Pendiente : estado iniciañ , ni cumplida , ni rechazada
//cumplida: la operacion se completo con exito
//rechazada: operacion falló

//!Callback
const hacerAlgo=(callback)=>{
    setTimeout(() => {
        const skills=['HTML','CSS','JAVASCRIPT']
        // callback('esta tarea no funciona bien',skills)
        callback(false,skills)
    }, 2000);
}

function callback(err,resultado) {
    if (err) {
      return  console.log(err);
    }
    return console.log(resultado);
}

hacerAlgo(callback)

//Promesa
//sintaxis
const promesa= new Promise((resolve,reject)=>{
    resolve('la promesa fue ejecutada exitosamente')
    reject('falló')
})



const miPromesa= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (false) {
            resolve('promesa resuelta')
        } else{
                reject('promesa rechazada')
            }
        },2000)
    })
    miPromesa
    .then((respuesta)=>{console.log(respuesta)})
    .catch((error)=>{console.log(error);})
    
    const promiseSkills= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // const skills=['HTML','CSS','JAVASCRIPT']
            const skills=[]
            if (skills.length>0) {
                resolve(skills)
            } else{
                reject('no tienes ningun skill')
            }
        },2000)
    })
    promiseSkills
    .then((resultado)=>{console.log(resultado)})
    .catch((err)=>{console.log(err)})
    // promiseSkills.then().catch()

    const miPromesaRandom= new Promise((resolve,reject)=>{
        const randomNum = Math.floor(Math.random()*10) //0 9
            if (randomNum % 2==0) {
                resolve('La promesa ha sido resuelta ' + randomNum)
            }else{
                reject('La promesa ha sido rechazada ' + randomNum)
            }
    })
    miPromesaRandom
    .then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)})

function cuadrado(numero) {
    return numero*numero
}
//FUNCIONES 
    (async function () {
        const valor1= await miPromesaRandom()
        console.log(valor1);
      const valor= await cuadrado(2)
      console.log(valor);
    }) ()
//PROMESAS
const url='https://restcountries.com/v3.1/all'
fetch(url)
.then(respuesta=>respuesta.json())
.then(data=>{console.log(data)})
.catch(error=>{console.error(error)})
// FUNCIONES ASINCRONAS
async function verPaises() {
    let respuesta= await fetch('https://restcountries.com/v3.1/all')
    let data = await respuesta.json()
    console.log(data);
}
verPaises()

//! REPASANDO MAPS
//? Ejercicio 1
const numeros=[1,2,3,4,5]
const cuadradoNumeros= numeros.map(numero=>numero*numero)
console.log(cuadradoNumeros);
//? Ejercicio 2
const user=[
    {name: 'Martha', age: 25},
    {name: 'Juana', age: 30},
    {name: 'Bob', age: 35},
]
const userNames= user.map(user=> user.name)
console.log(userNames);
//? Ejercicio 3

const cadenas=['Hola','Mundo','en ','Javascript']
// [{string: 'Hola',length:4},{string: 'Mundo',length:5},...]
const cadenaObjeto= cadenas.map(string=> ({cadena:string,tamaño:string.length}))
console.log(cadenaObjeto);

//! Repasando For Each
const colores=['rojo','verde','azul']
colores.forEach(color => console.log(color))

const users=[
    {name: 'Martha', age: 25},
    {name: 'Juana', age: 30},
    {name: 'Bob', age: 35},
]
console.log('antes',users);
users.forEach(user=>{
    if(user.name==='Juana'){
        user.age=31
    }
})
console.log('despues',users);

//SORT
const frutas=['naranja','manzana','pera','platano']
const frutasOrdenadas= frutas.sort()
console.log(frutasOrdenadas);
 const numbers=[5,1,3,2,4]
 const numbersOrdenados= numbers.sort((a,b)=> a-b)
//  const numbersOrdenados= numbers.sort((a,b)=> b-a)
 console.log(numbersOrdenados);
const users=[
    {name: 'Martha', age: 25},
    {name: 'Juana', age: 30},
    {name: 'Bob', age: 35},
]
const sortedUsers= users.sort((a,b)=> b.age-a.age)
console.log(sortedUsers);

const fetchData= async ()=>{
    try {
        const respuesta= await fetch('https://restcountries.com/v3.1/all')
        const respuestaJSON= await respuesta.json()
        console.log(respuestaJSON);
    } catch (error) {
        console.error(err);
    }
}
fetchData()



const url='https://rickandmortyapi.com/api/character'

const getCharacterNames=()=>{
    return new Promise((resolve,reject)=>{
        fetch(url)
            .then(respuesta=>respuesta.json())
            .then(data=>{
                const names=data.results.map(character=>character.name)
                resolve(names)
            })
            .catch(error=>reject(error))
    })
}
getCharacterNames()
.then(names=>console.log(names))
.catch(error=>console.log(error))

async function miFuncion() {
    await new Promise(resolve=>setTimeout(resolve,2000))
    console.log("La espera de 2 segundos ha terminado");
}
miFuncion()











    
    
    