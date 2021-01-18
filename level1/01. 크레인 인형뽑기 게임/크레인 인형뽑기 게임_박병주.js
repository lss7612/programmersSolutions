function solution(board, moves) {
    var answer = 0;
    var basket =[];
    var idx = 0;
    var del = 0;
    for( var i =0; i<moves.length;i++){
        //console.log("뽑은 위치 : "+moves[i]);
        
        for(var j =0; j<board.length; j++){
            //console.log(board[j][moves[i]-1]);
            
            if( board[j][moves[i]-1] != 0){
                //console.log("("+j+","+i+")의 값이 0이 아님")
                basket[idx] = board[j][moves[i]-1];
                board[j][moves[i]-1] = 0;
                
                if(basket.length >1 && basket[idx] == basket[idx-1]){
                    //console.log(idx+"와 "+(idx-1)+"의 값이 같습니다.")
                    basket.splice(idx-1, 2)
                    idx--;
                    del +=2;
                    //console.log("("+j+","+i+")의 값 : "+board[j][moves[i]-1])
                    //console.log(basket);
                    break;
                } else {
                    
                    idx++;
                    //console.log("("+j+","+i+")의 값 : "+board[j][moves[i]-1])
                    //console.log(basket);
                    break;
                }
            } else {
                continue;
            }
        }
    }
    //console.log("basket : "+basket);
    //console.log(basket.length);
    //console.log(del)
    return del;
}