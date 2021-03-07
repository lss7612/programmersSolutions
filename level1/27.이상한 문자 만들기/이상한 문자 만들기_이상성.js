function solution(s) {
    return s.split(' ').map(
        _=>_.split('').map(($,i)=>i%2===0?$.toUpperCase():$.toLowerCase()).join('')
    ).join(' ');
}