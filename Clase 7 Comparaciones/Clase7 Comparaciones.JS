console.log ('ALCANCE FUNCIONES'); // Asi puedes asignarle a una variable varios valores, convertirla en un objeto

var x = 4, y = '4'

console.log (x === y) // Para comparar valores a ver si son iguales 

var sacha = {
nombre:'Sacha',
    }

var otrapersona = {
    nombre:'Sacha',
    }


console.log (sacha == otrapersona) //Da False porque busca el valor principal

console.log (sacha.nombre == otrapersona.nombre) // En cambio si le especificas que valor debe comparar si funciona

// Si quieres que dos variables tengan el mismo valor lo colocas 

var Mario = sacha

// Sin embargo si le cambias algun valor, se cambiara al de la variable original