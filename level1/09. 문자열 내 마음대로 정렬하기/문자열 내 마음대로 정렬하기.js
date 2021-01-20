function solution(strings, n) {
    var answer = [];
    var charArr = [];
    
    strings.sort();
    for(var i=0; i<strings.length; i++){

        charArr.push(strings[i].charAt(n));
    }
    
    charArr.sort();
    
    for(var i=0; i<charArr.length;i++){
        
        for(var j=0; j<strings.length;j++){
            
            if( strings[j].charAt(n) == charArr[i]){
                //console.log("strings : "+strings[j]+", char : "+charArr[i]);
                answer.push(strings[j]);
                strings.splice(j,1);
                break;
            }
        }
    }

    return answer;
}