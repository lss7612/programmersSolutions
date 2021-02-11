const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

//-------------------------------------

const solution = (n) => {
    
    //1. toString(n)메소드를 이용하여, n진법으로 변환.
    console.log("3진법으로 변환 : "+n.toString(3));
    //2. 변환된 값을 배열에 저장
    console.log("3진법으로 변환하여 배열로 저장 : "+[...n.toString(3)]);
    //3. 배열을 reverse()메소드를 이용하여 역순으로 변환
    console.log("배열값을 역순으로 정렬 : "+[...n.toString(3)].reverse());
    //4. join메소드를 이용하여 배열을 문자열로 변환
    console.log("배열값을 문자열로 변환 : "+[...n.toString(3)].reverse().join(""));
    //5. 변환된 값을 parseInt(string, n)을 이용하여 n진법으로 변환
    console.log("문자열을 숫자로 변환 : "+parseInt([...n.toString(3)].reverse().join("")));
    console.log("문자열의 진법으로 알려주고변환 : "+parseInt([...n.toString(3)].reverse().join(""), 3));

    return parseInt([...n.toString(3)].reverse().join(""), 3);
}