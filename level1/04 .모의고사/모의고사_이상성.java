import java.util.List;


class Solution {
    public int[] solution(int[] answers) {
        
        int[] way01 = {1,2,3,4,5};
        int[] way02 = {2,1,2,3,2,4,2,5};
        int[] way03 = {3,3,1,1,2,2,4,4,5,5};
        
        int[] cnt = new int[3];
        
        cnt[0]=matchAnswer(way01,answers);
        cnt[1]=matchAnswer(way02,answers);
        cnt[2]=matchAnswer(way03,answers);
        
        int max = 0;
        for(int i = 0; i < cnt.length-1; i++){
            if(max==0){
                if(cnt[i]>=cnt[i+1]){
                    max=cnt[i];
                } else{
                    max=cnt[i+1];
                }    
            } else{
                if(max>=cnt[i+1]){
                    continue;
                } else{
                    max=cnt[i+1];
                }
            }
        }
        
        int returnLength = 0;
        for(int i = 0; i < cnt.length; i++){
            if(cnt[i]==max){
                returnLength++;
            }
        }
        int[] result = new int[returnLength];
        
        int idx=0;
        for(int i = 0; i < cnt.length; i++){
            if(cnt[i]==max){
                result[idx]=i+1;
                idx++;
            }
        }
        
        return result;
    }
    
    public int matchAnswer(int[] solve, int[] answers){
        int result = 0;
        for(int i = 0; i < answers.length; i++){
            if(answers[i]==solve[i%solve.length]) result++;
        }
        return result;
    }
    
}