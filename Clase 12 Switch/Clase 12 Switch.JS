console.log ('ALCANCE FUNCIONES');

var signo = prompt ('Cual es tu signo?') //Para hacer una pregunta al usuario, lo guardamos como variable

console.log (signo)

// Si quieres comparar muchos valores de una sola variable
// Entonces usa Switch

switch (signo) {
    
case 'acuario' : console.log ('Vas a ser muy sexy')
break

case 'leo' : console.log ('Vas a ser muy feo') 
break

case 'piscis' : console.log ('Vas a ser muy alto') 
break

case 'capricornio' : console.log ('Vas a ser muy bajo') 
break

case 'cancer' : console.log ('Vas a ser muy canceroso') 
break 

default: console.log ('No es un signo zodiacal valido')//Esta pasa si ninguna se cumple
break
}