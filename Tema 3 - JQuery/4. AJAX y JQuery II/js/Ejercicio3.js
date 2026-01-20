$(document).ready(function () {
    $('#cargarJS').on('click', function () {
        $.ajax({
            url: 'archivos-ejercicios/fichero.js',
            dataType: 'script',
            success: function () {
                $('#res').text('Script cargado y ejecutado correctamente.');
            },
            error: function () {
                $('#res').text('Error al cargar el script.');
            }
        });
    });
});