let tasaIVA: number = 0;
let importeIVA: number = 0;
let total: number = 0;

function calcularIVA(precio: number): void {
    if (precio < 100) {
        tasaIVA = 0.21;
    } else if (precio >= 100 && precio <= 1000) {
        tasaIVA = 0.10;
    } else {
        tasaIVA = 0.04;
    }

    importeIVA = precio * tasaIVA;
    total = precio + importeIVA;
}

function mostrarResultado(precioOriginal: number): void {
    alert(
        "RESUMEN DE COMPRA\n" +
        "---------------------------\n" +
        "Precio base: " + precioOriginal.toFixed(2) + "€\n" +
        "IVA aplicable: " + (tasaIVA * 100) + "%\n" +
        "Cuota de IVA: " + importeIVA.toFixed(2) + "€\n" +
        "Total a pagar: " + total.toFixed(2) + "€"
    );
}

let entrada = prompt("Introduce el precio del artículo:");
let articulo = parseFloat(entrada || "0");

if (articulo > 0) {
    calcularIVA(articulo);
    mostrarResultado(articulo);
} else {
    alert("Por favor, introduce un número válido.");
}