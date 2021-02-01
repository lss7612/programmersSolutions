//변수의 교환이 쉽게 가능하다.
console.log('*****swap을 쉽게 가능하게 한다*****');
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log('a : ' + a);
console.log('b : ' + b);

//함수가 반환한 배열 분석
console.log('*****함수가 반환한 배열 분석*****');
function f01() {
  return [1, 2];
}
[a, b] = f01();
console.log(a);
console.log(b);

//일부 반환 값 무시하기
console.log('*****일부 반환 값 무시하기*****');
function f02() {
  return [1, 2, 3];
}
[a, , b] = f02();
console.log(a);
console.log(b);

//변수에 배열의 나머지를 할당하기
console.log('*****변수에 배열의 나머지를 할당하기*****');
let rest;
[a, b, ...rest] = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a);
console.log(b);
console.log(rest);

//객체도 마찬가지로 할당이 가능하다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EA%B0%9D%EC%B2%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4
//위 주소에서 확인 가능
