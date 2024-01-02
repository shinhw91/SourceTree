// function1.js

// 함수선언식
function sum(num1 = 0, num2 = 0) {
// function sum() {
    let result = 0;
    result = num1 + num2;
    // console.log(result);
    console.log(arguments);
    if(arguments.length > 2) {
        for(let arg = 2; arg < arguments.length; arg++) {
            result += arguments[arg];
        }        
    }
    // for(let arg of arguments) {
    //     result += arg;
    // }
    return result;
}

let result = sum(11, 22, 33, 44, 55, 66);
console.log('결과는 ' + result);


// 함수표현식
let sum2 = function(num1 = 0, num2 = 0) {
    let result = num1 + num2;
    return result;
}
console.log('결과 : ' + sum2(10, 20));


// 함수 매개변수(객체)
let obj1 = {
    name : "Hong",
    point : 100
}
let obj2 = {
    name : "Hwang",
    point : 80
}
let average = function(obj1={}, obj2={}) {
    let result = 0;
    result = (obj1.point + obj2.point) / 2;
    return result;
}
console.log('평균값 : ' + average(obj1, obj2));


// 함수 매개변수(배열)
let array1 = [10,20];
let array2 = [30,40];
let sum3 = function(ary1=[], ary2=[]) {
    let result = 0;
    ary1.concat(ary2).forEach(function(val) {
        result += val;
    })
    return result;
}
console.log('배열의 총합 : ' + sum3(array1, array2));


// 함수 매개변수(함수)
let myfunc = function(callback) {
    let result = 0;
    let num1 = 10, num2 = 5;
    result = callback(num1, num2);
    return result;
}

let sumfunc = function (n1, n2) {
    return n1 + n2;
}

let minusfunc = function(n1, n2) {
    return n1 - n2;
}

console.log('sumfunc 함수결과 : ' + myfunc(sumfunc));
console.log('minusfunc 함수결과 : ' + myfunc(minusfunc));