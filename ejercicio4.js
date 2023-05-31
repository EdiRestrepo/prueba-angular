function findPathWithMinimumSum(n, myArray) {
  // Crear una matriz bidimensional a partir de la matriz unidimensional
  var matrix = [];
  var index = 0;
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      row.push(myArray[index]);
      index++;
    }
    matrix.push(row);
  }

  // Calcular la ruta con la menor suma
  var currentRow = 0;
  var currentColumn = 0;
  var path = [matrix[0][0]];

  while (currentColumn < n - 1) {
    var minValue = Infinity;
    var nextRow = currentRow;

    // Verificar la celda de arriba
    if (currentRow > 0 && matrix[currentRow - 1][currentColumn + 1] < minValue) {
      minValue = matrix[currentRow - 1][currentColumn + 1];
      nextRow = currentRow - 1;
    }

    // Verificar la celda actual
    if (matrix[currentRow][currentColumn + 1] < minValue) {
      minValue = matrix[currentRow][currentColumn + 1];
      nextRow = currentRow;
    }

    // Verificar la celda de abajo
    if (currentRow < n - 1 && matrix[currentRow + 1][currentColumn + 1] < minValue) {
      minValue = matrix[currentRow + 1][currentColumn + 1];
      nextRow = currentRow + 1;
    }

    // Actualizar la posición y agregar el valor al camino
    currentRow = nextRow;
    currentColumn++;
    path.push(matrix[currentRow][currentColumn]);
  }

  return path.join(' ');
}

// Variables de prueba
var n = 3;
var myArray = [1, 2, 9, 2, 5, 3, 5, 1, 5];

// Encontrar el camino con la menor suma
var result = findPathWithMinimumSum(n, myArray);
console.log(result);
