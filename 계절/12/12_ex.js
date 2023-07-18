function init() {
    var newDate = new Date();
    $("#txtYear").val(newDate.getFullYear());

    var mon = newDate.getMonth() + 1;
    if (mon < 10) mon = "0" + mon;
    $("#selMon").val(mon);

    //당일 자료 미제공
    var day = newDate.getDate() - 1;
    if (day < 10) day = "0" + day;
    $("#selDay").val(day);
}

//영화 정보 제공
function show(movieCd) {
    var url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.xml?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
    url += movieCd;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "xml",
        error: function () {
            alert("오류입니다.");
        },
        success: function (data) {
            if ($(data).find("movieInfo") == "") {
                alert("자료가 없습니다.");
                return;
            }
            var str = "";
            $(data).find("movieInfo").each(function () {
                /*<h1></h1>
                <h2></h2>
                <ul>
                    <li></li>
                </ul>*/
                str = "<h1>" + $(data).find("movieNm").text() + "</h1>";
                str += "<h2>" + $(data).find("movieNmEn").text() + "</h2>";
                str += "<p>상영시간 : " + $(data).find("showTm").text() + "</p>";
                str += "<ul>";

                //ajax에서 반복문은 무조건 each로 진행해야함
                $(data).find("actor").each(function () {
                    //this로 불러와야지 문제가 없음
                    str += "<li>" + $(this).find("peopleNm").text() + "</li>";
                });
                str += "</ul>";
                $(".box3").html(str);
            });
        }
    });
}

$(document).ready(function () {
    init();
    $("#bt1").click(function () {
        $("#msg").html("");
        var url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
        url += $("#txtYear").val() + $("#selMon").val() + $("#selDay").val();
        $.ajax({
            url: url,
            type: "GET",
            dataType: "xml",
            success: function (data) {
                if ($(data).find("dailyBoxOffice").text() == "") {
                    alert("자료가 없습니다.");
                    return;
                }
                //반복(순위, 증감, 영화이름)
                var str = "";
                $(data).find("dailyBoxOffice").each(function () {
                    str += "<a href='#' onclick='javascript:show(" + $(this).find("movieCd").text() + ")'>";
                    str += $(this).find("rank").text() + "위(";

                    var rankInten = parseInt($(this).find("rankInten").text());
                    if (rankInten > 0) str += "▲";
                    else if (rankInten < 0) str += "▼";
                    str += Math.abs(rankInten) + ") : ";

                    str += $(this).find("movieNm").text() + "<br></a>";
                    $("#msg").html(str);
                });
            },
            error: function () {
                alert("오류입니다.");
            }
        });
    });
});