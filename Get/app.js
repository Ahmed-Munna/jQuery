$(document).ready(function(){



$("#btn1").click(function(){
    $("#some").text($("input").val());
});
$("#btn2").click(function(){
    alert("Normal Show : "+$("#some").html());
});

$("#btn3").click(function(){
    alert($("input").val());
});

$("#btn4").click(function(){
    alert($("#att").attr("href"));
})





































})