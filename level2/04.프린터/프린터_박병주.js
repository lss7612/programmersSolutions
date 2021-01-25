function solution(priorities, location) {
    var answer = 0;
    var sortImportance = []
    sortImportance = priorities.slice();
    sortImportance.sort().reverse();

    // console.log(location)
    
    for(var i=0; ;i++){

        if(priorities[0] == sortImportance[0]){
            answer++;
            priorities.shift();
            sortImportance.shift();
            if(location == 0 ){
                return answer;
            } else {
                location--;
            }
        } else {
            priorities.push(priorities[0]);
            priorities.shift();
            if(location ==0){
                location = priorities.length-1
            } else {
                location--;
            }
        }
    }
    
    return answer;
}