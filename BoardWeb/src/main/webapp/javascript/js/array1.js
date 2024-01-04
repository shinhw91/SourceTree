// array1.js

// ary = []
const ary = [1, 2, '3', new Date()];

const numAry = [10, 20, 30, 40];
numAry.push(30);
numAry.unshift(40);
numAry.pop();   // 마지막 요소 삭제
numAry.shift(); // 첫 요소 삭제
// numAry.splice(1, 2);
numAry.splice(1, 1, 50);    // 변경(요소범위 1)
numAry.splice(1, 0, 50, 60);    // 추가(요소범위 0)
// numAry.splice(0);   // 요소 전체삭제
// numAry.length = 0;  // 요소 전체삭제
// numAry.length = 10;

console.log(numAry);
console.log(numAry.length);

const numAry2 = [50, 60];
// numAry3 = numAry.concat(numAry2);
// console.log(numAry3);

// numAry에 numAry2를 추가
numAry2.forEach(num => numAry.push(num));
console.log(numAry);