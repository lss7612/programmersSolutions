function solution(nums) {
    //갖고갈 수 있는 포켓몬의 수
    let pickNum = nums.length/2;
    
    //중복포켓몬을 제거하기 위해 Set을 사용
    const set = new Set(nums);
    //중복제거된 set의 값을 배열에 저장
    const numArr = [...set];
    
    //포켓몬 종류 배열의 길이가 갖고 갈 수 있는 포켓몬의 수와 비교
    if( numArr.length >= pickNum){
        return pickNum
    } else {
        return numArr.length
    }
}