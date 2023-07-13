function show(){
    var value_sel = myform.sel.value;
    if(value_sel == ""){
        alert("단을 선택하세요.");
    }
    var str = "";
    for(var i = 1; i<=9; i++){
        var tmp = parseInt(value_sel) * i;
        str = str + value_sel + " X " + i + " = " + tmp+ "<br>";
        document.getElementById("msg").innerHTML = str;
    }
}

function show_rand(){
    var num1, num2, res;
    num1 = Math.floor(Math.random()*8)+2;
    num2 = Math.floor(Math.random()*9)+1;
    res = num1 * num2;

    var str = "<img src='./img/" + num1 + ".png'>";
    str += "<img src='./img/X.png'>";
    str += "<img src='./img/" + num2 + ".png'>";
    str += "<img src='./img/equal.png'>";

    var r10 = Math.floor(res/10), r1 = res%10;

    if(r10 == 0) str += "<img src='./img/blank.png'>";
    else str += "<img src='./img/" + r10 + ".png'>";

    str += "<img src='./img/" + r1 + ".png'>";

    document.getElementById("msg").innerHTML = str;

}

function show_clear(){
    myform.reset();
    document.getElementById("msg").innerHTML = "";
}