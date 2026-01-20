$(document).ready(function(){
    $('#formE4').on('submit', function(e){
        e.preventDefault();
        $.get('archivos-ejercicios/validar.php', $(this).serialize(), function(data){
            $('#resultado').text(data);
        })
    }).fail(function (obj) {
        $('#resultado').html('Error ' + obj.status + ' - ' + obj.statusText);
    });
})