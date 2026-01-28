$(document).ready(function() {
    $.fn.miPluginOpciones = function (opcionesUsuario) {
        let opcionesDefecto = {
            colorFondo: "yellow",
            colorTexto: "black",
            tamanoTexto: "18px"
        };
        let opciones = $.extend(opcionesDefecto, opcionesUsuario);
        return this.each(function () {
            $(this).css({
                "background-color": opciones.colorFondo,
                "color": opciones.colorTexto,
                "font-size": opciones.tamanoTexto
            });
        });
    };
    $("#aplicarPlugin").click(function () {
        $("p").miPluginOpciones({
            colorFondo: "lightblue",
            colorTexto: "darkblue",
            tamanoTexto: "20px"
        });
    });
});