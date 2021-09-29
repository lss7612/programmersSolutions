function solution(numbers) {
    
    let cnt = 0;
    const order = [0,1,2,3,4,5,6,7,8,9];
    order.forEach(item => {
        if(!numbers.includes(item)) {
            cnt+=item
        }
    })
    
    return cnt
    
}