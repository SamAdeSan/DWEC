function buscarUsuario(str) {
    let contenedor = document.getElementById("resultado");

    if (str.length === 0) {
        contenedor.innerHTML = "";
        return;
    }

    let objeto = new XMLHttpRequest();

    objeto.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            contenedor.innerHTML = this.responseText;
        }
    };

    objeto.open("GET", "buscar.php?q=" + str, true);
    objeto.send();
}