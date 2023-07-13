$(document).ready(function(){
    $("#bt1").click(function(){
        for(var i = 1; i<=14; i++){
            $("#c"+i).html(Math.floor(Math.random()*99)+1);
        }
    });

    $("#bt2").click(function(){
        $(".card").html("");
        $(".card").css({"background-color":"white", "color":"black"})
    });

    $(".card").click(function(){
        if($(this).text()%2 == 0){
            $(this).css({"background-color" : "red", "color" : "white"});
        }
        else{
            $(this).css({"background-color" : "blue", "color" : "white"});
        }
    });
});

