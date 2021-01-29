//** Arrow function (화살표 함수)
// 익명함수를 지금까지는 function(){ somthing } 이와 같은 형식을 썼다.
// 하지만 화살표 함수는 이를 더 간편하게 쓸 수 있도록 만들어준다.
// 위에서 쓴 함수를 화살표 함수로 표현하면 아래와 같다.
// () => { somthing }
// 화살표를 빨리 쓰는 법을 익혀야 하지만 익숙해지면 이게 편하다고 한다.

//화살표함수의 장점 1 : 코드가 짧아진다
//이전에 배운 map을 이용하여 작성한 아래 예제를 보자

const meterial = ['Hydrogen', 'Heliym', 'Lithum', 'Beryllium'];
console.log('Arrow function 출력');
console.log(meterial.map((meterial) => meterial.length));
//[8,6,6,9] 출력

//위 예제를 화살표함수가 아닌 일반 익명함수를 사용해야 한다면 아래와 같을 것이다.

console.log(
  meterial.map(function (meterial) {
    return meterial.length;
  })
);
//[8,6,6,9] 출력

//짧아진다. 매우 짧아져서 보기에 매우 간결해졌다. 화살표함수를 알고 있다면 위와 같은 부분에서 매우 좋을 것이다.
//그럼 화살표함수의 사용법을 알아보자.

//1.기본함수 바꾸기
let variation = (function (a) {
  return a;
})(1);
console.log(variation);

//위 함수는 a라는 매개변수를 받아 그대로 리턴해주는 익명함수이며, 그 익명함수에 바로 1을 넣어 호출했다.
//리턴된 값을 variation 변수에 집어넣었다.
//그럼 화살표 함수로 바꿔보자. (-에 적혀있는 것은 화살표함수의 법칙이다.)

//- function이라는 글자를 뺀다.
// 적용: (){return a}

//- 대신에 매개변수가 들어가는 ()와 선언문들이 들어가는 {} 사이에 =>를 넣어준다.
// 적용 : (a)=>{return a}

//- 매개변수가 하나 이상인 경우에는 ()를 뺴도된다.
// 적용: a=>{return a}

//- {}내부에 return 문만 있을때는 {}와 return을 뺴도된다
// 적용: a=>a+b

//그럼 위 함수를 바꾸면 아래와 같다. 매~우 편해졌다.
variation = ((a) => a)(1);
console.log(variation);
