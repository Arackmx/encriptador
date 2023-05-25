// Declaracion de Variables

const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDencrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");
const printResult = document.querySelector("#result");




// Accion para el boton Encriptar

btnEncrypt.addEventListener("click", encriptar);

function encriptar(){
  let ocultaImg = document.querySelector("#ocultar-imagen");
  ocultaImg.style.display = "none";
  let ocultaMsg = document.querySelector("#ocultar-msg");
  ocultaMsg.style.display = "none";
  let ocultaIns = document.querySelector("#ocultar-ins");
  ocultaIns.style.display = "none";
  let muestraImg = document.querySelector("#muestra-imagen");
  muestraImg.style.display = "block";
  let muestraBtn = document.querySelector("#btn-copy");
  muestraBtn.style.display = "block";
  
  let llave = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
  
  let encriptado = document.querySelector("#entrada").value.toLowerCase();
    
  for (let i = 0; i < llave.length; i++) {
    if (encriptado.includes(llave[i][0])){
      encriptado = encriptado.replaceAll(llave[i][0], llave[i][1])
    }
  }
  printResult.innerHTML = encriptado;
  document.getElementById("entrada").value = "";
}

// Accion para el boton Desencriptar

btnDencrypt.addEventListener("click", desencriptar);

function desencriptar(){
  let ocultaImg = document.querySelector("#ocultar-imagen");
  ocultaImg.style.display = "none";
  let ocultaMsg = document.querySelector("#ocultar-msg");
  ocultaMsg.style.display = "none";
  let ocultaIns = document.querySelector("#ocultar-ins");
  ocultaIns.style.display = "none";
  let muestraImg = document.querySelector("#muestra-imagen");
  muestraImg.style.display = "block";
  let muestraBtn = document.querySelector("#btn-copy");
  muestraBtn.style.display = "block";
  
  let llave = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
  
  let desencriptado = document.querySelector("#entrada").value.toLowerCase();
    
  for (let i = 0; i < llave.length; i++) {
    if (desencriptado.includes(llave[i][1])){
      desencriptado = desencriptado.replaceAll(llave[i][1], llave[i][0])
    }
  }
  
    printResult.innerHTML = desencriptado;
  document.getElementById("entrada").value = "";
  desencriptado = document.querySelector("#ocultar-imagen");
  desencriptado.style.display = "none";
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
  swal("Se ha copiado el texto encriptado", "", "success");
}

