function solution(s) {
    
    
    let arr_s=s.split('');
    
    arr_s.sort()
    arr_s=arr_s.reverse();
    s=arr_s.join('')
    
    return s
    
}