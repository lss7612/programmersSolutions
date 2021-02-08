function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
//test12에서 에러 발생



function solution(n, lost, reserve) { 
    const realLost = lost.filter((l)=>!reserve.includes(l)) 
    let realReserve = reserve.filter((r)=>!lost.includes(r)) 
    return n - realLost.filter(a => { 
        const b = realReserve.find(r => Math.abs(r-a) <= 1) 
        if(!b) return true 
        realReserve = realReserve.filter(r => r !== b) }
    ).length 
}

//.filter메소드
//lost.filter에서 여유번호 - 잃은번호가 1차이(Math.abs)가 나는지 확인한 값을 반환합니다. 
// => const b. 그 후 값이 없으면 잃었다고 체크(return true), 여유분이 있다면 reserve에서 해당 값을 제거해줍니다.




// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

