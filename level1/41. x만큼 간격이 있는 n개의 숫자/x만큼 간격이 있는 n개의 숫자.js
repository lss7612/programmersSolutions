function solution(x, n) {
    const arr = [];
    arr.push(x);
    for(let i = 1; i  n; i++){
        arr.push(arr[arr.length-1] + x);
    }
    return arr;
}