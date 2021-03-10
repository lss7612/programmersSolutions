function solution(s) {
    var answer = '';
    var arr =s.split(' ')
    
    // for(var i=0; i<arr.length;i++){
    //     console.log(arr[i]);
    // }
    
    arr.filter(function(e,i){
        var textarr = e.split('');
        // console.log(textarr)
        
        textarr.filter(function(e,i){
            // console.log(e);
            // console.log(i);
            var flag = i%2==0
            // console.log("flag : "+flag)
            return flag ? answer+=e.toUpperCase() : answer+=e.toLowerCase();
        })
        i==arr.length-1 ? answer : answer +=' '
        //console.log(textarr);
    })    
    //console.log(answer)
    
    return answer;
}