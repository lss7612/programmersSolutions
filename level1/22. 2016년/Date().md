## Date()
- Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 생성한다.
- Date 객체는 1970년 1월 1일 UTC(국제 표준 시) 00:00으로 부터 지난 시간을 밀리초로 나타내는 유닉스 타임스탬프를 사용한다.
- URL : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
- 
  ```javascript
  const date1 = new Date('December 17, 1995 03:24:00');
    // Sun Dec 17 1995 03:24:00 GMT...

    const date2 = new Date('1995-12-17T03:24:00');
    // Sun Dec 17 1995 03:24:00 GMT...

    console.log(date1 === date2);
    // expected output: false;

    console.log(date1 - date2);
    // expected output: 0
    ```  

### Date 객체 생성
Date 객체를 생성하는 방법은 `new`연산자를 사용하는 것이 유일하다
```javascript
let now = new Date();
```

### 매개변수
`Date()`생성자는 네 가지의 형태로 사용 할 수 있다.
```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

1. 매개변수 없음
    매개변수를 사용하지 않으면 현지 시간으로 생성 순간의 날짜와 시간을 나타내는 `Date`객체를 생성
2. 유닉스 타임 스탬프
    - `value` : 유닉스 시간부터의 시간을 밀리초 단위로 표현한다.
3. 타임 스탬프 문자열
    - `dateString` : 날짜를 표현하는 문자열 값
4. 개별 날짜 및 시간 구성 요소
    - 연도와 월이 주어지면 자신의 구성요소를 모두 매개변수의 값에서 가져오는 `Date`객체를 생성한다.
    - 가장 낮은값은 `day`는 1, 나머지는 0을 사용한다.