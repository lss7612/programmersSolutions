//미완성

function solution(n) {
    let world124 = new World124();
    world124.makeNumber(n);
}

function World124(){
    this.numbers = [4,1,2];
    this.makeNumber = function(n){
        let result = 0;
        
        while(n!==0){
            console.log(n)
            let num = n%3;
            let digit = Math.pow(10,Math.ceil(n/3)-1);
            result += this.numbers[num] * digit;        
            n=Math.floor(n/3);
            console.log('n/3 :' + (Math.ceil(n/3)-1));
            console.log('num :' + num);
            console.log('digit :' + digit);
            console.log(this.numbers[num] * digit);
            console.log(result+'\n')
        }
    }
}