function solution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    console.log('-----' + s[i] + '----');
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      console.log('answer : ' + answer);
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    console.log('textArr : ' + textArr);

    var index = textArr.indexOf(text) + n;
    console.log('indexOf : ' + textArr.indexOf(text));
    console.log('idnex + n : ' + index);
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];

    console.log('answer : ' + answer);
  }
  return answer;
}
