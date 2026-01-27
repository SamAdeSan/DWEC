$(document).ready(function(){
    $.fn.miPluginSimple = function () {
        return this.each(function () {
            $(this).css({
                "color": "white",
                "background-color": "green",
                "font-size": "20px"
            });
        });
    };
    $("#aplicarPlugin").click(function () {
        $("p").miPluginSimple();
    });

    $(".acordeon").accordion({
        collapsible: true,
        heightStyle: "content"
    });
});