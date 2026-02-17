// DOM
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const boton = document.getElementById("sumar");
const res = document.getElementById("res");
boton.addEventListener("click", () => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, introduce números válidos");
        return;
    }
    const suma = n1 + n2;
    let pResultado = document.getElementById("res");
    if (!pResultado) {
        pResultado = document.createElement("p");
        res.appendChild(pResultado);
    }
    pResultado.textContent = `Resultado de la suma: ${suma}`;
    pResultado.style.fontWeight = "bold";
});
export {};
//# sourceMappingURL=main.js.map