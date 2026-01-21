$(document).ready(function () {
    $("#btnCargarPHP").click(function(){
        $.post("archivos-ejercicios/fichero.php", { nombre: "Samuel", edad: 19 }, function (res) {
                $("#res").text(res);
            }
        );
    });
});
