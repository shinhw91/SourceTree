// function6.js

const args = [4, 5, 6];

function sum(num1 = 0, num2 = 0, ...args) {
    let result = 0;
    result = num1 + num2;
    if(args.length > 0) {
        args.forEach(val => {
            result += val;
        })
    }
    return result;
}
console.log(sum(10, 20, ...args));
console.log(sum(10, 20, 4, 5, 6));

const ary1 = [10, 20];

const ary2 = ary1.concat(args);
console.log(ary2);

const ary3 = [...ary1, ...args];
console.log(ary3);

const obj1 = {name : "Hong", age : 20}
const obj2 = {name : "Hwang", height : 170}
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// reduce 메소드
let result = [4, 5, 6].reduce((acc, curItem, idx, ary) => {
    console.log(acc, curItem, idx);
    return acc + curItem;
}, 0);
console.log('결과값 : ' + result);

// map 메소드
result = [1, 2, 3, 4].map((item, idx, ary) => {
    console.log(item, idx, ary);
    return item * 2;
});
console.log('결과값 : ', result);

// 변수의 스코프
var name = '어피치';

function run() {
    if(true) {
        var name = '라이언';    // 함수 단위, 중복선언 가능
        // let name = '라이언';    // 블록 단위, 중복선언 불가
    }
    console.log(name);
    return name;
}

run();
console.log(name);

// 스코프 체인
var a = 1;
var b = 5;
function outerFunc() {
    var b;  // undefined(호이스팅)
    function innerFunc() {
        a = b;
    }
    console.log(a); // 1
    a = 3;
    b = 4;
    innerFunc();
    console.log(a, b); // 4, 4
    var b = 2;
    console.log(b); // 2
}
outerFunc();

// 에러와 예외처리
const c = 10;

try {
    c = 20;
} catch (error) {
    console.log(error)
} finally {
    console.log(c);
}