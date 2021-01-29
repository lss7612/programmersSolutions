//다음 내용의 출력값들을 예측해보자~!

console.log(((a) => a)(1));

console.log(
  ((a, b) => {
    a++;
    b++;
    return a + b;
  })(1, 1)
);

const a = ['abc', 'ab'];
console.log(a.map((a) => a.length));
