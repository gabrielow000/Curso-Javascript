console.log ('ALCANCE FUNCIONES');

var nombre = 'Gabriel'

function imprimirnombreenmayusculas(nombre) {    //Asi se usan las funciones sin alterar una variable
    nombre = nombre.toUpperCase()
    console.log (`Tu nombre es ${nombre}`)
}

imprimirnombreenmayusculas(nombre)  //Solo se le asigna un valor a la variable interna con una externa, sin tener que declararla

console.log ('Mi nombre sin mayusculas es ' + nombre)