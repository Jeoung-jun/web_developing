function show(){
    var start, end, str="", cnt = 0;
    start = myform.txt1.value;
    end = myform.txt2.value;

    if(start == ""){
        alert("시작값을 입력하세요");
        myform.txt1.focus();
        return;
    }

    if(end == ""){
        alert("종료값을 입력하세요");
        myform.txt2.focus();
        return;
    }

    if(start > end){
        var tmp = start;
        start = end;
        end = tmp;
    }

    
    for(var i = parseInt(start); i<=parseInt(end); i++){
        cnt++;
        if(i %2 == 0) str += "<div class='card1'>" + i + "</div>";
        else str += "<div class='card2'>" + i + "</div>";
        if(cnt%5 == 0) str += "<div class='newline'></div>"
    }
    document.getElementById("msg").innerHTML = str;


}

function show_clear(){
    document.getElementById("msg").innerHTML = "";
    myform.reset();
}