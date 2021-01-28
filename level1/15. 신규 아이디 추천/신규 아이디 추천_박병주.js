function solution(new_id) {
    var answer = '';
    console.log("초기값 : "+new_id+", 길이 : "+new_id.length);
    
    //1. 대문자 -> 소문자
    new_id = upperTextToLowerText(new_id);
    console.log("대문자 -> 소문자 : "+new_id)
    
    //2. 소문자, 숫자, -, _, .를 제외한 문자 제거
    new_id = deleteOtherText(new_id);
    console.log("문자 제외 : "+new_id);
    
    //3. .가 2개이상 연속될시 .로 치환
    new_id = deleteContinueDot(new_id);
    console.log(". 연속 제거 : "+new_id);
    
    //4. .가 처음이나 끝에 존재하면 제거
    new_id = deleteDotAtHead(new_id);
    new_id = deleteDotAtTail(new_id);
    console.log("처음과 끝의 . 제거 : "+new_id);
    
    //5. 빈문자열이면 a를 대입
    if( new_id.length == 0){
        new_id = emptyStringCheck(new_id);
        console.log("빈 문자열은 a를 대입 : "+new_id);
    }        
    
    //6. 16자 이상이면 첫 15개문자를 제외한 나머지 문자 제거
    //      만약 제거 후 .가 끝에 위치한다면 . 제거
    console.log("현재 문자열의 길이 : "+new_id.length);
    if( new_id.length >=16){
        new_id = checkIdLength(new_id);        
        
        if(/[.]$/.test(new_id)){
            new_id = deleteDotAtTail(new_id);
        }
    }    
    console.log("15자 이상 처리 후 : "+new_id);
    
    //7. 길이가 2자 이하면, 마지막 문자를 길이가 3이 될때까지 반복해서 끝에 추가
    if( new_id.length <=2){
        var lastText = new_id[new_id.length-1]
        console.log("마지막 문자 : "+lastText);
        for(var i =new_id.length; i <3; i++){
            new_id += lastText;
        }
        console.log("길이가 2 이하일 경우 : "+new_id);
    }    
    
    answer = new_id;
    return answer;
}

function upperTextToLowerText(new_id){
    return new_id.toLowerCase();
}

function deleteOtherText(new_id){
    return new_id.replace(/[^a-z0-9-_.]/g,'');
}

function deleteContinueDot(new_id){
    return new_id.replace(/[.]{2,}/g,'.');
}

function deleteDotAtHead(new_id){
    return new_id.replace(/^[.]/,'');
}

function deleteDotAtTail(new_id){
    return new_id.replace(/[.]$/,'');
}

function emptyStringCheck(new_id){    
    return new_id = 'a';
}

function checkIdLength(new_id){
    return new_id.substring(0,15);
}