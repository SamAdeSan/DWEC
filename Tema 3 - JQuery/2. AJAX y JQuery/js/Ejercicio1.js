$(document).ready(function(){
    $("#btnFicheroTXT").click(function(){
        $.ajax({
            url: "archivos-ejercicios/fichero.txt",
            type: "GET",
            success: function(result){
                $("#res").text(result);
            },
            error: function(xhr, status, error) {
                console.error("Error al cargar el archivo:", error);
                $("#res").text("No se pudo cargar el archivo.");
            }
        });
    });
})