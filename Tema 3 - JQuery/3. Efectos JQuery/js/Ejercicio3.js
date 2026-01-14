$(document).ready(function () {

    function moverCubo() {
        $("#msj")
            .animate({ left: '250px' }, 1000)
            .animate({ top: '350px' }, 1000)
            .animate({ left: '50px' }, 1000)
            .animate({ top: '150px' }, 1000);
    }
    $("#btn1").click(function() {
        $("#msj").stop(true, false);
        moverCubo();
    });
    $("#btn2").click(function() {
        $("#msj").stop(true, false);
    });
});