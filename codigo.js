const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDencrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");

const printResult = document.querySelector("#result");

btnEncrypt.addEventListener("click", imprimeEncriptado);

function imprimeEncriptado(){
    let resultado = document.querySelector("#entrada").value;
    
    printResult.innerHTML = resultado;
    document.getElementById("entrada").value = "";
}

btnDencrypt.addEventListener("click", imprimedesencriptado);

function imprimedesencriptado(){
    let resultado = document.querySelector("#entrada").value;

    printResult.innerHTML = resultado;
    document.getElementById("entrada").value = "";
}

btnCopy.addEventListener("click", copiarResultado, false);

function copiarResultado() {
  var enlace = document.getElementById("result");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Copiado al portapapeles!");
}