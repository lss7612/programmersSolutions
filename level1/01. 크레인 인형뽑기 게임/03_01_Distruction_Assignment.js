//구조분해할당 Distruction Assignment
//정의 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식

//기본 변수 할당법
let foo = ['zero', 'one', 'two', 'three'];
let [one, two, three] = foo;
console.log('***출력1***');
console.log(one);
console.log(two);
console.log(three);

//선언부와 변수 정의부가 따로 떨어져있어도 된다.
let a, b;
[a, b] = [1, 2];
console.log('***출력2***');
console.log(a);
console.log(b);

//분해한 값이 undefined 일 때는 기본값을 그대로 쓴다.
console.log('***출력3***');
let x = 0,
  y = 0;
[x, y] = [1];
console.log(x);
console.log(y);
[x = 0, y = 0] = [1];
console.log(x);
console.log(y);
