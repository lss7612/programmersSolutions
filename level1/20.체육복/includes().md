## array.includes();
- `includes()`메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.
- URL : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
### 구문
```javascript
arr.includes(valueToFind[, fromIndex])
```

### 매개변수
- `valueToFind` : 탐색할 요소(대소문자를 구분한다.)
- `fromIndex`(Optional) : 검색할 시작 위치, 기본값은 0
  
### 반환값
`Boolean`

### 예제

```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```