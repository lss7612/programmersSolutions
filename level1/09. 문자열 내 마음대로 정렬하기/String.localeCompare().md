## String.localeCompare()

`localeCompare()`메소드는 기준 문자열과 비교했을 때 대상 문자열이 정렬상 전, 후, 또는 같은 위치에 배치되는지를 알려주는 숫자를 리턴해준다.

- URL : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
### 형식
```javascript
referenceStr.localeCompare(compareString[, locales[, options]])
```
- `referenceStr`가 `compareStr`보다 뒤에 오면 양수를 반환
- `referenceStr`가 `compareStr`보다 앞에 오면 음수를 반환
- `referenceStr`가 `compareStr`과 같으면 `0`을 반환
- 반환값 : 음수, 양수 또는 0

### 예제
```javascript
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0
```