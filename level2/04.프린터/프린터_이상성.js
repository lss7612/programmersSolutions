function solution(priorities, location) {
    
    let printer = new Printer(priorities);
    printer.print_arr_pro();
    return printer.search(location);

}

function Printer(arr){
    this.arr_pro = arr;
    this.arr_seq = [];
    this.arr_result = [];
    this.set_arr_seq = function(){
        for(let i =0; i < this.arr_pro.length; i++){
            this.arr_seq[i]=i;
        }
        // console.log(this.arr_seq)
    }
    this.set_arr_seq();
    
    this.print_arr_pro = function(){
        if(this.arr_pro.length===1){
            // console.log('한장 남았습니다')
            this.print();
            return;
        }
        if(this.judge()){
            // console.log('더 급한 프린트가 없네요.')
            this.print();
            this.print_arr_pro();
        } else {
            // console.log('더 급한 프린트가 있네요.')
            this.goBack();
            this.print_arr_pro();
        }
    }
    
    this.print = function(){
        // console.log('프린트합니다.')
        
        this.arr_pro.shift();
        this.arr_result.push(this.arr_seq.shift());
        // console.log('arr_seq의 상태 : ' + this.arr_seq)
        // console.log('arr_result의 상태 : ' + this.arr_result)
        // console.log('')
    }
    this.goBack = function(){
        // console.log('뒤로 보냅니다.')
        this.arr_pro.push(this.arr_pro[0]);
        this.arr_seq.push(this.arr_seq[0])
        this.arr_pro.shift();
        this.arr_seq.shift();
        // console.log('arr_seq의 상태 : ' + this.arr_seq)
        // console.log('arr_result의 상태 : ' + this.arr_result)
    }
    
    this.judge = function(){
        for(let i = 1; i < this.arr_pro.length; i++){
            if(this.arr_pro[0]<this.arr_pro[i]) {
                // console.log(this.arr_pro[i])
                // console.log(i+'번째가 더 중요합니다. 중요도 : '+ this.arr_pro[i])
                return false;
            }
        }
        return true;
    }
    
    this.search = function (n){
        console.log(this.arr_result);
        console.log(n+'번째였던 문서는');
        for(let i = 0; i < this.arr_result.length; i++){
            if(this.arr_result[i]===n){
                return i+1;
            }
        }
        return 0;
    }
}
