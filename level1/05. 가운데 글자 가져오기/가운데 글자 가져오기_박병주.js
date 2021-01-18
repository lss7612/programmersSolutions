function solution(s) {
    var answer = '';
    
    //길이가 홀수면 길이/2+1번째 문자
    console.log(s);
    console.log(s.length);
    console.log(s[0]);
    
    if( s.length%2 == 0 ){
        answer = s[s.length/2-1 ];
        answer += s[(s.length/2) ];
    } else {
        answer = s[Math.floor(s.length/2)];
    }
    //길이가 짝수면 길이/2, 길이/2 +1번째 문자
    console.log(answer)
    return answer;
}