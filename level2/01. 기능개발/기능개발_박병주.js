function solution(progresses, speeds) {
    var answer = [];
    var day = 0;    
    var duePer = 0;
    var dueDay = 0; 
    var dueDays = [];
    
    for( var i=0; i<progresses.length; i++){
        duePer = 100 - progresses[i];
        dueDay = Math.ceil(duePer/speeds[i]);   //소숫점 올림 처리
        dueDays.push(dueDay);
    }
    
    for(var i=0; i<dueDays.length; i++){
        if(i == 0 ) {
            answer.push(1);
            dueDay = dueDays[i];
            continue;
        }        
        if(dueDays[i] > dueDay) {
            dueDay = dueDays[i];
            answer.push(1);
        } else {
            answer[answer.length-1] = answer[answer.length-1] + 1;
        }
    }
    return answer;
}