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
