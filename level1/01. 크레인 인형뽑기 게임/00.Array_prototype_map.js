//Array.prototype.map()

//자바스크립트의 API인 Array는 우리가 자주 사용한다.
//그 Array에는 built-in method로(prototype의 property) map이라는 녀셕이 있다.
//이 녀석을 알아보쟈.

//정의 : 배열 내 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

//쉽게 말하면 map을 호출함으로써
//"배열을 내맘대로 바꿔서 새로운 바열을 받아낼 수 있다" 는 것이다.

//아래 예제를 보자

const array1 = [1, 4, 9, 16];
const map1 = array1.map(function (x) {
  return x + 2;
});
console.log('**맵을 사용했을 때');
console.log(map1);
//[3,6,11,18] 출력됨

//예제로 확인해본 결과 array1의 각각의 요소들에 2를 더하여 새로운 배열에 각각 담아서 map1에 저장해준다.
//위 내용을 함수로 만들여야 한다면 아래와 같을 것이다.

const test = [];
for (let i = 0; i < array1.length; i++) {
  test.push(array1[i] + 2);
}
console.log('**맵을 사용하지 않았을 때');
console.log(test);

//맵이라는 메소드가 없으면 포문을 써서 새로운 배열을 얻어낼 수 있겠다.
//비교해보면 포문에 비해 크게 편한 방법처럼 보이지는 않는다.
//하지만 arrow_function을 만나면 그렇지 않다.

const matrix = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
matrix.map((_, matrix) => matrix.length);
console.log(matrix);
