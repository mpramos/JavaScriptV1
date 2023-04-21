//syntax
class Persona{
        constructor(nombre="Susana",apellido="Ramos",pais="Argentina"){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
        this.puntaje=0;
        this.skills=[] //['HTML','CSS']
        }
        getFullName(){
           const fullName= this.nombre + ' ' + this.apellido
           return fullName 
        }
    
        get obtenerPuntaje(){
            return this.puntaje
        }
        get obtenerSkills(){
            return this.skills
        }
        set modificarPuntaje(puntaje){
            this.puntaje+=puntaje
        }
        set modificarSkills(skill){ 
            this.skills.push(skill) 
        }
        getPersonaInfo(){
            let fullname=this.getFullName()
            let info=`${fullname} vive en ${this.pais}`
            return info
        }

}
const persona1= new Persona()
const persona2= new Persona('Gustavo','Iriarte','Argentina')
const persona3= new Persona('Cecilia','Gutierrez','Brasil')
console.log(persona1.getFullName());
console.log(persona2.getFullName());
console.log(persona3.getFullName());
console.log(persona1.puntaje);
console.log(persona1.skills);
console.log(persona1.obtenerPuntaje)

persona1.modificarPuntaje=1
persona1.modificarSkills='HTML'
persona1.modificarSkills='CSS'
persona1.modificarSkills='JAVASCRIPT'


console.log(persona1.puntaje)
console.log(persona2.puntaje)
console.log(persona1.skills)
console.log(persona2.skills)

console.log(persona1.getPersonaInfo())



