function solution(new_id) {
    var answer = '';
    
    new_id=new_id.toLowerCase();
    console.log(new_id);
    
    new_id=removeSpecialLetter(new_id)
    console.log(new_id);
    
    new_id=makeSingleDot(new_id);
    console.log(new_id);
    
    new_id=cutFirstDot(new_id);
    console.log(new_id);
    
    new_id=cutLastDot(new_id);
    console.log(new_id);
    
    new_id=validateNull(new_id);
    console.log(new_id);
    
    new_id=cutIfTooLong(new_id);
    console.log(new_id);
    
    new_id=cutLastDot(new_id);
    console.log(new_id);
    
    new_id=addIfTooShort(new_id);
    console.log(new_id);
    
    return new_id;
}


function makeSingleDot(str){
    console.log('---makeSingleDot---')
    let result = '';
    for(let i = 1; i<str.length; i++){
        if(str.charAt(i-1)==='.' && str.charAt(i)==='.'){
            continue;
        }
        result+=str.charAt(i-1);
    }
    result+=str.charAt(str.length-1);
    return result;
}

function cutDots(str){
    let result = '';
    if(str.charAt(0)!=='.') result+=str.charAt(0);
    for(let i = 1; i < str.length-1; i++){    
        result+=str.charAt(i);
    }
    if(str.charAt(str.length-1)!=='.') result+=str.charAt(str.length-1);
    return result;
}

function cutFirstDot(str){
    console.log('---cutFirstDot---')
    let result = '';
    if(str.charAt(0)!=='.') result+=str.charAt(0);
    for(let i = 1; i < str.length; i++){    
        result+=str.charAt(i);
    }
    return result;
}
function cutLastDot(str){
    console.log('---cutLastDot---')
    let result = '';
    for(let i = 0; i < str.length-1; i++){    
        result+=str.charAt(i);
    }
    if(str.charAt(str.length-1)!=='.') result+=str.charAt(str.length-1);
    return result;
}


function validateNull(str){
    console.log('---validateNull---')
    if(str===''){
        str='a';
    }
    return str;
}

function cutIfTooLong(str){
    console.log('---cutIfTooLong---')
    if(str.length>15){
        str=str.slice(0,15)
    }
    return str;
}

function removeSpecialLetter(str){
    console.log('---removeSpecialLetter---')
    let result = '';
    
    let regExp1 = /[a-z]/;
    let regExp2 = /[0-9]/;
    let regExp3 = /_/;
    let regExp4 = /-/;
    let regExp5 = /./;
    
    for(let i = 0; i<str.length; i++){
        let char = str.charAt(i);
        // console.log(regExp1.exec(char));
        if(regExp1.exec(char)===null 
          && regExp2.exec(char)===null){
            if(char!=='.'&&char!=='-'&&char!=='_') continue;
        }
        result+=str.charAt(i);
        // console.log('i : '+i + ' result: '+result)
    }
    return result;
}

function addIfTooShort(str){
    console.log('---addIfTooShort---')
    while(str.length<=2){
        str+=str.charAt(str.length-1);
    }
    return str;
    
}