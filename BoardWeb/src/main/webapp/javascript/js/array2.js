// array2.js

const numAry = [23, 10, 17, 35, 9];

// 합계
let result1 = numAry.reduce((acc, num) => {
    // console.log(acc, num);
    return acc + num;
}, 0);
console.log(`합계 : ${result1}`);

// 최대값
let result2 = numAry.reduce((acc, num) => {
    // console.log(acc, num);
    return (acc > num)? acc : num;
}, 0);
console.log(`최대값 : ${result2}`);

// 최소값
let result3 = numAry.reduce((acc, num) => {
    return (acc < num)? acc : num;
}, numAry[0]);
console.log(`최소값 : ${result3}`);

// 평균
let result4 = numAry.reduce((acc, num, idx) => {
    if(idx == numAry.length - 1) {
        return (acc + num) / numAry.length;
    }
    return acc + num;
});
console.log(`평균 : ${result4}`);

// 10보다 큰 값의 새로운 배열
let result5 = numAry.reduce((acc, num) => {
    if(num > 10) {
        acc.push(num);
    }
    return acc;
}, []);
console.log(`결과 : ${result5}`);