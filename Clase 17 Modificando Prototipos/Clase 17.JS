console.log ('ALCANCE FUNCIONES');

//Esto es un prototipo

var i = 0
var sacha = new persona('Sacha','Sanchez','32','1.60')
var erika = new persona('Erika','Pepito','22','1.50')
var Gabriel = new persona('Gabriel','Rodriguez','42','1.80')
const esalta = () => {return personas.altura > 1.80}

function persona(nombre,apellido,edad,altura) {    //Prototipo

var i = i + 1
this.nombre = nombre
this.apellido = apellido
this.edad = edad
this.altura = altura
}

persona.prototype.saludar = function() {  //Acciones
    console.log (`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} de edad`)
}

persona.prototype.deciraltura = function() {   //Acciones
    if (this.altura >= 1.8) {console.log (`Es alta`)} 
else {{console.log (`Es baja`)}}
}

var sacha = new persona('Sacha','Sanchez','32','1.60')  
var erika = new persona('Erika','Pepito','22','1.50')
var Gabriel = new persona('Gabriel','Rodriguez','42','1.80')
