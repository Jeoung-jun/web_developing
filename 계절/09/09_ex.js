$(document).ready(function(){
    $("#bt1").click(function(){
        for(var i = 1; i<=14; i++){
            $("#c"+i).text(Math.floor(Math.random()*99)+1);
        }
    });

    $("#bt2").click(function(){
        $(".card").text("");
        $(".card").css({"background-color":"white", "color":"black"});
        // for(var i = 1; i<=14; i++){
        //     $("#c" + i).text("");
        //     $("#c" + i).css({"background-color":"white", "color":"black"});
        // }
    });

    
    $(".card").click(function(){
        var val = $(this).text();
        if(val%2==0){
            $(this).css({"background-color":"red", "color":"white"});
        }
        else{
            $(this).css({"background-color":"blue", "color":"white"});
        }
    });
    
});