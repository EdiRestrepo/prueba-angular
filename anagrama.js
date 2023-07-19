let word1 = 'sobresalir'
let word2 = "bresosalia";
let newW2 = Array.from(word2);

function anagrama(word1, word2) {
    let w1 = word1.split('');
    let w2 = word2.split('');
    let longitud = 0;

    for (let i = 0; i < w1.length; i++) {
        if (w1.includes(newW2[i])) {

            newW2.splice(i,1)
            longitud++
        }
    }

    if (w1.length === w2.length && longitud === w1.length) {
       return true 
    } 
    return false
}

console.log(anagrama(word1, word2));