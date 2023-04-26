let patron='love'
let bandera='gi'
let regExpr=new RegExp(patron,bandera) 
console.log(regExpr)
let regEx=/love/gi
console.log(regEx)
// Metodos del objeto RegExp
// test(): 
const str='love JavaScript love '
const patron1=/l/
const result=patron1.test(str)
console.log(result);
const str1= 'love JavaScript love '
const patron2=/love/
const resultado= str1.match(patron2)
console.log(resultado)
const str2= ' JavaScript  '
const patron3=/love/
const resultado2= str2.search(patron3)
console.log(resultado2);





