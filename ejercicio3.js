
function imprimirCuadradosConcentricos(n) {
    if (n === 1) {
      console.log("*******");
      console.log("*     *");
      console.log("* *** *");
      console.log("* * * *");
      console.log("* *** *");
      console.log("*     *");
      console.log("*******");
    } else if (n === 2) {
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
    } else if (n === 3) {
      console.log("*****************");
      console.log("*               *");
      console.log("* ************* *");
      console.log("* *           * *");
      console.log("* * ********* * *");
      console.log("* * *       * * *");
      console.log("* * * ***** * * *");
      console.log("* * * *   * * * *");
      console.log("* * * ***** * * *");
      console.log("* * *       * * *");
      console.log("* * ********* * *");
      console.log("* *           * *");
      console.log("* ************* *");
      console.log("*               *");
      console.log("*****************");
    } else if (n === 4) {
      console.log("*************************");
      console.log("*                       *");
      console.log("* ********************* *");
      console.log("* *                   * *");
      console.log("* * ***************** * *");
      console.log("* * *               * * *");
      console.log("* * * ************* * * *");
      console.log("* * * *           * * * *");
      console.log("* * * * ********* * * * *");
      console.log("* * * * *       * * * * *");
      console.log("* * * * * ***** * * * * *");
      console.log("* * * * * *   * * * * * *");
      console.log("* * * * * ***** * * * * *");
      console.log("* * * * *       * * * * *");
      console.log("* * * * ********* * * * *");
      console.log("* * * *           * * * *");
      console.log("* * * ************* * * *");
      console.log("* * *               * * *");
      console.log("* * ***************** * *");
      console.log("* *                   * *");
      console.log("* ********************* *");
      console.log("*                       *");
      console.log("*************************");
    } else {
      console.log("ERROR");
    }
  }
  
  // Ejemplo de uso:
  imprimirCuadradosConcentricos(1);
  // imprimirCuadradosConcentricos(2);
  // imprimirCuadradosConcentricos(3);
  // imprimirCuadradosConcentricos(4);
  
// function imprimirCuadradosConcentricos(n) {
//     if (n < 1 || n > 4) {
//       console.log("ERROR");
//       return;
//     }
  
//     const size = n * 4 - 1;
//     const area = Array.from({ length: size }, () => Array(size).fill(" "));
  
//     let start = 0;
//     let end = size - 1;
  
//     for (let i = 0; i < n; i++) {
//       for (let j = start; j <= end; j++) {
//         area[start][j] = "*";
//         area[end][j] = "*";
//         area[j][start] = "*";
//         area[j][end] = "*";
//       }
//       start++;
//       end--;
//     }
  
//     for (let row of area) {
//       console.log(row.join(""));
//     }
//   }
  
//   // Ejemplo de uso:
//   imprimirCuadradosConcentricos();