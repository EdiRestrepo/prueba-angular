var letra = 'X';
var espacio = '_';
var n = 5;
var linea = "";

if(n == 0){
    console.log("ERROR");
}else{
    for (let fila = 0; fila < n; fila++) {
        linea="";
        for (let columna = 0; columna < n; columna++) {
            if(fila == columna || fila == n -columna-1){
                linea += letra;
            }else{
                linea += espacio;
            }
            
        }
        console.log(linea); 
    }

}







// function imprimirLetraX(n) {
//     for (let fila = 0; fila < n; fila++) {
//       let linea = "";
//       for (let columna = 0; columna < n; columna++) {
//         if (fila === columna || fila === n - columna - 1) {
//           linea += "X";
//         } else {
//           linea += "_";
//         }
//       }
//       console.log(linea);
//     }
//   }
  
//   // Ejemplo de uso:
//   imprimirLetraX(5);
//   console.log("--------------------");
//   imprimirLetraX(6);
  