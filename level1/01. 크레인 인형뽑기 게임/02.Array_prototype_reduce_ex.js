//아래의 출력값을 예측해보자

var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.x;
}, initialValue);

console.log('\n---1번---');
console.log(sum);

sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);
console.log('\n---2번---');
console.log(sum);

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log('\n---3번---');
console.log(flattened);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log('\n---4번---');
console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
