const textoEl = document.getElementById("texto");
const encriptBtn = document.getElementById("encript-btn");
const desencriptBtn = document.getElementById("desencript-btn");
let textoResultado = document.getElementById("texto-resultado");
const copiarTexto = document.getElementById("copiar-texto");

let mensaje = " ";
let mensajeEncript = " ";
let mensajeDesencript = " ";

encriptBtn.addEventListener("click", function () {
  mensaje = textoEl.value.toLowerCase();
  console.log(mensaje);

  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] === "e") {
      mensajeEncript += "enter";
    } else if (mensaje[i] === "i") {
      mensajeEncript += "imes";
    } else if (mensaje[i] === "a") {
      mensajeEncript += "ai";
    } else if (mensaje[i] === "o") {
      mensajeEncript += "ober";
    } else if (mensaje[i] === "u") {
      mensajeEncript += "ufat";
    } else {
      mensajeEncript += mensaje[i];
    }
  }

  textoEl.value = mensajeEncript;
});

const clavesEncript = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
console.log(clavesEncript);

desencriptBtn.addEventListener("click", function () {
  console.log("Clicked");
  mensaje = textoEl.value; // Use textContent instead of value
  for (let i = 0; i < clavesEncript.length; i++) {
    if (mensaje.includes(clavesEncript[i][1])) {
      mensaje = mensaje.replaceAll(clavesEncript[i][1], clavesEncript[i][0]);
    }
    mensajeDesencript = mensaje;
    console.log(mensajeDesencript);
  }

  textoEl.value = mensajeDesencript;
});

copiarTexto.addEventListener("click", function () {
  let placeholder = textoEl.placeholder;
  navigator.clipboard.writeText(textoEl.value);
  alert(`El texto ${textoEl.value} fue copiado al clipboard`);
  textoEl.value = placeholder;
});
