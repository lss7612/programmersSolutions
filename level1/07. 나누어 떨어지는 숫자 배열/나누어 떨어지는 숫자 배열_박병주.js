function solution(arr, divisor) {
    var answer = [];
    console.log(answer.length);
    for(var i=0; i<arr.length; i++){
        if( arr[i]%divisor == 0) {
            answer.push(arr[i]);
            continue;
        }
        if( i == arr.length-1 && answer.length == 0) {
            answer.push(-1);
        }
    }
    answer.sort(sortNumber);
    return answer;
}

function sortNumber(a,b){
    return a-b;
}