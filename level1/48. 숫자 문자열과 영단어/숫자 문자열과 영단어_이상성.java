import java.util.*;

class Solution {
    public int solution(String s) {
        
        String result = "";
        
        String[] str_num_arr = {"zero","one","two","three","four","five","six","seven","eight","nine"};
        int[] num_arr = {0,1,2,3,4,5,6,7,8,9};
        
        String acc = "";
        
        for(int i = 0; i < s.length(); i++) {
        	
        	String str = Character.toString(s.charAt(i));
        	System.out.println(str);
        	System.out.println(acc);
        	boolean isNumber = str.matches("^[0-9]*$");
        	
        	//1. 숫자면 result에 더한다.
        	if(isNumber) result += str;
        	
        	//2. 숫자가 아니면 acc에 더한다.
        	else acc += str;
        	
        	//3. acc가 str_num_arr에 있으면 result에 num_arr에 해당하는 값을 더한다. 그리고 acc를 비워준다.
        	int idx = Arrays.asList(str_num_arr).indexOf(acc);
        	if(idx != -1) {
        		result += num_arr[idx];
        		acc = "";
        	}
        	
        }
        
        System.out.println("result : [" + result + "]");
        
        return Integer.parseInt(result);
    }
}