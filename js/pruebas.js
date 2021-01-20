console.assert(validarNombre('') === 'Este campo debe tener mas de un caracter', 
    'validarNombre() no valido con un string vacio');

console.assert(validarNombre('dsljkasdlasdljlaksdalsljkdaldsalsldjkalsjkaaksldjklasd') === 'Este campo debe tener menos de 50 caracters',
    'validarNombre() no valido +50 caracteres');


 