$(document).ready(function(){
    $("#clickme").click(function(){
        $("div").slideToggle(3000);
    });

    $("#stop").click(function(){
        $(this).css("background-color","green");
        $("div").stop();
    })
})
