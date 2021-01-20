const $FORM = document.querySelector('#carta-a-santa');
const SUBMITBUTTON = document.querySelector('#enviar-carta');



const nombre = $FORM.nombre.value; // Se puede agarrar de un FORM por el nombre del INPUT.
const ciudad = $FORM.ciudad.value;
const comportamiento = $FORM.comportamiento.value;
const descripcionRegalo = $FORM["descripcion-regalo"].value; // Cuando hay un guion o algo se tiene que pasar entre corchetes.


function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener mas de un caracter' //COMPARAS EL RETURN CON LA PRUEBA
    }else if(nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracters'
    }else{
        return ''
    }

}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Elegí una ciudad'
    }else{
        return ''
    }
}

function validarRegalo(regalo){
    if(regalo.length === 0){
        return 'Este campo debe tener mas de un caracter'
    } else if(regalo.length >= 250){
        return 'Este campo debe tener menos de 250 caracteres'
    } else {
        return ''
    }
}



function validarFormulario(event){

    $FORM.preventDefault()
    
}



validarNombre(nombre)
validarRegalo(descripcionRegalo)
validarCiudad(ciudad)



