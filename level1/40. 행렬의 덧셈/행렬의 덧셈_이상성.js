function solution(arr1, arr2) {
    return arr1.map(($,i)=$.map(
        (_,j)=arr2[i][j]+_
    ));
}