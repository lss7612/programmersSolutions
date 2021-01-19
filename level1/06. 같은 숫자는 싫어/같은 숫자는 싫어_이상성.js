function solution(arr){
    let result = [];
    
    result.push(arr[0])
    for(let i = 1; i < arr.length; i++){
        if(arr[i]===result[result.length-1]) continue;
        result.push(arr[i]);
    }
    
    return result;
}