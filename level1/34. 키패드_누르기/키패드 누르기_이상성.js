function solution(numbers, hand) {
    const left = [1,4,7];
    const right = [3,6,9];
    
    const keyPad = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
    const R_hand = new Hand(3,0,'R');
    const L_hand = new Hand(3,2,'L');
    
    

    let result = '';
    
    
    let next;
    for(let i = 0 ; i < numbers.length; i++){
        if(left.indexOf(numbers[i])!==-1){//왼쪽 키패드 누를 때
            result+='L'
            next
        } else if (right.indexOf(numbers[i])!==-1){//오른쪽 키패드 누를 때
            result+='R'
        } else {//가운데 키패드 누를 때

        }
    }
    
}

function Hand(x,y,name){
    this.name = name;
    this.cur_loc = [x,y];//현재위치
    this.getDistance = (x,y)=>{ //다음위치와 현재위치 거리 구하기
        console.log('x : ' + this.cur_loc[0])
        console.log('y : ' + this.cur_loc[1])
        console.log('x : ' + x + ', y : ' + y)
        
        return Math.abs(x-this.cur_loc[0]) + Math.abs(y-this.cur_loc[1]);
    }
    this.go = (x,y)=>{//이동하기
        this.cur_loc = [x,y];
    }
}

function searchIdxIn2DArray(arr_2D,param){
    for(let i = 0; i < arr_2D.length; i++){
        if(arr_2D[i].indexOf(param)!==-1){
            return [i,arr_2D[i].indexOf(param)]
        }
    }
    return -1;
}