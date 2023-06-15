
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