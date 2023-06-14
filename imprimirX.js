let n = 6;
let letra = "X";
let espacio = "_";
let linea = "";


for (let fila = 0; fila < n; fila++) {
    linea ="";
    for (let columna = 0; columna < n; columna++) {
        if(fila == columna || fila == n-columna-1){
            linea += letra;
        }else{
            linea += espacio;
        }
       
        
    }
    console.log(linea)  

    
}