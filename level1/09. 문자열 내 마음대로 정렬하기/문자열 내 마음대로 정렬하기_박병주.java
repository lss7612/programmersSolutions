import java.util.*;

class Solution {
    public List solution(String[] strings, int n) {
        List answer = new ArrayList<>();
        List nthChar = new ArrayList<>();
        
        for(int i=0; i<strings.length;i++){
            System.out.print(strings[i]+", ");
        }
               
        Arrays.sort(strings);
        
        for(int i=0; i<strings.length;i++){
            System.out.print(strings[i]+", ");
        }
                
        for(int i=0; i<strings.length; i++){
            System.out.println(strings[i]);
            nthChar.add(strings[i].charAt(n));
        }
        
        Collections.sort(nthChar);
        
        for(int i=0; i<nthChar.size();i++){
            for(int j=0; j<strings.length;j++){
                if(strings[j] == null ) continue;
                if( nthChar.get(i).equals(strings[j].charAt(n))){
                    answer.add(strings[j]);
                    strings[j] = null;
                }
            }            
        }
        return answer;
    }
}