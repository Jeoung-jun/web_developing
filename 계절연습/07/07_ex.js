 
            function show(n){
                var tmp=document.getElementById("msg").innerHTML;
                tmp += n;
                document.getElementById("msg").innerHTML = tmp;
            }

            function cal_show(){
                var str = document.getElementById('msg').innerHTML;
                document.getElementById("msg").innerHTML = eval(str);
            }

            function clear_last(){
                str = document.getElementById('msg').innerHTML;
                str = str.substr(0,str.length-1);
                document.getElementById("msg").innerHTML = str;
            }


            function clear_show(){
                document.getElementById("msg").innerHTML = "";
            }
        