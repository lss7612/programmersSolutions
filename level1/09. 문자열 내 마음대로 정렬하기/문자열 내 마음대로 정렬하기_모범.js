function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}


//모범 코드 해석
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    
    // 각 문자열마다 n번째 문자열을 비교해서 정렬
    return strings.sort((s1, s2) => {
        console.log("---------------")
        console.log("strings배열 : "+strings)
        
        console.log("s1 : "+s1)
        console.log("s1[n] : "+s1[n]);
        console.log("s2 : "+s2)
        console.log("s2[n] : "+s2[n])
        if(s1[n] === s2[n]){
            //문자열의 n번째 글자가 같으면 문자열 전체와 비교해서 정렬합니다.
            console.log("s1[n]("+s1[n]+")과 s2[n]("+s2[n]+")이 같습니다.")
            console.log("s1.localCompare(s2) : "+s1.localeCompare(s2));
        } else {
            //문자열의 n번째 글자가 다르면 n번째 문자를 기준으로 정렬합니다.
            console.log("s1[n]("+s1[n]+")과 s2[n]("+s2[n]+")이 다릅니다.")
            console.log("s1[n].localCompare(s2[n]) : "+s1[n].localeCompare(s2[n]));
        }
        return s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
    });
}

