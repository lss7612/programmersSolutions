function solution(n) {
    var answer = 0;
    
    
    var numArray = new Array(n+1);
    
    for(var i=0; i<numArray.length;i++){
        numArray[i] = 1;
    }
    
    //2부터 검색을 한다
    for(var i=2; i<=numArray.length; i++){
        if(numArray[i] == 1){
            //console.log(numArray[i]+"는 소수이다")
            answer++;
            
            //i의 배수들은 소수가 아니므로 배열의 값을 0으로 변경
            for(var j=2*i; j<=n;j=j+i){
                //console.log(j+"번째 값 : "+numArray[j]+"값 0으로 변경");
                numArray[j] = 0;                
            }
        }
    }
    return answer;
}