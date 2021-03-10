function solution(n){
    var answer = 0;
    String(n).split('').filter(e => answer+=parseInt(e));
    
    return answer;
}