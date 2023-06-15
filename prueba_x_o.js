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
  
  console.log(prueba_x_o()); 