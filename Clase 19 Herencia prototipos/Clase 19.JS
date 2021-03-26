console.log ('ALCANCE FUNCIONES');

//Esto es un prototipo

var i = 0
const esalta = () => {return personas.altura > 1.80}

// Puedes crear herencias, de funciones, de constructores asi puede ejecutarlas aunque no las declares en el prototipo hijo

function heredade (prototipohijo,prototipopadre) { 
    var fn = function () {}
    fn.prototype = prototipopadre.prototype
    prototipohijo.prototype = new fn
    prototipohijo.prototype.constructor = prototipohijo
}

heredade (desarrollador,persona)


function persona(nombre,apellido,edad,altura) {    //Prototipo

this.nombre = nombre
this.apellido = apellido
this.edad = edad
this.altura = altura
}

function desarrollador (nombre, apellido) {   //Prototipo hijo
    this.nombre = nombre
    this.apellido = apellido
}

persona.prototype.saludar = function () {    //Acciones
    console.log (`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} de edad`)
}

persona.prototype.deciraltura = function () {   //Acciones
    if (this.altura >= 1.8) {console.log (`Es alta`)} 
else {{console.log (`Es baja`)}}
}

desarrollador.prototype.saludar = function () {    //Accion de prototipo hijo
    console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var sacha = new persona('Sacha','Sanchez','32','1.60')  
var erika = new persona('Erika','Pepito','22','1.50')
var Gabriel = new desarrollador('Gabriel','Rodriguez','42','1.80')
