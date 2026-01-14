$(document).ready(function(){
    $("#animarRecuadro").click(function(){
        let div = $("#res");
        div.animate({height: 300}, "slow");
        div.animate({width: 300}, "slow");
        div.animate({height: 100}, "slow");
        div.animate({width: 100}, "slow");

        $("span").text(div.queue().length);
    });
});