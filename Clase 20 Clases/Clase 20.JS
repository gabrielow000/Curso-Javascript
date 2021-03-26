console.log ('ALCANCE FUNCIONES');

//Esto es un prototipo

var i = 0
const esalta = () => {return personas.altura > 1.80}

// Esta es la mejor estructura para usar prototipos, y es usarlo como clases de la siguiente manera:

class persona {

    constructor (nombre,apellido,edad,altura) { 

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura

        }

        saludar () {
            console.log (`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} de edad`)
        }
        
        deciraltura () {  
            if (this.altura >= 1.8) {console.log (`Es alta`)} 
        else {{console.log (`Es baja`)}}
        }
}

// Para hacer clases hijas se coloca extends y luego la clase que va a heredar, asi:

class desarrollador extends persona {

    constructor(nombre,apellido,altura,profesion) { 
    super (nombre,apellido,altura)
    this.profesion = profesion
        }


        saludar() {
            console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        }  
        
        decirprofesion() {
            console.log (`Soy especialista en ${this.profesion}`)
        }    
        
}

var sacha = new persona('Sacha','Sanchez','32','1.60')  
var erika = new persona('Erika','Pepito','22','1.50')
var Gabriel = new desarrollador ('Gabriel','Rodriguez','1.80','FrontEnd & BackEnd')

