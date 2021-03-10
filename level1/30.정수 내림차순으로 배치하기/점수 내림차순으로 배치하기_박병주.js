function solution(n) {
    var answer = '';
    var strn = String(n);    
    // console.log(strn.split(''))
    // console.log(strn.split('').map(x=>parseInt(x)))
    // console.log(strn.split('').map(x=>parseInt(x)).sort((a,b)=>b-a))
    answer = parseInt(strn.split('').map(x=>parseInt(x)).sort((a,b)=>b-a).join(''));
    return answer;
}