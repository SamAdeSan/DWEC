$(document).ready(function() {
    $("#btnSaludo").click(function() {
        $("#mensaje").fadeIn("slow");
    });
    $("#btnDespedida").click(function() {
        $("#mensaje").fadeOut("slow");
    });
});