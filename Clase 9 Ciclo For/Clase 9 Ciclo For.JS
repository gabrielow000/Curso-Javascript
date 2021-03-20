console.log ('ALCANCE FUNCIONES');

var gabriel = {
    nombre:'Gabriel',
    apellido:'Sanchez',
    edad: 28,
    peso: 70,
}

const aumentardepeso = persona => persona.peso += 0.2 //Constante de accion, esta vez aumentar de peso

const adelgazar = persona => persona.peso -= 0.2

var random = Math.random() //Variable random, si colocas que es < a 0.20, activara una probabilidad de activarse el 20% de las veces

console.log (`Al inicio del mes ${gabriel.nombre} pesa ${gabriel.peso}`)

for (var i = 1; i < 30; i++) {

    if (random < 0.25) {aumentardepeso (gabriel)} else {adelgazar(gabriel)}

}

console.log (`Al final del mes ${gabriel.nombre} pesa ${gabriel.peso.toFixed(1)}`);

function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);}  //Para un numero aleatorio