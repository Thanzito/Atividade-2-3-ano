function gerarFibonacci(x) {
    let fibonacci = [0, 1]; 

   
    while (true) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        
        if (proximoNumero > x) {
            break;
        }

        fibonacci.push(proximoNumero);
    }

    return fibonacci;
}


let limite = 10;
let resultado = gerarFibonacci(limite);
console.log("Sequência de Fibonacci até " + limite + ": " + resultado);