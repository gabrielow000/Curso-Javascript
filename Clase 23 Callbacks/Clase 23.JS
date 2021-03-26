console.log ('ALCANCE FUNCIONES');

//Asi podemos hacer un callback

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

$.get(`${API_URL}${PEOPLE_URL.replace(':id',4)}`,{ crossDomain: true }, 
function (persona) {
console.log (`${persona.name} pesa ${persona.mass} kilos`)
})

//En la funcion se especifica el dato que se recibira y que se hara con el, cross domain permite salir 
//Y buscar la informacion, y $.get() dice a donde buscara la informacion

function starwars (nro) {
    $.get(`${API_URL}${PEOPLE_URL.replace(':id',nro)}`,{ crossDomain: true }, 
    function (persona) {
    console.log (`${persona.name} pesa ${persona.mass} kilos`)

    })
}

for (i=0, i < 54, i++) {

}

