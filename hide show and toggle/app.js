$(document).ready(function(){

$("#hide").on({
    click: function(){
        $(this).css("background-color","#ccc");
    },
    mouseleave: function(){
        $(this).css("background-color","#f1f1f1");
    },
    click: function(){
        $("h2").hide(1000);
    }

})

$("#show").on({
    click: function(){
        $(this).css("background-color","#ccc");
    },
    mouseleave: function(){
        $(this).css("background-color","#f1f1f1");
    },
    click: function(){
        $("h2").show(1000);
    }

})



$("#toggle").on({
    mouseenter: function(){
        $(this).css("color","blue");
    },
    click: function(){
        $("h1").toggle("slow");
    }

})

































})