function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

const numeroDeEntrada = 10; 

const resultadoFibonacci = fibonacci(numeroDeEntrada);

const elementoResultado = document.getElementById("resultado");

elementoResultado.textContent = `El número de Fibonacci en la posición ${numeroDeEntrada} es ${resultadoFibonacci}.`;