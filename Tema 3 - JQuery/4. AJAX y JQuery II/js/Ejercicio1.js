$(document).ready(function () {
    $('#cargarTexto').on('click', function () {
        $.ajax({
            url: 'archivos-ejercicios/texto.txt',
            method: 'GET',
            success: function (res) {
                $('#res').text(res);
            },
            error: function () {
                $('#res').html('Error al cargar el fichero de texto');
            }
        });
    });
    $('#dejarDeCargar').on('click', function () {
        $("#res").empty();
    })
});