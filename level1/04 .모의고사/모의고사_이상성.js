function solution(answers) {
    
    let cntOfQuestion = answers.length;
    
    let wayToSolves = [];
    let wayToSolve1 = [1,2,3,4,5];
    wayToSolves.push(wayToSolve1);
    let wayToSolve2 = [2,1,2,3,2,4,2,5];
    wayToSolves.push(wayToSolve2);
    let wayToSolve3 = [3,3,1,1,2,2,4,4,5,5];
    wayToSolves.push(wayToSolve3);
    
    let arr_cntCorrected = makeArrCorrected(answers, wayToSolves);
    
    let result = [];
    let lastStudent_no = 1;
    for(let i = 0; i < arr_cntCorrected.length; i++){
        let student_no = i+1;
        if(result.length === 0){
            result.push(student_no);
        } else {
            if(arr_cntCorrected[lastStudent_no-1] < arr_cntCorrected[i]){
                result[result.length-1] = student_no;
                lastStudent_no = student_no;
            } else if(arr_cntCorrected[lastStudent_no-1] === arr_cntCorrected[i]){
                result.push(student_no);
                lastStudent_no = student_no;
            }
        }
    }
    return result;
    
}

function makeArrCorrected(answers, wayToSolves){
    let arr_cntCorrected = [];
    for(let i = 0; i < wayToSolves.length; i++){
        arr_cntCorrected.push(getCntCorrected(answers,wayToSolves[i]));        
    }
    return arr_cntCorrected;
}
        
function getCntCorrected(answers,wayToSolve){
    let lengthOfWTS = wayToSolve.length;
    
    let index = 0;
    let cntCorrect = 0;
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === wayToSolve[index]) cntCorrect++;
        
        index++;
        
        if(index === lengthOfWTS) index = 0;
    }
    
    return cntCorrect;
}