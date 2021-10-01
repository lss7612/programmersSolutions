function solution(dartResult) {
    console.log(dartResult)
    
    let player = new Person(dartResult);
    player.makeResult();
    player.play();
    player.play();
    player.play();
    
    console.log(player.getScore());
    
    return player.getScore();
    
}

function Person (dartResult) {
    this.dartResult = dartResult;
    this.score = 0;
    this.result = new Array('','','');
    this.turnScoreArr = new Array(0,0,0);
    this.turn = 0;
    
    this.makeResult = function(){
        let a = /[0-9]/;
        let cnt = -1;
        let numberIdx = 0;
        this.dartResult.split('').forEach((str, idx) => {
            if(str.search(a) == -1) {
                this.result[cnt] += str;
            } else {
                cnt++;
                if(idx - numberIdx == 1) cnt--;
                numberIdx = idx;
                this.result[cnt] += str;
            }
        })
    }
    
    this.play = function (){
        
        this.turnScoreArr = new ScoreCalculator(this.result, this.turn, this.turnScoreArr);
        this.turn++;
        
    }
    
    this.getScore = function () {
        let score = 0;
        this.turnScoreArr.forEach(item => {
            score += item;
        })
        return score;
    }
}

function ScoreCalculator(result, turn, turnScoreArr){
    this.resultOfSingleTurn = result[turn];
    this.numberCnt = 0;
    
    
    this.resultOfSingleTurn.split('').forEach((item,idx) => {
        
        
        if(item.match(/[0-9]/) != null) {
            console.log(this.numberCnt);
            if(this.numberCnt > 0) {
                item = this.resultOfSingleTurn[idx-1] + item;
            }
            turnScoreArr[turn] = item * 1;    
            this.numberCnt ++;
        } else {
            this.numberCnt = 0;
            switch(item) {
                case 'S':
                    break;
                case 'D':
                    turnScoreArr[turn] **= 2;
                    break;
                case 'T':
                    turnScoreArr[turn] **= 3;
                    break;
                case '*':
                    turnScoreArr[turn] *=2;
                    turnScoreArr[turn-1] *= 2;
                    break;
                case '#':
                    turnScoreArr[turn] *= -1;
                    break;
                    
            }
            
            

        }
        
        
        
        console.log('turnScoreArr',turnScoreArr);
    })
    
    return turnScoreArr;
    
}