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
  
  console.log(cuadradoAsteriscos()); 