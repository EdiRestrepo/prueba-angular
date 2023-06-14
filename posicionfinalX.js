function moveX(matrix) {
    let positionX = 0;
    let positionY = 0;
  
    for (let i = 0; i < matrix.length; i += 2) {
      const horizontalMove = matrix[i];
      const verticalMove = matrix[i + 1];
  
      // Mover en el eje horizontal
      positionX += horizontalMove;
      if (positionX < 0) positionX = 0;
      if (positionX > 3) positionX = 3;
  
      // Mover en el eje vertical
      positionY += verticalMove;
      if (positionY < 0) positionY = 0;
      if (positionY > 3) positionY = 3;
    }
  
    // Crear la matriz resultante con 'O' en todas las posiciones
    const result = Array.from(Array(4), () => Array(4).fill('O'));
  
    // Colocar la 'X' en la posición final
    result[positionY][positionX] = 'X';
  
    // Imprimir la matriz resultante
    for (let row of result) {
      console.log(row.join(''));
    }
  }
  
  const myArray = [1, 2, -1, 1, 0, 1, 2, -1, -1, -2];
  moveX(myArray);