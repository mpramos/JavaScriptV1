const persona={
    nombre:"maria",
    apellido:"ramos",
    pais:"Bolivia",
    hobbies:["leer","programar","diseñar"],
    estaCasada:false,
    obtenerNombreComleto: function (numero) {
        return `${this.nombre} ${this.apellido} ${numero}`
    },
    direccion:{
        calle:"Los Rosales",
        ciudad:"Cochabamba",
        pais:"Bolivia"
    }
}
console.log(persona.nombre);
console.log(persona.pais);
console.log(persona.obtenerNombreComleto(2))
//!Object.assign
const copiaPersona=Object.assign({},persona)
console.log(copiaPersona);
const keys= Object.keys(copiaPersona)
console.log(keys);
const direccion= Object.keys(copiaPersona.direccion)
console.log(direccion);
//!Objectvalues
const values=Object.values(copiaPersona)
console.log(values);
//Object.entries
const entries= Object.entries(copiaPersona)
console.log(entries)
// [][] matrices
// [] vector




