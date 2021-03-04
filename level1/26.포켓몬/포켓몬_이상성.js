function solution(nums) {
    let N =  nums.length/2;
    
    //1.포켓몬의 종류를 하나씩만 담은 배열을 만든다. 해당 배열의 length가 종류 수다.
    const kind = [];
    for(let i = 0; i < nums.length; i++){
        if(!kind.includes(nums[i])) kind.push(nums[i]);
    }
    console.log(kind); //종류 잘 들어갔는지 확인
    
    
    if(kind.length > N){
        //2.종류의 수가 num.length/2보다 많으면 num.length/2를 반환한다.
        return N;
    } else {
        //3.종류의 수가 num.length/2보다 작으면 종류의 수를 반환한다.
        return kind.length;
    }
    
    return -1;
}