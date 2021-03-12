function solution(arr) {
    var answer = [];
    
    if(arr.length == 1) return [-1];
    
    //정렬
    const sortArr = arr.map(x=>x).sort((a,b)=>a-b);
    
    //최소값 구하기.
    const min = sortArr[0];
    
    //배열에서 최소값 제거
    answer = arr.filter(e=> checkMinNum(min,e) );
    
    //최소값 제거하고 빈배열일 경우
    if(answer.length < 1) return [-1];
    
    return answer;
}

function checkMinNum(min, e){
    if(min == e){
        return false;
    } else {
        return true;
    }
}