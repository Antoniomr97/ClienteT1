// Apartado 6 Funciones

// FUNCIONES

/**
 * Calcula el factorial de un número entero no negativo.
 *
 * @param {number} num - Número cuyo factorial se quiere calcular.
 * @returns {number} El factorial del número.
 * @throws {Error} Si el número no es un entero no negativo.
 */
function factorial(num) {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("El número debe ser un entero no negativo, centrese");
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

/**
 * Calcula una base elevada a un exponente.
 *
 * @param {number} base - Número que se quiere elevar.
 * @param {number} exponente - Exponente entero no negativo.
 * @returns {number} El resultado de la potencia.
 * @throws {Error} Si la base no es un número finito o el exponente no es un entero no negativo.
 */
function potencia(base, exponente) {
  if (!Number.isFinite(base)) {
    throw new Error("La base debe ser un número. No invente");
  }

  if (!Number.isInteger(exponente) || exponente < 0) {
    throw new Error("El exponente debe ser un entero no negativo");
  }

  let resultado = 1;

  for (let i = 1; i <= exponente; i++) {
    resultado *= base;
  }

  return resultado;
}

/**
 * Busca el mayor valor de un array de números.
 *
 * @param {number[]} array - Array de números que se quiere analizar.
 * @param {number} longitud - Número de elementos que se van a recorrer.
 * @returns {number} El mayor valor encontrado.
 * @throws {Error} Si el array está vacío, la longitud no es válida
 * o alguno de los elementos recorridos no es un número finito.
 */
function mayor(array, longitud) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("El array debe contener al menos un número");
  }

  if (!Number.isInteger(longitud) || longitud < 1 || longitud > array.length) {
    throw new Error(
      "La longitud debe ser un numero que no supere el tamaño del array",
    );
  }

  for (let i = 0; i < longitud; i++) {
    if (!Number.isFinite(array[i])) {
      throw new Error("Todos los elementos deben ser números números");
    }
  }

  let maximo = array[0];

  for (let i = 1; i < longitud; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }

  return maximo;
}

/**
 * Calcula la media aritmética de los elementos de un array.
 *
 * @param {number[]} arrayMedia - Array de números que se quiere analizar.
 * @param {number} longitudMedia - Número de elementos que se van a utilizar.
 * @returns {number} La media aritmética de los elementos.
 * @throws {Error} Si el array está vacío, la longitud no es válida
 * o alguno de los elementos utilizados no es un número finito.
 */
function media(arrayMedia, longitudMedia) {
  if (!Array.isArray(arrayMedia) || arrayMedia.length === 0) {
    throw new Error("El array debe contener al menos un número");
  }

  if (
    !Number.isInteger(longitudMedia) ||
    longitudMedia < 1 ||
    longitudMedia > arrayMedia.length
  ) {
    throw new Error(
      "La longitud debe ser un número que no supere el tamaño del array",
    );
  }

  let total = 0;

  for (let i = 0; i < longitudMedia; i++) {
    if (!Number.isFinite(arrayMedia[i])) {
      throw new Error("Todos los elementos utilizados deben ser números");
    }

    total += arrayMedia[i];
  }

  return total / longitudMedia;
}

/**
 * Comprueba si una palabra es un palíndromo.
 *
 * @param {string} palindromo - Texto que se quiere comprobar.
 * @returns {string} Mensaje que indica si el texto es un palíndromo.
 * @throws {Error} Si el argumento no es una cadena de texto.
 */
function esPalindromo(palindromo) {
  if (typeof palindromo !== "string") {
    throw new Error("Un palindromo es texto no numeros, por favor solo texto");
  }

  let normal = palindromo;
  let invertido = "";

  for (let i = normal.length - 1; i >= 0; i--) {
    invertido += normal[i];
  }

  if (normal === invertido) {
    return "¡Felicidades!Es un palindromo";
  } else {
    return "¡Lo sentimos!No es un palindromo";
  }
}

/**
 * Comprueba el formato y la letra de un DNI español.
 *
 * @param {string} dni - DNI que se quiere comprobar.
 * @returns {string} Mensaje que indica si el DNI es correcto o el motivo del error.
 * @throws {Error} Si el argumento no es una cadena de texto.
 */
function esDNI(dni) {
  if (typeof dni !== "string") {
    throw new Error("El DNI debe ser una cadena de texto");
  }

  dni = dni.toUpperCase();

  if (!/^\d{8}[A-Z]$/.test(dni)) {
    return "Formato de DNI incorrecto (8 numeros y una letra)";
  }

  let numero = Number(dni.slice(0, 8));
  let letraDNI = dni[8];
  let letras = "TRWAGMYFPDXBNJZSQVHLCK";
  let resto = numero % 23;
  let letraCalculada = letras[resto];

  if (letraDNI === letraCalculada) {
    return "DNI correcto";
  } else {
    return "DNI incorrecto (por la letra)";
  }
}

// Obtención de datos

// Esta parte ha sido problematica porque no sabia que node no tiene prompt, asi que he tenido que usarlo en navegador para comprobarlo, funciones.html para probarlo.

let num = -1;

while (!Number.isInteger(num) || num < 0) {
  alert("Introduce un entero no negativo.");
  num = Number(
    prompt(
      "Introduce un número entero no negativo para calcular su factorial:",
    ),
  );
}

console.log(`El factorial de ${num} es:`);
console.log(factorial(num));

// Pedimos los datos para calcular la potencia y mostramos el resultado.
let base = NaN;

while (!Number.isFinite(base)) {
  base = Number(prompt("Introduce la base de la potencia: "));

  if (!Number.isFinite(base)) {
    alert("La base debe ser un número válido.");
  }
}

let exponente = -1;

while (!Number.isInteger(exponente) || exponente < 0) {
  exponente = Number(prompt("Introduce el exponente (entero no negativo): "));

  if (!Number.isInteger(exponente) || exponente < 0) {
    alert("El exponente debe ser un entero no negativo.");
  }
}

console.log(`La potencia de ${base} elevado a ${exponente} es:`);
console.log(potencia(base, exponente));

// Pedimos al usuario que introduzca los números para el array y calculamos el mayor valor.
let array = [];
let longitud = 0;

while (!Number.isInteger(longitud) || longitud < 1) {
  longitud = Number(
    prompt("¿Qué tamaño tendrá el array? Introduce un entero positivo:"),
  );

  if (!Number.isInteger(longitud) || longitud < 1) {
    alert("El tamaño debe ser un entero positivo.");
  }
}

for (let i = 0; i < longitud; i++) {
  let numero = NaN;

  while (!Number.isFinite(numero)) {
    numero = Number(prompt(`Introduce el número ${i + 1}:`));

    if (!Number.isFinite(numero)) {
      alert("Debes introducir un número válido.");
    }
  }

  array.push(numero);
}

console.log(`El array introducido es: [${array.join(", ")}]`);
console.log(`El mayor valor del array es: ${mayor(array, longitud)}`);

// Aprovechamos los prompts de antes
let arrayMedia = [];
let longitudMedia = 0;

while (!Number.isInteger(longitudMedia) || longitudMedia < 1) {
  longitudMedia = Number(
    prompt("¿Qué tamaño tendrá el array? Introduce un entero positivo:"),
  );

  if (!Number.isInteger(longitudMedia) || longitudMedia < 1) {
    alert("El tamaño debe ser un entero positivo.");
  }
}

for (let i = 0; i < longitudMedia; i++) {
  let numero = NaN;

  while (!Number.isFinite(numero)) {
    numero = Number(prompt(`Introduce el número ${i + 1}:`));

    if (!Number.isFinite(numero)) {
      alert("Debes introducir un número válido.");
    }
  }

  arrayMedia.push(numero);
}

console.log(`El array introducido es: [${arrayMedia.join(", ")}]`);
console.log(`La media del array es: ${media(arrayMedia, longitudMedia)}`);

// Obtenemos la palabra para el palindromo

let palindromo = "";

while (typeof palindromo !== "string" || palindromo.trim() === "") {
  palindromo = prompt("Dame una palabra y te diré si es un palíndromo:");

  if (palindromo === null) {
    alert("Has cancelado la introducción de la palabra.");
    break;
  }

  if (palindromo.trim() === "") {
    alert("Debes introducir una palabra.");
  }
}

if (palindromo !== null && palindromo.trim() !== "") {
  console.log(`${palindromo} es un palíndromo??`);
  console.log(esPalindromo(palindromo));
}

// Obtenemos el dni

let dni = "";

while (typeof dni !== "string" || dni.trim() === "") {
  dni = prompt("Dame un DNI y te diré si es correcto:");

  if (dni === null) {
    alert("Has cancelado la introducción del DNI.");
    break;
  }

  if (dni.trim() === "") {
    alert("Debes introducir un DNI.");
  }
}

if (dni !== null && dni.trim() !== "") {
  console.log(`¿Es el DNI ${dni} correcto?`);
  console.log(esDNI(dni));
}
