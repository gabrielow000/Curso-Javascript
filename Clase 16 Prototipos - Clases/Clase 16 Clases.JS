console.log ('ALCANCE FUNCIONES');

//Esto es un prototipo

var i = 0
const esalta = () => {return personas.altura > 1.80}

function persona(nombre,apellido,edad,altura) {

var i = i + 1
this.nombre = nombre
this.apellido = apellido
this.edad = edad
this.altura = altura
}

//Asi podemos crear un sub prototipo que se pueda llamar al colocar el nombre de la variable, la funcion y ()

persona.prototype.saludar = function() {
    console.log (`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} de edad`)
}

persona.prototype.deciraltura = function() {if (this.altura >= 1.8) {console.log (`Es alta`)} 
else {{console.log (`Es baja`)}}
}

//Y esta es la variable, a la que se le coloca New, y se le asignan los valores a las variables que ya se 
//crearon antes

var sacha = new persona('Sacha','Sanchez','32','1.60')
var erika = new persona('Erika','Pepito','22','1.50')
var Gabriel = new persona('Gabriel','Rodriguez','42','1.80')
