function solution(a, b) {
  var answer = 0;
  if (a === b) return a;
  let min = a > b ? b : a;
  let max = a > b ? a : b;
  while (min <= max) {
    answer += min;
    min++;
  }
  return answer;
}
