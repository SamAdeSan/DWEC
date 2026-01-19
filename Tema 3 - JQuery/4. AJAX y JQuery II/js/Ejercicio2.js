$(document).ready(function () {
    $('#cargarTexto').on('click', function () {
        $('#resultado').html('');
        $('#loader').show();

        $.ajax({
            url: 'archivos-ejercicios/fecha.php',
            method: 'GET',
            success: function (data) {
                $('#loader').hide();
                $('#resultado').html(data);
            },
            error: function (objeto) {
                $('#loader').hide();
                $('#resultado').html('Error ' + objeto.status + ' - ' + objeto.statusText);
            }
        });
    });
});