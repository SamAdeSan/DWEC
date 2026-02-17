// DOM
const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const boton = document.getElementById("sumar") as HTMLButtonElement;
const res = document.getElementById("res") as HTMLDivElement;

boton.addEventListener("click", () => {
    const n1: number = parseFloat(num1.value);
    const n2: number = parseFloat(num2.value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, introduce números válidos");
        return;
    }

    const suma: number = n1 + n2;

    let pResultado = document.getElementById("res") as HTMLParagraphElement;

    if (!pResultado) {
        pResultado = document.createElement("p");
        res.appendChild(pResultado);
    }

    pResultado.textContent = `Resultado de la suma: ${suma}`;
    pResultado.style.fontWeight = "bold";
});