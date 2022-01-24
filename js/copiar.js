var btnCopy = document.querySelector("#btn-copy");
var textArea = document.querySelector("#result");

btnCopy.addEventListener( "click", () => {
    textArea.disabled = false;
    textArea.select();
    document.execCommand("copy");
    textArea.disabled = true;
});