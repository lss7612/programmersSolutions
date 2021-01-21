function solution(strings, n) {
    var answer = [];
    
    //swap을 이용하되 내부에서 스왑의 조건을 나눈다
    for(let i = 0; i < strings.length-1; i++){
        for(let j = 0; j < strings.length-(i+1); j++){
            let str_before = strings[j];
            let str_after = strings[j+1];
            
            if(strings[j].charAt(n) > strings[j+1].charAt(n)){
                //n번째 index 글자를 이용하여 정렬한다
                let tmp = strings[j];
                strings[j] = strings[j+1];
                strings[j+1] = tmp;
            } else if(str_before.charAt(n)===str_after.charAt(n)){
                //n번째 index 글자가 같을 경우 string 문자열 전체를 사전순으로 정렬한다
                if(str_before > str_after){
                    let tmp = strings[j];
                    strings[j] = strings[j+1];
                    strings[j+1] = tmp;
                }   
            }
        }
    }
    
    return strings;
}