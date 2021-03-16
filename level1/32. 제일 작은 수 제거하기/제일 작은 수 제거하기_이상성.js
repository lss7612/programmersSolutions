function solution(arr) {
    const copyArr = arr.map(x=>x).sort((a,b)=>a-b);
    let removeNumber = copyArr[0];
    const result = arr.filter(_=>_!==removeNumber);
    if(result.length===0) return [-1];
    return result;
}