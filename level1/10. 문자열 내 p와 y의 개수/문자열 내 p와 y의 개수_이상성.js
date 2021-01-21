function solution(s){
    let cnt_p = 0, cnt_y = 0;
    for(var i = 0; i < s.length; i++){
        if(s.charAt(i)==='p'||s.charAt(i)==='P') cnt_p++;
        if(s.charAt(i)==='y'||s.charAt(i)==='Y') cnt_y++;
    }
    if(cnt_p===cnt_y) return true;
    return false;
}