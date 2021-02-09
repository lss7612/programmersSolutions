function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
//test12에서 에러 발생


//test12 오류 수정한 모범 답안.
function solution(n, lost, reserve) { 
    const realLost = lost.filter((l)=>!reserve.includes(l)) 
    let realReserve = reserve.filter((r)=>!lost.includes(r)) 
    return n - realLost.filter(a => { 
        const b = realReserve.find(r => Math.abs(r-a) <= 1) 
        if(!b) return true 
        realReserve = realReserve.filter(r => r !== b) 
    }).length 
}

//--------------------------------------------------------------

// 코드 분석
function solution(n, lost, reserve) {
    console.log("---lost---")
    console.log(lost);
    console.log("---reserve---")
    console.log(reserve);
    
    //체육복을 빌릴 사람은 잃어버린 사람이기에
    //체육볼을 빌릴 사람은 reserve배열에서 값이 없을 경우
    const realLost = lost.filter(
        (i) => !reserve.includes(i)
    )
    console.log("---realLost---")
    console.log(realLost);
    
    //빌려줄수 있는 사람은 잃어버리지 않은 사람이기에
    //lost배열에 포함되지 않은 사람만 찾아낸다.
    let realReserve = reserve.filter(
        (i) => !lost.includes(i)
    )
    console.log("---realReserve---")
    console.log(realReserve);
    
    //전체 학생 수에서 빌려입지 못한 학생의 배열 길이만큼 빼주면
    //빌려입은 횟수가 나오게 된다.
    var answer = n - realLost.filter(
        i => { 
            console.log("-------------------------------")
            console.log("빌려줄수 있는 학생(realReserve)")
            console.log(realReserve);
            console.log("잃어버린 학생(i) : "+i);
            const b = realReserve.find(j => {
                console.log("빌려줄수 있는 학생(j) : "+j);
                console.log("i와 j의 차가 1보다 작으면 빌려줄 수 있다.")
                //빌려줄수 있는 경우는 앞뒤만 가능하다.
                //두 수의 차의 절대값이 1보다 작을 경우 가능하다.
                if (Math.abs(j-i) <= 1) {
                    console.log("j("+j+")는 빌려줄 수 있다.")
                    return true
                }
                //if (Math.abs(j-i) == 1) return true
                //else return false;
            })
            //Math.abs : 절대값
            console.log("b(빌려줄 수 있는 학생) : "+b);


            if(!b) {
                //빌려입을 수 없는 경우 이므로 배열에 값을 추가해준다.
                console.log("i("+i+")는 빌려 입지 못합니다.")
                console.log("배열에서 유지됩니다.")
                return true;
            }
            
            realReserve = realReserve.filter(j => {
                console.log("j : "+j);
                if(j !== b){
                    console.log("j("+j+")와 b("+b+")가 다릅니다.");
                    console.log("j("+j+")는 빌려주지 못했습니다.")
                    console.log("realReserve에서 유지됩니다.")
                    return true;
                }
                //자기 자신한테는 빌려주지 못한다.
                console.log("j("+j+")와 b("+b+")가 같습니다.")
                console.log("빌려줬습니다.")
                console.log("i("+i+")는 빌려 입었으므로 realLost배열에서 제외됩니다.")
            }) 
        }
    ).length

    console.log("realReserve : "+realReserve)
    console.log("answer : "+answer);
    return answer;
}