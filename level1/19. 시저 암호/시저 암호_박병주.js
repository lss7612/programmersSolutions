function solution(s, n) {
    var answer = '';
    
    //아스키 코드로 변환하기
    for(var i=0; i<s.length; i++){
        //console.log(s[i]+"의 ASCII 코드 값 : "+s.charCodeAt(i));
        answer += calcASCIICode(s.charCodeAt(i), n);
    }
    //console.log(answer);
    return answer;
}

function calcASCIICode(s, n){
    //console.log("문자열 이동 위치 : "+(s+n))
    if(s > 64 && s < 91 ){
        //console.log("대문자");
        if(s + n > 90){
            //console.log("대문자 범위 벗어나서 처음부터 카운트")
            return  String.fromCharCode(s+n-26);
        } else {
            return  String.fromCharCode(s+n);
        }
    } else if( s >96 && s < 123){
        //console.log("소문자")
         if(s + n > 122){
             //console.log("소문자 범위 벗어나서 처음부터 카운트")
             return  String.fromCharCode(s+n-26);
        } else {
             return  String.fromCharCode(s+n);
        }
    } else {
        //console.log("공백")
        return ' ';
    }
}