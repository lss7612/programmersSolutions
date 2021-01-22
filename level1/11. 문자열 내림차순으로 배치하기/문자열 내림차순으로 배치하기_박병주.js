function solution(s) {
    var answer = '';
    var tmp;

    if(s.length == 1){
        return s;
    }
    
    var charArr=[s.length];
    
    for(var i=0; i<s.length;i++){
        charArr[i] = s[i];
    }
    
    for( var i=0; i<charArr.length -1; i++){
        for(var j=i+1; j<charArr.length; j++){
            if(!(charArr[i] > charArr[j])){
                tmp = charArr[i];
                charArr[i] = charArr[j];
                charArr[j] = tmp;                
            }
        }
        answer += charArr[i];

    }
    answer += charArr[charArr.length-1];
    return answer;
}