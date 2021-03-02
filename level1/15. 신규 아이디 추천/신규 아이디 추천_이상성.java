import java.util.*;

class Solution {
    public String solution(String new_id) {       
        
        String result = new_id.toLowerCase()
            .replaceAll("[^\\w-_.]", "")
            .replaceAll("\\.+",".")
            .replaceAll("^\\.+|\\.+$","")
            .replaceAll("^$","a");
        
        if(result.length()>15){
            result = result.substring(0,15).replaceAll("\\.$","");
        }
        
        while(result.length()<3){
            result+=result.charAt(result.length()-1);
        }
        
        
        return result;
    }
}