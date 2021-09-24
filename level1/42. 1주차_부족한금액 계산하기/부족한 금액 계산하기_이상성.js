function solution(price, money, count) {
    
    let paul = new Player(money, 0);
    let train = new Ride(price);
    
    for(let i = 0; i < count; i++) {
        paul.play(train);
    }
    
    if(paul.money >= 0) {
        return 0;
    } else {
        return -1 * paul.money;
    }
    
}

function Ride(fee){
    this.fee = fee;
}

function Player(money, count) {
    this.money = money;
    this.count = count;
    this.play = (Ride) => {
                    this.count++;
                    this.money -= Ride.fee * this.count;
                }
}