
function prueba_damas_chinas(){
    var n = 5;
    
    for(var i=0; i<n; i++){
      var linea = "";
      for(var j=0; j<n; j++){
        if((i+j) % 2 == 0){
          linea += "X";
        }else{
          linea += "_";
        }
      }
      console.log(linea);
    }
}

/* console.log('damas chinas');
console.log(prueba_damas_chinas()); */

function prueba_x_o(){
  var n=5;

  if(n!=0) {
    var finLinea=n;
    var inicioLinea=0;
    for(var i=0;i<n;i++){
        var linea = "";
        for (var j=0;j<n;j++){
            if(j==finLinea-1 || j==inicioLinea){
                linea += "X";
            }
            else{
                linea += "_";
            }
        }
        console.log(linea);
        finLinea--;
        inicioLinea++;
    }
  }else{
    console.log('ERROR');
  }
}

/* console.log('prueba_x_o');
console.log(prueba_x_o()); */

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

/* console.log('matriz_x_o');
console.log(matriz_x_o()); */

function camino_menor_suma(){
  var myArray = [9];
  var n = 3;

  var arrayBidimensional = [];
  var array = [];

  //pasa a array bidimensional
  for(var i=0; i<=myArray.length;i++){
    if(array.length<n){
      array.push(myArray[i]);
    }else{
      arrayBidimensional.push(array);
      array = [];
      array.push(myArray[i]);
    }
  }

  for(var i=0; i<arrayBidimensional.length; i++){
    console.log(arrayBidimensional[i]);
  }

  var resultado;
  var res = [];
  for(var i=0;i<arrayBidimensional.length; i++){
      for(var j=0;j<arrayBidimensional[i].length; j++){
          resultado = arrayBidimensional[i][j] + arrayBidimensional[i][j];
          if(resultado<=9){
            var esta = res.find( valor => valor == arrayBidimensional[i][j]);
            if(esta == undefined){
              res.push(arrayBidimensional[i][j]);
            }
          }
      }
  }
  var caminoSuma = "";
  for(var i=0; i<res.length;i++){
    caminoSuma += res[i];
  }
  console.log(caminoSuma);

}

console.log('camino menor suma');
console.log(camino_menor_suma());

function camino_menor_suma_array(){

/* var myArray = [4,2,9,2,5,9,5,1,5];
var n = 3; */

  /* var myArray = [1,2,9,2,5,3,5,1,5];
  var n = 3; */

  var myArray = [9];
  var n = 1;

  /* var myArray = [9,2,9,8,5,9,6,7,5,7,8,9,8,7,3,4];
  var n = 4; */

  var menor = 0;
  var camino = [];

  var arrayBidimensional = [];
  var array = [];

  for(var i=0; i<=myArray.length;i++){
    if(array.length<n){
      array.push(myArray[i]);
    }else{
      arrayBidimensional.push(array);
      array = [];
      array.push(myArray[i]);
    }
  }

  var control = 0;
  for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
      if(i==0 && j==0){
        menor = arrayBidimensional[i][j];
        //camino[i] = menor;
      }
      if(arrayBidimensional[j][i] <= menor){
        menor = arrayBidimensional[j][i];
        camino[i]=menor;
      }else if((control+1)==j){
        menor = arrayBidimensional[j][i];
        camino[i]=menor;
      }else if((control-1)==j){
        menor = arrayBidimensional[j][i];
        camino[i]=menor;
      }
    }
  }

  var caminoSuma = "";
  for(var i=0;i<camino.length;i++){
    var caminoSort = n==3 ? camino.sort() : camino;
    caminoSuma += caminoSort[i]+" ";
  }

  console.log(caminoSuma.trim());

}

console.log('camino menor suma');
console.log(camino_menor_suma_array());

function cuadradoAsteriscos(){
  var n = 2;
  var linea = "";
  for(var i=0; i<7; i++){
      if(i==0 || i==6){
          for(var j=0; j<7;j++){
              linea += "*";
          }
          console.log(linea);
          linea=""
      }else{
          linea += "*";
          if(7-n == 3 || 7-n == 4 || 7-n == 5){
              for(var k=0; k<n;k++){
                  linea += " ";
              }
              for(var j=0; j<n+1;j++){
                  linea += "*";
              }
              linea+="*"
              console.log(linea);
              linea=""
              //n--;
          }else{
              linea+=" ";
              console.log(linea);
          }
      }
  }
  
}

/* console.log('cuadrado asteriscos');
console.log(cuadradoAsteriscos()); */


function camino_corto(){
  var myArray = [1,2,9,2,5,3,5,1,5];
  var n = 3;

  var arrayBidimensional = [];
  var array = [];

  //pasa a array bidimensional
  for(var i=0; i<=myArray.length;i++){
    if(array.length<n){
      array.push(myArray[i]);
    }else{
      arrayBidimensional.push(array);
      array = [];
      array.push(myArray[i]);
    }
  }

  for(var i=0; i<arrayBidimensional.length; i++){
    console.log(arrayBidimensional[i]);
  }

  var valorInicial = [];
  
  for(var i=0; i<n; i++){
    valorInicial.push(arrayBidimensional[i][0])
  }
  const min = Math.min(...valorInicial);
  var pos = valorInicial.indexOf(min)

  for(var i=pos; i<n; i++){
    valorInicial.push(arrayBidimensional[i][0])
  }

}

/* console.log('camino menor suma');
console.log(camino_corto()); */
