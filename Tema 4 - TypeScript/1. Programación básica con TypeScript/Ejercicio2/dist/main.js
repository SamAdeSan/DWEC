let iva = 0;
let importeIVA = 0;
let total = 0;
const entrada = prompt("Introduce el precio del artículo:");
let articulo = parseFloat(entrada || "0");
function calcularIVA() {
    if (articulo < 100) {
        iva = 1.21;
    }
    else if (articulo >= 100 && articulo <= 1000) {
        iva = 1.1;
    }
    else if (articulo > 1000) {
        iva = 1.04;
    }
    importeIVA = articulo * (iva - 1);
    total = articulo + importeIVA;
}
function mostrarResultado() {
    if (isNaN(articulo) || articulo <= 0) {
        alert("Por favor, introduce un número válido.");
    }
    else {
        alert("Precio sin IVA: " + articulo.toFixed(2) + "€" +
            "\nImporte IVA: " + importeIVA.toFixed(2) + "€" +
            "\nPrecio con IVA (Total): " + total.toFixed(2) + "€");
    }
}
if (!isNaN(articulo)) {
    calcularIVA();
    mostrarResultado();
}
else {
    alert("Entrada no válida.");
}
export {};
//# sourceMappingURL=main.js.map