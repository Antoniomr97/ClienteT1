// Obtenemos los elementos del formulario

const formulario: HTMLFormElement | null = document.getElementById(
  "formularioEdad",
) as HTMLFormElement;
const inputEdad: HTMLInputElement | null = document.getElementById(
  "edad",
) as HTMLInputElement;
const resultado: HTMLParagraphElement | null = document.getElementById(
  "resultado",
) as HTMLParagraphElement;

// Función para comprobar si una persona es mayor de edad

function comprobarEdad(edad: number): string {
  if (edad >= 18) {
    return "Eres mayor de edad.";
  } else {
    return "Eres menor de edad.";
  }
}

// El envío del formulario

formulario.addEventListener("submit", (evento: SubmitEvent): void => {
  evento.preventDefault();

  const edad: number = Number(inputEdad.value);

  if (inputEdad.value.trim() === "") {
    resultado.textContent = "Error: debes introducir tu edad.";
  } else if (!Number.isInteger(edad) || edad < 0) {
    resultado.textContent =
      "Error: introduce una edad válida en números enteros.";
  } else {
    resultado.textContent = comprobarEdad(edad);
  }
});
