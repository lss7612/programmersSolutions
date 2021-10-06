function solution(s) {
    
    const arr_s = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const arr_n = [0,1,2,3,4,5,6,7,8,9];
    
    let result = '';
    let tmp_s = '';    
    for(let i = 0; i < s.length; i++){
        if(/[0-9]/.test(s[i])){
            result += s[i];
        } else {
            tmp_s += s[i];
        }
        if(arr_s.indexOf(tmp_s) != -1){
            result += arr_n[arr_s.indexOf(tmp_s)];
            tmp_s = '';
        }
    }
    
    
    return result * 1;
}