import java.util.*;
class Solution {
    public String solution(int[] numbers, String hand) {
        StringBuffer answer = new StringBuffer();
        String[][] keyPad = {{"1","2","3"},
                             {"4","5","6"},
                             {"7","8","9"},
                             {"*","0","#"}};
        
        Person person = new Person(hand, new Hand("left"), new Hand("right"));
        
        for(int num : numbers) {
        	String nextNum = Integer.toString(num);
            System.out.println("nextNum : " + nextNum);
        	Map<String, Integer> rightCoor = getCoordinate(keyPad, person.rightHand.locationNow);
        	Map<String, Integer> leftCoor = getCoordinate(keyPad, person.leftHand.locationNow);
            Map<String, Integer> nextNumCoor = getCoordinate(keyPad, nextNum);
            
            int rightDistance = getDistance(rightCoor, nextNumCoor);
            int leftDistance = getDistance(leftCoor, nextNumCoor);
            
            
            String[] leftArr = {"1","4","7"};
            String[] rightArr = {"3","6","9"};
            String[] middleArr = {"2","5","8","0"};
            if(Arrays.asList(leftArr).contains(nextNum)) {
                
                person.leftHand.goTo(nextNum,answer);
                
            } else if(Arrays.asList(rightArr).contains(nextNum)) {
                
                person.rightHand.goTo(nextNum,answer);
                
            } else {
                if(rightDistance == leftDistance) {
                    switch(person.tend) {
                        case "right":
                        person.rightHand.goTo(nextNum,answer);
                        break;
                        case "left":
                        person.leftHand.goTo(nextNum,answer);
                        break;
                    }
                } else if(rightDistance > leftDistance){
                    person.leftHand.goTo(nextNum,answer);
                } else if(leftDistance > rightDistance) {
                    person.rightHand.goTo(nextNum,answer);
                }
            }
        	
        }
        
        
        return answer.toString();
    }
    public class Person {
        String tend;
        Hand leftHand;
        Hand rightHand;
        
        public Person(String tend, Hand leftHand, Hand rightHand) {
            this.tend = tend;
        	this.leftHand = leftHand;
        	this.rightHand = rightHand;
        }
        
    }

    public class Hand {
        String name;
        String locationNow;
        int xPosition;
        int yPosition;
        public Hand(String hand) {
        	switch (hand) {
			case "right":
				this.locationNow = "#";
				break;
			case "left":
				this.locationNow = "*";
				break;    
			}
            this.name = hand;
        }
        public void goTo(String locationNext, StringBuffer result) {
            this.locationNow = locationNext;
            switch (this.name) {
			case "right":
                result.append("R");
                break;
			case "left":
				result.append("L");
				break;    
			}
        }
    }
    
    private int getDistance(Map<String, Integer> coor1, Map<String, Integer> coor2) {
    	
    	int gabX = Math.abs(coor1.get("x") - coor2.get("x"));
        int gabY = Math.abs(coor1.get("y") - coor2.get("y"));
    	
    	return gabX + gabY;
    }
    
    private Map<String, Integer> getCoordinate(String[][] keyPad, String num){
    	
    	int xPosition = 0;
        int yPosition = 0;
    	
    	for(int i = 0; i < keyPad.length; i++) {
    		String[] line = keyPad[i]; 
    		
    		if(Arrays.asList(line).contains(num)) {
                
    			yPosition = i;
    			xPosition = Arrays.asList(line).indexOf(num);
                break;
    		} else {
    			continue;
    		}
    	}
        
        Map<String, Integer> coordinate = new HashMap<>();
        coordinate.put("x",xPosition);
        coordinate.put("y",yPosition);
        System.out.println(coordinate.toString());
        return coordinate;
    }
}