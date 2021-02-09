## array.find();
- `find()` 메서드는 주어진 판별 함수를 만족하는 **첫번째 요소**의 **값**을 반환
- 없으면 `undefined`를 반환
- url : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- 설명
  - `find`메서드는 `callbakc` 함수가 `true`를 반환할 때까지 해당 배열의 각 요소에 대해서 `callbakc`함수를 실행한다.
  - 만약 요소를 찾았다면 해당 요소의 값을 즉시 반환하고 그렇지 않으면 `undefined`를 반환한다.
  - `callback`은 `0`부터 `length-1`까지 배열의 모든 인덱스에 대해 호출되며, 값이 지정되지 않은 요소도 포함하여 모든 인덱스에 대해 호출된다.
  - `find`는 호출의 대상이 된 배열을 **변경**(mutate)하지 않는다.

### 구문
```javascript
arr.find(callback[, thisArg])
```

### 매개변수
- `callback`
  - 배열의 각 값에 대해 실행할 함수. 아래의 세 인자를 받는다.
  - `element` : 콜백함수에서 처리할 현재 요소
  - `index`(Optional) : 콜백 함수에서 처리할 현재 요소의 인덱스.
  - `array`(Optional) : `find`함수를 호출한 배열.
- `thisArg` : 선택항목. 콜백이 호출될 때 `this`로 사용할 객체

### 반환 값
- 주어진 판별 함수를 만족하는 **첫 번째 요소**의 **값**
- 그 외에는 `undefined` 반환.

### 예제
```javascript
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```