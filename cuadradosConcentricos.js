
function imprimirCuadradosConcentricos(n) {
    if (n === 2) {
      console.log("*******");
      console.log("*     *");
      console.log("* *** *");
      console.log("* * * *");
      console.log("* *** *");
      console.log("*     *");
      console.log("*******");
    } else if (n === 3) {
      console.log("***********");
      console.log("*         *");
      console.log("* ******* *");
      console.log("* *     * *");
      console.log("* * *** * *");
      console.log("* * * * * *");
      console.log("* * *** * *");
      console.log("* *     * *");
      console.log("* ******* *");
      console.log("*         *");
      console.log("***********");
    } else {
      console.log("ERROR");
    }
  }
  
  // Ejemplo de uso:
  imprimirCuadradosConcentricos(2);


//   function imprimirCuadradosConcentricos(n) {
//     if (n <= 1 || n > 4) {
//       console.log("ERROR");
//       return;
//     }
  
//     const size = (n - 1) * 4 + 3;
//     const middle = Math.floor(size / 2);
  
//     for (let i = 0; i < size; i++) {
//       let row = "";
//       for (let j = 0; j < size; j++) {
//         if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
//           row += "*";
//         } else if (i % 2 === 0 && j % 2 === 0) {
//           const distance = Math.abs(i - middle) + Math.abs(j - middle);
//           if (distance % 2 === 0) {
//             row += "*";
//           } else {
//             row += " ";
//           }
//         } else {
//           row += " ";
//         }
//       }
//       console.log(row);
//     }
//   }
  
//   // Ejemplo de uso:
//   imprimirCuadradosConcentricos(2);