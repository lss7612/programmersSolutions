import java.util.;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        
        int[] solution = {1,2,3,4,5,6,7,8,9,0};
        
        for(int i  solution) {
        	boolean isSame = false;
        	for(int j  numbers) {
        		if(i == j) {
        			isSame = true;
        			break;
        		} else {
        			continue;
        		}
        	}
        	if(!isSame) answer += i;
        	
        }
        
        
        return answer;
    }
}