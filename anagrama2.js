function esAnagrama(palabra1, palabra2) {
  // Convierte las palabras a minúsculas y elimina los espacios en blanco
  palabra1 = palabra1.toLowerCase().replace(/\s/g, '');
  palabra2 = palabra2.toLowerCase().replace(/\s/g, '');

  // Verifica si tienen la misma cantidad de caracteres
  if (palabra1.length !== palabra2.length) {
    return false;
  }

  // Crea un objeto para contar la frecuencia de cada letra en la primera palabra
  const contadorLetras = {};

  // Incrementa el contador para cada letra en la primera palabra
  for (let i = 0; i < palabra1.length; i++) {
    const letra = palabra1[i];
      contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
      console.log(contadorLetras[letra]);
      console.log(contadorLetras)
  }

  // Decrementa el contador para cada letra en la segunda palabra
  for (let i = 0; i < palabra2.length; i++) {
    const letra = palabra2[i];
    if (!contadorLetras[letra]) {
      // Si una letra no está presente en la primera palabra, no son anagramas
      return false;
    }
      contadorLetras[letra]--;
      console.log(contadorLetras[letra]--);
  }

  // Verifica que todos los contadores sean cero
  for (let letra in contadorLetras) {
    if (contadorLetras[letra] !== 0) {
      // Si algún contador no es cero, no son anagramas
      return false;
    }
  }

  // Si todas las comprobaciones anteriores pasaron, las palabras son anagramas
  return true;
}

// Ejemplo de uso
const palabra1 = "sobresalir";
const palabra2 = "bresosalia";
const sonAnagramas = esAnagrama(palabra1, palabra2);
console.log(sonAnagramas); // true
