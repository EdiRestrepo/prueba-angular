function moverX(myArray) {
    const areaSize = 4;
    const area = Array.from({ length: areaSize }, () =>
      Array.from({ length: areaSize }, () => "O")
    );
    let posX = 0;
    let posY = 0;
  
    for (let i = 0; i < myArray.length; i += 2) {
      const moveX = myArray[i];
      const moveY = myArray[i + 1];
  
      posX = Math.max(0, Math.min(areaSize - 1, posX + moveX));
      posY = Math.max(0, Math.min(areaSize - 1, posY + moveY));
      
      if(i == areaSize*2){
        area[posY][posX] = "X";
      }
      
      
      
    }
  
    for (let row = 0; row < areaSize; row++) {
      console.log(area[row].join(""));
    }
  }
  
  // Ejemplo de uso:
  const myArray = [1, 2, -1, 1, 0, 1, 2, -1, -1, -2];
  moverX(myArray);