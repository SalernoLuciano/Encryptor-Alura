// Captacion del boton 'Encriptar'
var btnEncrypt = document.querySelector( "#btn-encrypt" );

/* Accion que realiza el boton cuando lo clickeo */
btnEncrypt.addEventListener( "click", () => {
        result.value = encryptMessage( message.value );
        showMessage( result );
});

function encryptMessage( text ) {  
    var messageCopy = "";

    for(var i = 0; i < text.length; i++){
        if( text[i] == "a" ){
            messageCopy += "ai";
        }else if( text[i] == "e" ){
            messageCopy += "enter";
        }else if( text[i] == "i" ){
            messageCopy += "imes";
        }else if ( text[i] == "o" ){
            messageCopy += "ober";
        }else if ( text[i] == "u" ){
            messageCopy += "ufat";
        }else {
            messageCopy += text[i];
        }
    }
    
    return messageCopy;
}