$(document).ready(function(){


    $("#ida").click(function(){

        $("p").hide();

    });

    $(".class").click(function(){

        $(".class").hide();
        
    });

    $("#idea").click(function(){

        $(this).hide();

    });

    $("#listBtne").click(function(){

        $("ul li:first").hide();

    });


    $("#listBtn").click(function(){

        $("ul li:first-child").hide();

    });

    $("#nth").click(function(){

        $("ul li:nth-child(2)").hide();

    });

    $("#last").click(function(){

        $("ul li:last-child").hide();

    });

    $("#remove").click(function(){

        $("[href]").hide();

    });

    $("#tar").click(function(){

        $('a[target="blank"]').hide();

    });

    $("#blankAll").click(function(){

        $("*").hide();

    });



})