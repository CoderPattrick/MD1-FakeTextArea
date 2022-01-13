str = "U see, you are an idiot :v"
text ="";
cnt = 0;
function typethis(){
    text += str[cnt];
    cnt++;
    if(cnt==str.length-1){
        cnt=0;
    }
    document.getElementById("result").value = text;
}