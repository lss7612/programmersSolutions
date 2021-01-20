function solution(s){
    var pnum = 0, ynum = 0;

    for(var i=0; i<s.length; i++){
        if(s.charAt(i) == 'p' || s.charAt(i) == 'P'){
            pnum++;
        } else if( s.charAt(i) == 'y' || s.charAt(i) == 'Y'){
            ynum++;
        }
    }
    
    if( pnum != ynum){
        return false;
    } else {
        return true;
    }
}