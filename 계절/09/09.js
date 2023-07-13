$(document).ready(function(){
    $("#sel1").change(function(){
        var selVel = $(this).val();
        $("#img1").attr("src", "./img/" + selVel + ".png");
        var url = "";
        switch(selVel){
            case "google":
                url = "http://www.google.com"
                break;

            case "naver":
                url = "http://www.naver.com"
                break;
            
            case "daum":
                url = "http://www.daum.net"
                break;
        }

        $("#a1").attr("href",url);
        $("#p1").html("<a href='" + url + "'>" + url +"</a>");
    });
});