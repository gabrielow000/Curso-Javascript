console.log ('ALCANCE FUNCIONES');

var Gabriel = {
    nombre: 'gabriel',
    apellido: 'Perez',
    altura: '1.86',
    }
    
    var Maria = {
        nombre: 'Maria',
        apellido: 'Perez',
        altura: '1.86',
    }
    
    var Alana = {
        nombre: 'Alana',
        apellido: 'Perez',
        altura: '1.60',
    }
    
    var Nicole = {
    nombre: 'Nicole',
    apellido: 'Perez',
    altura: '1.86',
    }
    
    
    var Ailyn = {
    nombre: 'Ailyn',
    apellido: 'Perez',
    altura: '1.60',
    }
    
    var personas = [Maria, Alana, Gabriel, Nicole, Ailyn]  

//}   Asi puedes hacer la funcion pero editarias los valores del array inicial

//const pasaralturaACms = (personas) => {
//    persona.altura *= 100
//   return personas


// En cambio de esta manera no, ya que creas un sub-objeto

//const pasaralturaACms = (persona) => {
//    return {
//        ...persona,
//       altura: persona.altura * 100
//    }
//}

//Si quieres retornar solamente un objeto puedes hacerlo colocando parentesis a las llaves, y colocando 
//solo la operacionq que vas a devolver

const pasaralturaACms = (persona) => ({
    ...persona,
    altura: persona.altura * 100
})

//Los parentesis significan return

var personasCms = personas.map (pasaralturaACms)   //Puedes editar los valores de un array con la funcion map
// O mejor dicho crear uno nuevo en base a uno anterior, colocando solo el signo de accion no el igual

for (var i = 0; i < personas.length; i++) {            
console.log (`La altura de ${personas[i].nombre} es ${personasCms[i].altura}`)
}