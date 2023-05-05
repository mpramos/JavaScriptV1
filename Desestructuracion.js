//!Desestructuracion
const numeros=[1,2,3]
const [a,b,c]= numeros
console.log(a);
console.log(b);
console.log(c);

const person={name:'Juan',age:30}

const {name,age}=person
console.log(name);
console.log(age);

//! Propagacion
//? arreglos
const a=[1,2,3]
const b=[4,5,6]
const c=[...a,...b]
console.log(c);
//? Objetos
const person={name:'Juan',age:30}
const details={country:'Bolivia',occupation:'Desarrollador'}
const profile={...person,...details}
console.log(profile);

//? Ejercicio 1 ----Antes
function printPerson(person) {
    const name= person.name
    const age= person.age || 30
    const city= person.city || 'La Paz'
    console.log(`Nombre : ${name} , Edad : ${age}, Ciudad: ${city}`);
}

const person={name:'Juan', age: 25}
printPerson(person)
//?--Despues
function printPerson({name,age=30,city='La Paz'}) {
    console.log(`Nombre : ${name} , Edad : ${age}, Ciudad: ${city}`);
}
const person={name:'Juan', age: 25}
printPerson({...person})
//? Ejercicio 2 ----Antes
const person={name:'Juan', age: 25}
const name=person.name
const age=person.age
console.log(`Nombre : ${name} , Edad : ${age}`);
//?--Despues
const person={name:'Juan', age: 25}
const {name,age}=person
console.log(`Nombre : ${name} , Edad : ${age}`);
//? Ejercicio 3---Antes
const a=[1,2,3]
const b=[4,5,6]
const c=[]

for (let i=0; i<a.length; i++) {
    c.push(a[i])
}
for (let i=0; i<b.length; i++) {
    c.push(b[i])
}
console.log(c);

//?--Despues
const a=[1,2,3]
const b=[4,5,6]
const c=[...a,...b]
console.log(c);


