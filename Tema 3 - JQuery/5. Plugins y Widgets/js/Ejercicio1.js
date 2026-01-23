$(document).ready(function(){
    $.fn.desaparece = function() {
        this.click = function() {
            $('#parrafosE1 p').fadeOut('slow');
        }
        return this;
    };
    $('#desaparecerParrafos').desaparece();
});