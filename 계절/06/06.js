function show() {
    var str = "";
    var ck = document.getElementsByClassName("ck");

    str = "성명 : " + form06.txt_name.value + "<br>";
    str = str + "E-mail : " + form06.txt_mail.value + "<br>";
    str = str + "생년월일 : " + form06.txt_year.value + "년" + form06.sel_mon.value + "월" + form06.txt_day.value + "일" + "<br>";
    str = str + "성별 : " + form06.r_gender.value + "<br>";
    for(var i= 0; i<ck.length; i++){
        if(ck[i].checked == true){
            str = str + "관심분야 : " + ck[i].value + "&nbsp&nbsp&nbsp";
        }
    }
    str = str + "<br>";
    str = str + "기타 : " + form06.txt_contents.value;
    document.write(str);
}