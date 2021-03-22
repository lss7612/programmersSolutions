function solution(n, m) {
    //n과 m중 더 큰 수 구하기
    let larger = Math.max(n,m);
    //최대 공약수 구하기
    let GCD;
    for(let i = 1; i <= larger; i++){
        if(n%i===0&&m%i===0) {
            GCD=i;
        };
    }
    
    //최소 공배수 구하기
    let LCM;
    for(let i=larger; i<=m*n; i++){
        if(i%n===0&&i%m===0){
            LCM=i;
            break;
        }
    }
    return [GCD,LCM];
}