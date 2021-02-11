function solution(n) {
    var answer = 0;
    var arr =[];

    for(var i=0; ;i++){
        console.log(" n : "+n);
        if(n >= 3){
            arr[i] = n%3;
            n = Math.floor(n/3);
            continue;
        } else {
            arr[i] = n;
            break;
        }
    }
    console.log(arr);

    for(var i=arr.length-1; i >=0 ;i--){
        console.log("자릿수 값("+i+") : "+Math.pow(3,i));
        console.log("arr[i] : "+arr[i])
        answer += arr[arr.length-1-i]*Math.pow(3, i);
        console.log("answer : "+answer)
    }
    return answer;
}