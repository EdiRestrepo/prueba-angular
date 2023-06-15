function matriz_x_o(){
    var posX = 1;
    var posY = 1;
    var minMatrix = 1;
    var areaMatriz = 4;
    var myArray =  [1,2,-1,10,0,1,2,-1,1,-2];
  
    for(var i=0;i<myArray.length;i+=2){
  
      posX = posX + myArray[i];
      posY = posY + myArray[i+1];
  
      if(posX < minMatrix){
        posX = minMatrix;
      }
      if(posX > areaMatriz) {
        posX = areaMatriz;
      }
      if(posY < minMatrix){
        posY = minMatrix;
      }
      if(posY > areaMatriz) {
        posY = areaMatriz;
      }
    }
  
    for (var i=1;i<=areaMatriz;i++){
        var linea = "";
        for (var j=1; j<=areaMatriz;j++){
          
          if(j == (posX) && i == (posY)){
              linea += "X ";
          }else {
              linea += "O ";
          }
  
        }
        console.log(linea);
    }
  }
  
  console.log(matriz_x_o()); 