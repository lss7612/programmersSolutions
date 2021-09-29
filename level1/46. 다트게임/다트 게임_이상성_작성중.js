function solution(dartResult) {
    console.log(dartResult)
    
    let player = new Person(dartResult);
    player.makeResult();
    
    
}

function Person (dartResult) {
    this.dartResult = dartResult;
    this.beforeScore = -1;
    this.score = 0;
    this.result = new Array("","","");
    this.turn = 0;
    
    this.makeResult = function(){
        let a = /[0-9]/;
        let cnt = -1;
        this.dartResult.split('').forEach((str, idx) => {
            console.log(str);
            console.log(str.search(a));
            if(str.search(a) == -1) {
                console.log('cnt',cnt);
                this.result[cnt] += str;
            } else {
                cnt++;
                console.log('cnt',cnt);
                this.result[cnt] += str;
            }
            console.log(this.result);
        })
    }
    
    
    
    this.play = function (){
        cal = new ScoreCalculator(this.result[this.turn], this.beforeScore);
        this.turn++;
    }
}

function ScoreCalculator(turnResult, beforeScore){
    
    this.score = 0;
    this.beforeScore = beforeScore;
    
    this.cal = function (){
        turnResult.split('').forEach((str,idx) => {
        
            if(idx==0) {
                this.score + str * 1;
            } else {
                switch(str) {
                    case "S" :
                        this.score **= 1;
                        break;
                    case "D" :
                        this.score **= 2;
                        break;
                    case "T" :
                        this.score **= 3;
                        break;
                    case "*" :
                        this.score 
                        break;
                    case "#":
                        break;
                }
            }

        })
    }
    
}