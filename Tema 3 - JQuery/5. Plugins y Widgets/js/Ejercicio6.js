$(document).ready(function(){
    $.fn.miPluginSimple = function () {
        return this.each(function () {
            $(this).css({
                "color": "white",
                "background-color": "green",
                "padding": "15px",
                "border-radius": "5px",
                "width": "fit-content",
            });
        });
    };
    $.fn.eliminarPluginSimple = function () {
        return this.each(function () {
            $(this).css({
                "color": "",
                "background-color": "",
                "padding": "",
                "border-radius": "",
                "width": "",
            })
        })
    }

    $("#aplicarPlugin").on("click", function () {
        $("p").miPluginSimple();
    });

    $("#dejarDeAplicarPlugin").on("click", function () {
        $("p").eliminarPluginSimple();
    });

    $(".acordeon").accordion({
        collapsible: true,
        heightStyle: "content"
    });
});