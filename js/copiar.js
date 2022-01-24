var btnCopy = document.querySelector("#btn-copy");
var textArea = document.querySelector("#result");

btnCopy.addEventListener( "click", () => {
    textArea.select();
    document.execCommand("copy");
});