$(document).ready(function () {
    $("#btnCargarPHP").click(function(){
        $.post("archivos-ejercicios/fichero.php", function(res){
            $("#res").text(res);
        });
    });
})