function solution(a, b) {
    var answer = 0;
    
    
    let min = 0;
    let max = 0;
    if(a === b){
        return a;
    } else if(a>b){
        min = b, max = a;
    } else {
        min = a, max = b;
    }
   
    let arr_answer = [];
    
    while(min !== max+1){
        arr_answer.push(min)
        min++
    }
    
    for(let i = 0; i < arr_answer.length; i++){
        answer+=arr_answer[i]
    }
    
    return answer;
}