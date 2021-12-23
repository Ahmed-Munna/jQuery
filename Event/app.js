$(document).ready(function(){


    $("#btn-1").click(function(){
        $("#head-1").hide();
    });

    
    $("#btn-2").dblclick(function(){
        $("#head-2").hide();
    });

    $("#btn-3").mouseenter(function(){
        $("#head-3").hide();
    });

    $("#btn-4").mouseleave(function(){
        $("#head-4").hide();
    });

    $("#btn-5").hover(function(){
       alert("HI There...");
    },
    function(){
        alert("BYE");
    });

    $("#input-1").focus(function(){
        $(this).css("background","#ccc");
    });

    // $("#btn-6").on({
    //     mouseenter: function(){
    //         $(this).css("background-color","red")
    //     },
    //     mouseleave: function(){
    //         $(this).css("background-color","green")
    //     },
    //     click: function(){
    //         $(this).css("background-color","blue")
    //     }
    // })


    $("#btn-6").on({
        mouseenter: function(){
            $(this).css("color","blue")
        },
        mouseleave: function(){
            $(this).css("color","black")
        },
        click: function(){
            $(this).css("background-color","#ccc")
        }
    })


















})