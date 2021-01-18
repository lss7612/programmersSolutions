function solution(arr)
{
    var answer = [];
    var tmp = 0;
    
    for(var i=0; i<arr.length;i++){
        tmp = arr[i];
        
        //처음값은 answer 배열에 넣어준다.
        if( answer.length == 0) {
            answer.push(arr[0]);
            continue;
        }
        
        //answer배열의 마지막값과 현재 arr의 배열값을 비교하여 다르면 answer에 추가한다.
        if( tmp != answer[answer.length-1]) answer.push(tmp);            
    }
    console.log(answer);
    return answer;
}