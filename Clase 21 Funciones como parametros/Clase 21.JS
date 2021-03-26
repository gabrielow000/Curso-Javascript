console.log ('ALCANCE FUNCIONES');

var i = 0
const esalta = () => {return personas.altura > 1.80}

class persona {

    constructor (nombre,apellido,edad,altura) { 

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura

        }

        saludar (fn) {
            console.log (`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} de edad`)
            if (fn) {
            fn(this.nombre, this.apellido, false)
            }
        }
        
        deciraltura () {  
            if (this.altura >= 1.8) {console.log (`Es alta`)} 
        else {{console.log (`Es baja`)}}
        }
}

class desarrollador extends persona {

    constructor(nombre,apellido,altura,profesion) { 
    super (nombre,apellido,altura)
    this.profesion = profesion
        }


        saludar(fn) {
            console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
            if (fn) {
                fn (this.nombre, this.apellido, true)
                }
        }  
        
        decirprofesion() {
            console.log (`Soy especialista en ${this.profesion}`)
        }    
        
}

// Asi podemos usar las funciones para que se activen con otras, se hace la segunda funcion que queremos que 
// Se active, y luego a la primera le colocamos un valor y una condicional fn que se active solo cuando alguien
//Coloque un parametro

function respondersaludo (nombre,apellido,esdev) {
    console.log (`Buen dia ${nombre} ${apellido}`)
if (esdev) {  //Aqui esto solo se activara si es desarrollador
    console.log (`Ah mira, no sabia que eras desarrollador`)
}
}

var sacha = new persona('Sacha','Sanchez','32','1.60')  
var erika = new persona('Erika','Pepito','22','1.50')
var Gabriel = new desarrollador ('Gabriel','Rodriguez','1.80','FrontEnd & BackEnd')
