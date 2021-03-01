function solution(s, n) {
  var answer = '';

  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const length = upperCase.length;

  let text = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }

    text = s[i];
    let str = upperCase.includes(text) ? upperCase : lowerCase;
    let idx = str.indexOf(text) + n;

    if (idx + 1 > length) idx -= length;

    answer += str[idx];
  }

  return answer;
}
