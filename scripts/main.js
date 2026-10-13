"use strict";
// Obtenemos los elementos del formulario
const formulario = document.getElementById("formularioEdad");
const inputEdad = document.getElementById("edad");
const resultado = document.getElementById("resultado");
// Función para comprobar si una persona es mayor de edad
function comprobarEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad.";
    }
    else {
        return "Eres menor de edad.";
    }
}
// El envío del formulario
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const edad = Number(inputEdad.value);
    if (inputEdad.value.trim() === "") {
        resultado.textContent = "Error: debes introducir tu edad.";
    }
    else if (!Number.isInteger(edad) || edad < 0) {
        resultado.textContent =
            "Error: introduce una edad válida en números enteros.";
    }
    else {
        resultado.textContent = comprobarEdad(edad);
    }
});
