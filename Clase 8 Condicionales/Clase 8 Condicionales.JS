console.log ('ALCANCE FUNCIONES');

var sacha = {
    nombre:'sacha',
    apellido:'Sanchez',
    edad:28,
    ingeniero:false,
    cocinero:false,
    cantante:false,
    dj:false,
    piloto:true,
} 

var dario = {
    nombre:'Dario',
    edad:0
}

var a='',b=''

function imprimirprofesiones (persona) {

    if(persona.ingeniero){
        a+= 'Ingeniero' + ' '
    } else {
        b+= 'Ingeniero' + ' '
}
    
    if(persona.cantante===true){

        a+= 'Cantante' + ' '
    } else {
        b+= 'Cantante' + ' '
    }
    
    if(persona.dj===true){
        a+= 'Dj' + ' '
    } else {
        b+= 'Dj' + ' '
    }
    
    if(persona.piloto===true){
        a+= 'Piloto' + ' '
    } else {
        b+= 'Piloto' + ' '
    }

    console.log (`${persona.nombre} es: ${a}y no es ${b}`)
}

imprimirprofesiones (sacha)

function esmayordeedad(persona){ //Esto hace el calculo y el return dice si es true o false
    return persona.edad >=18
}

function Imprimirsiesmayordeedad(persona) { //Esto en base a la edad dice si es mayor o menor de 18
    if (esmayordeedad(persona)) {
        console.log (`${persona.nombre} es mayor de edad y tiene ${persona.edad}`)
    } else {
        console.log (`${persona.nombre} no es mayor de edad, tiene ${persona.edad}`)
    }
}

