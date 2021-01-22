function solution(s) {
    var answer = true;
    
    for(var i=0; i<s.length;i++){
        console.log("문자 '"+s[i]+"'의 데이터 타입 : "+typeof(s[i]))
        console.log("ascii 코드값 : "+ s.charCodeAt(i));
        if( (s.length ==4 || s.length ==6) &&
            (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <58)){
            continue;
        } else {
            return false;
        }
    }

    return answer;
}