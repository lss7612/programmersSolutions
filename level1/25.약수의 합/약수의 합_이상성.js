function solution(n) {
  if (n === 0) return 0;
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }

  const reducer = (acc, cur) => acc + cur;
  return arr.reduce(reducer);
}
