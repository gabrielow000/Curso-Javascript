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
    altura: '1.86',
}

var Nicole = {
nombre: 'Nicole',
apellido: 'Perez',
altura: '1.86',
}


var Ailyn = {
nombre: 'Ailyn',
apellido: 'Perez',
altura: '1.86',
}

var personas = [Maria, Alana, Gabriel, Nicole, Ailyn]  //Asi se asigna varias variables a un grupo

for (var i = 0; i < personas.length; i++) {            
    console.log (`La altura de ${personas[i].nombre} es ${personas[i].altura}`)
}