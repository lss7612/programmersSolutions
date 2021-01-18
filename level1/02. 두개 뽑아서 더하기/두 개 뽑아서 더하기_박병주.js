function solution(numbers) {
    var answer = [];
    //console.log("numbers : "+numbers)
    var idx = 0;
    for(var i = 0; i<numbers.length; i++){
        for(var j = i+1; j<numbers.length;j++){
            //console.log(numbers[i], numbers[j])
            answer[idx] = numbers[i] + numbers[j];
            idx++;
        }
    }
    
   // console.log( "answer : "+answer)
    for(var i=0; i<answer.length;i++){
        for(var j=0; j<answer.length-i-1; j++){
             var tmp1;
            //console.log(answer[j], answer[j+1])
            if( answer[j] > answer[j+1]){
                //console.log("---정렬---")
                //console.log(j+" : "+answer[j]+", "+(j+1)+" : "+answer[j+1])
                tmp1 = answer[j];
                
                answer[j] = answer[j+1];
                answer[j+1] = tmp1;              

                //console.log(j+" : "+answer[j]+", "+ (j+1) +" : "+answer[j+1])
                //console.log("---정렬끝---")
                //console.log("answer : "+answer)
                //console.log("--------------")
            } else {
                continue;
            }
        }
           
    }
   // console.log("정렬된 answer: "+answer)
    
    for(var i=0;i<answer.length-1; ){
        if(answer[i] == answer[i+1]){
            answer.splice(i, 1);
            //console.log(i);
            i = 0;
            
            //console.log(answer);
        } else {
           // console.log(i)
            i++;
            continue;
        }
    }
    //console.log("answer : "+answer)
    return answer;
}