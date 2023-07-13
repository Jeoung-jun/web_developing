function clear_show(){
    document.getElementById("msg").innerHTML = "";
}

function cal_show(){
    
    if(myform.txt1.value == ""){
        alert("첫번째 숫자를 입력하세요");
        myform.txt1.focus();
        return;
    }
    if(myform.txt2.value == ""){
        alert("두번째 숫자를 입력하세요");
        myform.txt2.focus();
        return;
    }
    if(myform.r_op.value == ""){
        alert("연산자를 입력하세요");
        return; 
    }

    var num1, num2, ans;
    num1 = parseInt(myform.txt1.value);
    num2 = parseInt(myform.txt2.value);
    switch(myform.r_op.value){
        case '+':
            ans = num1+num2;
            break;

        case '-':
            ans = num1-num2;
            break;
        
        case 'X':
            ans = num1*num2;
            break;

        case '/':
            ans = num1/num2;
            break;
    }
    if(myform.r_op.checked == true){
        var str = num1 + myform.r_op.value + num2 + "=" + ans;
        document.getElementById("msg").innerHTML = str;
    }
    else{
        document.getElementById("msg").innerHTML = ans;
    }



}
