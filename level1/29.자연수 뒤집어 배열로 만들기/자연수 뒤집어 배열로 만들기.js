function solution(n) {
    var answer = [];
    String(n).split('').reverse().filter(e =>answer.push( parseInt(e) ) )
    return answer;
}