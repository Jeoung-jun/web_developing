function show(){
    //오류
    if(myform.sel.value==""){
        alert("단을 선택해주세요");
        myform.sel.focus();
        return;
    }

    //변수
    var dan = parseInt(myform.sel.value);
    var str ="";

    //반복
    for (var i =1; i<=9; i++){
        str = str + dan + " * " + i + " = " + (dan*i) + "<br>";
    }

    //출력
    document.getElementById("msg").innerHTML = str;
}

// function show_rand(){
//     var num1, num2, str = "";
//     num1 = Math.floor(Math.random()*8)+2;
//     num2 = Math.floor(Math.random()*9)+1;
//     str = str + "<div class='rdan'>" + num1 + " * " + num2 + " = " + (num1 * num2) + "</div> <br>";
//     //출력
//     document.getElementById("msg").innerHTML = str;

// }

function show_rand(){
    var num1, num2, str = "";
    var r10, r1, result;

    num1 = Math.floor(Math.random()*8)+2;
    num2 = Math.floor(Math.random()*9)+1;

    result = num1 * num2;
    r10 = Math.floor(result/10);
    r1 = result%10;

    

    str = str + "<img src='./img/" + num1 + ".png'>";
    str = str + "<img src='./img/x.png'>";
    str = str + "<img src='./img/" + num2 + ".png'>";
    str = str + "<img src='./img/equal.png'>";
    //10의 자리
    if(r10==0) str= str + "<img src='./img/blank.png'>"
    else str = str + "<img src='./img/" + r10 + ".png'>";
    //1의 자리
    str = str + "<img src='./img/" + r1 + ".png'>";
    //출력
    document.getElementById("msg").innerHTML = str;

}

function show_clear(){
    myform.reset();
    document.getElementById("msg").innerHTML = "";
}