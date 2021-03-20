console.log ('ALCANCE FUNCIONES');

var gabriel = {
    nombre:'Gabriel',
    apellido:'Sanchez',
    edad: 28,
    peso: 70,
}

const META = gabriel.peso - 5
const comemucho = () => Math.random() < 0.25
const hace_ejercicio = () => Math.random() < 0.30
const aumentodepeso = (persona) => persona.peso += 2
const adelgazar = (persona) => persona.peso -= 2
var dias = 0


while (gabriel.peso > META) {    //Este codigo se ejecuta hasta que la condicion sea falsa

    if (comemucho()) {
     aumentodepeso (gabriel)
    }

    
    if (hace_ejercicio()) {
       adelgazar(gabriel)
    }

    var dias = dias + 1

}

console.log (`Pasaron ${dias} dias, hasta que ${gabriel.nombre} adelgazara 5KG`)