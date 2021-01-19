function solution(a, b) {
    var answer = 0;
    var max, min;
    if(a>=b){
        max=a;
        min=b
    } else{
        max=b;
        min=a;
    }
    for(var i = min; i<=max; i++){
        answer += i;
    }
    
    return answer;
}