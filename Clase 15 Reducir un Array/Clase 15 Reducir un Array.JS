console.log ('ALCANCE FUNCIONES');

var Gabriel = {
    nombre: 'gabriel',
    apellido: 'Perez',
    altura: '1.86',
    cantidaddelibros:25
    }
    
    var Maria = {
        nombre: 'Maria',
        apellido: 'Perez',
        altura: '1.86',
        cantidaddelibros:54
    }
    
    var Alana = {
        nombre: 'Alana',
        apellido: 'Perez',
        altura: '1.60',
        cantidaddelibros:34
    }
    
    var Nicole = {
    nombre: 'Nicole',
    apellido: 'Perez',
    altura: '1.86',
    cantidaddelibros:71
    }
    
    
    var Ailyn = {
    nombre: 'Ailyn',
    apellido: 'Perez',
    altura: '1.60',
    cantidaddelibros:76
    }
    
    var personas = [Maria, Alana, Gabriel, Nicole, Ailyn]  

    var cantidadtotaldelibros = 0

//for (i=0;i<personas.length;i++) {
//cantidadtotaldelibros += personas[i].cantidaddelibros
//}

//console.log (`La cantidad total de libros es ${cantidadtotaldelibros}`)

// Hay otra manera de cambiar un valor en todo el array que es con un reducer:

const reducer = (i, persona) => {
    return i + persona.cantidaddelibros
}

var cantidadtotaldelibros = personas.reduce(reducer, 0)  //Se coloca el nombre de la funcion y el valor 

//inicial del acumulador

console.log (`La cantidad total de libros es ${cantidadtotaldelibros}`)


