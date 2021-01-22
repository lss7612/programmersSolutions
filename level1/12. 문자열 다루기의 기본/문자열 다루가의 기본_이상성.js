function solution(s) {
    let regExp = /^[0-9]{4}$/
    if(regExp.exec(s)){
        return true;
    }
    regExp = /^[0-9]{6}$/
    if(regExp.exec(s)){
        return true;
    }
    return false;
}