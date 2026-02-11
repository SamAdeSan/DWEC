"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let suma = 0;
let mayores100 = 0;
for (let i = 1; i <= 5; i++) {
    const entrada = prompt(`Introduce el número ${i}:`);
    const numero = parseInt(entrada || "0");
    if (!isNaN(numero)) {
        suma += numero;
        if (numero > 100) {
            mayores100++;
        }
    }
}
alert(`La suma de los números es: ${suma}`);
alert(`Cantidad de números mayores de 100: ${mayores100}`);
//# sourceMappingURL=main.js.map