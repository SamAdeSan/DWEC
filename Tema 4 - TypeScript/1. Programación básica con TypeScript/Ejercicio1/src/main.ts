let suma: number = 0;
let mayores100: number = 0;

for (let i: number = 1; i <= 5; i++) {
    const entrada: string | null = prompt(`Introduce el número ${i}:`);
    const numero: number = parseInt(entrada || "0");

    if (!isNaN(numero)) {
        suma += numero;
        if (numero >= 100) {
            mayores100++;
        }
    }
}
alert(`La suma de los números es: ${suma}`);
alert(`Cantidad de números mayores de 100: ${mayores100}`);