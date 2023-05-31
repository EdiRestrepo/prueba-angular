// // Arreglo predefinido
// var myArray = [1, 3, 2, 0, 7, 8, 1, 3,2, 0,0, 6, 7, 1];

// // Variable para almacenar el bloque actual
// var currentBlock = "";

// // Recorrer el arreglo
// for (var i = 0; i < myArray.length; i++) {
//   var num = myArray[i];
  
//   // Si el número es 0, imprimir el bloque actual y reiniciar la variable
//   if (num === 0) {
//     if (currentBlock === "") {
//       console.log("X");
//     } else {
//       console.log(currentBlock);
//       currentBlock = "";
//     }
//   } 
//   // Si el número no es 0, agregarlo al bloque actual
//   else {
//     currentBlock += num;
//   }
// }

// // Imprimir el último bloque si no se ha impreso antes (al final del arreglo)
// if (currentBlock !== "") {
//   console.log(currentBlock);
// }

// Arreglo predefinido
// var myArray = [1,3,2,0,7,8,1,3,0,6,7,1];

// // Variable para almacenar el bloque actual
// var currentBlock = [];

// // Recorrer el arreglo
// for (var i = 0; i < myArray.length; i++) {
//   var num = myArray[i];

//   // Si el número es 0, ordenar el bloque actual, imprimirlo y reiniciar la variable
//   if (num === 0) {
//     if (currentBlock.length === 0) {
//       console.log("X");
//     } else {
//       currentBlock.sort(function(a, b) {
//         return a - b;
//       });
//       console.log(currentBlock.join(''));
//       currentBlock = [];
//     }
//   }
//   // Si el número no es 0, agregarlo al bloque actual
//   else {
//     currentBlock.push(num);
//   }
// }

// // Ordenar y imprimir el último bloque si no se ha impreso antes (al final del arreglo)
// if (currentBlock.length > 0) {
//   currentBlock.sort(function(a, b) {
//     return a - b;
//   });
//   console.log(currentBlock.join(''));
// }



// var myArray = [1,3,2,0,7,8,1,3,0,6,7,1];

// // Variable para almacenar el bloque actual
// var currentBlock = [];

// // Recorrer el arreglo
// for (var i = 0; i < myArray.length; i++) {
//   var num = myArray[i];

//   // Si el número es 0, ordenar el bloque actual, imprimirlo y reiniciar la variable
//   if (num === 0) {
//     if (currentBlock.length === 0) {
//       process.stdout.write("X");
//     } else {
//       currentBlock.sort(function(a, b) {
//         return a - b;
//       });
//       process.stdout.write(" " + currentBlock.join(''));
//       currentBlock = [];
//     }
//   }
//   // Si el número no es 0, agregarlo al bloque actual
//   else {
//     currentBlock.push(num);
//   }
// }

// // Ordenar y imprimir el último bloque si no se ha impreso antes (al final del arreglo)
// if (currentBlock.length > 0) {
//   currentBlock.sort(function(a, b) {
//     return a - b;
//   });
//   process.stdout.write(" " + currentBlock.join(''));
// }

var myArray = [1, 3, 2, 0, 7, 8, 1, 3, 0, 6, 7, 1];
var currentBlock = [];
var firstBlock = true;
var output = '';

for (var i = 0; i < myArray.length; i++) {
  var num = myArray[i];

  if (num === 0) {
    if (currentBlock.length === 0) {
      process.stdout.write("X");
    } else {
      currentBlock.sort(function(a, b) {
        return a - b;
      });
      
      if (firstBlock) {
        output += currentBlock.join('');
        firstBlock = false;
      } else {
        output += " " + currentBlock.join('');
      }
      currentBlock = [];
    }
  } else {
    currentBlock.push(num);
  }
}

if (currentBlock.length > 0) {
  currentBlock.sort(function(a, b) {
    return a - b;
  });
  if (firstBlock) {
    output += currentBlock.join('');
    firstBlock = false;
  } else {
    output += " " + currentBlock.join('');
  }
}

process.stdout.write(output);


