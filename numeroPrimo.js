function isPrimo(numero) {
    if (numero <= 1) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


let numero = 7;
if (isPrimo(numero)) {
    console.log(numero + " é primo.");
} else {
    console.log(numero + " não é primo.");
}
