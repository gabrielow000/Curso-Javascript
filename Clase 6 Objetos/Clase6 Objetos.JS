console.log ('ALCANCE FUNCIONES'); // Asi puedes asignarle a una variable varios valores, convertirla en un objeto

var sacha = {
    nombre:'sacha',
    apellido:'Sanchez',
    edad:28,
}

var Dario = {
    nombre:'Dario',
    apellido:'Martin',
    edad:30,
}

function imprimirnombreenmayusculas({nombre}) {  // Y asi especificamos que del valor que ingrese, tomaras su valor nombre
    console.log (`Tu nombre es ${nombre.toUpperCase()}`)
}

function imprimirapellidoenmayusculas({apellido}) { 
    console.log (`Y su Apellido es ${apellido.toUpperCase()}`)

}

// Si son varios valores de la variable en la funcion, usaremos una general, y especificaremos luego a que valor se dirigira

function imprimirnombreyapellido(a) { 
    console.log (`Tu nombre es ${a.nombre.toUpperCase()} y tu apellido es ${a.apellido.toUpperCase()}`)
}

imprimirnombreenmayusculas(sacha)  

imprimirapellidoenmayusculas(sacha)

imprimirnombreenmayusculas(Dario)

imprimirapellidoenmayusculas(Dario)

imprimirnombreyapellido (sacha)