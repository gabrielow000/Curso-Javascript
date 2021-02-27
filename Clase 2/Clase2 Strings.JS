console.log ('STRINGS'); // Como hablarle a la consola //

var nombre  = 'Jeikel' , apellido = 'Sanchez' , edad = 28

// Asi se cambia el tipo de texto de una variable, ya sea minusculas o mayusculas//

var nombreenmayusculas = nombre.toUpperCase(), apellidoenminusculas = apellido.toLowerCase() 

console.log ('Tu nombre es' + ' ' + nombreenmayusculas + ' ' + apellidoenminusculas)

//Asi se puede llamar un elemento de una variable especificando su posicion//

var primeraletradenombre = nombre.charAt(0)

var cantidaddeletrasdelnombre = nombre.length // Asi sabes el numero de letras que tiene una palabra//

// Asi se suman variables //

var Nombrecompleto = nombre + ' ' + apellido; 

// Para hacer espacios entre variables y aqui puedes variar el codigo//

var Nombrecompleto = `${nombre.toUpperCase} ${apellido.toUpperCase()}`

// Para hacer especificar desde donde queremos que empiece a contar los elementos de un string//

var str = nombre.substr(1,2)


