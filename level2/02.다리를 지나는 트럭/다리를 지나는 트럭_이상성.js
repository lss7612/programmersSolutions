function solution(bridge_length, weight, truck_weights) {
    
    let state = new Object();
    state.second = 0;
    state.cnt_truck_waiting = truck_weights.length;
    state.trucks_on_bridge = new Array();
    state.next_truck_idx = 0;
    state.cnt_truck_passed = 0;
    state.timePass = function(){
        this.second++;
        for(let i = 0; i < this.trucks_on_bridge.length; i++){
            this.trucks_on_bridge[i].march();
        }
        // console.log('\n\n---시간이 흐릅니다---')
        // console.log(state);
    }
    state.truckArrived = function(){
        this.trucks_on_bridge.shift();
        this.cnt_truck_passed++;        
    }
    state.truckEnterd = function(weightOfTruck){
        this.trucks_on_bridge.push(new Truck(weightOfTruck));
        this.next_truck_idx++;
        this.cnt_truck_waiting--; 
    }
    
    
    
    
    let weight_on_bridge = 0;
    let next_truck_weight = truck_weights[0];
    let expect_weight = 0;
    
    while(state.cnt_truck_passed < truck_weights.length){//트럭이 다 지나갔을때 반복을 멈춘다.
        
        
        state.timePass();
        
        // 트럭이 도착하는 경우
        if(state.trucks_on_bridge.length !== 0){
            if(state.trucks_on_bridge[0].location===bridge_length+1){
                // console.log('truck이 한대 도착합니다');
                state.truckArrived();
                weight_on_bridge = getWeightOnBridge(state.trucks_on_bridge);
                expect_weight=weight_on_bridge+next_truck_weight;
                
            }
        }
        // console.log('다리위 자동차 무게는?' + weight_on_bridge)
        // console.log('다음에 차가 올라오면 다리위 차동차 무게는?' + expect_weight)
        //트럭이 다리에 진입하는 경우
        if(weight>=expect_weight){
            if(state.cnt_truck_waiting !== 0){//기다리는 트럭이 있을 때
                // console.log('truck이 한대 다리에 진입합니다.');
                state.truckEnterd(next_truck_weight);
                next_truck_weight = truck_weights[state.next_truck_idx];
                weight_on_bridge = getWeightOnBridge(state.trucks_on_bridge);
                expect_weight=weight_on_bridge+next_truck_weight;
                
            }
            
        }
        
    }
    return state.second;
    
}

function Truck(weight){
    this.weight = weight;
    this.location = 1;
    this.march = function(){
        // console.log(this+'트럭이 1칸 전진합니다.')
        this.location++;
    }
}


function getWeightOnBridge(arr){
    if(arr.length===0) return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].weight;
    }
    return sum;
}