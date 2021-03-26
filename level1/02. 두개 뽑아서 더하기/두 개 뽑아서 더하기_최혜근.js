function solution(numbers) {
    var answer = [];
    var num=0;
    for(var i=0;i<numbers.length; i++){
        for(var j=i+1; j<numbers.length; j++){
            if(answer.includes(numbers[i]+numbers[j])){
                continue;
            }else{
                 answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    answer.sort(function(a,b){
        return a-b;
    })
    return answer;
}