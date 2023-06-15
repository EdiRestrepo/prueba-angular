
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

console.log(prueba_damas_chinas()); 