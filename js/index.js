// Captacion del input donde se escribira el message a encriptar/desencriptar
var message = document.querySelector( "#message" );
// Foco en la caja de text para comenzar a escribir el message directamente
message.focus();
// Captacion de cada letra ingresada y pasada a minusculas.
message.addEventListener( "input", () => {
    message.value = message.value.normalize("NFD").replace(/([\u0300-\u036f]|[^a-z!\s])/g, ''); // <-- Caracteres especiales no permitidos ( ninguno ) y cualquier cosa que no se 'minuscula' || '!' || " " 
});

/* Funcion que mostrara el message en el cuadro de text. 
   Luego de encriptar el message. 
   message : Es un elemento HTML completo del tipo input, en el que debo utilizar para hacer foco
   */
   function showMessage( messageToManipulate ){

    var outputMessage = document.querySelector( "#result" );
    outputMessage.value = messageToManipulate.value;
    message.value = "";
    message.focus();

}