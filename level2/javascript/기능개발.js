function solution(arr_progresses, arr_speeds) {
    
    let answer = [];
    
    let arr_dateRemaining = getRemainDate(arr_progresses, arr_speeds);
    
    let remainProgress = arr_progresses.length; 
    let indexOfarr = 0;
    
    for(let day = 1; remainProgress!==0; day++){
        
        if(arr_dateRemaining[indexOfarr]<=day){
            let isDeploy = true;
            let cntDeploy = 0;
            while(isDeploy){
                cntDeploy++;
                indexOfarr++;
                remainProgress--;
                if(arr_dateRemaining[indexOfarr]>day || remainProgress===0) break;
            }
            answer.push(cntDeploy);
            // console.log('day : '+day+', remainProgress: '+remainProgress)
            
        }
        
    }
    
    return answer;
}

function getRemainDate(arr_progresses,arr_speeds){
    let result = [];
    for(let i = 0; i < arr_progresses.length; i++){
        result.push(Math.ceil((100-arr_progresses[i])/arr_speeds[i]))
    }
    return result;
}