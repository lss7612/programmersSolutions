function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

// function solution(n){
// let s= [...Array(n).keys()]
//     // console.log(s);
//     s[0]=0
//     for(let i=2; i<=parseInt(n**.5)+1;i++){
//       // console.log(i);
  
//       for (let j=2 ; j<=(n-i)/i+1; j++){
//         s[i*j-1]=0
//       }
//     }
//     return s.filter(x=>Boolean(x)).length;
//   }