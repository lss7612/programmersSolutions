function solution(n) {
    
    //isInteger메소드를 사용해서 integer구분
    if( Number.isInteger(Math.sqrt(n)) ){
        return Math.pow(Math.sqrt(n)+1,2)
    } else {
        return -1
    }
}