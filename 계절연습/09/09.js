//jquery로 풀기
$(document).ready(function(){
    $("#sel1").change(function(){
        var sel_val = $(this).val();

        if(sel_val == "") {
            $("#d1").html("");
            return;
        }
        var str = "<img src='./img/" + sel_val + ".png'><br>";
        switch(sel_val){
            case "google":
                str += "<a href='https://www.google.com'>https://www.google.com</a>";
                break;
            
            case "naver":
                str += "<a href='https://www.naver.com'>https://www.naver.com</a>";
                break;

            case "daum":
                str += "<a href='https://www.daum.net'>https://www.daum.net</a>";
                break;
        }
        $("#d1").html(str);


    });
});