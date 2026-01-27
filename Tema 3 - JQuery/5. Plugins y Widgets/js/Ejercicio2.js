$(document).ready(function () {
    $.fn.miPluginPersonalizado = function () {
        return this.each(function () {
            $(this).css({
                "background-color": "yellow",
                "color": "black",
                "font-size": "18px"
            });
        });
    };

    $('#aplicarPlugin').click(function () {
        $('p').miPluginPersonalizado();
    });
});
