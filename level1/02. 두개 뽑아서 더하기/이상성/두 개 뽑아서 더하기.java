import java.util.Arrays;

class Solution {
    public int[] solution(int[] numbers) {
        
        int[] answer = new int[200];
        for(int i = 0; i < answer.length; i++){
            answer[i]=-1;
        }
        int index = 0;
        
        //각 수를 더하기
        for(int i = 0; i < numbers.length; i++){
            for(int j = i+1; j < numbers.length; j++){
                //각 숫자와 뒤에 있는 애들을 하나하나 더함
                int sum = numbers[i]+numbers[j];
                if(IsSame(sum, answer)){
                    answer[index]=sum;
                    index++;
                }
            }
        }
        
        
        int[] finalArr = new int[getReturnArraysLength(answer)];
        
        for(int i = 0; i< finalArr.length; i++){
            finalArr[i]=answer[i];
        }
        Arrays.sort(finalArr);
        
        
        
        return finalArr;
    }
    
    public Boolean IsSame(int sum, int[] arr){
        for(int i=0;i<arr.length;i++){
            if(arr[i]==sum) return false;
        }
        return true;
    }
    
    public int getReturnArraysLength(int[] arr){
        for(int i = 0; i < arr.length; i++ ){
            if(arr[i]==-1) return i;
        }
        return arr.length;
    }
    
    
}