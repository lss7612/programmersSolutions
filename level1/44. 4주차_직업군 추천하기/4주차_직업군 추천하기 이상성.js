function solution(table, languages, preference) {
    
    table = reverseItems(table);
    
    let scoreObjects = calScoreForJob(table, languages, preference); 
    scoreObjects.addScores();
    return scoreObjects.getMax();
    
    
}

function calScoreForJob(table, languages, preferences){
    
    let scoreObjects = new ScoreObjects();
    
    languages.forEach((language, idx) => {
        
        let preference = preferences[idx];
        let scoreObject = new ScoreObject(language);
        table.forEach(arr => {
            
            let index = arr.indexOf(language)
            if(index != -1) {
                scoreObject.score[`${arr[5]}`] = preference * (index + 1);
            }
        });
        scoreObjects.add(scoreObject);
    })
    
    return scoreObjects;
    
}

function ScoreObjects() {
    
    this.sumOfScores = new Score();
    this.scores = new Array();
    this.add = (ScoreObject) => {
        this.scores.push(ScoreObject)
    }
    
    this.addScores = () => {
        this.scores.forEach( (scoreObject, idx) => {
            this.sumOfScores.SI += scoreObject.score.SI;
            console.log(scoreObject.score.SI);
            this.sumOfScores.CONTENTS += scoreObject.score.CONTENTS;
            this.sumOfScores.HARDWARE += scoreObject.score.HARDWARE;
            this.sumOfScores.PORTAL += scoreObject.score.PORTAL;
            this.sumOfScores.GAME += scoreObject.score.GAME;
        })
    }
    
    this.getMax = function () {
        let arr = new Array();
        let max = Math.max(...Object.values(this.sumOfScores));
        for(let key in this.sumOfScores){
            if(this.sumOfScores[`${key}`] == max) {
                arr.push(key);
            }
        }
        arr.sort();
        return arr[0];
    }
    
}

function ScoreObject(language) {
    
    this.language = language;
    this.score = new Score();
    
}

function Score() {
    this.SI = 0;
    this.CONTENTS = 0;
    this.HARDWARE = 0;
    this.PORTAL = 0;
    this.GAME = 0;
    
}

function reverseItems(table){
    table.forEach((str,i) => {
        table[i] = str.split(' ').reverse();
    })
    return table;
}