function solution(scores) {
    
    let result = '';
    
    for(let i = 0; i < scores.length; i++) {
        
        let stu = new Student(scores, i);
        
        result += calGradeByAvg(stu.calMyAverage())
    }
    
    return result;
    
}

function Student(scores, idx) {
    this.idx = idx;
    
    this.getMyScore = function (scores){
        let result = new Array();
        scores.forEach(item => result.push(item[this.idx]));
        return result;
    }
    
    
    this.scores = this.getMyScore(scores);
    
    
    this.isOnly = function (score, idx) {
        
        if(this.scores.indexOf(score) == this.scores.lastIndexOf(score)) {
            let sameIdx = this.scores.indexOf(score);
            if(sameIdx == idx) {
                return this.scores.indexOf(score);    
            }
            return -1;
        } else {
            return -1;
        }
    }


    this.calMyAverage = function () {
        let max = Math.max(...this.scores);
        let min = Math.min(...this.scores);
        let isOnlyMax = this.isOnly(max, this.idx);
        let isOnlyMin = this.isOnly(min, this.idx);
        
        let sum = 0;
        let exclude_cnt = 0;
        
        for(let i = 0; i < this.scores.length; i++) {
            if(i == isOnlyMax || i == isOnlyMin) {
                if(exclude_cnt < 1){
                    exclude_cnt ++;
                    continue;    
                }
                
            }
            
            sum += this.scores[i];
        }
        return sum / (this.scores.length - exclude_cnt);
    }
    
}

function calGradeByAvg(avg){
    if(avg >= 90) {
        return 'A'
    } else if( avg < 90 && avg >= 80){
        return 'B'
    } else if(avg < 80 && avg >= 70) {
        return 'C'
    } else if(avg < 70 && avg >= 50) {
        return 'D'
    } else if(avg < 50) {
        return 'F'
    }
}