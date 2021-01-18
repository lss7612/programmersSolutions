function solution(answers) {
    var answer = [];
    
    //학생들이 찍은 규칙
    var s1 = [1,2,3,4,5];
    var s2 = [2,1,2,3,2,4,2,5];
    var s3 = [3,3,1,1,2,2,4,4,5,5];
    
    let ansMap = new Map();
    ansMap.set(1, getLength(answers, s1) );
    ansMap.set(2, getLength(answers, s2) );
    ansMap.set(3, getLength(answers, s3) );
    
//     console.log("--------");
    
//     for( let [key, value] of ansMap){
//         console.log("key : "+key+", 맞은갯수 : "+value);
//     }
    var max = getMaximum(ansMap);
    // console.log("최대값 : "+max)
    for(let [key, value] of ansMap){
        if(value == max) answer.push(key)
    }
    // console.log(answer)
    return answer;
}

function getLength(answers, s){
    var rightAnswer = 0;

    for(var i=0; i<answers.length;i++){
        //문제가길이가 찍은 배열의 크기보다 클 수 있으므로 나머지로 찍은 배열을 반복해준다.
        if(answers[i] === s[i%s.length]) rightAnswer++;
    }
    return rightAnswer;
    
    
}

function getMaximum(map){
    var max = 0;
    for( let value of map.values()){
        //맨처음에 나온 값을 저장하고 그 다음에 값이 클경우 저장     
        
        if(max == 0) { max = value; 
            continue;
        }
        if(max < value) {
            max = value; 
            continue;
        }
    }
    return max;
}