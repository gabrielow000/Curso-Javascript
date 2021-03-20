console.log ('ALCANCE FUNCIONES');

var gabriel = {
    nombre:'Gabriel',
    apellido:'Sanchez',
    edad: 28,
    peso: 70,
}

var contador = 0
const estalloviendo = () => Math.random() < 0.30;

do {                                     // Asi puedes hacer que el While se haga al menos una vezs
    contador = contador + 1
    function estalloviendo () {}
} while (!estalloviendo())

console.log (`Gabriel fue ${contador} veces hasta que llovio`)