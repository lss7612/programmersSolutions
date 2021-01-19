function solution(s) {
    var answer = '';
    
    if(s.length%2===0){//길이가 짝수일 때
        let cnt = s.length/2-1;
        answer = s.charAt(cnt)+s.charAt(cnt+1)
    } else{//길이가 홀수일 때
        let cnt = Math.floor(s.length/2);
        answer = s.charAt(cnt)
    }
    
    return answer;
}