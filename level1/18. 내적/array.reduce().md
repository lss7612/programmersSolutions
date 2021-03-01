## reduce()
- `reduce()`메소드는 배열의 각 요소에 대해 주어진 리듀서(*Reducer*)함수를 실행하고, 하나의 결과값을 반환한다.
- URL : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
- 예시
    ```JAVASCRIPT
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15
    ```

### reduce 함수
*reducer*함수는 네 개의 인자를 갖는다.
- 누산기(*accumulator) : acc
- 현재값 : cur
- 현재 인덱스 : idx
- 원본 배열 : src

### 구문
```javascript
arr.reduce(callback[, initialValue])
```

### 매개변수
- `callback` : 배열의 각 요소에 대해 실행할 함수. 아래 네 가지 인수를 받는다.
  - 누산기 : `accumulator`
    - 누산기는 콜백의 반환값을 누적한다.
    - 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initialValue`를 제공할 경우 `initalValue`의 값
  - 현재 요소 : `currentValue`
  - 현재 요소의 인덱스 : `currentIndex`(Optional)
  - *reduce*를 호출한 배열 : `array`(Optional)
- `initialValue`(Optional)
  - `callback`의 최초 호출에서 ㅊ서번째 인수에 제공하는 값
  - 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용함.

### 반환값
 누적 계산의 결과 값.