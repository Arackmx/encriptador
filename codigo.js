// Declaracion de Variables

const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDencrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");

const printResult = document.querySelector("#result");

// Accion para el boton Encriptar

btnEncrypt.addEventListener("click", imprimeEncriptado);

function imprimeEncriptado(){
  let ocultaimg = document.querySelector("#ocultar-imagen");
  ocultaimg.style.display = "none";
  let ocultamsg = document.querySelector("#ocultar-msg");
  ocultamsg.style.display = "none";
  let ocultains = document.querySelector("#ocultar-ins");
  ocultains.style.display = "none";
  let muestraimg = document.querySelector("#muestra-imagen");
  muestraimg.style.display = "block";
  let muestrabtn = document.querySelector("#btn-copy");
  muestrabtn.style.display = "block";
  let resultado = document.querySelector("#entrada").value;
  const encriptado = resultado.replaceAll("e", "enter").replaceAll("i","imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u","ufat");
  printResult.innerHTML = encriptado;
  document.getElementById("entrada").value = "";
}

// Accion para el boton Desencriptar

btnDencrypt.addEventListener("click", imprimedesencriptado);

function imprimedesencriptado(){
  let ocultaimg = document.querySelector("#ocultar-imagen");
  ocultaimg.style.display = "none";
  let ocultamsg = document.querySelector("#ocultar-msg");
  ocultamsg.style.display = "none";
  let ocultains = document.querySelector("#ocultar-ins");
  ocultains.style.display = "none";
  let muestraimg = document.querySelector("#muestra-imagen");
  muestraimg.style.display = "block";
  let muestrabtn = document.querySelector("#btn-copy");
  muestrabtn.style.display = "block";
  let resultado = document.querySelector("#entrada").value;
  const desencriptado = resultado.replaceAll("enter", "e").replaceAll("imes","i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat","u");
  printResult.innerHTML = desencriptado;
  document.getElementById("entrada").value = "";
  desencriptado = document.querySelector("#ocultar-imagen");
  desencriptado.style.display = "none";
}

function Encriptar(){

}

function Desencriptar(){

}

// Accion para el boton Copiar

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