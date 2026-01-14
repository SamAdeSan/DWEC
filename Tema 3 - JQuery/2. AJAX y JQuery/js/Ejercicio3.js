$(document).ready(function () {
    $("#btnCargarXML").click(function(){
        $.get("archivos-ejercicios/fichero.xml", function (xml) {
            $(xml).find("item").each(function () {
                $("#res").append(
                    "<hr><p><strong>Nombre:</strong> " + $(this).find("nombreCompleto").text() + "<br>" +
                    "<strong>Instrucción:</strong> " + $(this).find("instruccion").text() + "</p><hr>"
                );
            });
        }).fail(function() {
            $("#res").text("Error al cargar el archivo XML.");
        });
    });
})