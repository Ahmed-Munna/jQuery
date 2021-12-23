$(document).ready(function(){
 
    $("#btn-1").click(function(){
        $(".div-1").fadeIn();
        $(".div-2").fadeIn("slow");
        $(".div-3").fadeIn(1000);
    })

    $("#btn-2").click(function(){
        $(".div-1").fadeOut();
        $(".div-2").fadeOut("slow");
        $(".div-3").fadeOut(1000);
    })

    $("#btn-3").click(function(){
        $(".div-1").fadeToggle();
        $(".div-2").fadeToggle("slow");
        $(".div-3").fadeToggle(1000);
    })

    $("#btn-4").click(function(){
        $(".div-1").fadeTo("slow",0.3);
        $(".div-2").fadeTo("slow",0.5);
        $(".div-3").fadeTo("slow",0.7);
    })


























})