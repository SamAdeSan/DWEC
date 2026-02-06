document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCargar');
    if (btn) {
        btn.addEventListener('click', cargarXML);
    }
});

function cargarXML() {
    let objeto = new XMLHttpRequest();
    objeto.open('GET', 'archivos-ejercicios/datos.xml', true);

    objeto.onload = function() {
        if (this.status === 200) {
            let xml = this.responseXML;
            let mensaje = xml.getElementsByTagName('respuesta')[0].textContent;

            let contenedor = document.getElementById('contenedorTabla');
            contenedor.innerHTML = `<p class="mensaje-exito">${mensaje}</p>`;
        } else {
            console.error("Error al cargar el XML");
        }
    };

    objeto.send();
}