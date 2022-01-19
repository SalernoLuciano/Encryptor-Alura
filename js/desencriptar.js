// Captacion del boton 'Desencriptar'
var btnDecrypt = document.querySelector( "#btn-decrypt" );

/* Accion que realiza el boton cuando lo clickeo */
btnDecrypt.addEventListener( "click", () => {
    result.value = decryptMessage( message.value );
    showMessage( result );
});

function decryptMessage( text ) {
    var messageCopy = "";

    for(var i = 0; i < text.length; i++){
        if( text.slice(i, i+2) == "ai" ){
            messageCopy += "a";
            i++;
        }else if( text.slice(i, i+5) == "enter" ){
            messageCopy += "e";
            i += 4;
        }else if(  text.slice(i, i+4) == "imes" ){
            messageCopy += "i";
            i += 3;
        }else if ( text.slice(i, i+4) == "ober"){
            messageCopy += "o";
            i += 3;
        }else if ( text.slice(i, i+4) == "ufat" ){
            messageCopy += "u";
            i += 3;
        }else {
            messageCopy += text[i];
        }
    }

    return messageCopy;
}

