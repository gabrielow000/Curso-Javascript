console.log ('ALCANCE FUNCIONES');

var gabriel = {
    nombre:'Gabriel',
    apellido:'Sanchez',
    edad: 28,
    peso: 70,
}

console.log (`Al inicio del mes ${gabriel.nombre} pesa ${gabriel.peso}`)

for (var i = 1; i <= 30; i++) {

gabriel.peso = gabriel.peso - 1

}

console.log (`Al final del mes ${gabriel.nombre} pesa ${gabriel.peso}`)