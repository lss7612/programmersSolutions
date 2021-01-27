function solution(s) {
    var answer = '';
    let prefix = 1;
    let i = 0;
    
    if(s[0]==='-'){
        i++;
        prefix=-1;
    }else if(s[0]==='+'){
        i++;
    }
    
    for(; i < s.length; i++){
        answer+=s[i];
    }
    return prefix*answer;
}