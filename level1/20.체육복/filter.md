
## 구문

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 매개변수
`callbakc`
- 각 요소를 시험할 함수. `true`를 반환하면 요소를 유지하고, `false`를 반환하면 버린다.
- `element` : 처리할 현재 요소
- `index`(Optional) : 처리할 현재 요소의 인덱스
- `array`(Optional) : `filter`를 호출한 배열
- `thisArg`(Optional) : `callbakc`을 실행할 때 `this`로 사용하는 값

### 반환 값
 테스트를 통과한 요소로 이루어진 새로운 배열.