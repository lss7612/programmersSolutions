//Array.prototype.map()

//정의 : 배열 내 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
//형식 : arr.map(callback(currentValue[, index[, array]])[, thisArg])
//매개변수
//*callback: 새로운 배열 요소를 생성하는 함수. 다음 세가지 인수를 가집니다.
//  -index: 처리할 현재 요소의 인덱스
//  -array: map을 호출한 배열
//*thisArg: callback을 실행할 때 this로 사용되는 값

//쉽게 말하면 map을 호출함으로써
//"배열을 내맘대로 바꿔서 새로운 배열을 받아낼 수 있다" 는 것이다.

//공식예제
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x + 2);
console.log(map1);

//map을 이용해 배열 속 객체를 재구성하기
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformatedArray = kvArray.map(function (obj) {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformatedArray);
