function contarCaracteres(str) {
    let contagem = {}; 


    for (let char of str) {
        if (contagem[char]) {
            contagem[char]++; 
        } else {
            contagem[char] = 1;
        }
    }

    return contagem;
}


let texto = "banana";
let resultado = contarCaracteres(texto);
console.log(resultado);