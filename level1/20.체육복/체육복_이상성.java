import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        
        Student[] students = new Student[n];
        
        for(int i = 0; i < students.length; i++){
            
            if (isIn(reserve, i+1)) {
                students[i] = new Student(2);
            } else {
                students[i] = new Student(1);
            }
            
        }
        
        for(int i = 0; i < students.length; i++){
            
            if (isIn(lost, i+1)) {
                students[i].cnt--;
            }
            
        }
        
        // for(int i = 0; i < students.length; i++){
        //     System.out.print(students[i].cnt+",");
        // }        
        // System.out.println();
        
        
        for(int i = 0; i < students.length; i++) {
            
            if(i != 0 && i != students.length-1) {
                students[i].giveTo(students[i-1]);
                students[i].giveTo(students[i+1]);
            } 
            else {
                if(i == 0) {
                    students[i].giveTo(students[i+1]);
                } else {
                    students[i].giveTo(students[i-1]);
                }
            }
        }
        
        for(int i = 0; i < students.length; i++){
            // System.out.print(students[i].cnt+",");
            if(students[i].cnt > 0) answer++;
        }        
        
        return answer;
    }
    
    private class Student{
        
        int cnt;
        
        public Student(int cnt){
            this.cnt = cnt;
        }
        public void giveTo(Student friend) {
            if(this.cnt > 1 && friend.cnt == 0) {
                this.cnt--;
                friend.cnt++;
            } 
        }
        
    }
    private boolean isIn(int[] arr, int search) {
        for(int i = 0; i < arr.length; i++) {
            if(arr[i]==search) return true;
        }
        return false;
    }
    
}