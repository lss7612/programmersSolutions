function solution(n) {
    return parseInt(n.toString().split('').map(x=>parseInt(x)).sort((a,b)=>b-a).join(''));
}