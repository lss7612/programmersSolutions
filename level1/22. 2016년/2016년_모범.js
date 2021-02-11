function solution(a, b) {
    var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

//--------------------------
function solution(a, b) {
    console.log("월 : "+a)
    console.log("일 : "+b)
    
    //주어진 월과 일로 Date 객체 생성
    //  월은 시작값이 0 이기 때문에 현재 받은 월의 값에서 1을 빼준다.
    var date = new Date(2016, (a - 1), b);
    
    //Date객체를 문자열로 변환
    console.log(date.toString());
    
    //변환된 문자열을 요일까지만 잘라냄
    console.log(date.toString().slice(0,3))
    
    //잘라낸 요일을 대문자로 변환
    console.log(date.toString().slice(0, 3).toUpperCase())
    
    return date.toString().slice(0, 3).toUpperCase();
}