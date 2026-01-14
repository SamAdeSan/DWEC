$(document).ready(function(){
    $("#btnCargarHTML").click(function(){
        $("#res").load("archivos-ejercicios/pagina.html", function(response, status, xhr) {
            if (status === "error") {
                console.error("Error al cargar el archivo:", xhr.status, xhr.statusText);
                $(this).text("No se pudo cargar el archivo.");
            }
        })
    });
})