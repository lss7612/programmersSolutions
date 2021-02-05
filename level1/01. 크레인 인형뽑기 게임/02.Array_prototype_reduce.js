//Array.prototype.reduce()

//정의: reduce()메소드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
//Array.reduce(callback함수 [,Initial값])

//공식예제
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currenctValue) => accumulator + currenctValue;
console.log(array1.reduce(reducer)); //10

//initial 값이 있는지 확인하고, 없으면 acc에 배열의 0번쨰 값을 넣는다. 그리고 idx값은 ++된다.
//1. acc = 1; cur = 2; >연산값을 acc 집어넣는다. acc=3;
//2. acc = 3; cur = 3; > 6->acc
//3. acc = 6; cur = 4; > 10->acc
//4. 반환 10
//10 출력

console.log(array1.reduce(reducer, 5));

//initial 값이 있는지 확인하고, 있어서 acc값에 initial값을 넣는다.
//1.acc = 5; cur = 1;
//2.acc = 6; cur = 2;
//3.acc = 8; cur = 3;
//4.acc = 11; cur = 4;
//5.반환 15
//15 출력
//---------------------------------------------------------------------------------------------
