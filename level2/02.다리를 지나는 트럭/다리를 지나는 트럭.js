function solution(bridge_length, weight, truck_weights) {
    var answer = 0;    
    var queue = new Queue();
    var crossTruck = new Queue();
    var onBridge = 0;   //다리위의 무게
    
    for(var i=1; ;i++){
        // console.log("------------------------------")
        // console.log("---"+i+"초 ----")
        for(var j=0; j<queue.arr.length;j++){
            queue.arr[j] -= 1;
            //console.log(queue.arr);
        }
        
        if(queue.arr[0] == 0){
            onBridge -= crossTruck.arr[0];
            crossTruck.dequeue();
            //console.log("남은 트럭 길이 : "+truck_weights.length);
            queue.dequeue();
            // console.log("다리위의 트럭 : "+crossTruck.arr);
            //console.log(queue.arr.length)
        }
        
        if( truck_weights.length == 0 && queue.arr.length == 0){
            // console.log("다 건넜습니다.")
            answer = i;
            break;
        }
        
        if(i == 1){
            crossTruck.enqueue(truck_weights[0]);
            onBridge = doEnqueue(onBridge, bridge_length, queue, truck_weights);
            //continue;         
        } else if( truck_weights[0] !=0 && onBridge + truck_weights[0] <= weight){
            crossTruck.enqueue(truck_weights[0]);
            onBridge = doEnqueue(onBridge, bridge_length, queue, truck_weights);       
        } else {
            //continue;
        }
        
        
        // console.log("다리위의 무게 : "+onBridge);
        // console.log("다리위의 차량 : "+crossTruck.arr);
        // console.log("대기중인 차량 : "+truck_weights);
        // console.log("------------------------------")
        

    }  
    // console.log(answer);
    return answer;
}

function Queue(){
    this.arr = new Array();
    this.enqueue = function(i){
        this.arr.push(i);
    }
    this.dequeue = function(){
        this.arr.shift();
    }

}

function doEnqueue(onBridge, bridge_length, queue, truck_weights){
    queue.enqueue(bridge_length)
    onBridge += truck_weights[0];
    // console.log("무게가 더해짐("+onBridge+")");
    truck_weights.splice(0, 1);
    return onBridge;
}

