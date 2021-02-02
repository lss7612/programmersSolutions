function solution(n) {
    var answer = '';
    var share = Math.floor(n/3);    //몫    
    var rest = n%3; //나머지
    var base3 = [];
    
    
    //1. n을 3진법으로 변경
    var flag = true;
    do {
        //console.log("몫 : "+share+", 나머지 : "+rest);
        base3.unshift(rest);
        
        if( share <3 ){
            flag = false;
            if( share != 0) base3.unshift(share);
        } else {
            rest = share%3;
            share = Math.floor(share/3);            
        }
    }while(flag);
    
    //console.log("3진법으로 변환된 값 : "+base3);
    
    //2. 3진법을 124 숫자로 바꾸기
    for(var i= base3.length-1;i>0;i--){
        //console.log("변환중인 상태 : "+base3);
        //console.log(base3[i]+", "+base3[i-1]);
        
        if( base3[i] == 0) {
            //console.log(base3[i]+" 가 0 입니다.")
            // 0 이면 4로 바꾸고 한자리 앞의 수는 -1 을 해준다.
            base3[i] = 4;    
            base3[i-1] -= 1;
        } else if( base3[i] == -1){
            //-1이면 이전 과정에서 0이 나와 -1을 해주었다.
            //즉, 기존의 값은 0 이였으므로 4로 변환해준뒤 -1을 계산하여 2로 넣어준다.
            //그리고 기존의 값이 0 이였으니 한자리 앞의 수에서 -1을 해준다.
            base3[i] =2;
            base3[i-1] -=1;
        }
    }
    
    //console.log(base3)
    
    if( base3.indexOf(0) == 0){
        base3.shift();
    }
    
    //console.log(base3);
    for( var i=0; i<base3.length; i++){
        answer += base3[i];
    }
    return answer;
}