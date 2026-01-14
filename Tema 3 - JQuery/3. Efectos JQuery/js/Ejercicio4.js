$(document).ready(function(){
    $("#cambiarColor").click(function(){
        $("#etiquetas-h1 h1").animate({
            color: "initial"
        }, 500);
    });
});