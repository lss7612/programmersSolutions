import java.lang.Math;
import java.lang.Integer;

class Solution {
    public String solution(String s) {
        String answer = "";
        
        
        
        if(s.length()%2==0){
            int cnt = s.length()/2-1;
            answer += s.charAt(cnt);
            answer += s.charAt(cnt+1);
        } else {
            int cnt = Integer.parseInt(""+(s.length()/2));
            answer += s.charAt(cnt);
        }
        
        return answer;
    }
}