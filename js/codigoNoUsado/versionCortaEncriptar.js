 /*
        • Version corta -> se ejecuta 1° el replace mas a la izquierda.
        • Cmabia todas las 'e' x 'enter' -> 'i' x 'imes' -> 'a' x 'ai' -> 'o' x 'aber' -> 'u' x 'ufat' 
            ( 1° la 'e' xq no tiene otra vocal que pueda tener conflictros luego).
            ( 2° la 'i' xq solo tiene la e pero fue cambiada antes )
            ( 3° la 'a' xq la i fue cambiada antes )
            ( 4° la 'o' xq la e fue cambiada antes ) podria haberla puesto 3° tmb
            ( 5° la 'u' xq la a fue cambiada antes )
     */
function encriptarMensaje( texto ) {
    return texto.replace(/e/ig , "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
}    

function desencriptarMensaje( texto ) {
    return texto.replace(/enter/ig , "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u");
}