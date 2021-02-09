## array.filter();
- `filter()`메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
- URL : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- 설명
  - `filter()`는 배열 내 각 요소에 대해 한 번 제공된 `callback`함수를 호출해, `callback`이 `true`로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성.
  - `callback`은 할당된 값이 있는 배열의 인덱스에 대해서만 호출.
  - 삭제 되었거나, 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않는다.
  - `callback`테스트를 통과하지 못한 배열 요소는 건너뛰게 된다.
  - `filter()`는 호출된 배열을 **변화**(mutate)시키지 않는다.

### 구문

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 매개변수
`callbakc`
- 각 요소를 시험할 함수. `true`를 반환하면 요소를 유지하고, `false`를 반환하면 버린다.
- `element` : 처리할 현재 요소
- `index`(Optional) : 처리할 현재 요소의 인덱스
- `array`(Optional) : `filter`를 호출한 배열
- `thisArg`(Optional) : `callback`을 실행할 때 `this`로 사용하는 값

### 반환 값
테스트를 통과한 요소로 이루어진 새로운 배열.

### 예제
1) 작은값 걸러내기
   ```javascript
   function isBigEnough(value) {
    return value >= 10;
    }

    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtered 는 [12, 130, 44]
    ```

2) JSON에서 항목 거르기
   ```javascript
    var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
    ];

    var invalidEntries = 0;

    function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
    }

    function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
    }

    var arrByID = arr.filter(filterByID);

    console.log('Filtered Array\n', arrByID);
    // Filtered Array
    // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

    console.log('Number of Invalid Entries = ', invalidEntries);
    // Number of Invalid Entries = 5
   ```
3) 배열 내용 검색하기
   ```javascript
    var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    /**
     * 검색 조건에 따른 배열 필터링(쿼리)
     */
    function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
    }

    console.log(filterItems('ap')); // ['apple', 'grapes']
    console.log(filterItems('an')); // ['banana', 'mango', 'orange']
   ```
4)
