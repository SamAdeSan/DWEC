document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCargarPHP').addEventListener('click', function () {
        let objeto = new XMLHttpRequest();
        objeto.open('GET', 'archivos-ejercicios/procesar.php', true);

        objeto.onload = function() {
            if (this.status === 200) {
                let respuesta = this.responseText;

                let contenedor = document.getElementById('contenedorRespuesta');
                contenedor.innerHTML = `<p class="mensaje-php">${respuesta}</p>`;
            }
        };
        
        objeto.send();
    });
});