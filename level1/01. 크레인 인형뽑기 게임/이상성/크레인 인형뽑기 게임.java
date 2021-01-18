class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        int numberOfRoom=0;
        int[] resultArray = new int[moves.length+1];
        int resultArrayLen = 0;
        
        for(int i = 0; i < moves.length; i++){
            //크레인이 좌/우로 움직일 때
            int hrz = moves[i]-1;
            for(int j = 0; j < board.length; j++){
                //크레인이 내려올 때 0이 아니면 그녀석을 0으로 만들고
                //resultArray에 집어넣음
                if(board[j][hrz]!=0){
                    resultArray[resultArrayLen] = board[j][hrz];
                    resultArrayLen++;
                    board[j][hrz] = 0;
                    
                    if(resultArray[1]!=0){
                        if(resultArray[resultArrayLen-1]==resultArray[resultArrayLen-2]){
                            //결과배열의 이전 값과 같으면 두개의 인자를 지우고, 
                            //resultArrayLenth를 -2
                            resultArray[resultArrayLen-1]=0;
                            resultArray[resultArrayLen-2]=0;
                            resultArrayLen = resultArrayLen-2;
                            answer=answer+2;
                        }
                    }
                    break;
                    
                }
            }
        }
        
        
        return answer;
    }
}