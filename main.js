console.log("Hola Mundo");

// Creamos los elementos del DOM

const formNotaElement = document.getElementById("form-nota");
const notaElement = document.getElementById("nota");
const enviarButton = document.getElementById("enviar");

let resultadoElement = document.getElementById("resultado");

// Creamos funciones
function calcularNota(nota) {
  if (nota >= 0 && nota < 5) {
    resultadoElement.innerHTML = "Suspenso";
  } else if (nota >= 5 && nota < 6) {
    resultadoElement.innerHTML = "Aprobado";
  } else if (nota >= 6 && nota < 7) {
    resultadoElement.innerHTML = "Bien";
  } else if (nota >= 7 && nota < 9) {
    resultadoElement.innerHTML = "Notable";
  } else if (nota >= 9 && nota <= 10) {
    resultadoElement.innerHTML = "Sobresaliente";
  }
  // Aqui ya pongo else porque no quedan más opciones al haber limitado el input en el html a minimo 0 y maximo 10
  else {
    resultadoElement.innerHTML = "Rellene el campo por favor";
  }
}
// Capturamos los eventos del formulario

formNotaElement.addEventListener("submit", (event) => {
  event.preventDefault(); // Hacemos esto para que la página no recargue

  if (notaElement.value === "") {
    resultadoElement.innerHTML = "Rellene el campo por favor";
    return;
  } else {
    calcularNota(notaElement.value);
  }
});
