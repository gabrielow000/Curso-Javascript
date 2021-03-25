console.log ('ALCANCE FUNCIONES');

var Gabriel = {
    nombre: 'gabriel',
    apellido: 'Perez',
    altura: '1.86',
    }
    
    var Maria = {
        nombre: 'Maria',
        apellido: 'Perez',
        altura: '1.86',
    }
    
    var Alana = {
        nombre: 'Alana',
        apellido: 'Perez',
        altura: '1.60',
    }
    
    var Nicole = {
    nombre: 'Nicole',
    apellido: 'Perez',
    altura: '1.86',
    }
    
    
    var Ailyn = {
    nombre: 'Ailyn',
    apellido: 'Perez',
    altura: '1.60',
    }
    
    var personas = [Maria, Alana, Gabriel, Nicole, Ailyn]  

const esAlta = (personas) => personas.altura > 1.8
const esBaja = (personas) => personas.altura < 1.8 

//metodo para filtrar arreglos (recibe un array como parametro)

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

for (var i = 0; i < personas.length; i++) {            
    console.log (`${personasAltas[i].nombre} es alta`)
}

for (var i = 0; i < personas.length; i++) {            
    console.log (`${personasBajas[i].nombre} es baja`)
}