// string1.js

let str1 = "Hello";
console.log(str1, typeof str1);
let str2 = new String("Hello");
console.log(str2, typeof str2);

console.log(str1 == str2);
console.log(str1 === str2);

console.log(str1.substring(1, 3));
console.log(str2.substring(1, 3));

let word = "    Hello, World  ";
console.log(word.trimStart());
console.log(word.trimEnd());
console.log(word.trim());
// const obj = {}
// const obj = new Object();
// const reg = new RegExp();    /값/

console.log(word.replace('H', 'h'));
console.log(word.replace(',', '.'));
console.log(word.replace('l', 'L'));
console.log(word.replace(/l/g, 'L'));   // 전체 변경(g)
console.log(word.replace(/\s/g, ''));   // 공백 변경(\s)

word = '    how are you    to day  everyone.   ';
console.log(word.split(' ').filter((val) => {   // filter : true 값 반환
    return val;
}).join(' '));

console.log(word.split(' ').filter(val => val).join(' '));

// 교재 p.174
let str3 = 'good';
let result = taggedFunc `${str3} morning, ${str3} afternoon, ${str3} evening, and ${str3} night`;
console.log(result);