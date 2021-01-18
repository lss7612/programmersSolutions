function solution(participant, completion) {
    var answer = '';
    
    for(var i=0; i<completion.length; i++){
        for(var j=0; j<participant.length; j++){
            if( participant[j] == completion[i]){
                //console.log(participant[j]+", "+completion[i])
                participant[j] = 0;
                break;
            } else if( j == participant.length-1){
                //console.log(participant[j])
                return participant[j];
            }
        }
    }
    //console.log(participant)
    
    for(var i=0; i<participant.length;i++){
        if(participant[i] != 0){
            answer = participant[i];
            break;
        }
    }
    return answer;
}